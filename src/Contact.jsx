import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  h2 {
    font-size: 0px;
  }
  .container {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px 0px;
    .thumbnail-wrappper {
      width: 50%;
      .thumbnail {
        position: relative;
        padding-top: 100%; /* 1:1 ratio */
        overflow: hidden;
        .centered {
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
        <div className='thumbnail-wrappper'>
          <div className='thumbnail'>
            <div className='centered'>
              <img src='img/contect.jpeg' alt='컨택트 이미지'></img>
            </div>
          </div>
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
