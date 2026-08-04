const CONTACT_EMAIL = "contact@ryul-lab.com";

const navItems = [
  ["mock.html", "율_모의고사", "mock"],
  ["math.html", "수학", "math"],
  ["korean.html", "국어", "korean"],
  ["explore.html", "사회·과학탐구", "explore"],
  ["english.html", "영어", "english"],
  ["special-order.html", "스페셜 오더", "special"],
];

function header(page) {
  return `
    <a class="skip-link" href="#main">본문 바로가기</a>
    <div class="announcement">학원·교육기관 전용 모의고사 및 문항 공급 상담 <a href="group-purchase.html">단체구매 안내</a></div>
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="index.html" aria-label="RYUL 홈">
          <span class="logo-mark">R</span>
          <span class="logo-type"><strong>RYUL</strong><small>ASSESSMENT CONTENTS</small></span>
        </a>
        <nav class="desktop-nav" aria-label="주요 메뉴">
          <div class="nav-group">
            <button class="nav-trigger" type="button">율_콘텐츠 <span aria-hidden="true">⌄</span></button>
            <div class="nav-menu">
              ${navItems.map(([url,label]) => `<a href="${url}">${label}</a>`).join("")}
            </div>
          </div>
          ${navItems.map(([url,label,key]) => `<a class="nav-link ${page===key?'active':''}" href="${url}">${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="header-email" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          <a class="btn btn-dark btn-small" href="group-purchase.html">단체구매</a>
          <button class="mobile-toggle" type="button" aria-label="메뉴 열기" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-panel" aria-label="모바일 메뉴">
      <a href="index.html">홈</a>
      ${navItems.map(([url,label]) => `<a href="${url}">${label}</a>`).join("")}
      <a href="group-purchase.html">단체구매</a>
      <a class="btn btn-signal mobile-cta" href="mailto:${CONTACT_EMAIL}">이메일 문의</a>
    </div>`;
}

function footer() {
  return `
  <section class="cta-band">
    <div class="container cta-band-inner">
      <h2>다음 시험을<br>율의 문항으로.</h2>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-light" href="group-purchase.html">납품 상담하기</a>
        <a class="btn" style="border-color:white" href="mailto:${CONTACT_EMAIL}">이메일 보내기</a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="logo" href="index.html"><span class="logo-mark">R</span><span class="logo-type"><strong>RYUL</strong><small>ASSESSMENT CONTENTS</small></span></a>
          <p>RYUL(율)은 모의고사와 고난도 문항을 기획·공급하는 평가 콘텐츠 브랜드입니다. 학생에게는 실전적인 한 회를, 교육기관에는 안정적으로 사용할 수 있는 콘텐츠를 제공합니다.</p>
        </div>
        <div class="footer-nav">
          <div><h3>Contents</h3><a href="mock.html">율_모의고사</a><a href="math.html">수학</a><a href="korean.html">국어</a><a href="explore.html">사회·과학탐구</a><a href="english.html">영어</a></div>
          <div><h3>Order</h3><a href="special-order.html">스페셜 오더</a><a href="group-purchase.html">단체구매</a><a href="mailto:${CONTACT_EMAIL}">이메일 문의</a></div>
          <div><h3>Guide</h3><a href="#">공지사항</a><a href="#">자료실</a><a href="#">자주 묻는 질문</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>상호 RYUL(율) · 이메일 ${CONTACT_EMAIL}<br>사업자 정보, 통신판매업 신고, 주소 및 개인정보처리방침은 실제 공개 정보 확정 후 입력해 주세요.</div>
        <div>© 2026 RYUL. All Rights Reserved.</div>
      </div>
    </div>
  </footer>
  <div class="toast" role="status" aria-live="polite"></div>`;
}
