// js/main.js
// 스킵 링크: 포커스 후 기본 동작
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', () => {
    const target = document.getElementById('main');
    target.setAttribute('tabindex', '-1');
    target.focus();
  });
}

// 모바일 내비 토글: 키보드 접근 가능하게 aria-expanded 변경
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav ul');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.style.display === 'block';
    mainNav.style.display = open ? 'none' : 'block';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// 고대비 토글: body에 클래스 추가, 사용자 설정 로컬 저장
const contrastBtn = document.getElementById('contrast');
if (contrastBtn) {
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
}

// 간단한 폼 검증 예시
function validateForm(form) {
  const required = form.querySelectorAll('[required]');
  for (const field of required) {
    if (!field.value.trim()) {
      alert(field.getAttribute('aria-label') + ' 입력이 필요합니다.');
      field.focus();
      return false;
    }
  }
  return true;
}
