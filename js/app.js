
"use strict";
/* ============================================================
   01 · 图标库（统一描边风格）
   ============================================================ */
const SVG = {
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20.5 20.5L16 16"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.4v14H7zM13.6 5H17v14h-3.4z"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 20.3S3.5 15.2 3.5 9.6A4.6 4.6 0 0 1 12 6.9a4.6 4.6 0 0 1 8.5 2.7c0 5.6-8.5 10.7-8.5 10.7z"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z"/></svg>',
  starE:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5L19.5 7"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 1 6.5 18H20"/><path d="M9 7h7"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="3.5" y="6" width="13" height="12" rx="2"/><path d="M16.5 10.5l4-2.3v7.6l-4-2.3"/></svg>',
  award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="M8.8 13.6L7.5 21l4.5-2.4L16.5 21l-1.3-7.4"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V13"/><path d="M7.5 9.5h9M7.5 12h5"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3l7.5 3v5.2c0 5-3.2 8.4-7.5 9.8-4.3-1.4-7.5-4.8-7.5-9.8V6z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.7-2.8 2.9-4.4 5.5-4.4s4.8 1.6 5.5 4.4"/><path d="M15 5.8a3.2 3.2 0 0 1 0 5.4M17.5 15.4c1.5.6 2.6 2 3 4.1"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2.4"/><path d="M10.5 18h3"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 6.3"/><path d="M20 5v6h-6"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',
  vol:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  full:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
  gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="4" y="8" width="16" height="4"/><path d="M5 12v7a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-7M12 8v11.5"/><path d="M12 8s-4.5.2-4.5-2.2C7.5 4 9.5 3 11 4.8l1 3.2 1-3.2c1.5-1.8 3.5-.8 3.5 1 0 2.4-4.5 2.2-4.5 2.2z"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8c.7 3.2.6 5-1.1 6.7-1.3 1.3-2.3 2.7-2.4 4.4a3.9 3.9 0 0 0 7.8.4c0-2-1-3.3-2.3-4.6.1 1.2-.4 2.1-1.2 2.9C13.4 9.6 12.4 6.6 12 2.8z"/><path d="M12 2.8c.4 2.2.9 3.6 2.2 5 1.5 1.6 2.8 3 2.8 5.6 0 3.5-2.2 5.6-5 5.6s-5-2.1-5-5.6c0-2.5 1.4-4.2 2.8-5.6"/></svg>',
  sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2 4.6 4.7 2-4.7 2-2 4.6-2-4.6-4.7-2 4.7-2z"/><path d="M18.8 15.3l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></svg>',
  zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3L5.5 13.5H11L10 21l7.5-10.5H12z"/></svg>',
  ticket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5a2 2 0 0 0 0 4V13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 13v-.5a2 2 0 0 0 0-4z"/><path d="M13.5 6.5V18"/></svg>',
  grad:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4L2.5 8.5 12 13l9.5-4.5z"/><path d="M6.5 11.3V16c0 1.3 2.5 2.8 5.5 2.8s5.5-1.5 5.5-2.8v-4.7M21.5 8.5V14"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M6.5 3.5h7l4 4.5v12.5h-11z"/><path d="M13.5 3.5V8H18M9 11.5h6M9 14.8h6"/></svg>',
  thumb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5V20H4.9a1.4 1.4 0 0 1-1.4-1.4v-6.7a1.4 1.4 0 0 1 1.4-1.4z"/><path d="M7.5 10.5l2.9-6.4a1.9 1.9 0 0 1 2.7 1.7v3.2h5a2 2 0 0 1 2 2.3l-1 6.2a2 2 0 0 1-2 1.5H7.5"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.1"/><path d="M12 2.8l1 2.3 2.5-.5.7 2.4 2.4.7-.5 2.5 2.3 1-2.3 1 .5 2.5-2.4.7-.7 2.4-2.5-.5-1 2.3-1-2.3-2.5.5-.7-2.4-2.4-.7.5-2.5-2.3-1 2.3-1-.5-2.5 2.4-.7.7-2.4 2.5.5z"/></svg>',
};

/* ============================================================
   02 · 全局工具
   ============================================================ */
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmtN = n=>n>=10000 ? (n/10000).toFixed(n>=100000?0:1).replace(/\.0$/,"")+"万" : n.toLocaleString("zh-CN");
const pad2 = n=>String(n).padStart(2,"0");

const track = (ev,data={})=>{
  const item = {ev, t:new Date().toISOString().slice(11,19), data};
  TRACK_LOG.push(item);
  console.log(`[track] ${ev}`, data);
  renderDbgLog();
};

const toast = (msg,type="info",ms=2400)=>{
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  const ic = type==="ok" ? SVG.check : type==="err" ? SVG.x : SVG.check;
  el.innerHTML = `<span class="ti">${ic}</span><span>${esc(msg)}</span>`;
  $("#toastWrap").appendChild(el);
  setTimeout(()=>{ el.classList.add("out"); setTimeout(()=>el.remove(),260); }, ms);
};

const modal = (html, opts={})=>{
  const scrim = $("#modalScrim");
  $("#modalBox").innerHTML = html;
  scrim.classList.add("show");
  document.body.style.overflow = "hidden";
  // 焦点圈定 + 关闭后还原
  const prevFocus = document.activeElement;
  const focusables = ()=>[...$("#modalBox").querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')]
    .filter(el=>!el.disabled && el.getClientRects().length);
  const trap = e=>{
    if(e.key!=="Tab") return;
    const f = focusables(); if(!f.length) return;
    const firstEl=f[0], lastEl=f[f.length-1];
    if(e.shiftKey && document.activeElement===firstEl){ e.preventDefault(); lastEl.focus(); }
    else if(!e.shiftKey && document.activeElement===lastEl){ e.preventDefault(); firstEl.focus(); }
  };
  document.addEventListener("keydown",trap);
  setTimeout(()=>{ const f=focusables()[0] || $("#modalBox").querySelector("[data-close]") || $("#modalBox"); f.focus(); },30);
  const close = ()=>{
    scrim.classList.remove("show"); document.body.style.overflow="";
    document.removeEventListener("keydown",trap);
    if(prevFocus && prevFocus.focus) prevFocus.focus();
  };
  $("#modalBox").querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",close));
  scrim.addEventListener("click",e=>{ if(e.target===scrim && opts.closable!==false) close(); });
  return {close, el:$("#modalBox")};
};

/* ============================================================
   03 · 全局状态
   ============================================================ */
const TRACK_LOG = [];
const State = {
  user:"guest",            // guest | logged | purchased
  userName:"演示学员",
  pageState:"normal",      // normal | loading | empty | error（作用于课程列表）
  promo:"none",            // none | coupon | flash | group
  couponCode:"",           // 已生效优惠码
  purchased:[],            // 已购课程 id 数组
  favs:[],                 // 收藏课程 id 数组
  orders:[],               // 订单记录
  lastOrder:null,
  coupons:[{code:"QISHI50", off:50, tip:"新人立减 ¥50（演示码）"},
           {code:"NEW30", off:30, tip:"新客专享 ¥30（演示码）"}],
};
const savePersist = ()=>{ try{ localStorage.setItem("qishi-state", JSON.stringify({user:State.user,purchased:State.purchased,favs:State.favs,orders:State.orders,userName:State.userName})); }catch(e){} };
const loadPersist = ()=>{ try{
  const d = JSON.parse(localStorage.getItem("qishi-state")||"null");
  if(d){ Object.assign(State,{user:d.user,purchased:d.purchased||[],favs:d.favs||[],orders:d.orders||[],userName:d.userName||"演示学员"}); }
}catch(e){} };
loadPersist();
/* ============================================================
   04 · Mock Data
   ============================================================ */
const CATEGORIES = [
  {id:"video", name:"短视频运营", en:"Short Video Growth", no:"CH·01", desc:"从冷启动到稳定日更，建立可持续的内容生产系统，让账号长出稳定播放和稳定询单。", keys:["账号定位","选题系统","拍摄剪辑","爆款复盘"]},
  {id:"lead",  name:"抖音获客", en:"Douyin Lead Gen",  no:"CH·02", desc:"把内容流量真正转成咨询、线索与订单，打通「内容 → 承接 → 成交」完整闭环。", keys:["获客内容","主页承接","私信话术","销售转化"]},
  {id:"ai",    name:"AI营销", en:"AI Marketing",      no:"CH·03", desc:"用 AI 工具矩阵解决内容产能问题：一人团队日更 10 条，成本砍半、速度翻倍。", keys:["AI 文案","AI 剪辑","数字人口播","批量测试"]},
  {id:"ec",    name:"电商运营", en:"E-Commerce Ops",   no:"CH·04", desc:"抖音电商货架、直播与投放的系统打法，从选品到 GMV 增长的全链路落地。", keys:["选品","直播间","投流","数据优化"]},
];

const TEACHERS = [
  {id:"t1", name:"周子墨", init:"墨", c:"1", role:"短视频操盘手 · 前 MCN 内容总监",
   exp:"8 年短视频一线操盘，为教育、本地生活、美业等 40+ 品牌搭建账号与内容体系。",
   quote:"内容不只为播放，为询单而做。",
   data:[["6000万+","操盘账号粉丝"],["40+","服务企业品牌"],["120万+","单账号粉丝"]],
   cases:[["0→120万粉","知识账号冷启动（演示数据）"],["800+ 到店","单条探店视频（演示数据）"]]},
  {id:"t2", name:"林一舟", init:"舟", c:"2", role:"抖音电商操盘手 · 前平台商业化产品经理",
   exp:"带出 3 个年 GMV 破亿直播间，擅长直播间起盘、留人话术与投放策略。",
   quote:"把直播间当一门生意来算账。",
   data:[["3亿+","年 GMV 操盘"],["3 个","破亿直播间"],["1200+","场直播复盘"]],
   cases:[["场均 GMV 4 万→21 万","直播间重组（演示数据）"],["ROI 0.8→2.1","投流托管方案（演示数据）"]]},
  {id:"t3", name:"许诺", init:"诺", c:"3", role:"AI 营销专家 · 内容提效顾问",
   exp:"为 300+ 内容团队搭建 AI 工作流，覆盖文案、剪辑、数字人出镜与批量分发。",
   quote:"一个人，也是一支内容团队。",
   data:[["300+","服务团队"],["10 倍","内容产能提升"],["50%","人力成本降幅"]],
   cases:[["3 小时日更 10 条","AI 工作流（演示数据）"],["月省 1.2 万","外包剪辑费（演示数据）"]]},
  {id:"t4", name:"陈之恒", init:"恒", c:"4", role:"个人 IP 与本地获客顾问",
   exp:"前连锁品牌增长负责人，帮 200+ 本地门店搭建抖音获客体系。",
   quote:"本地生意，先让 3 公里内的人看到你。",
   data:[["200+","门店辅导"],["30+/周","单店平均询单"],["12 城","服务覆盖"]],
   cases:[["门店周询单 2→31","本地获客改造（演示数据）"],["20 万粉 IP","个人账号养成（演示数据）"]]},
];

const COURSES = [
  {id:"c1", art:"ring", tone:"", en:"Account Launch", no:"01",
   cat:"video", teacher:"t1", title:"短视频起号实战：选题系统与冷启动", slogan:"30 天跑通「日更 3 条」的内容引擎",
   value:"从账号定位到选题库搭建，解决「不知道发什么、发了没人看」的冷启动难题。",
   desc:"起号不是靠玄学，是靠一套可以复用的选题与内容系统。本课带你建立自己的选题库、内容模板与发布节奏，30 天跑出稳定播放与稳定进粉。",
   price:299, originalPrice:599, rating:4.9, students:18630, lessons:16, duration:6.5,
   hot:true, tags:["0 粉可学","选题系统","实操模板"],
   gain:["建立个人账号定位公式","搭建 30 天选题库模板","掌握 3 种高完播内容结构","一整套发布与复盘 SOP"],
   who:["刚起步、播放常年不过百的新手","想稳定日更但没内容可发的运营","准备入局抖音的个人商家"],
   outline:[
     {t:"账号定位与底层逻辑", fs:3, lessons:[{t:"为什么你的视频没人看",free:1,dur:"9:42"},{t:"账号定位公式：你能做什么、谁看、凭什么看",dur:"11:25"},{t:"对标拆解：找到值得抄作业的 9 个账号",dur:"13:08"}]},
     {t:"选题系统：告别「今天发什么」", fs:4, lessons:[{t:"三类选题：亲测、人设、热点怎么配比",dur:"10:15"},{t:"低成本选题方法论：45 分钟产出 30 个选题",dur:"12:40"},{t:"标题与封面：让系统先认识你",dur:"9:20"},{t:"黄金前 3 秒：钩子的 5 种写法",dur:"11:02"}]},
     {t:"内容生产与发布节奏", fs:4, lessons:[{t:"口播拍摄：手机也能拍出不廉价感",dur:"14:32"},{t:"剪辑节奏：快闪、停顿与留白",dur:"12:18"},{t:"日更节奏设计：一个人怎么扛住",dur:"8:55"},{t:"发布时间与流量窗口",dur:"6:47"}]},
     {t:"复盘与放大", fs:3, lessons:[{t:"数据复盘：播放低到底是哪一环",dur:"10:26"},{t:"涨粉期投放：Dou+ 的正确姿势",dur:"9:14"},{t:"冷启动 30 天作战表",free:1,dur:"12:05"}]},
   ]},
  {id:"c2", art:"band", tone:"", en:"Lead Generation", no:"02",
   cat:"lead", teacher:"t1", title:"抖音获客实战课：把流量变成咨询和订单", slogan:"从内容到成交的完整获客闭环",
   value:"不追播放量，只追询单。学完这套方法，让每条视频都往微信和表单里带精准客户。",
   desc:"抖音获客不是「多发视频」而是「建闭环」。本课讲透内容如何设计成获客钩子、主页如何承接、私信如何成交，并配套可直接套用的话术与模板。",
   price:399, originalPrice:799, rating:4.9, students:12680, lessons:12, duration:5.0,
   hot:true, tags:["企业获客","私信成交","SOP 模板"],
   gain:["看懂「内容→咨询」的获客漏斗","搭建高转化主页与私信承接","套用成交话术 SOP 模板","制定 90 天获客作战计划"],
   who:["靠抖音找客户的企业主与销售","为门店/加盟商引流的人","想从播放量转向询单的运营"],
   outline:[
     {t:"获客底层逻辑", fs:3, lessons:[{t:"为什么你的内容不产生询单",free:1,dur:"8:32"},{t:"内容→咨询→成交：全链路拆解",dur:"11:15"},{t:"本地流量与全域分发的差异",dur:"9:47"}]},
     {t:"获客内容引擎", fs:3, lessons:[{t:"高询单选题库模块搭建",dur:"12:30"},{t:"三种高转化视频结构",dur:"13:22"},{t:"CTA 设计：让用户忍不住评论",dur:"10:08"}]},
     {t:"承接与成交", fs:3, lessons:[{t:"主页五件套：简介、合集、留资位",dur:"9:53"},{t:"私信话术 SOP：从打招呼到报价",dur:"14:26"},{t:"客户常见拒绝怎么接",dur:"11:41"}]},
     {t:"放大与复盘", fs:3, lessons:[{t:"投流放大：把跑得动的素材加预算",dur:"10:44"},{t:"每周获客数据复盘模板",dur:"7:58"},{t:"90 天获客作战手册",free:1,dur:"12:37"}]},
   ]},
  {id:"c3", art:"grid", tone:"", en:"AI Content", no:"03",
   cat:"ai", teacher:"t3", title:"AI 内容工厂：一人团队日更 10 条短视频", slogan:"用 AI 把内容产能放大 10 倍",
   value:"文案、剪辑、配音、数字人都交给 AI，一个人也能维持日更频率，内容成本砍一半。",
   desc:"一套从选题到成片的 AI 工作流：提示词库、剪辑模板、数字人口播与批量分发，课上给全可直接复制的工具组合，回来就能跑。",
   price:199, originalPrice:499, rating:4.8, students:25410, lessons:18, duration:7.0,
   new:true, tags:["零基础","工具组合","日更 10 条"],
   gain:["获得完整 AI 工具矩阵清单","套用 100+ 条效果提示词模板","搭建数字人口播与 AI 剪辑流水线","把产出效率翻 3 倍以上"],
   who:["内容产能跟不上的个人运营者","想降剪辑外包成本的团队","想追 AI 效率红利的小商家"],
   outline:[
     {t:"AI 基础与工具矩阵", fs:2, lessons:[{t:"AI 内容生产的正确打开方式",free:1,dur:"10:12"},{t:"工具矩阵：文案、剪辑、配音一把配齐",dur:"15:48"}]},
     {t:"AI 文案流水线", fs:3, lessons:[{t:"提示词公式：让 AI 写出抖音文案",dur:"13:27"},{t:"批量产出：一次生成 20 条选题",dur:"11:04"},{t:"爆款仿写与原创改造",dur:"9:36"}]},
     {t:"AI 剪辑与数字人", fs:3, lessons:[{t:"一键成片：剪辑模板编排",dur:"12:50"},{t:"数字人出镜：人设与口型适配",dur:"14:17"},{t:"批量混剪与去重思路",dur:"10:33"}]},
     {t:"发布与迭代", fs:2, lessons:[{t:"多平台批量分发技巧",dur:"8:41"},{t:"用数据反哺提示词迭代",free:1,dur:"9:26"}]},
   ]},
  {id:"c4", art:"mid", tone:"", en:"E-Commerce 0→1", no:"04",
   cat:"ec", teacher:"t2", title:"抖音电商从 0 到 1：货架 + 直播双引擎", slogan:"不烧钱也能把店做起来",
   value:"货架承接自然流量、直播带动爆发，一套从开店、选品到直播放量的完整打法。",
   desc:"从类目与选品开始，把货架场与内容场两套引擎分别跑通，再合流放大。适合还没有跑出模型的电商新手团队。",
   price:499, originalPrice:999, rating:4.9, students:9830, lessons:20, duration:9.0,
   new:true, tags:["开店","选品","直播","投流"],
   gain:["完成店铺与类目冷启动","掌握选品与测款方法","搭建首场直播脚本框架","理解自然流与付费流配合"],
   who:["想开抖音店但不知从哪开始的人","品牌方电商团队起步期","有货想找新渠道的工厂主"],
   outline:[
     {t:"起盘：店铺与货架", fs:3, lessons:[{t:"开店清单与类目选择",free:1,dur:"11:18"},{t:"商品卡与搜索流量优化",dur:"13:52"},{t:"选品四步法与测款",dur:"15:20"}]},
     {t:"内容场蓄水", fs:3, lessons:[{t:"短视频挂店：引流款内容设计",dur:"12:44"},{t:"直播间组品与货盘结构",dur:"13:31"},{t:"直播脚本：开场、留人、逼单",dur:"16:07"}]},
     {t:"放量与复盘", fs:3, lessons:[{t:"自然流触发机制",dur:"10:58"},{t:"随心推与千川的基础投放",dur:"14:39"},{t:"数据周复盘：围绕 GMV 的指标表",free:1,dur:"12:02"}]},
   ]},
  {id:"c5", art:"cross", tone:"light", en:"Local Biz", no:"05",
   cat:"lead", teacher:"t4", title:"本地生活获客：让周边 3 公里看到你", slogan:"门店生意的抖音获客专项课",
   value:"餐厅、美业、教培等本地门店，用内容把进店客流量重新拉起来，方法可复制到员工。",
   desc:"本地商家不需要做网红，只需要做好「附近的人」。本课围绕探店内容、到店承接、员工出镜三条线展开，附门店执行模板。",
   price:259, originalPrice:529, rating:4.8, students:7420, lessons:14, duration:5.5,
   tags:["门店","探店","员工出镜"],
   gain:["掌握本地流量分发逻辑","建立门店内容选题墙","员工出镜与排班表设计","到店核销与复购承接"],
   who:["独立门店主理人","连锁品牌区域负责人","本地生活服务商"],
   outline:[
     {t:"本地流量怎么来", fs:2, lessons:[{t:"POI、同城与推荐算法",free:1,dur:"9:51"},{t:"四种本地高转化内容",dur:"12:29"}]},
     {t:"门店内容生产线", fs:2, lessons:[{t:"选题墙：把服务变成内容",dur:"11:15"},{t:"员工出镜拍摄 SOP",dur:"10:42"}]},
     {t:"到店与复购", fs:2, lessons:[{t:"团购与核销承接",dur:"9:58"},{t:"会员沉淀与老客复购",free:1,dur:"8:34"}]},
   ]},
  {id:"c6", art:"stripe", tone:"", en:"Copywriting", no:"06",
   cat:"video", teacher:"t1", title:"爆款文案拆解课：钩子、结构与成交", slogan:"会拆爆款，才会写爆款",
   value:"不背话术，学拆解：把 100 条爆款的钩子、节奏、成交结构拆成可复用的公式。",
   desc:"爆款有规律可循。每节课拆一条真正的爆款视频，讲透其钩子怎么设、节奏怎么铺、结尾怎么收，让你从「看完就忘」到「看完会写」。",
   price:159, originalPrice:359, rating:4.9, students:32050, lessons:10, duration:3.5,
   hot:true, tags:["拆解","模板","文案"],
   gain:["掌握爆款拆解四步法","拿到 5 套文案结构模板","分辨钩子、承接与转化三种功能段"],
   who:["文案是短板的内容创作者","想复制同行爆款的运营","做口播和带货短视频的人"],
   outline:[
     {t:"拆解方法论", fs:2, lessons:[{t:"爆款是怎样炼成的：拆解四步法",free:1,dur:"10:04"},{t:"前 3 秒钩子拆解案例",dur:"12:38"}]},
     {t:"结构与节奏", fs:2, lessons:[{t:"三段式结构：冲突—论证—转化",dur:"11:56"},{t:"节奏感：停顿、重复与情绪曲线",dur:"9:44"}]},
     {t:"成交文案", fs:2, lessons:[{t:"带货口播的成交结构",dur:"10:27"},{t:"从拆解到创作：现场改写示范",free:1,dur:"13:04"}]},
   ]},
  {id:"c7", art:"ring", tone:"light", en:"AI Office", no:"07",
   cat:"ai", teacher:"t3", title:"AI 提效办公：把运营成本砍一半", slogan:"让 AI 接手重复劳动",
   value:"选题、排期、客服话术、数据表，AI 能接手的都交出去，把人留给判断与创造。",
   desc:"运营的日常 60% 是重复劳动。本课教你用 AI 搭建自动化流程：周报、排期、素材整理、数据汇总，一周节省 10 小时以上。",
   price:129, originalPrice:299, rating:4.7, students:15090, lessons:12, duration:4.0,
   tags:["自动化","降本","提效"],
   gain:["盘点自己可自动化的工作清单","用 AI 处理报告、排期与数据","搭建个人提效工作台"],
   who:["日常事务缠身的运营","想升级工作方式的职场人","小团队的管理与执行者"],
   outline:[
     {t:"提效思维", fs:2, lessons:[{t:"先盘点：哪些活可以交给 AI",free:1,dur:"8:47"},{t:"提示词即技能：常用场景速查",dur:"11:33"}]},
     {t:"场景实战", fs:2, lessons:[{t:"内容排期与周报自动化",dur:"10:15"},{t:"客服话术与数据分析提速",free:1,dur:"12:08"}]},
     {t:"工作台搭建", fs:1, lessons:[{t:"个人 AI 工作台：从工具到流程",dur:"13:26"}]},
   ]},
  {id:"c8", art:"band", tone:"light", en:"Live Room", no:"08",
   cat:"ec", teacher:"t2", title:"直播间起盘与留人话术", slogan:"从 0 开播到场均在线破百",
   value:"开播前 1 小时做什么、开播后每 5 分钟说什么，一套能直接上播的话术框架。",
   desc:"很多人开播失败在「没有脚本」。本课给你完形的直播间脚本框架：开场留人、产品讲解、逼单节奏，配合真实场次的逐句拆解。",
   price:349, originalPrice:699, rating:4.8, students:5670, lessons:15, duration:6.0,
   tags:["话术","起盘","脚本"],
   gain:["拿到直播间完整脚本框架","掌握开场 5 分钟留人技巧","设计自己的逼单与催付节奏"],
   who:["准备第一次正式开播的人","直播间在线一直个位数的播主","品牌自播团队的运营"],
   outline:[
     {t:"开播前", fs:2, lessons:[{t:"人、货、场：开播前的准备清单",free:1,dur:"9:37"},{t:"主播脚本：把产品讲成人话",dur:"12:44"}]},
     {t:"开播中", fs:2, lessons:[{t:"开场 5 分钟：留人的三种钩子",dur:"10:52"},{t:"讲解、逼单与催付的节奏",dur:"13:19"}]},
     {t:"下场后", fs:2, lessons:[{t:"直播场次复盘：表格与要点",dur:"9:21"},{t:"从本场到下场：迭代清单",free:1,dur:"8:43"}]},
   ]},
  {id:"c9", art:"mid", tone:"light", en:"Personal IP", no:"09",
   cat:"video", teacher:"t4", title:"个人 IP 商业变现课", slogan:"把「认识你的人」变成「买你产品的人」",
   value:"在垂直赛道立住人设，用内容积累信任资产，再顺理成章地完成三次变现。",
   desc:"个人 IP 的核心不是粉丝量，是信任。本课讲透人设定位、内容护城河与三种变现路径，让个人能力从「隐形」到「可卖」。",
   price:289, originalPrice:589, rating:4.9, students:11020, lessons:13, duration:5.0,
   new:true, tags:["人设","变现","信任"],
   gain:["找到自己的 IP 定位锚点","建立内容护城河与内容日历","设计咨询、课程、社群三种变现"],
   who:["有专业能力不会表达的从业者","想放大个人影响力的创始人","兼职想跑通第二曲线的上班族"],
   outline:[
     {t:"人设定位", fs:2, lessons:[{t:"人设不是人设：定位三问",free:1,dur:"9:06"},{t:"差异化：赛道里没人这么讲",dur:"11:28"}]},
     {t:"内容护城河", fs:2, lessons:[{t:"系列化内容与栏目化运营",dur:"10:37"},{t:"让旧内容持续产生新询单",dur:"8:52"}]},
     {t:"商业变现", fs:2, lessons:[{t:"从内容到产品：信任的三种变现",dur:"12:14"},{t:"从咨询到交付：落地方法论",free:1,dur:"11:03"}]},
   ]},
  {id:"c10", art:"cross", tone:"", en:"Boss Course", no:"10",
   cat:"lead", teacher:"t1", title:"企业老板抖音获客特训", slogan:"不亲自下场，也能把抖音做成获客渠道",
   value:"为老板定制的获客课：定战略、搭团队、看数据，三次周会就能落地抖音获客。",
   desc:"老板不需要会拍视频，需要会管「拍视频的事」。本课从目标设定、团队组建、内容审核到数据周会，把抖音获客变成一项可管理、可考核的公司业务。",
   price:599, originalPrice:1199, rating:5.0, students:4380, lessons:16, duration:8.0,
   hot:true, tags:["老板","团队","战略"],
   gain:["明确公司级获客目标与预算","设计团队分工与考核指标","搭建内容审核与数据周会机制"],
   who:["还没想清楚抖音怎么做的老板","想建抖音团队的公司负责人","需要给团队定目标的业务高管"],
   outline:[
     {t:"战略与目标", fs:2, lessons:[{t:"老板的抖音：获客战略四问",free:1,dur:"10:29"},{t:"把获客目标拆解成岗位指标",dur:"12:16"}]},
     {t:"团队与流程", fs:2, lessons:[{t:"小组配置：编导、出镜、运营",dur:"11:07"},{t:"内容审核会：老板只看三张表",dur:"9:54"}]},
     {t:"预算与复盘", fs:2, lessons:[{t:"投放预算与红线",dur:"10:31"},{t:"季度复盘与迭代",free:1,dur:"9:12"}]},
   ]},
];

const CASES = [
  {id:"k1", ind:"local", name:"林晓", role:"美甲店主 · 山东青岛", initial:"林", c:"2", course:"c5",
   before:"之前发过 47 条视频，几乎没有进店咨询，本都打水漂。",
   action:"按「周边 3 公里内容地图」重做选题，真人出镜 + 服务过程实录。",
   after:["40 天后","每周进店咨询稳定 20+ 组"]},
  {id:"k2", ind:"knowledge", name:"阿凯", role:"知识账号新手 · 湖南长沙", initial:"凯", c:"3", course:"c1",
   before:"旧账号发满 30 条，播放量没过 200，一度想放弃。",
   action:"用选题系统卡位垂直话题，固定人设与发布节奏，日更 3 条。",
   after:["90 天后","粉丝 8.2 万，开始接商单"]},
  {id:"k3", ind:"ec", name:"孙姐", role:"服装档口老板娘 · 广州", initial:"孙", c:"1", course:"c8",
   before:"直播做了 3 个月，场均在线个位数，货备了没人买。",
   action:"重做开播脚本与人话结构，开场改留人钩子，讲解改成体验式。",
   after:["21 天后","单场同时在线破百，日均 50+ 单"]},
  {id:"k4", ind:"enterprise", name:"白帆", role:"餐饮加盟商 · 浙江杭州", initial:"白", c:"4", course:"c2",
   before:"投流 ROI 一直在 0.8 上下，越投越亏。",
   action:"按课程方法重做落地页承接与私信话术，素材单独为获客设计。",
   after:["30 天后","ROI 稳定到 2.1，月询单 300+"]},
  {id:"k5", ind:"enterprise", name:"龙哥", role:"二手设备商 · 江苏苏州", initial:"龙", c:"1", course:"c2",
   before:"业务全靠老客户转介绍，新客来源单一。",
   action:"做「设备验收过程」垂直系列，主页挂表单，私信自动应答。",
   after:["45 天后","新增精准咨询 186 条"]},
  {id:"k6", ind:"knowledge", name:"小满", role:"宝妈 · 深圳", initial:"满", c:"3", course:"c3",
   before:"不会拍摄剪辑，内容全靠外包，一周一更还常断。",
   action:"用 AI 工具矩阵 3 小时完成一天的量，数字人口播覆盖口播内容。",
   after:["30 天后","实现日更，创作者收益日均 300+"]},
  {id:"k7", ind:"local", name:"李想", role:"连锁门店企业主 · 四川成都", initial:"李", c:"4", course:"c5",
   before:"总部不会管理门店短视频，12 家店各自为战。",
   action:"建立「总部选题 + 门店执行」SOP，门店只需出镜，总部统一发布。",
   after:["60 天后","12 家店平均月增咨询过百"]},
  {id:"k8", ind:"ec", name:"大罗", role:"美妆电商运营 · 上海", initial:"罗", c:"2", course:"c8",
   before:"直播转化率 0.9%，流量来了留不住。",
   action:"重新组货盘：引流款 + 利润款 + 爆发款，话术按节奏重写。",
   after:["14 天后","GMV 翻倍，转化率升到 2.6%"]},
];
const MOCK_BADGE = '<span class="mockbadge"><i></i>演示数据</span>';

const REVIEWS = [
  {id:"r1", name:"陈晨", initial:"陈", c:"1", course:"c1", stars:5, date:"2026-08-06", like:8,
   text:"以前发视频全靠感觉，看谁火抄谁。按课程里的选题方法重新整理后，第 17 天开始出现稳定咨询，第 30 天来了 40 条私信询单。"},
  {id:"r2", name:"Momo", initial:"M", c:"2", course:"c2", stars:5, date:"2026-08-03", like:64,
   text:"最值的是私信话术 SOP。以前客户问两句就没下文，现在照着流程接，上周成交了 3 单设备租赁，金额都在 2 万以上。"},
  {id:"r3", name:"老周", initial:"周", c:"1", course:"c8", stars:5, date:"2026-07-30", like:51,
   text:"直播间一直个位数在线，照着课的脚本框架重新开场，第二场就到 40 人，一周后稳定在 60–90。话术这东西真的可以模板化。"},
  {id:"r4", name:"苏苏", initial:"苏", c:"3", course:"c3", stars:5, date:"2026-07-28", like:93,
   text:"用 AI 文案提示词写口播稿，从原来的 2 小时一篇到现在 20 分钟一篇，剪辑也套的模板。一个人把账号跑起来了，更新频率翻了三倍。"},
  {id:"r5", name:"Kenny", initial:"K", c:"4", course:"c5", stars:4, date:"2026-07-22", like:37,
   text:"我们是做门窗的，之前完全不知道怎么拍。选题墙那部分很实用，让店里师傅出镜拍了 20 天，来了 80 多个量尺咨询，成交了 11 单。"},
  {id:"r6", name:"安然", initial:"安", c:"2", course:"c6", stars:5, date:"2026-07-18", like:42,
   text:"拆解课治好了我的收藏病——以前存几百条爆款根本不看。现在每周拆 3 条，两条变自己的文案模板，播放明显上了一个台阶。"},
  {id:"r7", name:"王总", initial:"王", c:"4", course:"c10", stars:5, date:"2026-07-15", like:28,
   text:"给团队买的。老板课讲的是怎么管，我照着内容审核会的方法，每周只花 1 小时看三张表，团队真的跑起来了。"},
  {id:"r8", name:"Lily", initial:"L", c:"1", course:"c9", stars:5, date:"2026-07-10", like:39,
   text:"做理财顾问 6 年，一直不知道怎么被看见。定位三问那节课让我想通了方向，重新起号 60 天，已经有人从抖音过来买咨询了。"},
  {id:"r9", name:"阿飞", initial:"飞", c:"3", course:"c7", stars:4, date:"2026-07-05", like:22,
   text:"周报、排期表都让 AI 做了，一周省出 10 小时。效率提升是实打实的，就是自己得先花两个晚上搭好流程。"},
  {id:"r10", name:"晶晶", initial:"晶", c:"2", course:"c4", stars:5, date:"2026-06-28", like:47,
   text:"开店第 3 天就出了第一单，选品方法帮了大忙。直播间从一场 30 分钟手忙脚乱，到现在能按脚本把整场走完。"},
  {id:"r11", name:"大熊", initial:"熊", c:"1", course:"c1", stars:5, date:"2026-06-21", like:74,
   text:"不是那种听着爽下课忘的课，每节都有模板和作业。打卡到第 21 天的时候账号第一次破万赞，现在稳定日更有 5 千播放。"},
  {id:"r12", name:"Judy", initial:"J", c:"4", course:"c2", stars:5, date:"2026-06-14", like:58,
   text:"卖香港保险，之前抖音只当兴趣刷。学完获客课第三周，有客户主动说「刷到你好几次了」，私域转化比线下陌拜轻松太多。"},
];

const FAQS = [
  {q:"一点基础都没有，能学会吗？",
   a:"大部分课程不要求经验，从定位、选题这类最基础的动作讲起。每节课有模板和作业演示，边学边做，按表格执行即可，学不会可以问课程答疑。"},
  {q:"每天需要花多少时间学习？",
   a:"建议每天 40–60 分钟，按小节拆分学习。课时设计偏短平快，通勤时间也能完成一到两节，周作业在 2 小时以内。"},
  {q:"用什么设备上课？支持回看吗？",
   a:"手机、电脑、平板浏览器直接学习，购买后永久回看，不限制次数。直播互动课另行约定时间。"},
  {q:"学完真的能见效吗？",
   a:"方法 + 执行 = 结果。课程提供的是可复用的系统与模板，页面上呈现的案例均为演示数据，正式学习中建议先试听判断是否适合自己。"},
  {q:"购买后多久能开始学习？",
   a:"支付成功立即开通，无需等待。订单页即可看到「开始学习」入口，全部课时即时解锁。"},
  {q:"支持退款吗？",
   a:"支持。购买后 7 天内课程学习进度未超过 20% 可申请无理由退款（演示规则），退款原路返回。"},
];

const C = id=>COURSES.find(c=>c.id===id) || COURSES[0];
const T = id=>TEACHERS.find(t=>t.id===id) || TEACHERS[0];
const CAT = id=>CATEGORIES.find(c=>c.id===id) || CATEGORIES[0];
/* ============================================================
   05 · 定价工具（预留 Coupon / FlashSale / GroupBuy 扩展）
   ============================================================ */
function couponOff(c){
  const cp = State.coupons.find(x=>x.code===State.couponCode);
  return cp ? Number(cp.off)||0 : 0;
}
function priceInfo(c){
  let now = c.price, was = c.originalPrice, mode = "none", tag = "";
  if(State.promo==="flash"){ now = Math.round(c.price*0.82/10)*10; mode="flash"; tag="限时特惠"; if(now>=was){ now=Math.max(1,Math.round(was*0.82/10)*10);} }
  else if(State.promo==="group"){ now = Math.round(c.price*0.78/10)*10; mode="group"; tag="2 人拼团价"; }
  let extra = 0, extraLabel="";
  if(State.couponCode && couponOff(c)>0){ extra = couponOff(c); now = Math.max(0, now-extra); extraLabel=`优惠券 -¥${extra}`; }
  const save = Math.max(0, was-now);
  return {now, was, mode, tag, extra, extraLabel, save};
}
const money = n => "¥"+n;
const pnowHtml = p => `<span class="now">${p.now}</span><span class="was">${p.was}</span>` + (p.save>0?`<span class="off">省&nbsp;${p.save}</span>`:"");

/* 促销横条（本周特惠·演示） */
const PROMO_BAR = `<div class="promo-bar">${SVG.zap}本周特惠：优惠码 <b>NEW30</b> 立减 ¥30，今晚 24 点结束（演示）<span class="pb-go" data-promo>点此自动填入 ${SVG.arrow}</span></div>`;

function starsHtml(r){
  let html="";
  for(let i=0;i<5;i++){
    if(r>=i+1) html += `<span class="star">${SVG.star}</span>`;
    else if(r>=i+0.5) html += `<span class="star star-h">${SVG.starE}<span class="ov">${SVG.star}</span></span>`;
    else html += `<span class="star star-e">${SVG.starE}</span>`;
  }
  return `<span class="stars" aria-label="${r} 分">${html}<small>${r}</small></span>`;
}

/* ============================================================
   06 · 课程卡片
   ============================================================ */
function ccardHtml(c){
  const cat = CAT(c.cat), t = T(c.teacher);
  const owned = State.purchased.includes(c.id);
  const fav = State.favs.includes(c.id);
  const p = priceInfo(c);
  const heart = fav
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.3S3.5 15.2 3.5 9.6A4.6 4.6 0 0 1 12 6.9a4.6 4.6 0 0 1 8.5 2.7c0 5.6-8.5 10.7-8.5 10.7z"/></svg>`
    : SVG.heart;
  const gridDot = c.art==="grid" ? '<i class="cond"></i>' : "";
  return `<article class="ccard rev">
  <div class="ccover" data-art="${c.art}" data-tone="${c.tone}" data-go="/course/${c.id}" role="link" tabindex="0" aria-label="${esc(c.title)}">
    ${c.hot ? `<span class="tag accent cov-cat">${SVG.fire}热门</span>` : c.new ? `<span class="tag accent cov-cat">NEW</span>` : `<span class="tag on-dark cov-cat">${cat.name}</span>`}
    <button class="fav cov-fav on-dark${fav?" is-on":""}" data-fav="${c.id}" aria-label="${fav?"取消收藏":"收藏"}">${heart}</button>
    <i class="cov-art"></i>${gridDot}
    <span class="cov-num">${c.no}</span>
    <span class="cov-en">${c.en}</span>
    ${owned?`<span class="tag on-dark" style="position:absolute;left:12px;bottom:10px;z-index:3">已购</span>`:""}
  </div>
  <div class="ccard-body">
    <h3 data-go="/course/${c.id}">${esc(c.title)}</h3>
    <p class="ccard-value">${esc(c.value)}</p>
    <div class="ccard-meta">
      <span class="stu">${SVG.users}${fmtN(c.students)}人已学</span>
      <span class="ls">${SVG.video}${c.lessons}节</span>
      <span class="ls">${SVG.clock}${c.duration}h</span>
    </div>
    <div class="ccard-foot">
      <div class="price">${pnowHtml(p)}</div>
      <button class="ccard-cta" data-go="/course/${c.id}">${owned?"继续学习":"立即学习"}<em>→</em></button>
    </div>
  </div>
</article>`;
}

function coverMini(c, cls="") {
  return `<div class="mini-cover ${cls}"><b>${esc(c.title.slice(0,8))}</b><i></i></div>`;
}

/* ============================================================
   07 · 首页
   ============================================================ */
function marqueeHtml(){
  const words = ["账号定位","选题系统","本地获客","AI 提效","直播间起盘","私信成交","爆款拆解","数据复盘","日更 10 条","信任资产","GMV 增长","询单转化"];
  const half = words.map(w=>`<span>${w}<i>✦</i></span>`).join("");
  return half+half;
}
function viewHome(){
  track("page_view",{page:"home"});
  const hot = COURSES.filter(c=>c.hot).slice(0,4);
  const everyone = COURSES.filter(c=>c.hot||c.new).slice(0,4);
  const feat = T("t1");
  const html = `
  <section class="hero">
    <div class="hero-in wrap-l">
      <div class="hero-copy">
        <span class="k on-dark">抖音流量承接 · 商业增长课程平台</span>
        <h1 class="h1">让短视频真正带来客户，<br>而不只是<span class="hl-word">播放量</span>。</h1>
        <p class="lead">从账号定位、内容生产、AI 提效到抖音获客，<br>一套完整可落地的增长方法，帮你把内容变成生意。</p>
        <div class="hero-actions">
          <button class="btn btn-accent btn-lg" data-goto="home#courses">${SVG.play}先免费试听</button>
          <button class="btn btn-ghost-dark btn-lg" data-auth="login">登录开始学习</button>
        </div>
        <p class="hero-auth-note">登录后可同步课程进度、收藏与订单，全平台随时接着学（演示）</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="n"><span data-count="10" data-dec="1" data-suffix="万+">0</span></div><div class="l">累计学员</div></div>
          <div class="hero-stat"><div class="n"><span data-count="4.9" data-dec="1">0</span><em>★</em></div><div class="l">课程平均评分</div></div>
          <div class="hero-stat"><div class="n"><span data-count="1000" data-suffix="＋">0</span></div><div class="l">企业案例沉淀</div></div>
          <div class="hero-stat"><div class="n"><span data-count="96" data-suffix="%">0</span></div><div class="l">学员推荐率（演示）</div></div>
        </div>
      </div>
      <div class="hero-art">
        <div class="phone">
          <span class="phone-side"></span>
          <div class="phone-screen">
            <div class="phone-carousel" id="phoneCarousel">
              <div class="phone-track" id="phoneTrack"></div>
            </div>
            <div class="phone-dots" id="phoneDots" aria-label="轮播指示"></div>
          </div>
          <span class="phone-chip a" id="phoneChipA"></span>
          <span class="phone-chip w" id="phoneChipB"></span>
        </div>
      </div>
    </div>
  </section>
  <div class="marq"><div class="marq-track">${marqueeHtml()}</div></div>

  <section class="sec hairline" id="cats" aria-label="四大课程体系">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k">四大课程体系 · Curriculum</span>
          <h2 class="h2">围绕一个目标：<span class="hl-word">把抖音做成生意</span></h2>
        </div>
        <a class="btn btn-ghost" data-go="/courses">查看全部<span style="margin-left:6px">→</span></a>
      </div>
      <div class="cat-grid">
        ${CATEGORIES.map((c,i)=>`
        <div class="cat-card rev d${(i%3)+1}" data-go="/courses?cat=${c.id}">
          <span class="cc-no">${c.no} / ${c.en}</span>
          <h3>${c.name}</h3>
          <p class="cc-desc">${c.desc}</p>
          <div class="cc-tags">${c.keys.map(k=>`<span class="tag soft">${k}</span>`).join("")}</div>
          <span class="cc-go" data-go="/courses?cat=${c.id}">进入课程体系<em>→</em></span>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <section class="sec" id="courses" aria-label="热门课程">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k">热门课程 · Trending</span>
          <h2 class="h2">大家都在学</h2>
        </div>
        <a class="btn btn-ghost" data-go="/courses?sort=最热">更热排行榜<span style="margin-left:6px">→</span></a>
      </div>
      <div class="clist is-rail" id="homeHot"></div>
      <div style="margin-top:36px">
        <div class="sec-head" style="margin-bottom:16px">
          <h3 class="h3">${SVG.fire} 热门榜 TOP4</h3>
          <a class="btn btn-ghost btn-sm" data-go="/courses?sort=最热">全部榜单</a>
        </div>
        <div class="rank-list" id="homeRank"></div>
      </div>
    </div>
  </section>

  <section class="sec bg-ink" id="teachers" aria-label="实战导师">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k on-dark">实战导师 · Mentors</span>
          <h2 class="h2" style="color:var(--on-ink)">老师，就是课程的<span class="hl-word">信任资产</span></h2>
        </div>
      </div>
      <div class="tfeat rev">
        <div class="tp">
          <span class="tp-ring"></span>
          <span class="tp-init">墨</span>
          <div class="tp-name"><small>${T("t1").quote}</small>${T("t1").name}</div>
        </div>
        <div class="tinfo">
          <h3>抖音内容操盘手 · 周子墨</h3>
          <span class="trole"><span class="dot9"></span>${T("t1").role}</span>
          <p>${T("t1").exp}</p>
          <div class="tdata">${T("t1").data.map(d=>`<div><b>${d[0]}</b><span>${d[1]}</span></div>`).join("")}</div>
          <p style="font-size:12px;color:var(--t3)">代表案例（演示数据）</p>
          <div class="tcases">${T("t1").cases.map(cc=>`<div class="tcase"><b>${cc[0]}</b><span>${cc[1]}</span><em>→ 详情</em></div>`).join("")}</div>
          <div class="tinfo-cta" style="margin-top:6px">
            <button class="btn btn-accent" data-go="/course/c2">看他的获客课 ¥399</button>
            <button class="btn btn-ghost" data-go="/course/c1">看他的起号课</button>
          </div>
        </div>
      </div>
      <div class="tgrid" id="homeTeachers"></div>
    </div>
  </section>

  <section class="sec" id="cases" aria-label="学员案例">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k">学员案例 · Case Studies</span>
          <h2 class="h2">他们走过的路，<span class="hl-word">你也能抄</span></h2>
        </div>
        <span class="mockbadge"><i></i>以下为演示案例数据</span>
      </div>
      <div class="case-filter" id="caseFilter">
        <button class="chip is-on" data-case="all">全部</button>
        <button class="chip" data-case="local">本地生活</button>
        <button class="chip" data-case="knowledge">个人 IP</button>
        <button class="chip" data-case="ec">电商经营</button>
        <button class="chip" data-case="enterprise">企业获客</button>
      </div>
      <div class="case-grid" id="homeCases"></div>
    </div>
  </section>

  <section class="sec bg-paper2 hairline" id="reviews" aria-label="用户评价">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k">学员评价 · Reviews</span>
          <h2 class="h2">不是「讲得好」，是<span class="hl-word">照着做有效</span></h2>
        </div>
      </div>
      <div class="rating-sum rev" id="ratingSum"></div>
      <div class="rev-filter" id="revFilter">
        <button class="chip is-on" data-f="all">全部</button>
        <button class="chip" data-f="5">五星</button>
        <button class="chip" data-f="4">四星</button>
        <button class="chip" data-f="c1">起号实战</button>
        <button class="chip" data-f="c2">获客实战</button>
      </div>
      <div class="rev-grid" id="revGrid"></div>
    </div>
  </section>

  <section class="sec" id="why" aria-label="为什么选择我们">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-title">
          <span class="k">为什么选起势 · Comparison</span>
          <h2 class="h2">和「泛知识课程」<span class="hl-word">不一样</span></h2>
        </div>
      </div>
      <div class="cmp">
        <div class="cmp-row head"><div>对比维度</div><div>起势 GROWTH</div><div>一般短视频课程</div></div>
        <div class="cmp-row"><div>课程体系</div><div class="us">按「内容 → 获客 → 转化」9955闭环设计</div><div class="no">按「涨粉技巧」零散堆视频</div></div>
        <div class="cmp-row"><div>老师背景</div><div class="us">一线操盘手 + 平台数据验证</div><div class="no">多为兼职讲师</div></div>
        <div class="cmp-row"><div>落地材料</div><div class="us">SOP / 模板 / 作战表全套交付</div><div class="no">只有录播回放</div></div>
        <div class="cmp-row"><div>更新机制</div><div class="us">紧跟平台规则持续迭代</div><div class="no">录制后不更新</div></div>
        <div class="cmp-row"><div>售后保障</div><div class="us">7 天无理由 + 答疑社群</div><div class="no">售出不退</div></div>
      </div>
    </div>
  </section>

  <section class="sec" id="faq" aria-label="常见问题">
    <div class="wrap">
      <div class="sec-head" style="margin-bottom:22px">
        <div class="sec-title"><span class="k">常见问题 · FAQ</span><h2 class="h2">购买前，你可能想问</h2></div>
      </div>
      <div class="faq" id="faqBox"></div>
    </div>
  </section>

  <section class="sec" style="padding-top:0">
    <div class="wrap">
      <div class="cta-final rev">
        <h2>准备好把短视频，<br>变成一门真正的生意了吗？</h2>
        <p>先花 2 分钟试听，再决定要不要上车。</p>
        <div class="btns">
          <button class="btn btn-accent btn-lg" data-goto="home#courses">${SVG.play}先免费试听</button>
          <button class="btn btn-ghost-dark btn-lg" data-auth="login">${SVG.user}登录</button>
        </div>
        <div class="meta"><span>${SVG.shield}7 天无理由退课</span><span>${SVG.eye}手机 / 平板 / 电脑随时学</span><span>${SVG.users}12 万+ 学员的选择</span></div>
      </div>
    </div>
  </section>

  <footer class="foot">
    <div class="wrap">
      <div class="foot-in">
        <div class="foot-brand">
          <span class="logo"><b>起势</b><i></i><small>Growth&nbsp;Studio</small></span>
          <p>让短视频真正带来客户，而不只是播放量。从内容生产到商业成交的完整增长课程体系。</p>
          <div class="foot-news">
            <input class="input" id="newsEmail" type="email" placeholder="邮箱，订阅每周一份增长拆解">
            <button class="btn btn-accent" id="newsBtn" type="button">订阅</button>
          </div>
        </div>
        <div><h4>课程体系</h4>${CATEGORIES.map(c=>`<a href="#/courses?cat=${c.id}" data-nav="/courses">${c.name}</a>`).join("")}</div>
        <div><h4>帮助</h4><a href="#/helps" data-nav="/helps">帮助中心</a><a href="#/helps" data-nav="/helps">售后退课</a><a href="#/helps" data-nav="/helps">学习方式</a></div>
        <div><h4>关于</h4><a href="#/about" data-goto="home#teachers">实战导师</a><a href="#/about2" data-goto="home#cases">学员案例</a><a href="#/about3" data-goto="home#value">课程体系</a></div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 起势 GROWTH STUDIO · 产品演示原型（Mock）</span>
        <span>本页面所有课程、数据、评价均为演示内容，不构成真实商业承诺</span>
        <span><a href="#/" data-nav="/">首页</a> · <a href="#/courses" data-nav="/courses">课程</a> · <a href="#/mine" data-nav="/mine">我的</a></span>
      </div>
    </div>
  </footer>`;
  mount("#view-root", html);
  mountHome();
}

/* 兼容旧引用：无操作绑定（已由全局事件委托覆盖） */
function bindStatic(){}
function bindGoto(){}
function mountHome(){
  // 头部 CTA 点击
  $("[data-goto='home#courses']") && bindGoto($("[data-goto='home#courses']"));
  // 热门榜
  const hot = COURSES.filter(c=>c.hot).sort((a,b)=>b.students-a.students).slice(0,4);
  const everyone = COURSES.filter(c=>c.hot||c.new).slice(0,6);
  $("#homeHot").innerHTML = everyone.map(ccardHtml).join("");
  const rank = hot.map((c,i)=>`
    <div class="trow rev">
      <span class="rank-no ${i<3?"top":""}">${"0"+(i+1)}</span>
      <div class="tmeta" style="min-width:0;flex:1">
        <b>${esc(c.title)}</b>
        <p>${esc(c.value)}</p>
        <div class="ccard-meta" style="margin-top:6px">
          <span class="stu">${SVG.users}${fmtN(c.students)}人已学</span>
          ${starsHtml(c.rating)}
          <span class="ls">${c.lessons}节 · ${c.duration}h</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <div class="price">${pnowHtml(priceInfo(c))}</div>
        <button class="btn btn-sm btn-primary" data-go="/course/${c.id}">查看</button>
      </div>
    </div>`).join("");
  $("#homeRank").innerHTML = rank;
  // 老师
  $("#homeTeachers").innerHTML = TEACHERS.filter(t=>t.id!=="t1").map(t=>`
    <div class="trow rev">
      <div class="ava" data-c="${t.c}">${t.name[0]}<span class="a-ring"></span></div>
      <div class="tmeta" style="min-width:0"><b>${t.name} · ${t.role.split("·")[0].trim()}</b><p>${t.exp}</p></div>
      <button class="btn btn-sm btn-ghost tgo" data-go="/teacher/${t.id}">了解老师 →</button>
    </div>`).join("");
  // 案例（行业筛选）
  const renderCases = f=>{
    const list = (f==="all" ? CASES : CASES.filter(k=>k.ind===f));
    $("#homeCases").innerHTML = list.map(caseCardHtml).join("");
    revealAll();
  };
  $("#caseFilter").addEventListener("click",e=>{
    const b = e.target.closest("[data-case]"); if(!b) return;
    $$("#caseFilter .chip").forEach(x=>x.classList.toggle("is-on", x===b));
    renderCases(b.dataset.case);
    track("case_filter",{ind:b.dataset.case});
  });
  renderCases("all");
  $("#ratingSum").innerHTML = ratingSumHtml();
  renderReviews("all");
  // FAQ
  $("#faqBox").innerHTML = faqHtml(FAQS);
  // 订阅
  $("#newsBtn").addEventListener("click",()=>{
    const v = $("#newsEmail").value.trim();
    if(!/^\S+@\S+\.\S+$/.test(v)) return toast("请输入正确的邮箱地址（演示）","err");
    if(State.user==="guest") return openLogin("订阅后即可接收每期内容，先完成演示登录？");
    toast("订阅成功，每周一更新 · 演示","ok"); track("subscribe",{email:v});
  });
  bindStatic();
  revealAll();
  countUpAll();
  bindFavBtn();
  bindFilterBtns();
  bindFaq();
  afterHomeScroll();
  renderPhoneCards();
  initPhoneCarousel();
}
/* ============================================================
   08 · 渲染工具 / 全局事件委托 / 路由
   ============================================================ */
function mount(sel, html){
  const el = $(sel);
  el.classList.remove("view");
  el.innerHTML = html;
  void el.offsetWidth;
  el.classList.add("view");
  bindFavBtn();           // 卡片内收藏（委托渲染完成后）
  bindChips();
}
function revealAll(){
  const items = $$(".rev");
  if(!("IntersectionObserver" in window)){ items.forEach(i=>i.classList.add("in")); return; }
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.12, rootMargin:"0px 0px -6% 0px"});
  items.forEach(i=>io.observe(i));
  requestAnimationFrame(()=>{ $$(".hero .rev").forEach(i=>i.classList.add("in")); });
}
function countUpAll(){
  $$("[data-count]").forEach(el=>{
    const target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec||"0");
    const fmt = el.dataset.format==="1" ? n=>n.toLocaleString("zh-CN")
      : dec>0 ? n=>n.toFixed(dec) : n=>String(Math.round(n));
    const suf = el.dataset.suffix || "";
    const dur = 1100, t0 = performance.now();
    const step = t=>{
      const p = Math.min(1,(t-t0)/dur), ease = 1-Math.pow(1-p,3);
      el.textContent = fmt(target*ease) + suf;
      if(p<1) requestAnimationFrame(step); else el.textContent = fmt(target) + suf;
    };
    requestAnimationFrame(step);
  });
}
function bindFavBtn(){
  // 由全局委托处理，无需单独绑定
}
function bindChips(){ }
function caseCardHtml(k){
  const c = C(k.course);
  return `<div class="case-card rev">
    <div class="case-head">
      <div class="ava" data-c="${k.c}">${k.initial}<span class="a-ring"></span></div>
      <div><b>${k.name}</b><p>${k.role}</p></div>${MOCK_BADGE}
    </div>
    <div class="case-result"><b>${k.after[1]}</b><span>${k.after[0]}</span></div>
    <ul class="case-tl">
      <li><b>学习前：</b>${k.before}</li>
      <li><b>实际动作：</b>${k.action}</li>
    </ul>
    <div class="case-foot"><span>学了《${esc(c.title)}》</span><a data-go="/course/${c.id}">看看这门课 ${SVG.arrow}</a></div>
  </div>`;
}
function ratingStats(){
  const n = REVIEWS.length || 1;
  const mean = REVIEWS.reduce((s,r)=>s+r.stars,0) / n;
  const rows = [
    {title:"好评 · 4.5–5.0", hot:true,  count:REVIEWS.filter(r=>r.stars>=4.5).length},
    {title:"比较满意 · 4.0–4.4", hot:false, count:REVIEWS.filter(r=>r.stars>=4 && r.stars<4.5).length},
    {title:"一般 · 3.0–3.9", hot:false, count:REVIEWS.filter(r=>r.stars>=3 && r.stars<4).length},
    {title:"待改善 · 3 星以下", hot:false, count:REVIEWS.filter(r=>r.stars<3).length},
  ].map(r=>({...r, pct: Math.round(r.count/n*100)}));
  const max = Math.max(1, ...rows.map(r=>r.pct));
  return {n, mean, rows, max};
}
function ratingSumHtml(){
  const st = ratingStats();
  const mv = st.mean.toFixed(1);       // 统一一位小数，避免长分数残留
  return `<div class="big">
    <b>${mv}</b><br>
    <span class="stars">${starsHtml(+mv).replace(`<small>${mv}</small>`,"")}</span>
    <p>99+ 条评价 · 演示</p></div>
  <div class="rating-bars">
    ${st.rows.map(r=>`<div class="rbar${r.hot?" hot":""}" title="${esc(r.title)}"><span class="pct">${r.pct}%</span><div class="track"><div class="fill${r.hot?" hot":""}" style="width:${Math.round(r.pct/st.max*100)}%"></div></div><b>${r.count} 条</b></div>`).join("")}
  </div>`;
}
function renderReviews(f="all"){
  let list = REVIEWS;
  if(f==="5") list = list.filter(r=>r.stars===5);
  else if(f==="4") list = list.filter(r=>r.stars===4);
  else if(f!=="all") list = list.filter(r=>r.course===f);
  $("#revGrid").innerHTML = list.map(r=>`
    <div class="rev-card rev">
      <div class="rev-head">
        <div class="ava" data-c="${r.c}">${r.initial}<span class="a-ring"></span></div>
        <div><b>${r.name}<span class="oktag">已购学员</span></b>
        <div style="display:flex;align-items:center;gap:6px">${starsHtml(r.stars).replace(`<small>${r.stars}</small>`,"")}</div></div>
        <time>${r.date}</time>
      </div>
      <p class="rev-text">“${esc(r.text)}”</p>
      <div class="rev-foot"><span>学了《${esc(C(r.course).title.slice(0,14))}…》</span><button data-thanks="${r.id}">${SVG.thumb} 有帮助(${r.like||0})</button></div>
    </div>`).join("");
  revealAll();
}
function bindFilterBtns(){
  const wrap = $("#revFilter");
  if(!wrap) return;
  wrap.addEventListener("click",e=>{
    const b = e.target.closest("button[data-f]"); if(!b) return;
    wrap.querySelectorAll("button").forEach(x=>x.classList.toggle("is-on",x===b));
    renderReviews(b.dataset.f);
  });
}
function faqHtml(list){
  return list.map((f,i)=>`
  <div class="faq-item">
    <button class="faq-q" data-faq="${i}" aria-expanded="false"><span>Q${String(i+1).padStart(2,"0")}</span><b>${f.q}</b><span class="fx"></span></button>
    <div class="faq-a"><div><p>${f.a}</p></div></div>
  </div>`).join("");
}
function bindFaq(boxEl){
  const box = boxEl || $("#faqBox");
  if(!box) return;
  box.addEventListener("click",e=>{
    const q = e.target.closest("[data-faq]"); if(!q) return;
    const item = q.closest(".faq-item");
    const open = item.classList.toggle("open");
    q.setAttribute("aria-expanded",open);
    track(open?"outline_expand":"faq_close",{idx:q.dataset.faq});
    $$(".faq-item", box).forEach(o=>{ if(o!==item) o.classList.remove("open"); });
  });
}
/* 首页数字累计 & 返回顶部按钮等无额外处理 */

/* ---- 全局事件委托 ---- */
document.addEventListener("click",e=>{
  const authBtn = e.target.closest("[data-auth]");
  if(authBtn){ e.preventDefault();
    if(State.user!=="guest"){ nav("/mine"); return; }
    openAuth(authBtn.dataset.auth || "login");
    return;
  }
  const pbGo = e.target.closest("[data-promo]");
  if(pbGo){ e.preventDefault(); State.couponCode="NEW30"; savePersist();
    toast("优惠码 NEW30 已生效，立减 ¥30（演示）","ok"); track("promo_bar_click");
    router(); return; }
  const playBtn = e.target.closest("[data-play]");
  if(playBtn){ e.preventDefault(); e.stopPropagation(); track("hero_try",{course:playBtn.dataset.play}); nav(`/course/${playBtn.dataset.play}?play=1`); return; }
  const catBtn = e.target.closest("[data-cat]");
  if(catBtn){ e.preventDefault(); e.stopPropagation(); track("hero_cat",{cat:catBtn.dataset.cat}); nav(`/courses?cat=${catBtn.dataset.cat}`); return; }
  const fav = e.target.closest("[data-fav]");
  if(fav){
    e.preventDefault(); e.stopPropagation();
    toggleFav(fav.dataset.fav); return;
  }
  const thanks = e.target.closest("[data-thanks]");
  if(thanks){
    toast("感谢反馈，已累计 1 次（演示）","ok");
    return;
  }
  const go = e.target.closest("[data-go]");
  if(go){ e.preventDefault(); const href = go.dataset.go; track("nav_click",{to:href}); nav(href); return; }
  const g2 = e.target.closest("[data-goto]");
  if(g2){ e.preventDefault(); gotoSection(g2.dataset.goto); return; }
  const cat = e.target.closest("[data-cat]");
  if(cat){ e.preventDefault(); nav(`/courses?cat=${cat.dataset.cat}`); return; }
});
function nav(href){
  const clean = href.split("?")[0].replace(/^\/?/, "/");
  if(clean.startsWith("/course/")){ location.hash = "#"+href; return; }
  if(clean.startsWith("/order/")){ location.hash = "#"+href; return; }
  if(clean.startsWith("/")){ location.hash = "#"+href; }
}
function gotoSection(spec){
  const [view,id] = spec.split("#");
  const isHome = parseHash().path === "/";
  if(isHome && id){ const el = $(`#${id}`); if(el){ el.scrollIntoView({behavior:"smooth",block:"start"}); } return; }
  pendingSection = id || null;
  location.hash = "#/";
}
function toggleFav(id){
  // 未登录：拦截并引导登录
  if(State.user==="guest"){
    toast("请先登录，登录后才能收藏课程（演示）","err",3000);
    track("fav_require_login",{course:id});
    openAuth("login");
    return;
  }
  const i = State.favs.indexOf(id);
  if(i>=0){ State.favs.splice(i,1); toast("已取消收藏","info"); }
  else { State.favs.push(id); toast("已加入收藏，可在“我的”查看","ok"); }
  savePersist(); track(i>=0?"fav_remove":"fav_add",{course:id});
  updateFavIcons();
}
function updateFavIcons(){
  $$("[data-fav]").forEach(b=>{
    const on = State.favs.includes(b.dataset.fav);
    b.classList.toggle("is-on",on);
    b.title = on?"取消收藏":"收藏";
  });
}
function afterHomeScroll(){
  // 滚动时展示底部 CTA（首页）
  const bar = $("#stkbar");
  const show = ()=>{ const on=(window.scrollY||document.documentElement.scrollTop) > window.innerHeight*0.9;
    bar.classList.toggle("show",on); document.body.classList.toggle("has-bar",on); };
  window.removeEventListener("scroll", afterHomeScroll._fn);
  afterHomeScroll._fn = show;
  window.addEventListener("scroll", show, {passive:true});
  show();
}

/* Banner 手机预览：4 张干货 slide（方法要点 + 独立 CTA + 浮动数据，不展示课程与价格） */
const SLIDES = [
  {course:"c1", cat:"video", chip:["播放量涨幅","+300%"], chip2:"选题方法开源",
   slogan:"选题系统：不再为「今天发什么」发愁",
   points:["定位公式：你能做什么 / 谁在看 / 凭什么看","45 分钟批量产出 30 个选题","黄金前 3 秒：钩子的 5 种写法"],
   tags:["0 粉适用","新手友好"], concl:"学完：稳定日更 + 稳定播放"},
  {course:"c2", cat:"lead", chip:["待成交咨询","+186 条"], chip2:"获客闭环开源",
   slogan:"获客闭环：把播放量变成询单",
   points:["内容先设计成获客钩子","主页五件套承接流量","私信话术 SOP 层层成交"],
   tags:["企业获客","本地门店"], concl:"学完：每天都有咨询进私域"},
  {course:"c3", cat:"ai", chip:["内容制作成本","-80%"], chip2:"AI 工作流开源",
   slogan:"AI 内容工厂：一个人也能日更",
   points:["提示词库一次批量生成 20 条文案","数字人出镜：1 小时产出一条成片","批量混剪 + 多平台分发展示"],
   tags:["省掉外包","提效 3 倍"], concl:"学完：内容成本直接砍半"},
  {course:"c8", cat:"ec", chip:["月 GMV 提升","60 万"], chip2:"直播间流程开源",
   slogan:"直播间起盘：开播之后怎么留人",
   points:["人货场：开播前的三份清单","开场 5 分钟三种留人钩子","讲解 → 逼单 → 催付的节奏"],
   tags:["从 0 开播","场控适用"], concl:"学完：场均在线稳步破百"},
];
function renderPhoneCards(){
  const track = $("#phoneTrack");
  if(!track) return;
  track.innerHTML = SLIDES.map((s,i)=>{
    const c = C(s.course), cat = CAT(s.cat);
    return `<div class="phone-card" data-go="/course/${c.id}">
      <span class="slide-no">${i+1}</span>
      <div class="phone-cover">
        <span class="tag accent cov-cat" style="height:20px;font-size:10px">${cat.name} · 干货</span>
        <b>${esc(s.slogan)}</b>
        <span class="cov-tip">${SVG.check}3 个步骤 · 可直接落地</span>
        <i class="cov-line"></i>
      </div>
      <div class="phone-info">
        <ul class="phone-points">
          ${s.points.map(p=>`<li><span class="pt-ic">${SVG.check}</span>${esc(p)}</li>`).join("")}
        </ul>
        <div class="phone-tags">${s.tags.map(t=>`<span class="ptag">${t}</span>`).join("")}</div>
        <div class="phone-btm">
          <span class="phone-concl">${esc(s.concl)}</span>
          <div class="phone-acts">
            <button class="pact" data-cat="${s.cat}">看分类</button>
            <button class="pact on" data-play="${c.id}">${SVG.play} 试听方法</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
}
/* Banner 手机预览轮播（5.2s 自动 · 箭头 · 指示点 · 拖动 · 悬停暂停 · 数据随 slide） */
window.__phoneTimer = null;
window.stopPhoneAuto = ()=>{ if(window.__phoneTimer){ clearInterval(window.__phoneTimer); window.__phoneTimer=null; } };
function syncPhoneChips(idx){
  const s = SLIDES[idx]; if(!s) return;
  const a = $("#phoneChipA"), b = $("#phoneChipB");
  const pop = el=>{ el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap");
    requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.remove("swap"))); };
  if(a){ pop(a); a.innerHTML = `<small>${s.chip[0]}</small>${s.chip[1]}`; }
  if(b){ pop(b); b.innerHTML = `<small>${CAT(s.cat).name}干货合集</small>${s.chip2}`; }
}
function initPhoneCarousel(){
  const trackEl = $("#phoneTrack"), dotsBox = $("#phoneDots");
  if(!trackEl || !dotsBox || !trackEl.children.length) return;
  const cards = [...trackEl.children], total = cards.length;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let idx = (parseInt(window.__heroIdx)||0) % total, sx = null, downT = 0, moving = false;
  dotsBox.innerHTML = cards.map((_,i)=>`<button class="phone-dot${i===0?" on":""}" data-i="${i}" aria-label="查看第 ${i+1} 个课程" aria-current="${i===0}"></button>`).join("");
  const sync = ()=>{
    trackEl.style.transform = `translateX(-${idx*100}%)`;
    $$(".phone-dot", dotsBox).forEach((d,i)=>{ d.classList.toggle("on", i===idx); d.setAttribute("aria-current", i===idx ? "true":"false"); });
    syncPhoneChips(idx);
  };
  const go = i=>{ idx = ((i%total)+total)%total; window.__heroIdx = idx; sync(); };
  const pause = ()=>window.stopPhoneAuto();
  const play = ()=>{ window.stopPhoneAuto(); if(reduced) return; window.__phoneTimer = setInterval(()=>go(idx+1), 5200); };
  dotsBox.addEventListener("click",e=>{
    const d = e.target.closest("[data-i]"); if(!d) return;
    pause(); go(+d.dataset.i); play();
    track("hero_card_swipe",{to:d.dataset.i});
  });
  const phoneEl = trackEl.closest(".phone");
  phoneEl.addEventListener("mouseenter",pause);
  phoneEl.addEventListener("mouseleave",play);
  // 指针拖动 + 轻点跳转
  const car = trackEl.parentElement;
  car.setAttribute("tabindex","0");
  car.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"||e.key==="ArrowRight"){ e.preventDefault(); pause(); go(idx + (e.key==="ArrowRight"?1:-1)); play(); track("hero_card_key",{dir:e.key}); }
  });
  car.addEventListener("pointerdown",e=>{ sx=e.clientX; downT=Date.now(); moving=false; trackEl.style.transition="none"; });
  car.addEventListener("pointermove",e=>{
    if(sx==null) return;
    const dx = e.clientX-sx;
    if(Math.abs(dx)>6){ moving=true; trackEl.style.transform=`translateX(calc(-${idx*100}% + ${dx}px))`; }
  });
  const finish = e=>{
    if(sx==null) return;
    const dx = e.clientX - sx, quick = Date.now()-downT < 350;
    trackEl.style.transition="";
    if(moving){
      if(Math.abs(dx) > car.clientWidth*0.16){ go(idx + (dx<0?1:-1)); } else sync();
      if(Math.abs(dx) > 8) track("hero_card_swipe",{dir:dx<0?"next":"prev"});
    } else if(quick){
      const act = e.target.closest("[data-play], [data-cat]");
      if(act){ /* 由全局委托处理 CTA，不在此跳转 */ }
      else { const card = e.target.closest("[data-go]"); if(card){ e.preventDefault(); nav(card.dataset.go); } }
    }
    sx=null;
  };
  car.addEventListener("pointerup",finish);
  car.addEventListener("pointercancel",()=>{ if(sx==null) return; sx=null; trackEl.style.transition=""; sync(); });
  sync(); play();
}

/* ---- 搜索浮层 ---- */
function openSearch(){
  $("#searchov").classList.add("show");
  document.body.style.overflow = "hidden";
  track("page_view",{page:"search"});
  renderSearchSuggest();
  setTimeout(()=>$("#sovInput").focus(),80);
}
function closeSearch(){ $("#searchov").classList.remove("show"); document.body.style.overflow=""; }
function getHistory(){ try{ return JSON.parse(localStorage.getItem("qishi-search")||"[]"); }catch(e){ return []; } }
function recordSearch(q){
  q=(q||"").trim(); if(!q) return;
  try{ let h=getHistory(); h=[q,...h.filter(x=>x!==q)].slice(0,6); localStorage.setItem("qishi-search",JSON.stringify(h)); }catch(e){}
}
function renderSearchSuggest(){
  const hotQ = ["抖音获客","AI 内容","起号","爆款文案","直播间话术","本地生活"];
  const hist = getHistory();
  $("#sovBody").innerHTML = `
    ${hist.length?`<div class="sov-hot" style="margin-bottom:16px"><h4>搜索历史</h4><div style="display:flex;gap:8px;flex-wrap:wrap">${hist.map(q=>`<button class="chip" data-sq="${esc(q)}">${esc(q)}</button>`).join("")}<button class="chip" id="histClear" style="color:var(--t3)">清空</button></div></div>`:""}
    <div class="sov-hot"><h4>热门搜索</h4><div style="display:flex;gap:8px;flex-wrap:wrap">${hotQ.map(q=>`<button class="chip" data-sq="${q}">${q}</button>`).join("")}</div></div>
    <div id="sovRes"></div>`;
  $("#sovBody").querySelectorAll("[data-sq]").forEach(b=>b.addEventListener("click",()=>{ const q=b.dataset.sq; $("#sovInput").value=q; recordSearch(q); doSearch(q); }));
  const hcEl = $("#histClear");
  if(hcEl) hcEl.addEventListener("click",()=>{ try{ localStorage.removeItem("qishi-search"); }catch(e){} renderSearchSuggest(); toast("搜索历史已清空","info"); });
  $("#sovInput").addEventListener("input",()=>{
    const v=$("#sovInput").value; doSearch(v);
    if(v.trim().length>=2) recordSearch(v);
  });
  $("#sovInput").addEventListener("keydown",e=>{
    if(e.key==="Enter"){ const v=$("#sovInput").value; if(v.trim()) recordSearch(v); }
  });
}
function doSearch(q){
  q = (q||"").trim().toLowerCase();
  const resEl = $("#sovRes"); if(!resEl) return;
  if(!q) return resEl.innerHTML = "";
  const list = COURSES.filter(c=>[c.title,c.value,c.desc,...c.tags,CAT(c.cat).name,T(c.teacher).name].join("|").toLowerCase().includes(q));
  resEl.innerHTML = `<h4>搜索结果 · ${list.length} 门课程</h4>` +
    (list.length? `<div class="clist">${list.map(ccardHtml).join("")}</div>` :
    `<div class="state-box empty"><div class="sg">${SVG.search}</div><h3>没有找到“${esc(q)}”</h3><p>换个关键词试试：获客 / AI / 起号 / 话术</p></div>`);
  revealAll(); bindFavBtn();
}

/* ============================================================
   09 · 课程列表（含 Loading / Empty / Error 业务状态）
   ============================================================ */
function renderCourseGrid({q="",cat="all",sort="综合"}){
  let list = COURSES.slice();
  if(cat!=="all") list = list.filter(c=>c.cat===cat);
  if(q) list = list.filter(c=>[c.title,c.value,c.desc,...c.tags,CAT(c.cat).name,T(c.teacher).name].join("|").toLowerCase().includes(q));
  if(sort==="最热") list.sort((a,b)=>b.students-a.students);
  else if(sort==="评分最高") list.sort((a,b)=>b.rating-a.rating);
  else if(sort==="价格最低") list.sort((a,b)=>a.price-b.price);
  else if(sort==="价格最高") list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>Number(a.id.slice(1))-Number(b.id.slice(1)));
  if(!list.length) return `<div class="state-box empty"><div class="sg">${SVG.search}</div><h3>该分类下暂无课程</h3><p>这是演示的「空状态」，可以在 Debug 面板切换状态测试</p><div class="btns"><button class="btn btn-primary" data-go="/courses?cat=all">查看全部课程</button></div></div>`;
  return `<div class="clist">${list.map(ccardHtml).join("")}</div>`;
}
function viewCourses(params={}){
  track("page_view",{page:"courses",...params});
  const state = State.pageState || "normal";
  const q = (params.q||"").toLowerCase();
  const sort = params.sort||"综合";
  const filterOpts = [["all","全部"],...CATEGORIES.map(c=>[c.id,c.name])];
  const chips = filterOpts.map(([id,nm])=>`<button class="chip${(params.cat||"all")===id?" is-on":""}" data-cat="${id}">${nm}</button>`).join("");
  const sortOpts = ["综合","最热","评分最高","价格最低","价格最高"];
  const sel = `<div class="ct-sort"><select id="sortSel">${sortOpts.map(s=>`<option ${s===sort?"selected":""}>${s}</option>`).join("")}</select></div>`;
  const body = state==="normal" ? renderCourseGrid({q,cat:params.cat||"all",sort}) : (
    state==="loading" ? `<div class="clist">${Array(6).fill(`<div class="sk-card"><div class="sk-cover"></div><div class="sk-line w60"></div><div class="sk-line w40"></div></div>`).join("")}</div>`
    : state==="empty" ? `<div class="state-box empty"><div class="sg">${SVG.search}</div><h3>课程暂时下架了</h3><p>Debug 面板把「页面状态」切回 Normal 恢复（演示空状态）</p><div class="btns"><button class="btn btn-primary" data-go="/courses?cat=all">查看全部课程</button></div></div>`
    : `<div class="state-box err"><div class="sg">!</div><h3>课程列表加载失败</h3><p>这是演示的「错误状态」，点击重试或切回 Debug 的 Normal</p><div class="btns"><button class="btn btn-primary" id="retryBtn">重新加载</button></div></div>`);
  mount("#view-root", `
  <div class="page">
    <div class="courses-tools">
      <div class="wrap ct-in">
        <div class="ct-search">${SVG.search}<input class="input" id="ctSearch" type="search" placeholder="搜索课程、老师、分类…" value="${esc(q||"")}"></div>
        <div class="ct-chips">${chips}</div>
        ${sel}
      </div>
    </div>
    ${PROMO_BAR}
    <div class="wrap pagemeta">
      <p class="course-count">共 <b>${COURSES.length}</b> 门课程 · 覆盖 ${CATEGORIES.length} 大课程体系 &nbsp;|&nbsp; ${state==="normal" ? "状态：正常" : (state==="loading"?"状态：加载中（Debug 模拟）":state==="empty"?"状态：空（Debug 模拟）":"状态：错误（Debug 模拟）")}</p>
      ${body}
    </div>
    <div style="height:40px"></div>
  </div>`);
  document.body.classList.add("has-bar");  // 列表页展示底部 CTA
  const bar = $("#stkbar"); bar.classList.add("show");
  setBarCourse(COURSES[0]);
  // 绑定工具
  const inp = $("#ctSearch");
  let t; inp.addEventListener("input",()=>{ clearTimeout(t); t=setTimeout(()=>{
    const base = parseHash(); nav(`/courses?cat=${base.params.cat||"all"}&sort=${sort}&q=${encodeURIComponent(inp.value.trim())}`); },250); });
  const selEl = $("#sortSel");
  if(selEl) selEl.addEventListener("change",()=>{
    const base = parseHash();
    nav(`/courses?cat=${base.params.cat||"all"}&sort=${encodeURIComponent(selEl.value)}${q?`&q=${encodeURIComponent(q)}`:""}`);
  });
  const retry = $("#retryBtn");
  if(retry) retry.addEventListener("click",()=>{ State.pageState="normal"; toast("已恢复为正常状态","ok"); router(); });
  const errReload = $("#errReload");
  if(errReload) errReload.addEventListener("click",()=>{ State.pageState="normal"; router(); });
  revealAll(); countUpAll();
}
/* ============================================================
   10 · 课程详情 + 模拟播放器
   ============================================================ */
function viewDetail(params){
  const c = C(params.id);
  if(!c){ nav("/courses"); return; }
  track("course_view",{course:c.id,title:c.title});
  const t = T(c.teacher), cat = CAT(c.cat), owned = State.purchased.includes(c.id);
  const p = priceInfo(c);
  const lessonTotal = c.outline.reduce((s,o)=>s+o.lessons.length,0);
  const freeTotal = c.outline.reduce((s,o)=>s+o.lessons.filter(l=>l.free||owned).length,0);

  const outline = c.outline.map((o,si)=>`
    <div class="ol-sec" data-os>
      <button class="ol-q" data-otog="${si}" aria-expanded="${si===0}">
        <span class="olno">0${si+1}</span>
        <b>${esc(o.t)}</b>
        <span class="olmeta"><span>${o.lessons.length} 节</span><span>共 ${o.lessons.map(l=>l.dur).map(dd=>{const[m,s]=dd.split(":");return +m;}).reduce((a,b)=>a+b,0)} 分钟</span></span>
        <span class="fx"></span>
      </button>
      <div class="ol-lessons"><div><ul>
        ${o.lessons.map((l,li)=>{
          const free = l.free===1 || owned;
          const playing = li===0&&si===0;
          return `<li class="${free?"is-free":""} ${playing?"is-play":""}" data-play="${si}:${li}" role="button" tabindex="0">
            <span class="lico">${free?SVG.play:SVG.lock}</span>
            <span class="lt"><b>${esc(l.t)}</b><small>${l.dur} · ${free?(owned&&l.free!==1?"购课权益":"免费试听"):"购买解锁"}</small></span>
            ${free?`<span class="lfree">${owned&&l.free!==1?"可学":"试听"}</span>`:`<span class="lfree lock">${SVG.lock} 购买解锁</span>`}
          </li>`;}).join("")}
      </ul></div></div>
    </div>`).join("");

  const related = COURSES.filter(x=>x.id!==c.id && (x.cat===c.cat||x.teacher===c.teacher)).slice(0,4);
  while(related.length<4){ COURSES.forEach(x=>{ if(related.length<4 && !related.includes(x) && x.id!==c.id) related.push(x); }); }

  const revs = REVIEWS.filter(r=>r.course===c.id).slice(0,3);

  const html = `
  <div class="page">
    <div class="dstage">
      <div class="player" id="player" data-course="${c.id}">
        <div class="p-bg"><div class="p-glyph">${t.name[0]}</div><div class="p-eq">${Array(12).fill("<i></i>").join("")}</div></div>
        <div class="p-sub">
          <p data-s="3">如果你的视频发了没人看——问题往往不在剪辑，而在选题。</p>
          <p data-s="16">今天用一个真实账号的案例，拆给你看。</p>
          <p data-s="30">先看这条内容，为什么评论区会有那么多人接话。</p>
          <p data-s="46">同样的选题，我们把钩子换成这五个字。</p>
          <p data-s="62">数据是这样的，你自己感受一下区别。</p>
          <p data-s="76">完整方法，在这门课的第 2 章等你。</p>
        </div>
        <div class="resume-chip" id="resumeChip">${SVG.play}上次学到 <b id="resumeT">00:00</b> 点击续播</div>
        <button class="p-play" id="pPlay">
          <span class="pp">${SVG.play}</span>
          <small>点击试听 · 90 秒片段</small>
        </button>
        <div class="p-tag"><b><i></i>免费试听</b></div>
        <div class="p-tag r"><b>第 01 节 · 节选</b></div>
        <div class="p-banner">
          <div class="pt">${c.en.toUpperCase()} · FREE PREVIEW</div>
          <div class="pd">${esc(c.outline[0].lessons[0].t)}</div>
          <div class="pprl"><span>${fmtN(c.students)} 人正在学</span><span>${c.duration} 小时</span><span>${c.lessons} 节</span></div>
        </div>
        <div class="p-controls">
          <button class="pc-btn" id="pcPlay" aria-label="播放/暂停">${SVG.pause}</button>
          <span class="p-time"><span id="pT">00:00</span> / <span id="pDur">01:30</span></span>
          <div class="p-seek" id="pSeek"><div class="track"><div class="fill" id="pFill"></div></div><div class="knob" id="pKnob"></div></div>
          <button class="pc-btn" id="pcVol" aria-label="声音">${SVG.vol}</button>
          <button class="pc-btn" id="pcFull" aria-label="全屏">${SVG.full}</button>
        </div>
      </div>
    </div>

    <div class="wrap">
      ${PROMO_BAR}
      <div class="detail-wrap">
        <div class="dmain">
          <div class="crumb"><a data-go="/">首页</a><span class="sep">/</span><a data-go="/courses?cat=${c.cat}">${cat.name}</a><span class="sep">/</span><b>${esc(c.title.slice(0,8))}…</b></div>
          <div class="dtitle">
            <h1>${esc(c.title)}</h1>
            <span class="slogan">▸ ${esc(c.slogan)}</span>
            <div class="dmeta">
              <span class="m">${starsHtml(c.rating)}</span>
              <span class="m">${SVG.users}<b>${fmtN(c.students)}</b> 人已学习</span>
              <span class="m">${SVG.video}<b>${c.lessons}</b> 节</span>
              <span class="m">${SVG.clock}<b>${c.duration}</b> 小时</span>
              <span class="m">${c.hot?SVG.fire+"热门":c.new?SVG.sparkle+"新品":""}</span>
            </div>
            <div class="dtags">${c.tags.map(tg=>`<span class="tag soft">${tg}</span>`).join("")}</div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">WHAT · 01</span><h3>你将获得什么</h3></div>
            <ul class="gain">${c.gain.map(g=>`<li>${esc(g)}</li>`).join("")}</ul>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">OUTLINE · 02</span><h3>课程大纲 <span class="tag soft" style="height:24px">${lessonTotal} 节 · ${freeTotal} 节可试听${owned?"（已购全解锁）":""}</span></h3></div>
            <div class="outline" id="outline">${outline}</div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">FOR WHO · 03</span><h3>适合人群</h3></div>
            <div class="who">${c.who.map(w=>`<span class="chip" style="height:auto;padding:11px 16px;border-radius:10px"><b>${esc(w)}</b></span>`).join("")}</div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">PATH · 03.5</span><h3>4 周学完路径</h3></div>
            <div class="path">
              ${[["第 1 周","定方向","明确定位与目标人群"],["第 2 周","跑内容","按方法产出第一批内容"],["第 3 周","看数据","用周报模板复盘迭代"],["第 4 周","做沉淀","把方法固化成自己的 SOP"]].map((s,i)=>`
              <div class="path-step"><span class="pno"><b>0${i+1}</b> · ${s[0]}</span><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join("")}
            </div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">COURSE · 04</span><h3>课程包含</h3></div>
            <div class="perks">
              <div class="perk"><div class="pi">${SVG.video}</div><b>全程高清视频</b><span>手机 / 平板 / 电脑随时看</span></div>
              <div class="perk"><div class="pi">${SVG.refresh}</div><b>更新永久有效</b><span>购买后可一直回看，无次数限制</span></div>
              <div class="perk"><div class="pi">${SVG.down}</div><b>模板文件下载</b><span>SOP / 模板 / 作战表全套交付</span></div>
              <div class="perk"><div class="pi">${SVG.chat}</div><b>班级答疑社群</b><span>购课后可加入，讲师本人答疑（演示）</span></div>
            </div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">MENTOR · 05</span><h3>主讲老师</h3></div>
            <div class="tfeat">
              <div class="tp" style="min-height:250px">
                <span class="tp-ring"></span><span class="tp-init">${t.name[0]}</span>
                <div class="tp-name"><small>${t.quote}</small>${t.name}</div>
              </div>
              <div class="tinfo">
                <h3>${t.name} · ${t.role}</h3>
                <p>${t.exp}</p>
                <div class="tdata">${t.data.map(d=>`<div><b>${d[0]}</b><span>${d[1]}</span></div>`).join("")}</div>
                <p style="font-size:12px;color:var(--t3)">本课程所属分类：${CAT(C(c.id).cat).name} · 该老师共 ${COURSES.filter(x=>x.teacher===t.id).length} 门课</p>
                <div style="margin-top:10px"><a class="btn btn-ghost btn-sm" data-go="/teacher/${t.id}">进入老师主页 →</a></div>
              </div>
            </div>
          </div>

          <div class="dsec">
            <div class="dsec-head"><span class="no">REVIEWS · 06</span><h3>学过的人怎么说</h3></div>
            <div class="rev-grid">${[revs.length?revs:REVIEWS.slice(0,3)].flat().map(r=>`
              <div class="rev-card">
                <div class="rev-head"><div class="ava" data-c="${r.c}">${r.initial}<span class="a-ring"></span></div>
                <div><b>${r.name}<span class="oktag">已购学员</span></b>${starsHtml(r.stars).replace(`<small>${r.stars}</small>`,"")}</div><time>${r.date}</time></div>
                <p class="rev-text">“${esc(r.text)}”</p>
              </div>`).join("")}
            </div>
          </div>

          <div class="dsec" style="max-width:760px">
            <div class="dsec-head"><span class="no">FAQ · 07</span><h3>常见问题</h3></div>
            <div class="faq" id="dFaq">${faqHtml(FAQS.slice(0,3))}</div>
          </div>
        </div>

        <aside class="daside">
          <div class="buycard">
            ${owned ? `
              <div class="bprice"><span class="tag accent" style="height:26px">已开通</span></div>
              <p style="font-size:13px;color:var(--t2);margin-top:12px">本课程已属于你，随时可以开始学习。</p>
              <div class="btns"><button class="btn btn-primary btn-lg" data-go="/mine">开始学习 ${SVG.arrow}</button></div>
              <ul class="perksl"><li>${c.lessons} 节课全部解锁</li><li>支持无限回看</li><li>订单号：${(State.orders.find(o=>o.course===c.id)||{}).no || "查看我的课程"}</li></ul>`
            : `
              <div class="bprice"><span class="now">${p.now}</span><span class="was">${p.was}</span></div>
              ${p.tag?`<div class="bpromo ${p.mode==="flash"?"flash":""}">${p.mode==="flash"?`${SVG.zap}${p.tag} · 限时 ${Math.round(p.save/p.was*100)}% 已开启`:`${SVG.users}${p.tag}`}<span class="cd" id="flashCd">--:--:--</span></div>`:""}
              ${p.extra?`<div class="bpromo">${SVG.ticket}${p.extraLabel}</div>`:""}
              <div class="coupon-in"><input class="input" id="couponIn" placeholder="输入优惠码，如 QISHI50"><button class="btn btn-ghost" id="couponBtn">使用</button></div>
              <div class="coupon-tip">演示优惠码：<b data-fill="QISHI50">QISHI50</b>（立减 ¥50） / <b data-fill="NEW30">NEW30</b></div>
              <div class="bstrip"><div class="row"><span>今日已有 ${Math.floor(c.students/90)} 人加入学习</span><span>已售 74%</span></div><div class="track"><div class="fill" style="width:74%"></div></div></div>
              <div class="btns">
                <button class="btn btn-accent btn-lg" id="buyBtn" data-go="/order/${c.id}" ${State.promo==="flash"?"style='animation:none'":""}>${p.mode==="flash"?SVG.zap+"立即抢购":"立即购买"} · ¥${p.now}</button>
                <button class="btn btn-ghost" id="tryBtn">${SVG.play} 免费试听</button>
              </div>
              <ul class="perksl"><li>7 天无理由退课</li><li>购买后立即开通</li><li>全平台学习 · 永久回看</li></ul>`}
          </div>
        </aside>
      </div>

      <div class="dsec related-head">
        <div class="sec-head"><div class="sec-title"><span class="k">相关推荐 · Related</span><h3 class="h3">猜你喜欢</h3></div></div>
        <div class="clist is-rail">${related.map(ccardHtml).join("")}</div>
      </div>
      <div style="height:30px"></div>
    </div>
  </div>`;

  mount("#view-root", html);
  // 续播提醒（演示记忆）
  const posInit = (()=>{ try{ return parseInt(localStorage.getItem("qishi-pos-"+c.id))||0; }catch(e){ return 0; } })();
  if(posInit>5){
    const rc = $("#resumeChip");
    if(rc){ rc.classList.add("show"); $("#resumeT").textContent = pad2(Math.floor(posInit/60))+":"+pad2(posInit%60);
      rc.addEventListener("click",()=>{ try{ localStorage.removeItem("qishi-pos-"+c.id); }catch(e){} playLesson(c,"0:0",false); }); }
  }
  initPlayer(c);
  bindDetail(c);
  setBarCourse(c, owned);
  if(State.promo==="flash") startFlashCd();
  revealAll();
  // ?play=1 → 进入后自动试听第 1 节（模拟播放器无需真实手势；路由切换时取消）
  if(params.play){ if(window.__autoPlay) clearTimeout(window.__autoPlay);
    window.__autoPlay = setTimeout(()=>{ window.__autoPlay=null; const p=$("#player"); if(p){ p.scrollIntoView({behavior:"smooth",block:"center"}); playLesson(c,"0:0",false); } },700); }
}
function setBarCourse(c, owned=false){
  const p = priceInfo(c);
  $("#sbPrice").innerHTML = `<b>¥${p.now}</b>`;
  $("#sbWas").textContent = owned ? "" : "¥"+p.was;
  $("#sbTip").textContent = owned ? "已购买，可开始学习" : (p.tag|| (p.save?`立省 ¥${p.save}`:"价格透明"));
  const bar = $("#stkbar");
  bar.classList.add("show");
  const btn = $("#sbBuy");
  btn.innerHTML = owned ? "开始学习" : (p.mode==="flash" ? SVG.zap+"立即抢购" : "立即购买");
  btn.classList.toggle("btn-accent", !owned);
  btn.classList.toggle("btn-primary", !!owned);
}
function bindDetail(c){
  const owned = State.purchased.includes(c.id);
  let tapCount = 0, hintShown = false;
  const maybeHint = ()=>{
    tapCount++;
    if(hintShown || tapCount<3) return;
    hintShown = true;
    const bar = document.createElement("div"); bar.className="hint-bar";
    bar.innerHTML = `已浏览 ${tapCount} 处课程内容：先试听再决定，90 秒感受讲法<button class="btn btn-accent btn-sm" id="hintTry">去试听</button>`;
    document.body.appendChild(bar);
    setTimeout(()=>bar.classList.add("show"),40);
    const hide = ()=>{ bar.classList.remove("show"); setTimeout(()=>bar.remove(),320); };
    bar.querySelector("#hintTry").addEventListener("click",()=>{ hide(); playLesson(c,"0:0",true); });
    setTimeout(hide,9000);
  };
  // 大纲折叠 / 试听计数 + 交互
  const ol = $("#outline");
  ol.addEventListener("click",e=>{
    maybeHint();
    const tog = e.target.closest("[data-otog]");
    if(tog){ const sec = tog.closest(".ol-sec"); const op = sec.classList.toggle("open"); tog.setAttribute("aria-expanded",op);
      track(op?"outline_expand":"outline_collapse",{course:c.id,sec:tog.dataset.otog}); return; }
    const li = e.target.closest("[data-play]");
    if(li){ playLesson(c, li.dataset.play); return; }
  });
  // 播放器控制（已由 viewDetail → initPlayer 统一初始化，此处不再重复绑定）
  // 优惠券
  const cin = $("#couponIn"), cbtn = $("#couponBtn");
  if(cbtn){ cbtn.addEventListener("click",()=>{ if(applyCoupon(cin.value.trim(), c)) router(); }); }
  $("#couponIn") && $("#couponIn").addEventListener("keydown",e=>{ if(e.key==="Enter" && applyCoupon(cin.value.trim(), c)) router(); });
  $$("[data-fill]").forEach(b=>b.addEventListener("click",()=>{ cin.value = b.dataset.fill; cin.focus(); }));
  // 试听按钮（侧栏）
  const tb = $("#tryBtn");
  if(tb) tb.addEventListener("click",()=>{ playLesson(c,"0:0",true); });
  // FAQ
  const br = $("#dFaq"); if(br) br.addEventListener("click",e=>{
    const q = e.target.closest("[data-faq]"); if(!q) return;
    const item = q.closest(".faq-item"); const op = item.classList.toggle("open");
    q.setAttribute("aria-expanded",op);
    $$(".faq-item",br).forEach(o=>{ if(o!==item) o.classList.remove("open"); });
  });
  // 收藏按钮（若侧栏无收藏则跳过）
  document.body.classList.add("has-bar");
}
/* ---- 播放器核心（Mock） ---- */
const SUB_LINES = [
  {at:3, t:"如果你的视频发了没人看——问题往往不在剪辑，而在选题。"},
  {at:16,t:"今天用一个真实账号的案例，拆给你看。"},
  {at:30,t:"先看这条内容，为什么评论区会有那么多人接话。"},
  {at:46,t:"同样的选题，我们把钩子换成这五个字。"},
  {at:62,t:"数据是这样的，你自己感受一下区别。"},
  {at:76,t:"完整方法，在这门课的第 2 章等你。"},
];
const PlayerSt = {raf:0, t:0, dur:90, playing:false, muted:false, pct:0, c:null};
function saveCoursePos(id){ try{ if(PlayerSt.t>4) localStorage.setItem("qishi-pos-"+id, String(Math.floor(PlayerSt.t))); }catch(e){} }
function stopPlayer(){
  if(PlayerSt.raf){ cancelAnimationFrame(PlayerSt.raf); PlayerSt.raf=0; }
  if(PlayerSt.playing && PlayerSt.c) saveCoursePos(PlayerSt.c.id);
  PlayerSt.playing = false;
}
function tickPlayer(){
  PlayerSt.t = Math.min(PlayerSt.dur, PlayerSt.t + (1/30));
  paintPlayer();
  if(PlayerSt.t >= PlayerSt.dur){ finishPlayer(); return; }
  PlayerSt.raf = requestAnimationFrame(tickPlayer);
}
function paintPlayer(){
  const pct = PlayerSt.t/PlayerSt.dur*100;
  const f = $("#pFill"), k = $("#pKnob");
  if(f){ f.style.width = pct+"%"; k && (k.style.left = pct+"%"); }
  const tEl = $("#pT"); tEl && (tEl.textContent = pad2(Math.floor(PlayerSt.t/60))+":"+ pad2(Math.floor(PlayerSt.t%60)));
  let cur=-1;
  SUB_LINES.forEach((s,i)=>{ if(PlayerSt.t>=s.at) cur=i; });
  $$("#player .p-sub p").forEach((p,i)=>{ p.classList.toggle("on",i===cur&&PlayerSt.t<s.at+6); p.classList.toggle("off",i<cur); });
}
function playLesson(course, key, forceScroll){
  const [si,li] = key.split(":").map(Number);
  const lesson = course.outline[si].lessons[li];
  const can = lesson.free===1 || State.purchased.includes(course.id);
  if(!can){ openLockModal(course); return; }
  if(forceScroll){ const el = $("#player"); if(el) el.scrollIntoView({behavior:"smooth",block:"center"}); }
  // 更新课名
  const bd = $(".p-banner .pd"); if(bd) bd.textContent = lesson.t;
  $(".p-tag.r b") && ($(".p-tag.r b").textContent = `第 ${String(li+1).padStart(2,"0")} 节 · ${can&&si>0?"已购权益":""}`.trim());
  track("video_play",{course:course.id,lesson:lesson.t});
  PlayerSt.c = course; PlayerSt.dur = 90; PlayerSt.t = 0;
  PlayerSt.playing = true;
  const pl=$("#player"); if(pl){ pl.classList.add("playing"); const pp=$("#pPlay"); pp && pp.classList.add("hide"); }
  paintPlayer();
  PlayerSt.raf && cancelAnimationFrame(PlayerSt.raf);
  PlayerSt.raf = requestAnimationFrame(tickPlayer);
}
function finishPlayer(){
  stopPlayer();
  $("#player") && $("#player").classList.remove("playing");
  track("video_complete",{course:PlayerSt.c?PlayerSt.c.id:""});
  toast("试听结束 · 精彩内容在第 2 章（演示）","info",3000);
}
let __keyBound = false;
function initPlayer(c){ initPlayerControls(c); }
function initPlayerControls(c){
  const playBtn = $("#pcPlay"), start = $("#pPlay"), seek = $("#pSeek"), vol = $("#pcVol"), full = $("#pcFull");
  const togglePlay = ()=>{
    if(!PlayerSt.playing){ if(PlayerSt.t>=PlayerSt.dur) PlayerSt.t=0; PlayerSt.playing=true; $("#player").classList.add("playing"); $("#pPlay").classList.add("hide");
      PlayerSt.raf = requestAnimationFrame(tickPlayer);
    } else { stopPlayer(); $("#player").classList.remove("playing"); }
  };
  start && start.addEventListener("click",e=>{ e.stopPropagation(); togglePlay(); });
  playBtn && playBtn.addEventListener("click",()=>togglePlay());
  if(seek){
    seek.addEventListener("click",e=>{
      const r = seek.getBoundingClientRect();
      const pct = Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));
      PlayerSt.t = pct*PlayerSt.dur;
      if(!PlayerSt.playing){ $("#player").classList.add("playing"); $("#pPlay").classList.add("hide"); PlayerSt.playing=true; PlayerSt.raf = requestAnimationFrame(tickPlayer); }
      paintPlayer();
    });
  }
  vol && vol.addEventListener("click",()=>{ PlayerSt.muted=!PlayerSt.muted; vol.style.opacity=PlayerSt.muted?".4":"1"; toast(PlayerSt.muted?"已静音（演示）":"声音已开启（演示）","info"); });
  full && full.addEventListener("click",()=>{ const pl=$("#player"); if(!pl) return; if(document.fullscreenElement){ document.exitFullscreen&&document.exitFullscreen(); } else { pl.requestFullscreen&&pl.requestFullscreen().catch(()=>toast("当前环境不支持全屏","err")); } });
  // 键盘空格暂停（只绑定一次）
  if(!__keyBound){ __keyBound = true;
    document.addEventListener("keydown",function hk(e){ if(e.code==="Space" && $("#player")){ const tag=document.activeElement&&document.activeElement.tagName; if(tag!=="INPUT"&&tag!=="TEXTAREA"){ e.preventDefault(); const btn=$("#pcPlay"); btn&&btn.click(); } } });
  }
  $(".p-time") && ($("#pDur").textContent = "01:30");
}
function openLockModal(course){
  const p = priceInfo(course);
  modal(`
    <div class="modal-head"><b>试听已结束</b><button class="modal-x" data-close aria-label="关闭">${SVG.x}</button></div>
    <div class="modal-body">
      <div class="mlock">
        <div class="lg">${SVG.lock}</div>
        <h4>购买后解锁全部 ${course.lessons} 节课</h4>
        <p>当前仅开放第 1 节免费试听。<br>全课含 ${course.lessons} 节视频、模板文件与答疑权益。</p>
        <div class="course-tag"><span class="tag accent">${
          State.promo==="flash"?SVG.zap+"限时特惠":State.promo==="group"?SVG.users+"2 人拼团":p.save>0?`限时立省 ¥${p.save}`:"首购优惠"
        }</span></div>
        <div class="btns" style="width:100%;margin-top:10px">
          <button class="btn btn-accent btn-lg btn-block" data-go="/order/${course.id}">立即购买 · ¥${p.now}</button>
        </div>
        <p style="font-size:11.5px;color:var(--t3)">7 天无理由退课 · 支付成功后即刻开通（演示）</p>
      </div>
    </div>`);
}
/* ============================================================
   11 · 订单确认
   ============================================================ */
let OrderCtx = null;
function viewOrder(params){
  const c = C(params.id);
  if(!c) return nav("/courses");
  track("order_create",{course:c.id});
  if(State.purchased.includes(c.id)){ toast("该课程已购买，直接进入学习","info"); return nav("/mine"); }
  const p = priceInfo(c);
  const t = T(c.teacher), cat = CAT(c.cat);
  const payMethods = [
    {k:"wx",name:"微信支付",sub:"推荐 · 已装微信用户",ic:"wx",t:"微"},
    {k:"ali",name:"支付宝",sub:"可用于余额、花呗",ic:"ali",t:"支"},
    {k:"card",name:"模拟银行卡",sub:"仅原型演示，不影响体验",ic:"card",t:"卡"},
  ];
  const html = `
  <div class="page-narrow">
    ${PROMO_BAR}
    <div class="crumb"><a data-go="/">首页</a><span class="sep">/</span><a data-go="/course/${c.id}">${esc(c.title.slice(0,10))}…</a><span class="sep">/</span><b>确认订单</b></div>
    <div class="order-card">
      <div class="oc-head"><b>确认订单</b><span class="ocstep">STEP 1 / 3</span></div>
      <div class="oc-row">
        <div class="oc-course">
          ${coverMini(c)}
          <div class="ocm"><b>${esc(c.title)}</b><p>${t.name} 主讲 · ${cat.name} · ${c.lessons} 节课程</p><span class="course-tag"><span class="tag soft">${c.hot?"热门":c.new?"新品":"课程"}</span><span class="tag soft">永久回看</span></span></div>
        </div>
      </div>
      <div class="oc-row">
        <h4>价格明细</h4>
        <div class="prow"><span>课程原价</span><b>¥${p.was}</b></div>
        ${p.mode==="flash"?`<div class="prow hot"><span>${SVG.zap}限时特惠（82 折）</span><b class="minus">-¥${p.was-p.price}</b></div>`:""}
        ${p.mode==="group"?`<div class="prow hot"><span>${SVG.users}2 人拼团价</span><b class="minus">-¥${p.was-p.price}</b></div>`:""}
        ${State.couponCode&&p.extra?`<div class="prow"><span>优惠券（${State.couponCode}）</span><b class="minus">-¥${p.extra}</b></div>`:""}
        <div class="prow"><span>数量</span><b>×1</b></div>
        <div class="prow total"><span>实付金额</span><b>¥${p.now}</b></div>
      </div>
      <div class="oc-row">
        <h4>优惠券</h4>
        <div class="coupon-row">
          <input class="input" id="ordCoupon" placeholder="输入优惠码，如 QISHI50" value="${State.couponCode?esc(State.couponCode):""}" ${State.couponCode?'disabled':''}>
          <button class="btn btn-ghost" id="ordCouponBtn">${State.couponCode?"已使用":"使用"}</button>
        </div>
        ${State.couponCode
          ? `<div class="coupon-tip">已生效优惠码 <b>${esc(State.couponCode)}</b>，立减 ¥${p.extra||0} · <b style="color:var(--err)" data-rmcous>移除</b></div>`
          : `<div class="coupon-tip">演示码：<b data-fill2="QISHI50">QISHI50</b> 立减 ¥50 · <b data-fill2="NEW30">NEW30</b> 立减 ¥30</div>`}
      </div>
      <div class="oc-row">
        <h4>支付方式</h4>
        ${payMethods.map(m=>`<div class="payrow" data-pay="${m.k}"><div class="payic ${m.ic}">${m.t}</div><div><b>${m.name}</b><p>${m.sub}</p></div><span class="radio"></span></div>`).join("")}
      </div>
      <div class="order-submit">
        <div class="total-b"><small>实付</small><b>${p.now}</b></div>
        <button class="btn btn-accent btn-lg" id="payBtn">确认支付 · ¥${p.now}</button>
      </div>
      <div class="oc-row" style="display:flex;align-items:flex-start;gap:10px">
        <label class="ck"><input type="checkbox" id="agree" checked><span class="bx">${SVG.check}</span></label>
        <span style="font-size:12px;color:var(--t3);line-height:1.7">我已阅读并同意《购买须知》：虚拟课程一经开通不支持退换（演示规则）；付款为模拟支付，不会产生真实扣款。</span>
      </div>
    </div>
  </div>`;
  mount("#view-root", html);
  document.body.classList.add("has-bar");
  const bar = $("#stkbar"); bar.classList.add("show");
  setBarCourse(c);
  $$("[data-pay]").forEach(r=>r.addEventListener("click",()=>{ $$("[data-pay]").forEach(x=>x.classList.toggle("is-on",x===r)); }));
  $$("[data-pay]")[0].classList.add("is-on");
  const btn = $("#payBtn"), ckb = $("#agree"), couBtn=$("#ordCouponBtn");
  const setBtn = ()=> btn.classList.toggle("is-disabled", !ckb.checked);
  ckb.addEventListener("change",setBtn); setBtn();
  btn.addEventListener("click",e=>{
    if(!ckb.checked){ toast("请先勾选《购买须知》","err"); return; }
    e.preventDefault();
    btn.classList.add("is-loading");
    track("payment_click",{course:c.id,method:($("[data-pay].is-on")||{}).dataset&&$("[data-pay].is-on").dataset.pay});
    OrderCtx = {course:c, now:p.now, method:($("[data-pay].is-on")||{}).dataset?$("[data-pay].is-on").dataset.pay:"wx"};
    setTimeout(()=>nav("/pay/"+c.id),1100);
  });
  couBtn && couBtn.addEventListener("click",()=>{ if(State.couponCode) return; const v=$("#ordCoupon").value.trim(); if(applyCoupon(v,c)){ router(); } });
  $$("[data-fill2]").forEach(b=>b.addEventListener("click",()=>{ const v=b.dataset.fill2; if(applyCoupon(v,c)) router(); }));
  const rmc=$("[data-rmcous]");
  if(rmc) rmc.addEventListener("click",()=>{ State.couponCode=""; savePersist(); toast("优惠券已移除","info"); router(); });
  revealAll();
}

/* ============================================================
   12 · 模拟支付
   ============================================================ */
function viewPay(params){
  const c = C(params.id) || (OrderCtx&&OrderCtx.course);
  if(!c || !OrderCtx){ toast("订单信息缺失，请重新下单","err"); return nav("/courses"); }
  track("page_view",{page:"pay"});
  const amt = OrderCtx.now;
  const payName = {wx:"微信支付",ali:"支付宝",card:"模拟银行卡"}[OrderCtx.method]||"模拟支付";
  let failed = false;
  const box = `
  <div class="page" style="display:flex;align-items:center;justify-content:center">
    <div class="pay-screen" id="pay-screen">
      <div class="pay-mask">${SVG.shield.replace('stroke-width="1.7"','stroke-width="1.7"')}</div>
      <h2>正在${payName}中…</h2>
      <div class="amount">¥${amt}</div>
      <p>正在拉起${payName}（演示流程） · 请勿关闭页面</p>
      <div class="paysub"><span>${esc(c.title.slice(0,16))}…</span><span>·</span><span>订单号 ${State.lastOrder?State.lastOrder.no:"DS"+Date.now().toString().slice(-9)}</span></div>
      <button class="btn btn-ghost btn-sm" data-go="/order/${c.id}" style="margin-top:24px">返回订单重新选择</button>
      <div class="pay-fail" id="payFail">模拟支付失败（异常路径）</div>
    </div>
  </div>`;
  mount("#view-root", box);
  document.body.classList.remove("has-bar");
  $("#stkbar").classList.remove("show");
  let timer = setTimeout(()=>paySucceed(c), 2400);
  const failEl = $("#payFail");
  failEl.addEventListener("click",()=>{
    clearTimeout(timer);
    toast("支付失败：余额不足（模拟异常路径）","err",3000);
    track("payment_fail",{course:c.id});
    failEl.remove();
    $("#pay-screen") && ($("#pay-screen").innerHTML = `
      <div class="state-box err" style="max-width:420px">
        <div class="sg">!</div><h3>支付未完成</h3>
        <p>这是模拟的「失败状态」。余额不足或支付超时会走到这里，可重试或更换支付方式。</p>
        <div class="btns" style="justify-content:center">
          <button class="btn btn-primary" id="repay">重新支付</button>
          <button class="btn btn-ghost" data-go="/order/${c.id}">返回订单</button>
        </div>
      </div>`);
    const ry=$("#repay"); if(ry) ry.addEventListener("click",()=>{ toast("重新发起支付（演示）","ok"); viewPay({id:c.id}); });
  });
}
function paySucceed(c){
  track("payment_success",{course:c.id});
  if(!State.purchased.includes(c.id)) State.purchased.push(c.id);
  State.user = "purchased";
  const no = "DS2026"+String(Math.floor(Math.random()*9000)+1000)+String(Math.floor(Math.random()*90)+10);
  const ord = {no, course:c.id, title:c.title, amount:OrderCtx?OrderCtx.now:c.price, method:OrderCtx?OrderCtx.method:"wx", time:new Date().toLocaleString("zh-CN"), status:"支付成功", date:new Date().toISOString().slice(0,10)};
  State.lastOrder = ord;
  State.orders.unshift(ord);
  savePersist();
  location.hash = "#/success";
}

/* ============================================================
   13 · 支付成功
   ============================================================ */
function viewSuccess(){
  track("page_view",{page:"success"});
  const o = State.lastOrder;
  const c = o?C(o.course):COURSES[0];
  const html = `
  <div class="page"><div class="okp">
    <div class="okp-in">
      <div class="stamp">${SVG.check}<small>PAID</small></div>
      <h2>支付成功，课程已到账</h2>
      <p class="sub">「${esc(c.title)}」已开通 · 全部 ${c.lessons} 节课即刻可学<br>现在就按自己的节奏开始吧。</p>
      ${o?`<div class="okcard">
        <div class="row"><span>订单号</span><b class="bigno">${o.no}</b></div>
        <div class="row"><span>课程</span><b>${esc(o.title.slice(0,20))}…</b></div>
        <div class="row"><span>实付金额</span><b>¥${o.amount}</b></div>
        <div class="row"><span>支付方式</span><b>${{wx:"微信支付",ali:"支付宝",card:"模拟银行卡"}[o.method]||"模拟支付"}</b></div>
        <div class="row"><span>支付时间</span><b>${o.time}</b></div>
      </div>`:""}
      <div class="oksteps">
        <span><i></i>下单</span><span><i></i>支付</span><span><i></i>开通课程</span><span><i></i>开始学习</span>
      </div>
      <div class="share-row">
        <div class="tab"><b>红包得券</b><span>把课程分享给朋友，ta 购买后你得 ¥20 学习券（演示）</span></div>
        <div class="share-acts">
          <button class="share-act wx" data-share="wechat">${SVG.chat}微信好友</button>
          <button class="share-act qq" data-share="moments">${SVG.user}朋友圈</button>
          <button class="share-act" data-share="copy">${SVG.doc}复制专属链接</button>
        </div>
      </div>
      <div class="btns">
        <button class="btn btn-accent btn-lg" data-go="/mine">开始学习 ${SVG.arrow}</button>
        <button class="btn btn-ghost" data-go="/">返回首页</button>
      </div>
      <p style="font-size:11.5px;color:var(--t3);margin-top:18px">7 天内学习进度未超 20% 可申请退款（演示规则）</p>
    </div>
  </div></div>`;
  mount("#view-root", html);
  document.body.classList.remove("has-bar");
  $("#stkbar").classList.remove("show");
  // 模拟“到账”动画
  setTimeout(()=>{ const s=$(".okp .stamp"); s && s.classList.add("pulse"); },100);
  // 分享得券（P2 分销演示）
  $$("[data-share]").forEach(b=>b.addEventListener("click",()=>{
    track("invite_share",{via:b.dataset.share});
    if(b.dataset.share==="copy"){ try{ navigator.clipboard&&navigator.clipboard.writeText(location.href.split("#")[0]+"#/course/"+c.id+"?invite=demo"); }catch(e){} }
    toast("已生成专属邀请链接（演示：好友购课返 ¥20 学习券）","ok",3400);
  }));
}

/* ============================================================
   14 · 我的学习
   ============================================================ */
function viewMine(){
  track("page_view",{page:"mine"});
  if(State.user==="guest"){ openLogin("登录后可查看我的课程与收藏"); return; }
  const purchased = COURSES.filter(cc=>State.purchased.includes(cc.id));
  const favs = COURSES.filter(cc=>State.favs.includes(cc.id));
  const html = `
  <div class="page">
    <div class="mine-head">
      <div class="wrap mine-in">
        <div class="ava" data-c="${State.user==="purchased"?"1":"3"}">${esc(State.userName.slice(0,1))}<span class="a-ring"></span></div>
        <div><h2>${esc(State.userName)}</h2><p>${State.user==="purchased"?"成长型学员 · 已开通购课权益":"来自抖音 · 演示账号"}</p></div>
        <div class="mine-stats">
          <div><b>${purchased.length}</b><span>已购课程</span></div>
          <div><b>${favs.length}</b><span>收藏</span></div>
          <div><b>${State.orders.length}</b><span>订单</span></div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="mine-tabs">
        <button class="chip is-on" data-mtab="1">我的课程</button>
        <button class="chip" data-mtab="2">收藏</button>
        <button class="chip" data-mtab="3">订单</button>
      </div>
      <div id="mineBox"></div>
    </div>
  </div>`;
  mount("#view-root", html);
  document.body.classList.remove("has-bar");
  $("#stkbar").classList.remove("show");
  const renderTab = id=>{
    const box = $("#mineBox");
    if(id==="1") box.innerHTML = purchased.length
      ? `<div class="clist">${purchased.map(ccardHtml).join("")}</div><p style="font-size:12px;color:var(--t3);margin-top:14px">已购课程全部解锁，含后续更新与回看。</p>`
      : `<div class="state-box empty"><div class="sg">${SVG.grad}</div><h3>还没有已购课程</h3><p>先去热门课程逛逛，找到适合你的一套方法论</p><div class="btns"><button class="btn btn-primary" data-go="/courses">去选课</button></div></div>`;
    else if(id==="2") box.innerHTML = (favs.length>=2?`<div class="mine-tip">${SVG.ticket}已收藏 <b>${favs.length}</b> 门课程，打包下单更划算（演示）<button class="btn btn-primary btn-sm" id="favCheckout">去打包结算</button></div>`:"")
      + (favs.length
      ? `<div class="clist">${favs.map(ccardHtml).join("")}</div>`
      : `<div class="state-box empty"><div class="sg">${SVG.heart}</div><h3>还没有收藏</h3><p>在课程卡片右上角点一下收藏，回来就能看到</p><div class="btns"><button class="btn btn-primary" data-go="/courses">浏览课程</button></div></div>`);
    const fco = $("#favCheckout");
    if(fco) fco.addEventListener("click",()=>{
      const first = COURSES.find(cc=>State.favs.includes(cc.id) && !State.purchased.includes(cc.id));
      if(first) nav("/order/"+first.id); else { toast("暂无可结算课程，先去收藏几门吧","info"); nav("/courses"); }
    });
    if(id==="3") box.innerHTML = State.orders.length
      ? `<div class="mt-orders">${State.orders.map(o=>`<div class="mt-order">${coverMini(C(o.course))}<div><b>${esc(o.title)}</b><p>订单号 ${o.no} · ${o.time}</p></div><span class="ostat paid">${o.status}</span></div>`).join("")}</div>`
      : `<div class="state-box empty"><div class="sg">${SVG.doc}</div><h3>暂无订单记录</h3><p>完成一次模拟购买后，这里会出现订单。</p></div>`;
    revealAll();
  };
  $$("[data-mtab]").forEach(b=>b.addEventListener("click",()=>{ $$("[data-mtab]").forEach(x=>x.classList.toggle("is-on",x===b)); renderTab(b.dataset.mtab); }));
  renderTab("1");
}

function viewTeacher(params){
  const t = T(params.id);
  if(!t) return nav("/courses");
  track("teacher_view",{id:t.id});
  const list = COURSES.filter(c=>c.teacher===t.id);
  const html = `
  <div class="page">
    <div class="wrap" style="padding:calc(var(--hdr-h) + 26px) 0 64px">
      <div class="crumb"><a data-go="/">首页</a><span class="sep">/</span><b>实战导师</b><span class="sep">/</span><b>${t.name}</b></div>
      <div class="tfeat">
        <div class="tp" style="min-height:260px">
          <span class="tp-ring"></span><span class="tp-init">${t.name[0]}</span>
          <div class="tp-name"><small>${t.quote}</small>${t.name}</div>
        </div>
        <div class="tinfo">
          <h3>${t.name} · ${t.role}</h3>
          <span class="trole"><span class="dot9"></span>${t.role}</span>
          <p>${t.exp}</p>
          <div class="tdata">${t.data.map(d=>`<div><b>${d[0]}</b><span>${d[1]}</span></div>`).join("")}</div>
          <p style="font-size:12px;color:var(--t3)">代表案例（演示数据）</p>
          <div class="tcases">${t.cases.map(cc=>`<div class="tcase"><b>${cc[0]}</b><span>${cc[1]}</span></div>`).join("")}</div>
          <div class="tinfo-cta" style="margin-top:14px">
            ${list[0]?`<button class="btn btn-accent" data-go="/course/${list[0].id}">看他/她的课 · ¥${priceInfo(list[0]).now}</button>`:""}
          </div>
        </div>
      </div>
      <div class="dsec" style="margin-top:36px">
        <div class="dsec-head"><span class="no">COURSES</span><h3>${t.name} 的课程（${list.length} 门）</h3></div>
        <div class="clist">${list.map(ccardHtml).join("")}</div>
      </div>
      <div class="dsec">
        <div class="dsec-head"><span class="no">MORE</span><h3>其他实战导师</h3></div>
        <div class="tgrid">${TEACHERS.filter(x=>x.id!==t.id).map(tt=>`
          <div class="trow rev">
            <div class="ava" data-c="${tt.c}">${tt.name[0]}<span class="a-ring"></span></div>
            <div class="tmeta" style="min-width:0"><b>${tt.name} · ${tt.role.split("·")[0].trim()}</b><p>${tt.exp}</p></div>
            <button class="btn btn-sm btn-ghost tgo" data-go="/teacher/${tt.id}">了解老师 →</button>
          </div>`).join("")}</div>
      </div>
    </div>
  </div>`;
  mount("#view-root", html);
  document.body.classList.remove("has-bar");
  $("#stkbar").classList.remove("show");
  revealAll(); countUpAll();
}

/* ============================================================
   14.5 · 帮助中心 / 客服
   ============================================================ */
function viewHelp(){
  track("page_view",{page:"help"});
  const html = `
  <div class="page">
    <div class="page-narrow">
      <div class="crumb"><a data-go="/">首页</a><span class="sep">/</span><b>帮助中心</b></div>
      <h1 class="h2">帮助中心</h1>
      <p class="lead" style="margin-top:10px">购课、学习、退课，任何问题都能在这里解决。</p>
      <div class="help-cta">
        <div class="help-card"><div class="hc-i">${SVG.chat}</div><b>在线客服</b><p>9:00–22:00 在线，平均 1 分钟内响应</p><button class="btn btn-accent btn-sm" id="chatOpen" style="margin-top:auto">立即咨询</button></div>
        <div class="help-card"><div class="hc-i">${SVG.phone}</div><b>客服热线</b><p>400-123-4567（演示）<br>全年无休 24 小时</p><a class="btn btn-ghost btn-sm" style="margin-top:auto" href="tel:4001234567">拨打热线</a></div>
        <div class="help-card"><div class="hc-i">${SVG.doc}</div><b>工单 / 邮件</b><p>service@qishi.growth（演示）<br>48 小时内回复</p><button class="btn btn-ghost btn-sm" style="margin-top:auto" data-mail="mail">发送邮件</button></div>
      </div>
      <div class="help-grid">
        <div class="help-panel">
          <h3>${SVG.book}常见问题</h3>
          <div class="faq" id="hFaq"></div>
        </div>
        <div class="help-panel">
          <h3>${SVG.refresh}申请退课</h3>
          <p style="font-size:12.5px;color:var(--t2);margin:-6px 0 14px;line-height:1.7">购买后 7 天内、学习进度未超 20%，可无理由申请退款（演示规则）。</p>
          <div class="field" style="gap:9px">
            <label>申请课程</label>
            <select class="input" id="rfCourse" style="appearance:auto">${COURSES.map(c=>`<option value="${c.id}">${esc(c.title)} ¥${c.price}</option>`).join("")}</select>
            <label>退款原因</label>
            <textarea class="input" id="rfReason" placeholder="请描述申请退课的原因，方便我们持续改进课程（演示）…" maxlength="300"></textarea>
            <label class="ck"><input type="checkbox" id="rfAgree"><span class="bx">${SVG.check}</span><span>我已确认：退款将按实付金额原路退回（演示）</span></label>
            <button class="btn btn-danger btn-lg" id="rfBtn">提交退课申请</button>
          </div>
        </div>
      </div>
      <div class="help-note"><b>退课规则（演示）</b><br>① 支付成功起 7 天内可申请；② 学习进度 ≤ 20% 全额退款；③ 客服确认后 1–3 个工作日原路退回；④ 优惠券、活动价按实付金额核算。申请进度可在「我的 - 订单」中查看。</div>
    </div>
  </div>`;
  mount("#view-root", html);
  document.body.classList.remove("has-bar");
  $("#stkbar").classList.remove("show");
  $("#hFaq").innerHTML = faqHtml(FAQS);
  bindFaq($("#hFaq"));
  $("#chatOpen").addEventListener("click",openChat);
  $$("[data-mail]").forEach(b=>b.addEventListener("click",()=>{ track("help_mail"); toast("已打开邮件客户端（演示）：service@qishi.growth","info",3000); }));
  $("#rfBtn").addEventListener("click",()=>{
    if(!$("#rfAgree").checked) return toast("请先勾选退款确认","err");
    if($("#rfReason").value.trim().length<4) return toast("请简单描述退款原因（4 字以上）","err");
    const b=$("#rfBtn"); b.classList.add("is-loading");
    setTimeout(()=>{ b.classList.remove("is-loading");
      window.__lastTicket = "TK"+String(Date.now()).slice(-6);
      track("refund_request",{course:$("#rfCourse").value,ticket:window.__lastTicket});
      toast(`退课申请已提交，工单号 ${window.__lastTicket}（演示）`,"ok",3800);
      $("#rfReason").value=""; $("#rfAgree").checked=false;
      const oldRec = $(".ticket-receipt"); if(oldRec) oldRec.remove();
      const rec = document.createElement("div"); rec.className="ticket-receipt";
      rec.innerHTML = `<b>工单号：${window.__lastTicket}</b> 已进入客服队列，1–3 个工作日处理；进度可在「我的 - 订单」查看。`;
      const field = $("#rfBtn").closest(".field"); if(field) field.appendChild(rec);
    },900);
  });
  revealAll();
}
function openChat(){
  modal(`
    <div class="modal-head"><b>起势客服中心</b><span style="background:var(--ok);color:#fff;font-size:10px;font-weight:800;padding:2px 8px;border-radius:3px">在线</span><button class="modal-x" data-close aria-label="关闭">${SVG.x}</button></div>
    <div class="modal-body">
      <div class="chat-box" id="chatBox">
        <div class="msg bot">你好，我是起势客服「小势」，退课、发票、课程问题都可以问我（演示客服）。</div>
        <div class="msg bot">点下方快捷问题，或直接输入描述～</div>
      </div>
      <div class="chat-quick" id="chatQuick">
        <button class="chip" data-q="apply">申请退课</button>
        <button class="chip" data-q="inv">开发票</button>
        <button class="chip" data-q="open">课程打不开</button>
        <button class="chip" data-q="human">转人工客服</button>
      </div>
      <div class="chat-input">
        <input class="input" id="chatIn" placeholder="输入你的问题（演示）…" maxlength="80">
        <button class="btn btn-accent" id="chatSend">发送</button>
      </div>
    </div>`);
  const box = $("#chatBox"), inp = $("#chatIn");
  const bot = txt=>{ box.insertAdjacentHTML("beforeend",`<div class="msg bot">${esc(txt)}</div>`); box.scrollTop=box.scrollHeight; };
  const user= txt=>{ box.insertAdjacentHTML("beforeend",`<div class="msg user">${esc(txt)}</div>`); box.scrollTop=box.scrollHeight; };
  const REPLIES = {
    apply:"好的～退课请在帮助页右侧表单提交「申请退课」，或在对话里回复你的订单号。7 天内且在进度 20% 内可全额退款（演示流程）。",
    inv:"电子普票支持企业抬头发票（演示）。请回复：公司名 + 税号 + 收件邮箱。",
    open:"试试：1) 更换浏览器或退出重登；2) 清理缓存后重试；3) 仍打不开就回复订单号，客服会拉你进协助群（演示）。",
    human:"已为你转接人工客服，当前排队第 1 位，预计 1 分钟内接入（演示）。",
  };
  const ask = txt=>{
    user(txt);
    const hit = Object.keys(REPLIES).find(k=>txt.includes(k==="apply"?"退课":k==="inv"?"发票":k==="open"?"打不开":"人工"));
    bot(hit ? REPLIES[hit] : `收到「${txt.slice(0,30)}」，已记录并转交相关同学处理（演示回复）。也可以点上方快捷问题或「转人工客服」。`);
    track("chat_send",{msg:txt.slice(0,30)});
  };
  const MAP = {apply:"我想申请退课", inv:"我要开发票", open:"课程打不开了", human:"转人工客服"};
  $$("#chatQuick .chip").forEach(b=>b.addEventListener("click",()=>ask(MAP[b.dataset.q])));
  const send=()=>{ const v=inp.value.trim(); if(!v) return; inp.value=""; ask(v); };
  $("#chatSend").addEventListener("click",send);
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") send(); });
  box.scrollTop = box.scrollHeight;
}

/* ============================================================
   15 · 登录 / 注册模块（双 Tab + 微信一键登录）
   ============================================================ */
function openAuth(mode){
  const m0 = (mode==="reg" || mode==="register") ? "reg" : "login";
  modal(`
    <div class="modal-head"><b id="aTitle">${m0==="login"?"登录":"注册"}起势</b><button class="modal-x" data-close aria-label="关闭">${SVG.x}</button></div>
    <div class="modal-body" style="display:flex;flex-direction:column;gap:14px">
      <div class="auth-tabs">
        <button class="auth-tab${m0==="login"?" is-on":""}" data-am="login">登录</button>
        <button class="auth-tab${m0==="reg"?" is-on":""}" data-am="reg">注册新账号</button>
      </div>
      <div class="field"><label>手机号</label><input class="input" id="aPhone" placeholder="请输入 11 位手机号" maxlength="11" inputmode="numeric" autocomplete="tel"></div>
      <div class="field"><label>验证码</label><div class="coupon-row"><input class="input" id="aCode" placeholder="演示验证码：123456" maxlength="6" inputmode="numeric" autocomplete="one-time-code"><button class="btn btn-ghost" id="aCodeBtn">获取验证码</button></div></div>
      <div class="field" id="aNickWrap"${m0==="login"?' hidden':""}><label>昵称（选填）</label><input class="input" id="aNick" maxlength="12" placeholder="怎么称呼你"></div>
      <label class="ck"><input type="checkbox" id="aAgree" checked><span class="bx">${SVG.check}</span><span>我已阅读并同意《用户协议》与《隐私政策》</span></label>
      <button class="btn btn-accent btn-lg btn-block" id="aSubmit">${m0==="login"?"登 录":"注册并登录"}</button>
      <div class="auth-or"><span>或</span></div>
      <button class="btn btn-ghost btn-block" id="aWx">${SVG.chat}微信一键登录（演示）</button>
      <p class="auth-tip">演示模式：任意 11 位手机号 + 验证码 <b>123456</b>，或直接微信一键登录</p>
    </div>`);
  let m = m0;
  const phone=$("#aPhone"), code=$("#aCode"), nick=$("#aNick"), agree=$("#aAgree"), sub=$("#aSubmit"), title=$("#aTitle");
  const switchTo = mm=>{
    m = mm;
    title.textContent = (m==="login"?"登录":"注册")+"起势";
    sub.textContent  = m==="login" ? "登 录" : "注册并登录";
    $("#aNickWrap").hidden = m==="login";
    (m==="login"?phone:nick).focus();
    $$(".auth-tab").forEach(b=>b.classList.toggle("is-on", b.dataset.am===m));
  };
  $$(".auth-tab").forEach(b=>b.addEventListener("click",()=>switchTo(b.dataset.am)));
  let cd=null;
  $("#aCodeBtn").addEventListener("click",()=>{
    if(!/^1\d{10}$/.test(phone.value)) return toast("请输入正确的 11 位手机号","err");
    toast("验证码已发送：123456（演示）","ok",3000);
    track("sms_send",{phone:phone.value.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2")});
    const b=$("#aCodeBtn"); let left=60;
    b.disabled=true; b.textContent=left+"s";
    if(cd) clearInterval(cd);
    cd=setInterval(()=>{ left--; if(left<=0){ clearInterval(cd); cd=null; b.disabled=false; b.textContent="重新获取"; } else b.textContent=left+"s"; },1000);
  });
  [phone,code,nick].forEach(i=>i.addEventListener("keydown",e=>{ if(e.key==="Enter") sub.click(); }));
  const mask = p=>p.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");
  const finish = (name, via)=>{
    State.user="logged"; State.userName=name;
    savePersist();
    $("#modalScrim").classList.remove("show"); document.body.style.overflow="";
    track("auth_success",{via});
    toast(via==="register" ? `注册成功，欢迎加入起势「${name}」` : `登录成功，欢迎回来「${name}」`,"ok",3000);
    updateUserChrome();
    router();
  };
  const doAuth = via=>{
    const phon = phone.value.trim();
    if(!/^1\d{10}$/.test(phon)) return toast("手机号格式不正确","err");
    if(via==="wx"){
      finish("微信用户"+phon.slice(-4),"wx");
      return;
    }
    if(!agree.checked) return toast("请先阅读并同意《用户协议》与《隐私政策》","err");
    if(code.value!=="123456") return toast("验证码错误，演示码为 123456","err");
    const nm = m==="reg" ? (nick.value.trim().slice(0,12) || "演示学员"+phon.slice(-4))
                         : (State.userName!=="演示学员"? State.userName : "演示学员"+phon.slice(-4));
    track("login",{via:m==="reg"?"register":"sms", phone:mask(phon)});
    sub.classList.add("is-loading");
    setTimeout(()=>{ sub.classList.remove("is-loading"); finish(nm, m==="reg"?"register":"sms"); },900);
  };
  sub.addEventListener("click",()=>doAuth("sms"));
  $("#aWx").addEventListener("click",()=>{
    if(!/^1\d{10}$/.test(phone.value)) return toast("微信登录需先绑定手机号，请填写后重试","err");
    const b=$("#aWx"); b.classList.add("is-loading");
    setTimeout(()=>{ b.classList.remove("is-loading"); doAuth("wx"); },900);
  });
}
function openLogin(/*兼容旧调用*/){ openAuth("login"); }
function updateUserChrome(){
  const c = $("#btnCta");
  if(c){
    if(State.user==="guest"){
      c.className="btn btn-accent btn-sm btn-cta";
      c.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2"/></svg>登录`;
      c.onclick = ()=> openAuth("login");
    } else {
      c.className="btn btn-accent btn-sm btn-cta";
      c.innerHTML=`<span style="width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex:none">${esc(State.userName.slice(0,1))}</span>${esc(State.userName.slice(0,8))}`;
      c.onclick = ()=> nav("/mine");
    }
  }
  renderDrawerFoot();
}

/* ============================================================
   16 · 优惠券 / 限时倒计时
   ============================================================ */
function applyCoupon(code, course){
  code = (code||"").toUpperCase().trim();
  if(!code) { toast("请输入优惠码","err"); return false; }
  const cp = State.coupons.find(x=>x.code===code);
  if(!cp){ toast("优惠码无效或已过期（演示）","err",2600); track("coupon_fail",{code}); return false; }
  State.couponCode = code; savePersist();
  toast("优惠码已生效："+cp.tip,"ok"); track("coupon_apply",{code});
  return true;
}
let flashTimer=null;
function startFlashCd(){
  if(State.promo!=="flash") return;
  if(flashTimer) return;
  const end = Date.now()+ (3*3600+37*60+12)*1000;
  flashTimer = setInterval(()=>{
    const el = $("#flashCd"); if(!el){ clearInterval(flashTimer); flashTimer=null; return; }
    const df = Math.max(0, Math.floor((end-Date.now())/1000));
    el.textContent = [Math.floor(df/3600), Math.floor(df%3600/60), df%60].map(n=>pad2(n)).join(":");
  },1000);
}

/* ============================================================
   17 · Debug 面板
   ============================================================ */
function seg(set, cur, map){
  return map.map(([v,l])=>`<button class="${cur===v?"is-on":""}" data-seg="${set}" data-v="${v}">${l}</button>`).join("");
}
function renderDbg(){
  const b = $("#dbgBody"); if(!b) return;
  b.innerHTML = `
    <div>
      <h5>用户状态 User</h5>
      <div class="dbg-seg">${seg("user",State.user,[["guest","游客"],["logged","已登录"],["purchased","已购买"]])}</div>
    </div>
    <div>
      <h5>页面状态（课程列表）</h5>
      <div class="dbg-seg">${seg("page",State.pageState,[["normal","正常"],["loading","加载中"],["empty","空状态"],["error","错误"]])}</div>
    </div>
    <div>
      <h5>优惠状态 Promo</h5>
      <div class="dbg-seg">${seg("promo",State.promo,[["none","无优惠"],["coupon","优惠券"],["flash","限时优惠"],["group","拼团"]])}</div>
    </div>
    <div>
      <h5>转化漏斗（本会话）</h5>
      ${(()=>{
        const fn=[["course_view","浏览详情"],["video_play","试听内容"],["purchase_click","点击下单"],["payment_success","支付成功"]];
        const n=fn.map(([e])=>TRACK_LOG.filter(l=>l.ev===e).length);
        const mx=Math.max(1,...n);
        return `<div class="dbg-funnel">${n.map(v=>`<i style="width:${Math.max(3,Math.round(v/mx*100))}%"></i>`).join("")}</div>`+
          fn.map(([e,l],i)=>`<div class="dbg-funnel-row"><span>${l}</span><span>${n[i]}</span></div>`).join("");
      })()}
    </div>
    <div>
      <h5>快捷操作</h5>
      <div class="dbg-actions">
        <button data-act="reload">刷新当前页</button>
        <button data-act="home">返回首页</button>
        <button data-act="reset">重置全部状态</button>
        <button data-act="export">导出埋点日志</button>
        <button data-act="order">模拟下一单</button>
        <button data-act="gotoPay">跳到支付成功</button>
      </div>
    </div>
    <div>
      <h5>运行信息</h5>
      <div class="dbg-view">route=${location.hash.replace("#","")||"/"} · vw=${window.innerWidth}px · vh=${window.innerHeight}px</div>
    </div>
    <div>
      <h5>埋点日志（近 10 条）</h5>
      <div class="dbg-log" id="dbgLog"></div>
    </div>`;
  $$("#dbgBody [data-seg]").forEach(btn=>btn.addEventListener("click",()=>{
    const set=btn.dataset.seg, v=btn.dataset.v;
    if(set==="user"){
      State.user=v;
      if(v==="purchased"){ State.purchased = COURSES.map(x=>x.id); toast("已设为已购（全部课程）","ok"); }
      else if(v==="guest"){ State.purchased=[]; }
      savePersist();
    }
    if(set==="page") State.pageState=v;
    if(set==="promo"){ State.promo=v; if(v!=="coupon") State.couponCode=""; if(v==="coupon") State.couponCode="QISHI50"; }
    toast(`Debug：${set} → ${v}`,"info",1400);
    track("debug_change",{set,v});
    renderDbg(); router(); startFlashCd();
  }));
  $$("#dbgBody [data-act]").forEach(btn=>btn.addEventListener("click",()=>{
    const a=btn.dataset.act;
    if(a==="reset"){ State.user="guest"; State.purchased=[]; State.favs=[]; State.orders=[]; State.lastOrder=null; State.promo="none"; State.couponCode=""; State.pageState="normal"; try{localStorage.removeItem("qishi-state");}catch(e){}
      toast("状态已重置","ok"); renderDbg(); router(); }
    if(a==="home") location.hash="#/";
    if(a==="reload"){ location.hash = "#/courses?cat=all&sort=综合"; router(); }
    if(a==="export"){ const txt=JSON.stringify(TRACK_LOG,null,1); try{ navigator.clipboard.writeText&&navigator.clipboard.writeText(txt); toast("埋点日志已复制（共 "+TRACK_LOG.length+" 条）","ok"); }catch(e){ console.log(txt); }
      track("debug_export",{n:TRACK_LOG.length}); }
    if(a==="order"){ const c=COURSES[0]; OrderCtx={course:c,now:Number((c.price*0.82).toFixed(0)),method:"wx"}; location.hash="#/pay/"+c.id; }
    if(a==="gotoPay"){ const c=COURSES[0]; State.lastOrder={no:"DS2026TEST8888",course:c.id,title:c.title,amount:c.price,method:"wx",time:new Date().toLocaleString("zh-CN"),status:"支付成功",date:new Date().toISOString().slice(0,10)}; location.hash="#/success"; }
  }));
  renderDbgLog();
}
function renderDbgLog(){
  const el = $("#dbgLog"); if(!el) return;
  el.innerHTML = TRACK_LOG.slice(-10).map(l=>`<div><b>${l.t}</b> ${l.ev}</div>`).join("") || "<div style='opacity:.5'>暂无事件</div>";
  el.scrollTop = el.scrollHeight;
}
function setupDbg(){
  const handle = $("#dbgHandle");
  handle.addEventListener("click",()=>{ const d=$("#dbg"); d.classList.toggle("show"); renderDbg(); handle.classList.add("hot"); setTimeout(()=>handle.classList.remove("hot"),300); });
  $("#dbgClose").addEventListener("click",()=>$("#dbg").classList.remove("show"));
  setInterval(()=>{ const vw=$("#dbg .dbg-view"); if(vw && $("#dbg").classList.contains("show")) vw.textContent=`route=${location.hash.replace("#","")||"/"} · vw=${window.innerWidth}px · vh=${window.innerHeight}px`; },800);
}

/* ============================================================
   18 · 导航 / Header / 抽屉
   ============================================================ */
let pendingSection = null;
const VIEWS = { "/":viewHome, "/courses":viewCourses, "/course":viewDetail, "/order":viewOrder, "/pay":viewPay, "/success":viewSuccess, "/mine":viewMine, "/helps":viewHelp, "/teacher":viewTeacher };
function parseHash(){
  const raw = location.hash.replace(/^#\/?/, "");
  if(!raw) return {path:"/", params:{}};
  const [p, qs=""] = raw.split("?");
  const segs = p.split("/").filter(Boolean);
  const params = {}; new URLSearchParams(qs).forEach((v,k)=>params[k]=v);
  let path = "/"+(segs[0]||"");
  if(segs[1] && (path==="/course"||path==="/order"||path==="/pay"||path==="/teacher")) params.id = segs[1];
  return {path, params};
}
function router(){
  stopPlayer();
  if(window.__autoPlay){ clearTimeout(window.__autoPlay); window.__autoPlay=null; }
  window.stopPhoneAuto();            // 离开首页自动停播
  const r = parseHash();
  let {path, params} = r;
  // Debug URL 导入：<?dbg=loading|empty|error|normal> 便于分享复现
  if(["loading","empty","error","normal"].includes(params.dbg)){ State.pageState = params.dbg; }
  flashTrans();
  document.body.classList.remove("has-bar");
  const bar = $("#stkbar"); bar && bar.classList.remove("show");
  if(path==="/genshi"){ pendingSection="teachers"; history.replaceState(null,"","#/"); path="/"; params={}; }
  else if(path==="/anli"){ pendingSection="cases"; history.replaceState(null,"","#/"); path="/"; params={}; }
  const fn = VIEWS[path] || viewHome;
  fn(params);
  updateNavActive(path);
  setBarDefault();
  setTimeout(()=>{
    if(pendingSection){ const el=$("#"+pendingSection); if(el){ const y=el.getBoundingClientRect().top+window.scrollY-56; window.scrollTo({top:y,behavior:"smooth"}); } pendingSection=null; }
  },140);
}
function updateNavActive(path){
  $$("#hdrNav a").forEach(a=>a.classList.toggle("is-on", a.dataset.nav===path));
  $$("#drawerNav a").forEach(a=>a.classList.toggle("is-on", a.dataset.nav===path));
}
function setBarDefault(){ }
let __vt = null;
function flashTrans(){
  if(!__vt){ __vt = document.createElement("div"); __vt.className="viewtrans"; document.body.appendChild(__vt); }
  __vt.classList.add("show");
  setTimeout(()=>__vt.classList.remove("show"),200);
}
/* 首页滚动导航高亮（scrollspy） */
function initScrollSpy(){
  const ids=["cats","teachers","cases"];
  const map={cats:"/courses",teachers:"/genshi",cases:"/anli"};
  const spy=()=>{
    if(location.hash && location.hash!=="#/" ) return;
    let cur="";
    ids.forEach(id=>{ const el=$("#"+id); const r=el&&el.getBoundingClientRect(); if(r && r.top<=120) cur=id; });
    const on = cur? map[cur] : "/";
    $$("#hdrNav a").forEach(a=>a.classList.toggle("is-on", (cur? a.dataset.nav===on : a.dataset.nav===on)));
  };
  window.addEventListener("scroll",spy,{passive:true});
  spy();
}
function setupChrome(){
  initScrollSpy();
  // Header 滚动态
  window.addEventListener("scroll",()=>{ $("#hdr").classList.toggle("is-scrolled", window.scrollY>8); },{passive:true});
  // 搜索
  $("#btnSearch").addEventListener("click",openSearch);
  $("#sovClose").addEventListener("click",closeSearch);
  // 抽屉
  const openDr=()=>{ $("#drawer").classList.add("show"); $("#scrim").classList.add("show"); renderDrawerFoot(); };
  $("#btnMenu").addEventListener("click",openDr);
  updateUserChrome();
  $("#drawerClose").addEventListener("click",()=>{ $("#drawer").classList.remove("show"); $("#scrim").classList.remove("show"); });
  $("#scrim").addEventListener("click",()=>{ $("#drawer").classList.remove("show"); $("#scrim").classList.remove("show"); });
  $$("#drawerNav a").forEach(a=>a.addEventListener("click",()=>{ $("#drawer").classList.remove("show"); $("#scrim").classList.remove("show"); }));
  // 底部 CTA 按钮
  let barCourse = COURSES[0];
  window.setBarCourse = (c,owned)=>{ barCourse=c;
    const p=priceInfo(c);
    $("#sbPrice").innerHTML="<b>¥"+p.now+"</b>";
    $("#sbWas").textContent = owned? "":"¥"+p.was;
    $("#sbTip").textContent = owned?"已购买":"立即学完，把播放量变成咨询量";
    const bar=$("#stkbar"); bar.classList.add("show");
    const b=$("#sbBuy"); b.innerHTML=owned?"开始学习":(p.mode==="flash"?SVG.zap+"立即抢购":"立即购买");
    b.classList.toggle("btn-accent",!owned); b.classList.toggle("btn-primary",!!owned);
  };
  $("#sbBuy").addEventListener("click",()=>{
    if(!barCourse) return;
    if(State.purchased.includes(barCourse.id)) nav("/mine"); else nav("/order/"+barCourse.id);
  });
  // Esc
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){ closeSearch(); $("#scrim").classList.remove("show"); $("#drawer").classList.remove("show"); $("#modalScrim").classList.remove("show"); document.body.style.overflow=""; $("#dbg").classList.remove("show"); }
    if(e.key.toLowerCase()==="d"){ const d=$("#dbg"); if(!$("#sovInput")||document.activeElement!==$("#sovInput")){ d.classList.toggle("show"); renderDbg(); d.classList.contains("show")&&toast("Debug 面板已打开（演示）","info",1200); } }
  });
}
function renderDrawerFoot(){
  const f = $("#drawerFoot");
  f.innerHTML = State.user==="guest"
    ? `<button class="btn btn-accent btn-block" id="drLogin">登录</button><span style="font-size:11.5px;color:rgba(245,244,239,.45)">登录后同步课程与收藏</span>`
    : `<div class="user-mini"><div class="ava" style="width:40px;height:40px;font-size:14px" data-c="3">${esc(State.userName.slice(0,1))}<span class="a-ring"></span></div><span>${esc(State.userName)}<br><small style="color:rgba(245,244,239,.45)">${State.purchased.length} 门已购 · ${State.favs.length} 收藏</small></span></div>
        <button class="btn btn-ghost-dark btn-block" id="drLogout">退出登录（演示）</button>`;
  const lg=$("#drLogin"); lg && lg.addEventListener("click",openLogin);
  const lo=$("#drLogout"); lo && lo.addEventListener("click",()=>{ State.user="guest"; State.purchased=[]; savePersist(); toast("已退出登录（演示）","info"); $("#drawer").classList.remove("show"); $("#scrim").classList.remove("show"); updateUserChrome(); router(); });
}

/* ============================================================
   19 · 启动
   ============================================================ */
function init(){
  const note="起势 GROWTH · 产品级高保真原型（Mock）";
  console.log("%c"+note,"background:#111;color:#C9F04B;padding:4px 10px;border-radius:4px;font-weight:700");
  setupChrome();
  setupDbg();
  window.addEventListener("hashchange",router);
  // 启动加载屏
  const v=$("#view-root");
  v.innerHTML = `<div class="view-load" id="bootLoad">${"<div class='loader'></div><p>起势 GROWTH · 正在加载课程…</p>"}</div>`;
  setTimeout(()=>{
    const bl=$("#bootLoad"); if(bl) bl.classList.add("out");
    router();
    renderDbg();
  },520);
  window.addEventListener("beforeunload",savePersist);
}
document.addEventListener("DOMContentLoaded",init);
