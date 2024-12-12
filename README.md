# 취준진담 (JobDiary_back)
IT 취업 준비생들을 위한 구인구직 플랫폼(Web)

## 개발환경
* Development Tool : **vscode, github**
* Framework : **React.js(v17), Express.js(v4), mongoose(v6)**
* Library : **React Bootstrap**
* Server : **Node.js**
* DataBase : **mongoDB**

## 개발배경 및 필요성
* Covid-19로 인해 산업 전반에 걸쳐 디지털화가 가속화됨에 따라 IT분야의 수요가 급증하고 있습니다. 사용자가 자신에게 맞는 기업을 추천받을 수 있고, 기업에서도 필요한 개발자 포지션을 찾을 때 원하는 개발 직군을 좀 더 편리하고 빠르게 찾을 수 있습니다.
* 이력서 작성의 부담을 줄여줍니다. 이력서 작성시에 이력서 양식을 알아보고 작성하는 데 많은 시간이 필요합니다. 여러 가지 이력서 형식 중 사용자가 활용도 높은 이력서를 선택하고, 정보를 입력하면 쉽고 빠르게 이력서를 완성 시켜 바로 pdf로 저장할 수 있는 서비스를 제공합니다.
* 많은 취업플랫폼이 있지만 사이트 내에서 이력서 작성 외에 사용자가 활용할 수 있는 부분이 적습니다. 사용자가 채용정보 확인뿐 아니라 자신의 목표를 설정할 수 있고, 준비과정을 일기로 기록하면서 자기개발에 도움을 줄 수 있습니다.

## DB 스키마
<details><summary>Tables</summary>
![image](https://github.com/user-attachments/assets/7b40104c-8058-4cb1-9778-4870103dbd75)

</details>

#### 1. UserInfo
- 회원가입 및 로그인 정보를 저장
- **Columns:**
  - email (VARCHAR, Primary Key): 사용자 이메일
  - username (VARCHAR, NOT NULL): 사용자 이름
  - password (VARCHAR, NOT NULL): 사용자 비밀번호
  - social (ENUM, DEFAULT NULL): 소셜 로그인 방식 (예: google)
 
#### 2. Board
- 게시판 데이터 저장
- **Columns:**
 	- id (INT, Primary Key, Auto Increment): 게시글 고유 ID
	- username (VARCHAR, NOT NULL): 글 작성자 (UserInfousername 참조)
	- title (VARCHAR, NOT NULL): 게시글 제목
	- content (TEXT, NOT NULL): 게시글 내용
	- createAt (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP): 작성 시간

#### 3. Resume
- 사용자의 이력서 데이터 저장
- **Columns:**
	- id (INT, Primary Key, Auto Increment): 이력서 고유 ID
	- username (VARCHAR, NOT NULL): 사용자 ID (UserInfo.username 참조)
	- name (VARCHAR, NOT NULL): 사용자 이름
	- email (VARCHAR, NOT NULL): 사용자 이메일
	- address (VARCHAR): 사용자 주소
	- phone (VARCHAR): 전화번호
	- profile (TEXT): 사용자 프로필
	- techStack (TEXT): 기술 스택

#### 4. Calendar
- 사용자의 일정 저장
- **Columns:**
	- email (VARCHAR, NOT NULL): 사용자 이메일 (UserInfo.email 참조)
	- start (DATETIME, NOT NULL): 일정 시작 시간
	- end (DATETIME, NOT NULL): 일정 종료 시간
	- date (DATE, NOT NULL): 일정 날짜

#### 5. ToDo
- 사용자의 ToDoList 저장
- **Columns:**
	- email (VARCHAR, NOT NULL): 사용자 이메일 (UserInfo.email 참조)
	- date (DATE, NOT NULL): 작업 날짜
	- content (TEXT, NOT NULL): 내용

## 시스템 구조도
![image](https://github.com/user-attachments/assets/e5ce3fde-0446-4071-9a68-a2c9adf10d7b)

### 
<details>
  <summary><h3>참고문헌</h3></summary>
    [1] 조현영, 『Node.js 교과서 개정 2판』, 길벗, 2020. <br/>
    [2] 점핏, “https://www.jumpit.co.kr/”, (최종 접속일: 2022.06.10.) <br/>
    [3] 원티드, “https://www.wanted.co.kr/”, (최종 접속일: 2022.06.10.) <br/>
    [4]“mongoDB Story 3: mongoDB 데이터 모델링”, “https://meetup.toast.com/posts/276”, (최종 접속일: 2022.04.01.)<br/>
    [5] 워크넷, “https://openapi.work.go.kr/opiMain.do/”, (최종 접속일: 2022.04.17.) <br/>
    [6] npm, “https://www.npmjs.com/package/react-pdf/”,(최종 접속일: 2022.04.17.) <br/>
    [7] Mosball, <[자바스크립트] html 화면을 pdf로 내보내기 (jspdf, html2canvas 사용)>,“https://blog.naver.com/rnjsrldnd123/221526274628/”,(최종 접속일: 2022.04.17.)<br/>
    [8] tistory, [React]CORS 에러 해결, “https://developer-talk.tistory.com/91”,(최종 접속일: 2022.06.03.) <br/>
    [9] tistory. CORS문제 ?! 뭔데 우리를 힘들게하나 !! ( cors란, cookie설정 ), “https://heokknkn.tistory.com/12”,(최종 접속일: 2022.06.03.) <br/>
    [10] [node] CORS란? CORS 문제 해결하기, “https://firework-ham.tistory.com/70”,(최종 접속일: 2022.06.10.)<br/>
    [11] CodeAT21, How to Printing and download PDF file in React With React-To-Print,“https://codeat21.com/how-to-printing-and-download-pdf-file-in-react-with-react-to-print/”,(최종 접속일: 2022.06.10.)
</details>
