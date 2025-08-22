# 포르테 피아노 아카데미 웹사이트

정적 HTML/CSS/JS로 구성된 피아노 학원 소개 사이트입니다.

## 로컬 미리보기

### 방법 A: 파일 직접 열기
`index.html`을 브라우저로 열면 됩니다.

### 방법 B: 간단 서버 실행
```bash
# macOS/Linux
python3 -m http.server 5173
# Windows
py -m http.server 5173
```
브라우저에서 `http://localhost:5173/piano/` 접속.

## Next.js 변환 가이드 (선택)
```bash
npx create-next-app@latest piano-next --use-npm --ts false --eslint true --src-dir false --app false --tailwind false
cd piano-next
```
- `/public` 폴더에 `/assets` 복사
- `/pages`에 `index.tsx`, `classes.tsx` 등으로 페이지 분리
- `_document`에 폰트/아이콘 링크 추가, `next/head`로 메타 태그 관리
- 슬라이더는 `useEffect`로 타이머 제어

## 유지보수 팁
- 모든 이미지 파일을 `assets/piano/`에 WebP 형식으로 추가
- JSON-LD 정보와 연락처, 계좌 등은 실제 정보로 교체
- Lighthouse 검사에서 성능/접근성/SEO 90+ 유지
