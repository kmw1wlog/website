const catalogs = {
  mock: [
    ["M01","RYUL 수능형 전범위 모의고사","수능과 동일한 문항 수와 응시 시간을 기준으로 구성하는 전범위 실전 시험입니다.",["회차형","시험지·정답·해설","단체구매"]],
    ["M02","RYUL 파이널 시즌","수능 직전 일정에 맞춰 실전 감각을 유지할 수 있도록 연속 회차로 공급하는 상품입니다.",["파이널","연속 회차","기관 공급"]],
    ["M03","RYUL 컴팩트 모의고사","준킬러·고난도 중심의 짧은 세트로 수업과 특강에 활용할 수 있는 구성입니다.",["미니 모의고사","수업용","과목별"]]
  ],
  math: [
    ["22","수학 공통 고난도 문항 세트","수학Ⅰ·수학Ⅱ 범위의 4점 문항을 테마와 난도에 따라 구성합니다.",["공통","4점 문항","해설 포함"]],
    ["30","수학 선택과목 고난도 문항 세트","미적분·확률과 통계·기하 선택과목의 고난도 문항을 공급합니다.",["선택과목","킬러·준킬러","기관용"]],
    ["10","수학 컴팩트 실전 세트","수업 한 회 또는 주간 테스트에 활용할 수 있는 10문항 내외 구성입니다.",["주간 테스트","단원 선택","파일 납품"]]
  ],
  korean: [
    ["45","국어 전범위 실전 모의고사","독서·문학·화법과 작문·언어와 매체를 포함하는 한 회 시험 구성을 제공합니다.",["45문항","전범위","정답·해설"]],
    ["讀","독서 집중 실전 세트","독서 영역의 시간 운용과 지문별 판단을 훈련하는 세트입니다.",["독서","시간 훈련","수업용"]],
    ["文","문학 집중 실전 세트","갈래별 문학 작품과 문항을 실전형 세트로 구성합니다.",["문학","갈래별","기관 공급"]]
  ],
  explore: [
    ["20","과학탐구 실전 모의고사","물리학·화학·생명과학·지구과학 과목별 20문항 실전 시험을 구성합니다.",["과학탐구","과목별","20문항"]],
    ["社","사회탐구 실전 모의고사","사회탐구 과목별 시험 운영에 맞는 20문항 모의고사를 공급합니다.",["사회탐구","과목별","회차형"]],
    ["T","탐구 컴팩트 세트","단원 또는 테마를 기준으로 수업에 활용할 수 있는 짧은 실전 세트입니다.",["테마형","수업용","선택 구성"]]
  ],
  english: [
    ["45","영어 수능형 실전 모의고사","듣기·독해를 포함하는 45문항 시험지와 정답·해설을 구성합니다.",["45문항","전범위","모의고사"]],
    ["R","영어 독해 집중 세트","빈칸·순서·문장 삽입 등 유형별 실전 훈련 세트입니다.",["독해","유형별","수업용"]],
    ["F","영어 파이널 회차","수능 직전 연속 실전 훈련을 위한 회차형 상품입니다.",["파이널","연속 회차","단체구매"]]
  ]
};

const pageInfo = {
  mock: {code:"01 / MOCK EXAM",title:"율_모의고사",desc:"시험장에서 완성되는 콘텐츠. 전범위 실전 모의고사부터 수업용 컴팩트 세트까지 목적에 맞는 회차를 선택합니다.",stamp:"FULL<br>MOCK<br>EXAM"},
  math: {code:"02 / MATHEMATICS",title:"수학",desc:"공통·선택과목의 실전 문항과 고난도 문항 세트. 한 문항의 참신함과 한 회 시험의 균형을 함께 봅니다.",stamp:"MATH<br>22 + 8"},
  korean: {code:"03 / KOREAN",title:"국어",desc:"독서·문학·선택과목을 실제 시험 흐름에 맞춰 구성하는 국어 모의고사와 영역별 세트입니다.",stamp:"KOREAN<br>45"},
  explore: {code:"04 / SOCIAL & SCIENCE",title:"사회·과학탐구",desc:"과목별 20문항 실전 시험과 단원·테마별 수업용 세트를 공급합니다.",stamp:"SOCIAL<br>& SCIENCE"},
  english: {code:"05 / ENGLISH",title:"영어",desc:"45문항 수능형 실전 시험과 독해 유형별 집중 세트를 한 회차 단위로 제공합니다.",stamp:"ENGLISH<br>45"}
};

function catalogPage(page) {
  const info = pageInfo[page];
  return `<main id="main">
    <section class="page-hero"><div class="container page-hero-grid"><div class="reveal"><div class="page-code">${info.code}</div><h1 class="display display-sm">${info.title}</h1><p class="lead">${info.desc}</p></div><div class="page-stamp reveal">${info.stamp}</div></div></section>
    <section class="section"><div class="container"><div class="section-heading reveal"><h2>상품 구성.</h2><p>공개 가격과 판매 회차는 공급 일정 확정 후 반영할 수 있도록 상담형 구조로 설계했습니다.</p></div><div class="catalog">${catalogs[page].map((x,i)=>catalogItem(x,i)).join("")}</div></div></section>
    <section class="section ink-section"><div class="container"><div class="section-heading reveal"><h2>결과물 중심의<br>콘텐츠 공급.</h2><p>고객에게 필요한 것은 내부 제작 과정이 아니라 시험지의 완성도, 사용 편의, 정답·해설, 그리고 약속된 납품입니다.</p></div><div class="feature-grid"><div class="feature reveal"><span class="feature-index">A</span><div><h3>시험지</h3><p>응시 및 인쇄에 사용할 수 있는 완성형 시험지 구성.</p></div></div><div class="feature reveal"><span class="feature-index">B</span><div><h3>정답표</h3><p>빠른 채점과 운영을 위한 명확한 정답 자료.</p></div></div><div class="feature reveal"><span class="feature-index">C</span><div><h3>해설</h3><p>수업과 복습에 활용할 수 있는 문항별 해설.</p></div></div><div class="feature reveal"><span class="feature-index">D</span><div><h3>납품 규격</h3><p>파일 또는 인쇄 등 협의된 형태로 공급.</p></div></div></div></div></section>
    <section class="section"><div class="container split"><article class="panel lime reveal"><span class="kicker">SINGLE ORDER</span><h2>개별 상품<br>구매 문의.</h2><p>판매 가능한 회차와 구성, 제공 형태를 확인해 드립니다.</p><a class="btn btn-dark" href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[RYUL] '+info.title+' 구매 문의')}">구매 문의</a></article><article class="panel reveal"><span class="kicker">GROUP ORDER</span><h2>학원·기관<br>단체구매.</h2><p>응시 인원, 일정, 과목, 사용 범위에 맞춰 견적을 안내합니다.</p><a class="btn btn-signal" href="group-purchase.html">단체구매 안내</a></article></div></section>
  </main>`;
}

function catalogItem(x,i) {
  const [code,title,desc,tags]=x;
  return `<article class="catalog-item reveal"><div class="catalog-thumb" style="background:${i===1?'var(--signal)':i===2?'var(--blue)':'var(--ink)'}"><small>RYUL CONTENTS</small><strong>${code}</strong></div><div class="catalog-copy"><h3>${title}</h3><p>${desc}</p><div class="catalog-tags">${tags.map(t=>`<span>${t}</span>`).join("")}</div></div><a class="btn btn-small" href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[RYUL] '+title+' 문의')}">문의하기</a></article>`;
}
