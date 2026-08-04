function init() {
  const page = document.body.dataset.page || "home";
  document.getElementById("site-shell").innerHTML = header(page);
  const root = document.getElementById("page-root");
  if(page === "home") root.innerHTML = home();
  else if(page === "special") root.innerHTML = specialOrder();
  else if(page === "group") root.innerHTML = groupPurchase();
  else root.innerHTML = catalogPage(page);
  document.getElementById("footer-root").innerHTML = footer();

  const toggle = document.querySelector(".mobile-toggle");
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  });

  document.querySelectorAll(".category-nav button").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".category-nav button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => card.dataset.hidden = String(filter !== "all" && card.dataset.category !== filter));
  }));

  document.querySelectorAll(".faq-question").forEach(btn => btn.addEventListener("click", () => btn.closest(".faq-item").classList.toggle("open")));

  document.querySelectorAll("[data-mail-form]").forEach(form => form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const type = form.dataset.type;
    const subject = `[RYUL] ${type} 문의 - ${data.get("company")}`;
    const body = [`문의 유형: ${type}`,`기관명: ${data.get("company")}`,`담당자명: ${data.get("name")}`,`회신 이메일: ${data.get("email")}`,`연락처: ${data.get("phone")||"미입력"}`,`희망 과목: ${data.get("subject")}`,`예상 수량: ${data.get("qty")||"미정"}`,"","요청 내용:",data.get("message")].join("\n");
    showToast("이메일 앱을 여는 중입니다.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if(!toast) return;
  toast.textContent = message; toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
}

document.addEventListener("DOMContentLoaded", init);
