<div align='center'>
<h1> 🎮 Joe's Arcade 🎮 </h1>

![img.png](readme_img/main.png)

<h3> 🕹️ Joe's Arcade는 모 프로그램의 컨텐츠에 착안하여 만든 웹 게임이며,<br>
인물 퀴즈, 네글자 이어말하기가 있습니다.</h3>
</div>

<br>



<br>


## 🛠️ Stacks

<img src="https://img.shields.io/badge/-Java-05122A?style=flat&logo=java"/>
<img src="https://img.shields.io/badge/-Springboot-05122A?style=flat&logo=Springboot"/>
<br>
<img src="https://img.shields.io/badge/-node.Js-05122A?style=flat&logo=Node.js"/>
<img src="https://img.shields.io/badge/-react-05122A?style=flat&logo=React"/>
<br>
<img src="https://img.shields.io/badge/-aws-05122A?style=flat&logo=amazonaws"/>
<img src="https://img.shields.io/badge/-mysql-05122A?style=flat&logo=mysql"/>
<br>



## ✨ [서비스 메뉴얼](https://github.com/codestates-seb/seb45_main_022/files/12685723/Code.Status.2.pdf)

| 1. 메인 페이지           |
|---------------------|
| ![img.png](readme_img/main.png) |

| 2-1. 도움말 팝업               | 2-2. 문제 유형 선택 팝업       |
|---|---|
| ![img_1.png](readme_img/helpme_popup.png)   | ![img_2.png](readme_img/choice_popup.png) |

| 3. 인 게임 화면|
|---|
| ![img_3.png](readme_img/ingame_page.png) |

| 4. 게임 종료 팝업 |
|-------------------------|
| ![img_4.png](readme_img/ending_popup.png) |

<br>


## ✨ 기능 시연 영상
![bandicam 2023-11-07 17-05-38-824.gif](..%2F..%2F..%2FUsers%2Fjjo3y%2FDownloads%2Fbandicam%202023-11-07%2017-05-38-824.gif)


## ✨ 구현 내용
- react, spring boot 활용한 프론트, 백엔드 개발
- 반응형 웹 구현
- ec2 내 로컬 mysql, 로컬 이미지 저장소 사용 
- ec2 서버 배포

## ✨ 주요 기능
### 1. 반응형 웹 구현

>window Height, window width를 사용해 직접 반응형 웹을 구현했습니다.

| 가로로 길때                  | 새로로 길때                |
|-------------------------|-----------------------|
| ![img_5.png](readme_img/responsive_width.png) | ![img_7.png](readme_img/responsive_height.png) |

### 2. 이미지 업로드 시 로컬 이미지 저장소 사용

인물 맞추기용 이미지 업로드 시 서버의 로컬 저장소에 저장되게 했습니다.
> 이미지 저장 비용과 s3 구축 및 운용 비용을 비교하여 로컬 저장소에 이미지를 저장하게 했습니다.


### 3. 문제 무작위 출제

문제를 요청할 때 문제를 무작위로 출제하도록 하였습니다.
> 문제 요청 시 여태 받았던 문제의 id들을 request 파라미터로 넘겨 <br>
> 해당 id 들을 제외한 나머지 중에 무작위로 문제를 출제하게 했습니다.

## ✨ 후기

react를 사용한 프론트 개발을 처음 해 보면서 프론트 개발자의 관점으로<br>
눈에 보이는 것과 관련한 사용자 경험을 생각해 볼 수 있었습니다.<br>
ec2 로컬 이미지 저장소, 로컬 mysql의 비용과 rds, s3 비용을 비교하여 <br>
서버 비용을 줄이는 고민을 해 봤습니다.