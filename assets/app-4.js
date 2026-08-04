function specialOrder() {
  return `<main id="main">
    <section class="page-hero"><div class="container page-hero-grid"><div class="reveal"><div class="page-code">06 / SPECIAL ORDER</div><h1 class="display display-sm">스페셜<br><span class="serif">오더</span>.</h1><p class="lead">학원과 교육기관이 실제로 사용할 과목, 회차, 난도, 편집 규격에 맞춘 전용 콘텐츠 공급 상담입니다.</p></div><div class="page-stamp reveal" style="background:var(--signal);color:white">ONLY<br>FOR YOUR<br>CLASS</div></div></section>
    <section class="section"><div class="container"><div class="section-heading reveal"><h2>내부 과정 대신<br>납품 조건을 말합니다.</h2><p>문항 제작 도구나 기술 구조는 판매 페이지에 노출하지 않습니다. 고객과는 필요한 결과물, 일정, 이용 범위만 명확히 협의합니다.</p></div><div class="steps"><div class="step reveal"><h3>사용 목적</h3><p>월간 모의고사, 파이널, 특강, 주간 테스트, 교재 수록 등 목적을 정합니다.</p></div><div class="step reveal"><h3>콘텐츠 규격</h3><p>과목, 문항 수, 난도, 회차, 정답·해설, 파일 또는 인쇄 형태를 확정합니다.</p></div><div class="step reveal"><h3>이용 범위</h3><p>기관 수, 응시 인원, 기간, 재배포·편집 여부 등 사용 조건을 계약에 반영합니다.</p></div></div></div></section>
    <section class="section ink-section"><div class="container"><div class="section-heading reveal"><h2>스페셜 오더<br>적용 예시.</h2><p>아래 구성은 상품 이해를 위한 예시이며 실제 일정과 공급 가능 범위는 상담 후 확정합니다.</p></div><div class="feature-grid"><div class="feature reveal"><span class="feature-index">01</span><div><h3>월간 실전 모의고사</h3><p>정해진 수업 일정에 맞춘 정기 회차 공급.</p></div></div><div class="feature reveal"><span class="feature-index">02</span><div><h3>파이널 패키지</h3><p>수능 직전 집중 응시를 위한 연속 회차 구성.</p></div></div><div class="feature reveal"><span class="feature-index">03</span><div><h3>강사 전용 문항 세트</h3><p>테마·단원·난도별 문항과 해설 패키지.</p></div></div><div class="feature reveal"><span class="feature-index">04</span><div><h3>브랜드 표기 협의</h3><p>표지와 기관명 표기 범위를 계약 조건에 따라 협의.</p></div></div></div></div></section>
    ${orderForm("스페셜 오더 상담","필요한 콘텐츠 요건을 적어주시면 이메일 문의 초안을 생성합니다.","스페셜 오더")}
  </main>`;
}

function groupPurchase() {
  return `<main id="main">
    <section class="page-hero"><div class="container page-hero-grid"><div class="reveal"><div class="page-code">B2B / GROUP PURCHASE</div><h1 class="display display-sm">단체구매.</h1><p class="lead">학원, 학교, 교육기관의 응시 인원과 일정에 맞춰 모의고사 및 문항 콘텐츠의 공급 조건을 안내합니다.</p></div><div class="page-stamp reveal" style="background:var(--blue);color:white">B2B<br>ORDER</div></div></section>
    <section class="section-sm"><div class="container"><div class="stat-row"><div class="stat reveal"><strong>모의고사</strong><span>회차·과목·응시 인원 협의</span></div><div class="stat reveal"><strong>문항 세트</strong><span>단원·난도·문항 수 협의</span></div><div class="stat reveal"><strong>파일/인쇄</strong><span>공급 형태 및 규격 협의</span></div><div class="stat reveal"><strong>이용 범위</strong><span>기간·기관·배포 조건 명시</span></div></div></div></section>
    ${orderForm("단체구매 문의","기관 정보와 예상 수량을 남겨주시면 담당자에게 보낼 이메일 초안을 생성합니다.","단체구매")}
    <section class="section"><div class="container"><div class="section-heading reveal"><h2>문의 전 확인.</h2><p>정확한 견적을 위해 아래 항목을 함께 알려주세요.</p></div><div class="steps"><div class="step reveal"><h3>기관과 담당자</h3><p>기관 유형, 담당자명, 연락 가능한 이메일 또는 전화번호.</p></div><div class="step reveal"><h3>상품과 수량</h3><p>희망 과목, 회차, 문항 수, 예상 응시 인원.</p></div><div class="step reveal"><h3>희망 일정</h3><p>첫 사용일, 납품 희망일, 정기 공급 여부.</p></div></div></div></section>
  </main>`;
}

function orderForm(title,desc,type) {
  return `<section class="section"><div class="container order-grid"><aside class="order-aside reveal"><span class="kicker">ORDER INQUIRY</span><h2>${title}</h2><p class="lead" style="font-size:18px">${desc}</p><p class="muted">직접 문의: <a href="mailto:${CONTACT_EMAIL}" style="text-decoration:underline">${CONTACT_EMAIL}</a></p></aside><form class="order-form reveal" data-mail-form data-type="${type}"><div class="form-grid"><div class="field"><label for="company">기관명</label><input id="company" name="company" required placeholder="예: 율학원"></div><div class="field"><label for="name">담당자명</label><input id="name" name="name" required placeholder="성함"></div><div class="field"><label for="email">회신 이메일</label><input id="email" name="email" type="email" required placeholder="name@example.com"></div><div class="field"><label for="phone">연락처</label><input id="phone" name="phone" placeholder="010-0000-0000"></div><div class="field"><label for="subject">희망 과목</label><select id="subject" name="subject"><option>수학</option><option>국어</option><option>사회·과학탐구</option><option>영어</option><option>전과목/복수 과목</option></select></div><div class="field"><label for="qty">예상 수량</label><input id="qty" name="qty" placeholder="예: 100부 또는 4회분"></div><div class="field full"><label for="message">요청 내용</label><textarea id="message" name="message" required placeholder="희망 일정, 문항 수, 난도, 파일/인쇄 형태, 이용 목적 등을 적어주세요."></textarea></div></div><p class="form-note">현재 프로토타입은 입력 내용을 이메일 앱으로 전달합니다. 실제 배포 시 서버 폼 또는 CRM 연동이 필요합니다.</p><button class="btn btn-signal" type="submit">이메일 문의 작성</button></form></div></section>`;
}

function faqBlock() {
  const qas = [
    ["개인 구매와 단체구매 모두 가능한가요?","상품별 판매 정책에 따라 개인 구매 또는 기관 단체구매로 운영할 수 있습니다. 초기 공개본에서는 정확한 판매 회차와 가격을 상담으로 확인하도록 구성했습니다."],
    ["시험지 외에 어떤 자료가 포함되나요?","기본 상품은 시험지, 정답, 해설을 중심으로 구성합니다. OMR, 성적 분석, 인쇄·배송 등 추가 항목은 상품 또는 계약 조건에 따라 별도 안내할 수 있습니다."],
    ["학원 전용 문항이나 모의고사를 주문할 수 있나요?","스페셜 오더에서 과목, 문항 수, 난도, 일정, 편집 규격과 이용 범위를 협의할 수 있습니다."],
    ["문항 제작 방식이나 내부 시스템도 제공하나요?","본 사이트는 문항과 모의고사 콘텐츠 판매를 위한 사이트입니다. 내부 제작 도구나 제작 과정은 상품에 포함하지 않습니다."]
  ];
  return `<div class="faq">${qas.map(([q,a])=>`<div class="faq-item reveal"><button class="faq-question" type="button"><span>${q}</span><span>+</span></button><div class="faq-answer"><p>${a}</p></div></div>`).join("")}</div>`;
}
