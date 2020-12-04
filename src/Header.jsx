import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
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
      .logo {
        display: flex;
        align-items: center;
        a {
          display: block;
          img {
            width: 20vw;
          }
        }
      }
      .gnb {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        justify-content: flex-end;

        ul {
          width: 600px;
          display: flex;
          justify-content: space-between;

          li {
            padding: 30px 0px;
            a {
              margin-top: 10px;
              display: inline-block;
              font: normal 900 1.5vw/1 'Roboto Slab';
              color: #1d1e21;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    /* header  */
    .main-menu-wrap {
      .header-cont {
        display: block;
        width: 100%;
        .logo {
          justify-content: center;
          a img {
            width: 40vw;
          }
        }
        .gnb {
          margin-top: 20px;
          width: 100%;
          justify-content: center;

          ul {
            width: 90%;
            margin-left: 5%;
            padding: 0px 4%;
            li {
              padding: 5px 0;
              a {
                font-size: 15px;
                margin-bottom: 5px;
              }
            }
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
                <a href='https://blog.naver.com/ddefss1' target='_blank' rel='noopener noreferrer'>
                  WORKS
                </a>
              </li>
              <li>
                <a href='https://blog.naver.com/ddefss1' target='_blank' rel='noopener noreferrer'>
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
          {/* //gnb */}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
