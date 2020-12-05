import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  h2 {
    font-size: 0px;
  }
  .name {
    font-size: 25px;
  }
  main {
    display: flex;
    justify-content: space-between;
  }
  .imageWrap {
    text-align: center;
    width: 40%;
    img {
      width: 100%;
    }
  }
  .textWrap {
    width: 55%;
    text-align: left;
    border-top: 1px solid lightGray;
    border-bottom: 1px solid lightGray;
    padding: 20px;
    h3 {
      font-size: 5vw;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 3vw;
      letter-spacing: 4.2px;
      margin-bottom: 100px;
    }
    p {
      font-size: 20px;
      margin-bottom: 20px;
    }
    ul {
      font-size: 20px;
      margin-top: 10px;
    }
  }

  @media (max-width: 500px) {
    main {
      display: block;
      .imageWrap {
        width: 100%;
      }
      .textWrap {
        border-top: 0px solid lightGray;
        border-bottom: 0px solid lightGray;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h3 {
          font-size: 8vw;
          letter-spacing: 2px;
        }
        h4 {
          font-size: 5vw;
          letter-spacing: 2px;
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
          <img src='/img/about.jpeg' alt='조상작가 이미지' />
        </div>

        <div className='textWrap'>
          <h3 className='name'>ANYONGSE</h3>
          <h4>|Teaching Artist|</h4>
          {/* <h3>안용세</h3> */}
          <p>
            서울예술대학교 연극과 졸업
            <br />
            서울교육대학교 교육전문대학원 교육연극전공 MEd
            <br /> <br />
            현, 창의예술교육 표랑 예술교육가
          </p>
          <p>​</p>
          <ul>
            <li className='solo'>
              Areas of Expertise:
              <ul>
                <li>시민 연극 (Applied Theatre)</li>
                <li>교육 연극 (Drama Education)</li>
                <li>사회 참여 예술 (Socially Engaged Art)</li>
                <li>창의적 움직임 (Creative Movement)</li>
                <li>아동·청소년 연극 (Children’s and Youth Theatre)</li>
              </ul>
            </li>
            <li className='solo'>
              Journals:
              <ul>
                <li>
                  (2020). 창의적 움직임을 적용한 초등 드라마 활동 질적 사례 연구: 라반의 움직임 이론을 중심으로.
                  교육연극학, 12(1), 123-144.
                </li>
              </ul>
            </li>
            <li className='group'>
              Current Projects:
              <ul>
                <li>• 2020 아동.청소년극 ‘오늘도 바람’, 아이들극장 공연 배우</li>
                <li>• 2020 아동.청소년극 ‘보이야르의 노래’, 아이들극장 공연 조연출</li>
                <li>• 2020 ITAC5(International Teaching Artist Conference) ‘만질 수 있는 이야기들’ 워크숍 발제</li>
                <li>• 2020 한국문화예술교육진흥원 베트남 문화예술교육 ODA 사업 운영</li>
                <li>• 2020 T.I.E(Theatre in Education) 관객참여연극 ‘레머디’, 노을소극장 공연 배우</li>
                <li>• 2020 동작문화재단 ‘Me, 예술을 품다’ 동작아트갤러리 워크숍 진행</li>
                <li>• 2020 안산 청소년열정공간99°C ‘만질 수 있는 이야기’ 워크숍 진행</li>
                <li>• 2019 서울문화재단 ‘비밀의 숲, 사라진 아티’, 동작구 서달산 워크숍 진행</li>
                <li>• 2019 백남준아트센터 ‘Global Groove Movement Language’ 워크숍 진행</li>
                <li>• 2019 안산 청소년열정공간99°C ‘생명의 기억’ 워크숍 진행</li>
                <li>• 2018 한국문화예술교육진흥원 베트남 문화예술교육 ODA 사업 운영</li>
                <li>• 2018 T.I.E(Theatre in Education) 관객참여연극 ‘선택’, 서울방송고등학교 공연 배우</li>
                <li>• 2017 한국문화예술교육진흥원 문화예술교육 해외탐방 A-Round 사업 진행</li>
                <li>• 2017 한국문화예술교육진흥원 세계문화예술교육주간 ‘곳간 채우기 프로젝트’ 워크숍 진행</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </StyledAbout>
  );
}

export default About;
