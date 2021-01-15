import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  border-top: 1px solid lightGray;
  margin-top: 100px;
  padding: 5px 10px;
  color: gray;
  .footer {
    display: block;
  }
  .footer-mobile {
    display: none;
  }
  .footer,
  .footer-mobile {
    > div {
      text-align: center;
    }
    .builtBy {
      margin-top: 5px;
      font-size: 10px;

      > a {
        font-size: 10px;
      }
    }
    p,
    div,
    a {
      font-size: 12px;
      color: gray;
    }
  }

  @media (max-width: 960px) {
    .footer-mobile {
      display: block;
    }
    .footer {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer width={100}>
        <div className='footer'>
          <div className='copyWrites'>
            ⓒ 2020. &nbsp; ANYONGSE |Program Director & Teaching Artist| . All rights reserved
          </div>
          <div className='address'>
            <p>
              <a href='https://www.instagram.com/an_yongse/' target='_blank' rel='noopener noreferrer'>
                instagram
              </a>
              <a href='https://www.facebook.com/physical.drama.edu' target='_blank' rel='noopener noreferrer'>
                &nbsp; &nbsp; facebook &nbsp; &nbsp;
              </a>
              <a
                href='https://www.youtube.com/channel/UC6O8uXe3Cn3Dpcl7ChHutsg'
                target='_blank'
                rel='noopener noreferrer'
              >
                youtube&nbsp;&nbsp;
              </a>
              <a href='mailto:yongsedu@gmail.com' target='_blank' rel='noopener noreferrer'>
                email
              </a>
            </p>
          </div>
          <div className='builtBy'>
            design & built by.{' '}
            <a href='http://oo0ooo0.org' target='_blank' rel='noopener noreferrer'>
              &nbsp;KWONJAMIN
            </a>
          </div>
        </div>

        <div className='footer-mobile'>
          <div className='copyWrites'>
            ⓒ 2020. &nbsp; ANYONGSE . All rights reserved <br />| Program Director & Teaching Artist |
          </div>
          <div className='address'>
            <p>
              <a href='https://www.instagram.com/an_yongse/' target='_blank' rel='noopener noreferrer'>
                instagram
              </a>
              <a href='https://www.facebook.com/physical.drama.edu' target='_blank' rel='noopener noreferrer'>
                &nbsp; &nbsp; facebook &nbsp; &nbsp;
              </a>
              <a
                href='https://www.youtube.com/channel/UC6O8uXe3Cn3Dpcl7ChHutsg'
                target='_blank'
                rel='noopener noreferrer'
              >
                youtube&nbsp;&nbsp;
              </a>
              <a href='mailto:yongsedu@gmail.com' target='_blank' rel='noopener noreferrer'>
                email
              </a>
            </p>
          </div>
          <div className='builtBy'>
            design & built by.{' '}
            <a href='http://oo0ooo0.org' target='_blank' rel='noopener noreferrer'>
              &nbsp;KWONJAMIN
            </a>
          </div>
        </div>
      </LayoutContainer>
    </StyledFooter>
  );
}

export default Footer;
