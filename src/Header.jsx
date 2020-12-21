import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 110px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;

  .main-menu-wrap {
    margin-top: 30px;
    border-bottom: 1px solid lightGray;
    .header-cont {
      width: 92%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        h1 a img {
          width: 300px;
            }
          }
        
      
      .gnb {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        ul {
          width: 550px;
          display: flex;
          justify-content: space-between;

          li {
            a {
              display: inline-block;
              font: normal 500 17px/1 'Roboto';
              color: #1d1e21;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    /* header  */
    height: auto;

    .main-menu-wrap {
      margin-top: 0px;

      .header-cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        .logo {
        /* display: flex; */
        width: 50%;
        h1 {
          position: relative;
          padding-top: 30%; /* 50%: 1:1 ratio */
          overflow: hidden;

          a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            -webkit-transform: translate(50%, 50%);
            -ms-transform: translate(50%, 50%);
            transform: translate(50%, 50%);

            img {
              position: absolute;
              top: 0;
              left: 0;
              max-width: 100%;
              height: auto;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
            }
          }
        }
      }
        .gnb {
          width: 100%;
          justify-content: center;
          margin-bottom: 5px;
            width: 80%;
            li {
              a {
                font: normal 500 18px/1 'Roboto';
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    /* header  */
    .main-menu-wrap {
      /* height: 30vw; */
      .header-cont {
        .logo {
          width: 60%;
          h1{
            padding-top: 40%; /* 50%: 1:1 ratio */
          }
        }
        .gnb {
          width: 90%;
          ul li a {
            font: normal 500 4.1vw/1 'Roboto';
            letter-spacing: -0.3px;
          }
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='main-menu-wrap'>
        <div className='header-cont'>
          <div className='logo'>
            <h1>
              <a href='/'>
                <img src='/img/logo.png' alt='로고'></img>
              </a>
            </h1>
          </div>
          {/* //logo */}

          <div className='gnb'>
            <ul>
              <li>
                <Link to={{ pathname: `/` }}>ABOUT</Link>
              </li>
              <li>
                <a
                  href='https://m.blog.naver.com/PostList.nhn?blogId=ddefss1&categoryNo=32&listStyle=style3'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  WORKS
                </a>
              </li>
              <li>
                <a
                  href='https://m.blog.naver.com/PostList.nhn?blogId=ddefss1&categoryNo=26&listStyle=style3'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  BLOG
                </a>
              </li>
              <li>
                <Link to={{ pathname: `/archiving` }}>ARCHIVING</Link>
              </li>
              <li>
                <Link to={{ pathname: `/contact` }}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
