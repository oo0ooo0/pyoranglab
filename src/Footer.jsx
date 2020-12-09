import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  border-top: 1px solid lightGray;
  margin-top: 100px;
  padding: 5px 0px;
  color: gray;
  .footer {
    > div {
      text-align: center;
    }

    div,
    a {
      font-size: 12px;
      color: gray;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer width={100}>
        <div className='footer'>
          <div className='copyWrites'>ⓒ 2020. &nbsp; ANYONGSE |Teaching Artist| . All rights reserved</div>
          <div className='address'>
            <p>
              <a
                href='https://www.facebook.com/profile.php?id=100012313273765'
                target='_blank'
                rel='noopener noreferrer'
              >
                SNS &nbsp;instagram &nbsp; |
              </a>
              <a href='mailto:yongsedu@gmail.com' target='_blank' rel='noopener noreferrer'>
                &nbsp; Email: &nbsp;yongsedu@gmail.com
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
