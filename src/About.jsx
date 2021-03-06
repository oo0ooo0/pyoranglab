import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  @keyframes hideSplashScreen {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 0.2;
    }
    90% {
      opacity: 0.1;
    }
    95% {
      opacity: 0.05;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
  #splash-screen {
    background-color: white;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120px;
    animation: hideSplashScreen 0.7s ease-in-out forwards;
    animation-delay: 1s;
    z-index: 100;
    img {
      width: 56%;
      height: auto;
    }
  }

  h2 {
    font-size: 0px;
  }
  .name {
    font-size: 25px;
  }
  main {
    display: flex;
    justify-content: space-between;

    .imageWrap {
      text-align: center;
      width: 40%;
      img {
        width: 100%;
      }
    }
    .textWrap {
      width: 50%;
      text-align: left;
      border-top: 1px solid lightGray;
      border-bottom: 1px solid lightGray;
      padding: 20px;
      color: #383838;
      h3 {
        font: normal 500 30px/34px 'Roboto';
        letter-spacing: 5px;
        margin: 50px 0px 16px 0px;
        color: #383838;
      }
      h4 {
        font: normal 500 28px/32px 'Roboto';
        color: #383838;
        margin: 0px 0px 30px 0px;
      }
      h5 {
        font: normal 400 24px/32px 'Roboto';
        color: #383838;
      }
      h6 {
        font: normal 400 24px/32px 'Roboto';
        margin: 0px 0px 60px 0px;
      }
      p {
        color: #383838;
        font: normal 500 23px/30px 'Roboto';
        margin-bottom: 150px;
      }
      ul {
        font: normal 400 23px/30px 'Roboto';
        margin-top: 15px;
        > li {
          font: normal 400 19px/30px 'Roboto';
          line-height: 32px;
          li {
            list-style: circle;
            margin-left: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .textWrap {
      ul li li {
        list-style: circle;
        text-align: left;
        margin-left: 30px;
      }
    }
  }

  @media (max-width: 640px) {
    main {
      display: block;
      display: flex;
      flex-direction: column;
      .imageWrap {
        width: 100%;
      }
      .textWrap {
        border-top: 0px solid lightGray;
        border-bottom: 0px solid lightGray;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-flex-start;
        h3,
        h4 {
          font-size: 6vw;
          letter-spacing: 2px;
          line-height: 1;
        }
        h5,
        h6 {
          line-height: 1.4;
          font-size: 4vw;
          letter-spacing: 2px;
        }
        h6 {
          margin-bottom: 30px;
        }
        > p {
          font-size: 4vw;
          line-height: 1.4;
          margin-bottom: 15vw;
        }
        ul {
          font: normal 400 3.8vw/50px 'Roboto';
          li {
            font: normal 400 3.8vw/1.5 'Roboto';
          }
          li li {
            list-style: circle;
          }
        }
      }
    }
  }
`;

function About() {
  return (
    <StyledAbout>
      <h2 className='title'>About</h2>

      <main>
        <div className='imageWrap'>
          <img src='/img/about.jpeg' alt='Anyongse img' />
        </div>

        <div className='textWrap'>
          <h3>안용세</h3>
          <h4 className='name'>AN YONGSE,</h4>
          <h5>Creative Arts & Education</h5>
          <h6>Program Director & Teaching Artist</h6>
          <p>
            서울예술대학교 공연학부 연극과 졸업
            <br />
            서울교육대학교 교육전문대학원 교육연극전공 MEd
            <br /> <br />
            현, 성남문화재단 창의교육팀 예술교육가
          </p>
          <ul>
            <li className='expertise'>
              <ul>
                Areas of Expertise:
                <li>시민 연극 (Applied Theatre)</li>
                <li>교육 연극 (Drama Education)</li>
                <li>창의적 움직임 드라마 (Creative Movement in Drama)</li>
                <li>사회 참여 예술 교육 (Socially Engaged Arts Education)</li>
                <li>아동·청소년 연극 (Children’s and Youth Theatre)</li>
              </ul>
            </li>
            <li className='solo'>
              <ul>
                Journals:
                <li>
                  (2020). 창의적 움직임을 적용한 초등 드라마 활동 질적 사례 연구: 라반의 움직임 이론을 중심으로.
                  교육연극학, 12(1), 123-144.
                </li>
              </ul>
            </li>
            <li className='group'>
              <ul>
                Current Projects:
                <li> 2020 아동.청소년극 ‘오늘도 바람’, 아이들극장 공연 배우</li>
                <li> 2020 아동.청소년극 ‘보이야르의 노래’, 아이들극장 공연 조연출</li>
                <li> 2020 ITAC5(International Teaching Artist Conference) ‘만질 수 있는 이야기들’ 워크숍 발제</li>
                <li> 2020 한국문화예술교육진흥원 베트남 문화예술교육 ODA 사업 운영</li>
                <li> 2020 T.I.E(Theatre in Education) 관객참여연극 ‘레머디’, 노을소극장 공연 배우</li>
                <li> 2020 동작문화재단 ‘Me, 예술을 품다’ 동작아트갤러리 워크숍 진행</li>
                <li> 2020 안산 청소년열정공간99°C ‘만질 수 있는 이야기’ 워크숍 진행</li>
                <li> 2019 서울문화재단 ‘비밀의 숲, 사라진 아티’, 동작구 서달산 워크숍 진행</li>
                <li> 2019 백남준아트센터 ‘Global Groove Movement Language’ 워크숍 진행</li>
                <li> 2019 안산 청소년열정공간99°C ‘생명의 기억’ 워크숍 진행</li>
                <li> 2018 한국문화예술교육진흥원 베트남 문화예술교육 ODA 사업 운영</li>
                <li> 2018 T.I.E(Theatre in Education) 관객참여연극 ‘선택’, 서울방송고등학교 공연 배우</li>
                <li> 2017 한국문화예술교육진흥원 문화예술교육 해외탐방 A-Round 사업 진행</li>
                <li> 2017 한국문화예술교육진흥원 세계문화예술교육주간 ‘곳간 채우기 프로젝트’ 워크숍 진행</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
      <div id='splash-screen'>
        <img src='/img/logohorise.png' alt='Anyongse img' />
      </div>
    </StyledAbout>
  );
}

export default About;
