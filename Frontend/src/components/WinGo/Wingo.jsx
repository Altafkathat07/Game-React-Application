// import { useState, useEffect } from 'react';

// const Wingo = () => {
//   const countDownDate = new Date('2030-07-16T23:59:59.9999999+01:00').getTime();
//   const [seconds1, setSeconds1] = useState(0);
//   const [seconds2, setSeconds2] = useState(0);

//   useEffect(() => {
//     const intervalId1 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const sec1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const sec2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
//       setSeconds1(sec1);
//       setSeconds2(sec2);
//     }, 0);

//     const intervalId2 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const sec1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const sec2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      
//       if (sec1 === 0 && sec2 <= 5) {
//         playAudio1();
//       }
//       if (sec1 === 5 && sec2 === 9) {
//         playAudio2();
//       }
//     }, 1000);

//     const intervalId3 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const sec1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const sec2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

//       if (sec1 === 0 && sec2 <= 5) {
//         // Handle UI changes when seconds1 is 0 and seconds2 is less than or equal to 5
//         handleUIChanges();
//       }
//     }, 0);

//     return () => {
//       clearInterval(intervalId1);
//       clearInterval(intervalId2);
//       clearInterval(intervalId3);
//     };
//   }, [countDownDate]);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       let check = true;
//       document.querySelectorAll('#history-order .item').forEach(item => {
//         item.addEventListener('click', (e) => {
//           e.preventDefault();
//           let parent = item.parentNode;
//           let myVar = parent.querySelector('.details');
//           if (check) {
//             check = false;
//             myVar.style.display = 'block';
//           } else {
//             check = true;
//             myVar.style.display = 'none';
//           }
//         });
//       });

//       const noticeBarContent = document.querySelector('.van-notice-bar__wrap .van-notice-bar__content');
//       if (noticeBarContent) {
//         noticeBarContent.style.transitionDuration = '48.9715s';
//         noticeBarContent.style.transform = 'translateX(-2448.57px)';
//       }

//       const intervalId = setInterval(() => {
//         if (noticeBarContent) {
//           noticeBarContent.style.transitionDuration = '0s';
//           noticeBarContent.style.transform = 'translateX(0)';
//           setTimeout(() => {
//             noticeBarContent.style.transitionDuration = '48.9715s';
//             noticeBarContent.style.transform = 'translateX(-2448.57px)';
//           }, 100);
//         }
//       }, 48000);

//       const closeButton = document.querySelector('.van-button--default');
//       if (closeButton) {
//         closeButton.addEventListener('click', (e) => {
//           e.preventDefault();
//           document.querySelectorAll('.van-popup-vf, .van-overlay').forEach(el => el.style.display = 'none');
//         });
//       }

//       const circularButton = document.querySelector('.circular');
//       if (circularButton) {
//         circularButton.addEventListener('click', (e) => {
//           e.preventDefault();
//           document.querySelectorAll('.van-popup-vf, .van-overlay').forEach(el => el.style.display = 'block');
//         });
//       }

//       return () => clearInterval(intervalId);
//     }, 1000);

//     return () => clearTimeout(timerId);
//   }, []);

//   const handleUIChanges = () => {
//     // Handle UI changes when seconds1 is 0 and seconds2 is less than or equal to 5
//     document.querySelector('.van-overlay').style.display = 'none';
//     document.querySelector('.popup-join').style.transform = 'translateY(600px)';
//     document.querySelectorAll('.betting-mark .amount-box .li, .multiple-box .li').forEach(el => {
//       el.style.backgroundColor = 'rgb(240, 240, 240)';
//       el.style.color = 'rgb(0, 0, 0)';
//     });
//     document.querySelectorAll('.betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)').forEach(el => {
//       el.style.backgroundColor = 'rgb(240, 240, 240)';
//       el.style.color = 'rgb(255, 255, 255)';
//     });
//     document.querySelector('.stepper-box .digit-box input').value = '1';
//     document.querySelector('.amount-box').setAttribute('data-money', '1');
//     document.querySelector('.foot .right span:eq(1)').textContent = '1000';
//     document.querySelector('.box .mark-box').style.display = 'flex';
//     document.querySelector('.box .mark-box .item:eq(0)').textContent = seconds1;
//     document.querySelector('.box .mark-box .item:eq(1)').textContent = seconds2;
//   };

//   const playAudio1 = () => {
//     console.log('Playing audio 1');
//     // Add logic to play audio 1
//   };

//   const playAudio2 = () => {
//     console.log('Playing audio 2');
//     // Add logic to play audio 2
//   };

  
// };

// export default Wingo;
