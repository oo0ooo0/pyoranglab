import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  height: 65vh;
  h2 {
    font-size: 0px;
  }
  .container {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px 0px;
    .contactImg {
      display: flex;
      width: 40%;
      img {
        width: 100%;
      }
    }

    .myform {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      padding: 14px;
      font-size: 15px;
      h4 {
        font-size: 35px;
      }
      address {
        margin: 15px 0px;
      }
    }
  }
  @media (max-width: 960px) {
    .container {
      flex-direction: column;
      .contactImg {
        width: 60%;
      }
      .container {
      }
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <h2 className='title'>Contact</h2>

      <div className='container'>
        <div className='contactImg'>
          <img src='img/contect.jpeg' alt='컨택트 이미지'></img>
        </div>
        <div className='myform'>
          <h4>AN.YONGSE</h4>
          <h5>|Teaching Artist|</h5>
          <p> </p>
          <address>Seoul, Republic of Korea</address>
          <div className='email'>{/* <a href='mailto:yongsedu@gmail.com'>Email: yongsedu@gmail.com</a> */}</div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
