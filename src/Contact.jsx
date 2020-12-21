import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  h2 {
    font-size: 0px;
  }
  display: flex;
  justify-content: center;
  .container {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px 0px;
    .thumbnail-wrappper {
      width: 50%;
      .thumbnail {
        position: relative;
        padding-top: 70%; /* 1:1 ratio */
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
      width: 90%;
      padding: 14px;
      font-size: 15px;

      h4 {
        font-size: 35px;
      }
      address {
        margin: 15px 0px;
      }
      .address {
        p a i {
          color: #444;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .container {
      width: 90%;
      flex-direction: column;
      .thumbnail-wrappper {
        width: 70%;
      }
      .myform {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4 {
          font-size: 4vw;
        }
        h5 {
          font-size: 3.2vw;
        }
        address {
          margin: 12px 0px;
        }
        .address p a i {
          color: #666;
        }
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
          <address>Seoul, Republic of Korea</address>
          <div className='address'>
            <p>
              <a href='https://www.instagram.com/an_yongse/' target='_blank' rel='noopener noreferrer'>
                <i class='fab fa-instagram-square fa-3x'></i>
              </a>

              <a
                href='https://www.facebook.com/YONGSEDU
'
                target='_blank'
                rel='noopener noreferrer'
              >
                &nbsp; &nbsp;
                <i class='fab fa-facebook-square fa-3x'></i>
                &nbsp; &nbsp;
              </a>
              <a href='mailto:yongsedu@gmail.com' target='_blank' rel='noopener noreferrer'>
                <i class='fas fa-envelope-square fa-3x'></i>
              </a>
            </p>
          </div>
          <div className='email'>{/* <a href='mailto:yongsedu@gmail.com'>Email: yongsedu@gmail.com</a> */}</div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
