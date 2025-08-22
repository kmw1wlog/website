# Consulting Website (Next.js)

프로덕션 준비된 컨설팅 원페이지 + 블로그 예시입니다. 주요 결정 사항과 사용 방법을 문서화했습니다.

## 🚀 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui 구성 가능
- MDX + Contentlayer
- hCaptcha + Resend 메일 전송

## 📂 주요 구조

```
app/
  (marketing)/
    page.tsx        # 홈
    about/page.tsx  # 소개
    blog/[slug]/    # 블로그 글
    blog/page.tsx   # 블로그 목록
    cases/[slug]/   # 케이스 스터디 글
    cases/page.tsx  # 케이스 목록
    contact/page.tsx# 문의
  api/
    contact/route.ts# 폼 처리
    og/route.tsx    # OG 이미지
content/
  posts/*.mdx       # 블로그 글
  cases/*.mdx       # 케이스 스터디
  config/site.ts    # 사이트 설정
```

## 🔧 환경 변수(.env)

`.env` 파일에 아래 값을 설정합니다. 예시는 `.env.example` 참고.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BRAND_NAME`
- `NEXT_PUBLIC_OWNER_NAME`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_CTA_LINK`
- `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
- `RESEND_API_KEY`

## 💻 개발 스크립트

```bash
npm install
npm run dev
npm run build
```

## 📚 콘텐츠 발행

- 블로그: `content/posts/*.mdx` 파일 추가
- 케이스: `content/cases/*.mdx` 파일 추가
- 빌드 후 배포하면 Contentlayer가 자동으로 반영됩니다.

## ⚠️ 제한

이 레포는 자동화된 환경에서 생성되었으며 `node_modules`가 포함되어 있지 않습니다. 설치 후 실행해야 합니다.
