export const site = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? '컨설팅 브랜드',
  ownerName: process.env.NEXT_PUBLIC_OWNER_NAME ?? '홍길동',
  tagline: '문제의 핵심만 자르고, 실행 가능한 해법만 제시합니다.',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'email@domain.com',
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.kr',
  ctaLink: process.env.NEXT_PUBLIC_CTA_LINK ?? '#contact'
}
