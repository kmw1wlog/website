const products = [
  {cat:"mock",mark:"01",meta:"FULL-LENGTH / MOCK",title:"RYUL 전국 모의평가",desc:"수능 체제에 맞춘 전범위 실전 모의고사. 회차별 시험지·정답·해설 구성으로 제공합니다.",url:"mock.html"},
  {cat:"math",mark:"22",meta:"MATHEMATICS / PREMIUM",title:"수학 고난도 문항 세트",desc:"공통 및 선택과목의 4점 문항을 목적과 난도에 맞게 구성한 문항 패키지입니다.",url:"math.html"},
  {cat:"special",mark:"R",meta:"CUSTOM / INSTITUTION",title:"기관 전용 스페셜 오더",desc:"학원 일정, 과목, 회차, 난도, 편집 규격에 맞춰 전용 콘텐츠 구성을 협의합니다.",url:"special-order.html"},
  {cat:"korean",mark:"讀",meta:"KOREAN / MOCK",title:"국어 실전 모의고사",desc:"독서·문학·선택과목의 시험 운용을 고려한 실전형 모의고사 상품입니다.",url:"korean.html"},
  {cat:"explore",mark:"科",meta:"SCIENCE & SOCIAL",title:"사회·과학탐구 모의고사",desc:"과목별 20문항 실전 세트와 기관 일정에 맞춘 회차형 공급을 준비합니다.",url:"explore.html"},
  {cat:"english",mark:"E",meta:"ENGLISH / MOCK",title:"영어 실전 모의고사",desc:"45문항 시험지와 정답·해설을 한 회차 단위로 구성하는 상품입니다.",url:"english.html"},
];

function productCards() {
  return products.map(p => `
    <article class="product-card reveal" data-category="${p.cat}">
      <div class="product-meta"><span>${p.meta}</span><span>RYUL</span></div>
      <div class="product-visual"><div class="product-disc">${p.mark}</div></div>
      <div class="product-copy"><h3>${p.title}</h3><p>${p.desc}</p><a class="product-link" href="${p.url}"><span>상품 보기</span><span>↗</span></a></div>
    </article>`).join("");
}

function home() {
  return `
  <main id="main">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <span class="kicker">RYUL ASSESSMENT CONTENTS</span>
          <h1 class="display">시험의<br><span class="serif">기준</span>을<br>세우다.</h1>
          <p class="lead">모의고사와 고난도 문항을 설계하고 공급합니다. 눈에 보이는 것은 오직 완성된 시험지와 문항의 완성도입니다.</p>
          <div class="hero-actions"><a class="btn btn-dark" href="mock.html">콘텐츠 보기</a><a class="btn" href="group-purchase.html">단체구매 상담</a></div>
          <div class="hero-note"><div><strong>전과목 콘텐츠</strong><span>모의고사·문항 단위 공급</span></div><div><strong>기관 전용 구성</strong><span>과목·난도·회차 협의</span></div><div><strong>납품형 패키지</strong><span>시험지·정답·해설</span></div></div>
        </div>
        <div class="hero-art reveal" aria-label="모의고사 시험지 그래픽">
          <div class="orbit"></div>
          <div class="paper-card"><div class="paper-head"><span>RYUL</span><span>MATHEMATICS</span></div><div class="problem"><small>22. 다음 조건을 만족하는 값을 구하시오.</small><div class="math-lines"><i></i><i></i><i></i></div><div class="choice-grid"><span>①</span><span>②</span><span>③</span><span>④</span><span>⑤</span></div></div></div>
          <span class="art-chip one">FULL MOCK TEST</span><span class="art-chip two">KILLER ITEMS</span><span class="art-chip three">SPECIAL ORDER</span>
        </div>
      </div>
    </section>
    <div class="marquee"><div class="marquee-track"><span>RYUL MOCK EXAM</span><span>MATHEMATICS</span><span>KOREAN</span><span>SOCIAL & SCIENCE</span><span>ENGLISH</span><span>SPECIAL ORDER</span><span>RYUL MOCK EXAM</span><span>MATHEMATICS</span><span>KOREAN</span><span>SOCIAL & SCIENCE</span><span>ENGLISH</span><span>SPECIAL ORDER</span></div></div>
    <section class="section">
      <div class="container">
        <div class="section-heading reveal"><h2>필요한 시험을<br>바로 고르세요.</h2><p>과목별 완성형 모의고사부터 기관 전용 문항 구성까지. 상품 자체를 중심으로 탐색하고 곧바로 구매·납품 상담으로 연결됩니다.</p></div>
        <div class="category-nav reveal" aria-label="콘텐츠 필터"><button class="active" data-filter="all">전체</button><button data-filter="mock">모의고사</button><button data-filter="math">수학</button><button data-filter="korean">국어</button><button data-filter="explore">탐구</button><button data-filter="english">영어</button><button data-filter="special">스페셜 오더</button></div>
        <div class="product-grid">${productCards()}</div>
      </div>
    </section>
    <section class="section ink-section">
      <div class="container">
        <div class="section-heading reveal"><h2>한 회의 시험에<br>필요한 기준.</h2><p>내부 기술이나 제작 도구가 아니라, 교육기관과 응시자가 실제로 받는 결과물의 품질을 기준으로 설명합니다.</p></div>
        <div class="feature-grid">
          <div class="feature reveal"><span class="feature-index">01</span><div><h3>교육과정에 맞는 문항</h3><p>공개된 교육과정과 시험 체제에 맞춰 상품 범위와 문항 구성을 명확히 합니다.</p></div></div>
          <div class="feature reveal"><span class="feature-index">02</span><div><h3>실전적인 회차 구성</h3><p>문항 하나뿐 아니라 한 회 시험의 난도 흐름과 시간 운용까지 고려합니다.</p></div></div>
          <div class="feature reveal"><span class="feature-index">03</span><div><h3>정답·해설 패키지</h3><p>시험지와 함께 채점 및 수업에 활용할 수 있는 정답·해설 구성을 제공합니다.</p></div></div>
          <div class="feature reveal"><span class="feature-index">04</span><div><h3>기관 사용에 맞춘 납품</h3><p>회차, 과목, 파일 형식, 인쇄 규격, 이용 범위를 상담해 공급합니다.</p></div></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <article class="panel lime reveal"><span class="kicker">FOR STUDENTS</span><h2>실전의 밀도를<br>높이는 한 회.</h2><p>수능형 모의고사와 고난도 문항 세트로 시험장에서 필요한 판단과 시간 배분을 훈련합니다.</p><a class="btn btn-dark" href="mock.html">모의고사 보기</a></article>
        <article class="panel signal reveal"><span class="kicker" style="color:white">FOR INSTITUTIONS</span><h2>학원 일정에<br>맞는 콘텐츠.</h2><p>월간 시험, 파이널 시즌, 특강 교재, 강사 전용 자료 등 사용 목적에 따라 공급 단위를 협의합니다.</p><a class="btn btn-light" href="special-order.html">스페셜 오더 보기</a></article>
      </div>
    </section>
    <section class="section-sm">
      <div class="container"><div class="section-heading reveal"><h2>구매와 납품은<br>단순하게.</h2><p>콘텐츠를 선택한 뒤 사용 조건과 일정을 확정합니다. 제작 기술이나 내부 운영을 공개하지 않고 상품 요건만 협의합니다.</p></div><div class="steps"><div class="step reveal"><h3>상품 선택</h3><p>과목·모의고사·문항 세트 또는 스페셜 오더를 선택합니다.</p></div><div class="step reveal"><h3>구성과 조건 확정</h3><p>회차, 수량, 일정, 파일·인쇄 형태, 이용 범위를 확인합니다.</p></div><div class="step reveal"><h3>결제 및 납품</h3><p>확정 견적과 일정에 따라 콘텐츠를 제공합니다.</p></div></div></div>
    </section>
    <section class="section"><div class="container"><div class="section-heading reveal"><h2>자주 묻는 질문.</h2><p>초기 상담에서 가장 많이 확인하는 항목을 정리했습니다.</p></div>${faqBlock()}</div></section>
  </main>`;
}
