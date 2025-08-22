# Cafe Static Site Template

{{브랜드명}} 카페 웹사이트 템플릿입니다. 모든 정보는 `{{중괄호}}`로 표시되어 있어 실제 데이터로 교체하여 사용하세요.

## 폴더 구조
```
/assets/images/cafe    # 사진 교체 (동일 파일명 유지 권장)
/assets/icons          # 추가 아이콘 보관
/css/style.css         # 기본 스타일
/css/responsive.css    # 반응형 보정
/js/script.js          # 인터랙션 스크립트
index.html             # 홈
menu.html              # 전체 메뉴
space.html             # 공간 소개
location.html          # 위치 안내
reservation.html       # 예약 페이지
```

## 에셋 교체 방법
1. `assets/images/cafe` 폴더의 이미지를 동일한 파일명으로 교체합니다.
2. 이미지 비율: 히어로 16:9, 카드 4:3을 권장하며 WebP 형식을 우선 사용하세요.
3. 아이콘이 필요하면 `assets/icons`에 추가 후 HTML에서 경로를 지정합니다.

## 메뉴 데이터 편집
- `menu.html`과 `index.html`의 메뉴 카드는 직접 HTML을 수정하거나,
- 다수의 항목이 필요한 경우 JSON 파일을 만들어 JS로 렌더링할 수 있습니다.

## 배포 가이드
### GitHub Pages
1. 레포지토리를 GitHub에 업로드합니다.
2. Settings → Pages → Branch `main` 선택 → `/cafe-site` 또는 `/root` 설정.
3. 잠시 후 제공되는 URL로 접속합니다.

### Netlify
1. [Netlify](https://www.netlify.com/)에 가입 후 New site from Git.
2. 본 레포를 연결하고 배포 폴더를 `cafe-site`로 지정합니다.

## 개발 메모
- 추가 스크립트나 스타일은 `js/`와 `css/` 폴더에 작성하세요.
- GA4 측정ID(`G-XXXXXXXX`)를 실제 값으로 교체하면 트래킹이 시작됩니다.
- 예약 폼은 카카오 오픈채팅 또는 `mailto:` 링크로 전송됩니다. 백엔드가 없다면 서버 처리 없이 사용 가능합니다.

## 라이선스
본 템플릿은 자유롭게 수정하여 사용할 수 있습니다. 이미지와 폰트는 프로젝트 상황에 맞게 라이선스를 확인하세요.
