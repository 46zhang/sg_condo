/**
 * bundle-standalone.js - 打包数据 + HTML 为单文件
 *
 * 运行: node bundle-standalone.js
 * 输出: sg_condo_pr_standalone.html (数据内嵌，双击即用)
 *
 * 前置依赖文件：
 *   ./data/condo-transactions.json        (fetch-condo-data.js 生成)
 *   ./data/mrt-distances.json             (fetch-mrt-distances.js 生成)
 *   ./data/rental-data.json               (fetch-rental-data.js 生成，可选)
 */

const fs = require('fs');

const TEMPLATE_FILE = './sg_condo_pr_standalone_template.html';
const CONDO_FILE = './data/condo-transactions.json';
const MRT_FILE = './data/mrt-distances.json';
const RENTAL_FILE = './data/rental-data.json';
const SCHOOLS_FILE = './data/schools-distances.json';
const OUTPUT_FILE = './sg_condo_pr_standalone.html';

if (!fs.existsSync(TEMPLATE_FILE)) {
  console.error(`❌ 找不到 ${TEMPLATE_FILE}`);
  process.exit(1);
}
if (!fs.existsSync(CONDO_FILE)) {
  console.error(`❌ 找不到 ${CONDO_FILE}（先跑 fetch-condo-data.js）`);
  process.exit(1);
}
if (!fs.existsSync(MRT_FILE)) {
  console.error(`❌ 找不到 ${MRT_FILE}（先跑 fetch-mrt-distances.js）`);
  process.exit(1);
}

console.log('\n🚀 开始打包...\n');

const condoData = JSON.parse(fs.readFileSync(CONDO_FILE, 'utf-8'));
const mrtData = JSON.parse(fs.readFileSync(MRT_FILE, 'utf-8'));

console.log(`✓ 载入 ${condoData.transactions.length.toLocaleString()} 笔成交`);
console.log(`✓ 载入 ${Object.keys(mrtData.projects).length.toLocaleString()} 楼盘 MRT`);

// 租金数据（可选）
let rentalData = null;
if (fs.existsSync(RENTAL_FILE)) {
  rentalData = JSON.parse(fs.readFileSync(RENTAL_FILE, 'utf-8'));
  const withRent = Object.values(rentalData.projects).filter(p => p.latestMedian).length;
  console.log(`✓ 载入 ${withRent.toLocaleString()} 楼盘租金数据`);
} else {
  console.log(`⚠  ${RENTAL_FILE} 不存在，跳过租金数据（先跑 node fetch-rental-data.js 可启用租售比功能）`);
}

// 学校数据（可选）
let schoolsData = null;
if (fs.existsSync(SCHOOLS_FILE)) {
  schoolsData = JSON.parse(fs.readFileSync(SCHOOLS_FILE, 'utf-8'));
  console.log(`✓ 载入 ${schoolsData.total_top_schools} 所 Top 小学 / ${Object.keys(schoolsData.projects).length} 楼盘学区距离`);
} else {
  console.log(`⚠  ${SCHOOLS_FILE} 不存在，跳过学区功能（先跑 node fetch-schools.js 可启用）`);
}

// 精简 transactions
const slimTransactions = condoData.transactions.map(tx => ({
  p: tx.project, s: tx.street, r: tx.marketSegment, pt: tx.propertyType,
  d: tx.district, cd: tx.contractDate, a: tx.area, pr: tx.price,
  te: tx.tenure, f: tx.floorRange, t: tx.typeOfSale
}));

// 精简 MRT
const slimMrt = {};
Object.entries(mrtData.projects).forEach(([name, info]) => {
  slimMrt[name] = {
    lat: info.lat, lng: info.lng,
    n: (info.nearest || []).slice(0, 3).map(s => ({
      n: s.name, c: s.code, l: s.lines, w: s.walkMinutes, m: s.meters
    }))
  };
});

// 精简租金数据
const slimRental = {};
let districtMedianRent = {};
if (rentalData) {
  Object.entries(rentalData.projects).forEach(([name, info]) => {
    if (!info.latestMedian) return;  // 跳过没租金数据的
    slimRental[name] = {
      m: info.latestMedian,      // 月租中位
      p: info.latestPeriod,       // 最近季度
      t: info.rentalsByPeriod     // 趋势
    };
  });
  districtMedianRent = rentalData.district_median_rent || {};
}

// 精简学校数据
const slimSchools = {};
let topSchoolsList = [];
if (schoolsData) {
  Object.entries(schoolsData.projects).forEach(([name, info]) => {
    if (!info.nearest) return;
    slimSchools[name] = {
      n: info.nearest.name,          // 最近 Top 小学名
      m: info.nearest.meters,         // 距离（米）
      // 1km 内 Top 小学列表（简化）
      w: (info.within1km || []).map(s => ({ n: s.name, m: s.meters }))
    };
  });
  topSchoolsList = schoolsData.top_schools || [];
}

console.log(`✓ 精简后: ${slimTransactions.length.toLocaleString()} 笔 / ${Object.keys(slimMrt).length} MRT / ${Object.keys(slimRental).length} 租金 / ${Object.keys(slimSchools).length} 学区`);

const embeddedData = {
  fetched_at: condoData.fetched_at,
  transactions: slimTransactions,
  mrt: slimMrt,
  rental: slimRental,
  districtMedianRent,
  schools: slimSchools,
  topSchoolsList
};

const dataJson = JSON.stringify(embeddedData);
const dataSize = (dataJson.length / 1024 / 1024).toFixed(2);
console.log(`✓ 数据 JSON 大小: ${dataSize} MB`);

// 关键优化：用 JSON.parse('...') 而不是直接嵌入 JS 对象字面量
// JSON.parse 在手机浏览器（V8/Safari）快 2-10 倍，避免页面卡死
// 需要转义字符串里的反斜杠和单引号
const escapedJson = dataJson
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

let template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');
if (!template.includes('/*__EMBEDDED_DATA_PLACEHOLDER__*/')) {
  console.error('❌ 模板文件缺少 /*__EMBEDDED_DATA_PLACEHOLDER__*/ 占位符');
  process.exit(1);
}
// 替换占位符：输出为 JSON.parse(`...`) 形式
template = template.replace(
  '/*__EMBEDDED_DATA_PLACEHOLDER__*/',
  `JSON.parse(\`${escapedJson}\`)`
);

fs.writeFileSync(OUTPUT_FILE, template);
const size = fs.statSync(OUTPUT_FILE).size;
console.log(`\n✅ 完成！${OUTPUT_FILE} (${(size / 1024 / 1024).toFixed(2)} MB)`);
console.log(`\n双击 ${OUTPUT_FILE} 即可打开，无需 server\n`);
