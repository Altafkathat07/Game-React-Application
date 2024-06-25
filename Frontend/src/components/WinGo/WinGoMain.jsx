import { useEffect} from 'react';
import Footer from "../Home/Footer"
import Header from "../Home/Header"
import '../../assets/home/css/index.css'
import '../../assets/home/css/login.css'
import '../../assets/home/css/wingo.css'
import WinGoInfo from "./WinGoInfo"
import WingoTime from "./WingoTime"
import WinGoPeriod from "./WinGoPeriod"
import WinGoList from "./WinGoList"
import WingoJoin from "./WingoJoin"
import "./Wingo.jsx";
// import { io } from 'socket.io-client';
import $ from 'jquery';




function WinGoMain() {
  const countDownDate = new Date('2030-07-16T23:59:59.9999999+01:00').getTime();

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
    //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
      const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

      $('.number .item:eq(3)').text(seconds1);
      $('.number .item:eq(4)').text(seconds2);
    //   console.log("complete");
    }, 0);

    $(".van-overlay, .foot .left").click(function (e) {
      e.preventDefault();
      $(".van-overlay").fadeOut();
      $('.van-popup-vf').fadeOut(100);
      $(".popup-join").css("transform", "translateY(600px)");
      $(".betting-mark .amount-box .li, .multiple-box .li").css({
        "background-color": "rgb(240, 240, 240)",
        color: "rgb(0, 0, 0)",
      });
      $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
        "background-color": "rgb(240, 240, 240)",
        color: "rgb(255, 255, 255)",
      });
      $(".stepper-box .digit-box input").val(1);
      $(".amount-box").attr("data-money", "1");
      $(".foot .right span:eq(1)").text(1000 + "");
    });

    

    const intervalId2 = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
      const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      
      if (seconds1 === 0 && seconds2 <= 5) {
        playAudio1();
      }
      if (seconds1 === 5 && seconds2 === 9 ) {
        playAudio2();
      }
    //   console.log("complete 2");
      

    }, 1000);

    const intervalId3 = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
      const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

      if (seconds1 === 0 && seconds2 <= 5) {

        $(".van-overlay").fadeOut();
        $(".popup-join").css("transform", "translateY(600px)");
        $(".betting-mark .amount-box .li, .multiple-box .li").css({
          "background-color": "rgb(240, 240, 240)",
          color: "rgb(0, 0, 0)",
        });
        $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
          "background-color": "rgb(240, 240, 240)",
          color: "rgb(255, 255, 255)",
        });
        $(".stepper-box .digit-box input").val(1);
        $(".amount-box").attr("data-money", "1");
        $(".foot .right span:eq(1)").text(1000 + "");

        $(".box .mark-box").css("display", "flex");
        $(".box .mark-box .item:eq(0)").text(seconds1);
        $(".box .mark-box .item:eq(1)").text(seconds2);
      } else {
        $(".box .mark-box").css("display", "none");
      }
    //   console.log("complete 3");
    }, 0);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [countDownDate]);

  useEffect(() => {
    setTimeout(() => {
      let check = true;
      $('#history-order .item').click(function (e) {
        e.preventDefault();
        let parent = $(this).parent();
        let myVar = parent.find('.details');
        if (check) {
          check = false;
          myVar.fadeIn(0);
        } else {
          check = true;
          myVar.fadeOut(0);
        }
      });
    }, 1000);

    $('.van-notice-bar__wrap .van-notice-bar__content').css({
      'transition-duration': '48.9715s',
      'transform': 'translateX(-2448.57px)',
    });
    const intervalId = setInterval(() => {
      $('.van-notice-bar__wrap .van-notice-bar__content').css({
        'transition-duration': '0s',
        'transform': 'translateX(0)',
      });
      setTimeout(() => {
        $('.van-notice-bar__wrap .van-notice-bar__content').css({
          'transition-duration': '48.9715s',
          'transform': 'translateX(-2448.57px)',
        });
      }, 100);
    }, 48000);

    $('.van-button--default').click(function (e) {
      e.preventDefault();
      $('.van-popup-vf, .van-overlay').fadeOut(100);
    });

    $('.circular').click(function (e) {
      e.preventDefault();
      $('.van-popup-vf, .van-overlay').fadeIn(100);
    });

    return () => clearInterval(intervalId);
  }, []);

  
  const playAudio1 = () => {
    console.log('Playing audio 1');
  };

  const playAudio2 = () => {
    console.log('Playing audio 2');
  };

  // useEffect(() => {
  //   const socket = io();

  //   // Function to show list order 3
  //   const showListOrder3 = (list_orders, x) => {
  //     const gameList = document.querySelectorAll('.game-list .con-box');
  //     if (list_orders.length === 0) {
  //       const html = `
  //         <div data-v-a9660e98="" class="van-empty">
  //           <div class="van-empty__image">
  //             <img src="/images/empty-image-default.png" />
  //           </div>
  //           <p class="van-empty__description">No data</p>
  //         </div>
  //       `;
  //       gameList[x].querySelector('.hb').innerHTML = html;
  //       return;
  //     }

  //     let htmls = '';
  //     list_orders.forEach(list_order => {
  //       htmls += `
  //         <div data-v-a9660e98="" class="c-tc item van-row">
  //           <div data-v-a9660e98="" class="van-col van-col--8">
  //             <div data-v-a9660e98="" class="c-tc goItem">${list_order.period}</div>
  //           </div>
  //           <div data-v-a9660e98="" class="van-col van-col--5">
  //             <div data-v-a9660e98="" class="c-tc goItem">
  //               <span data-v-a9660e98="" class="${list_order.amount % 2 === 0 ? 'red' : 'green'}">${list_order.amount}</span>
  //             </div>
  //           </div>
  //           <div data-v-a9660e98="" class="van-col van-col--5">
  //             <div data-v-a9660e98="" class="c-tc goItem">
  //               <span data-v-a9660e98="">${list_order.amount < 5 ? 'Small' : 'Big'}</span>
  //             </div>
  //           </div>
  //           <div data-v-a9660e98="" class="van-col van-col--6">
  //             <div data-v-a9660e98="" class="goItem c-row c-tc c-row-center">
  //               <div data-v-a9660e98="" class="c-tc c-row box c-row-center">
  //                 <span data-v-a9660e98="" class="li ${list_order.amount % 2 === 0 ? 'red' : 'green'}"></span>
  //                 ${list_order.amount === 0 || list_order.amount === 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : ''}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       `;
  //     });

  //     gameList[x].querySelector('.hb').insertAdjacentHTML('afterbegin', htmls);
  //     gameList[x].querySelector('.hb .c-tc:last-child').remove();
  //   };

  //   // Socket listener for 'data-server' event
  //   socket.on('data-server', async function (msg) {
  //     console.log(msg.data, 'msg');
  //     if (msg.data[0].game !== 'wingo') return;
  //     document.querySelector('.Loading').style.display = 'block';
  //     await new Promise(resolve => setTimeout(resolve, 1000));

  //     let data1 = msg.data[0];
  //     let data2 = [msg.data[1]];

  //     document.querySelector('.time-box .info .number').textContent = data1.period;
  //     showListOrder3(data2, 0);

  //     let pageno = 0;
  //     let limit = 10;
  //     let page = 1;

  //     const conBoxes = document.querySelectorAll('.game-list .con-box');
  //     conBoxes.forEach((box) => {
  //       const pageNav = box.querySelector('.page-nav');
  //       pageNav.querySelector('.arr:eq(0)').classList.add('block-click');
  //       pageNav.querySelector('.arr:eq(0)').classList.remove('action');
  //       pageNav.querySelector('.van-icon-arrow-left').style.color = '#7f7f7f';
  //       pageNav.querySelector('.arr:eq(1)').classList.remove('block-click');
  //       pageNav.querySelector('.arr:eq(1)').classList.add('action');
  //       pageNav.querySelector('.van-icon-arrow-right').style.color = '#fff';
  //     });

  //     // Fetch request to '/api/webapi/GetMyEmerdList'
  //     await fetch('/api/webapi/GetMyEmerdList', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         typeid: '1',
  //         pageno: '0',
  //         pageto: '10',
  //         language: 'vi'
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       let data = response.data.gameslist;
  //       document.querySelector('.game-list .con-box:eq(1) .page-nav .number').textContent = `1/${response.page ? response.page : '1'}`;
  //       let firstGame = data[0];
  //       let lastGame = data[data.length - 1];
  //       console.log(lastGame);
  //       console.log(firstGame);
  //       // showListOrder2(data, 1);

  //       return fetch('/api/webapi/GetNoaverageEmerdList', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           typeid: '1',
  //           pageno: '0',
  //           pageto: '10',
  //           language: 'vi'
  //         })
  //       });
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       let list_orders = response.data.gameslist;
  //       document.querySelector('.time-box .info .number').textContent = response.period;
  //       document.querySelector('.game-list .con-box:eq(0) .page-nav .number').textContent = `1/${response.page}`;
  //       let data = '';
  //       let firstGame = data[0];
  //       if (firstGame && firstGame.stage === list_orders[0].period) {
  //         let modal = document.getElementById('myModal');
  //         modal.style.display = 'block';
  //         let myModalheader = document.getElementById('myModal_header');
  //         let myModal_result = document.getElementById('myModal_result');
  //         let lottery_result = document.getElementById('lottery_result');
  //         let myModal_result_Period = document.getElementById('myModal_result_Period');

  //         if (firstGame.get === 0) {
  //           myModalheader.textContent = 'Try Again 🥺';
  //           myModal_result.textContent = `LOSS : ${firstGame.money}`;
  //         } else {
  //           myModalheader.textContent = 'Winning 🥇';
  //           myModal_result.textContent = `WIN : ${firstGame.get}`;
  //         }

  //         myModal_result_Period.textContent = `Period : 1min ${firstGame.stage}`;

  //         let color, type;

  //         if (firstGame.result >= 0 && firstGame.result <= 4) {
  //           type = 'Small';
  //         } else if (firstGame.result >= 5 && firstGame.result <= 9) {
  //           type = 'Big';
  //         }

  //         if (firstGame.result == 0) {
  //           color = 'Red + Violet';
  //         } else if (firstGame.result == 5) {
  //           color = 'Green + Violet';
  //         } else if (firstGame.result % 2 === 0) {
  //           color = 'Red';
  //         } else {
  //           color = 'Green';
  //         }

  //         lottery_result.innerHTML = `Lottery Result:<span class='btn-boox'>${color}</span><span class='btn-boox'>${firstGame.result}</span><span class='btn-boox'>${type}</span>`;
  //       }

  //       // showListOrder(list_orders, 0);
  //       // showListOrder_t(list_orders, 2);
  //     })
  //     .catch(error => console.error('Error:', error))
  //     .finally(() => {
  //       document.querySelector('.Loading').style.display = 'none';
  //     });
  //   });

  //   // Function to show alert message
  //   const alertMessJoin = (msg) => {
  //     document.body.insertAdjacentHTML(
  //       "beforeend",
  //       `
  //       <div class="msg">
  //         <div class="msg-content v-enter-active v-enter-to">${msg}</div>
  //       </div>
  //       `
  //     );
  //     setTimeout(() => {
  //       document.querySelector(".msg .msg-content").classList.remove("v-enter-active", "v-enter-to");
  //       document.querySelector(".msg .msg-content").classList.add("v-leave-active", "v-leave-to");
  //       setTimeout(() => {
  //         document.querySelector("body .msg").remove();
  //       }, 500);
  //     }, 1000);
  //   };

  //   // Event listener for right element click
  //   document.addEventListener("DOMContentLoaded", function () {
  //     let rightElement = document.querySelector(".foot .right");
  //     if (rightElement) {
  //       rightElement.addEventListener("click", function (e) {
  //         e.preventDefault();
  //         let join = this.getAttribute("data-join");
  //         let x = document.querySelector(".stepper-box input").value.trim();
  //         let money = document.querySelector(".amount-box").getAttribute("data-money");
  //         if (!join || !x || !money) {
  //           return;
  //         }
  //         this.classList.add("block-click");
  //         let formData = new FormData();
  //         formData.append("typeid", "1");
  //         formData.append("join", join);
  //         formData.append("x", x);
  //         formData.append("money", money);

  //         fetch("/api/webapi/action/join", {
  //           method: "POST",
  //           body: formData
  //         })
  //         .then(response => response.json())
  //         .then(response => {
  //           if (response.code === 0) {
  //             alertMessJoin("Invalid period!");
  //           } else {
  //             console.log(response.msg);
  //             this.classList.add("action");
  //             document.querySelector(".popover").classList.remove("v-enter-active", "v-enter-to");
  //             document.querySelector(".popover").classList.add("v-leave-active", "v-leave-to");
  //             setTimeout(() => {
  //               document.querySelector(".popover").remove();
  //             }, 500);
  //           }
  //         })
  //         .catch(error => console.error("Error:", error));
  //       });
  //     }
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  // useEffect(() => {
  //     const script = document.createElement('script');
  //     script.src = '../WinGo/wingo.js';
  //     script.async = true;
  //     document.body.appendChild(script);

  //     return () => {
  //         document.body.removeChild(script);
  //     };
  // }, []); 
  // const countDownDate = new Date('2030-07-16T23:59:59.9999999+01:00').getTime();

  // useEffect(() => {
  //   const intervalId1 = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //   //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
  //     const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

  //     $('.number .item:eq(3)').text(seconds1);
  //     $('.number .item:eq(4)').text(seconds2);
  //   }, 0);

  //   const intervalId2 = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
  //     const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      
  //     if (seconds1 === 0 && seconds2 <= 5) {
  //       playAudio1();
  //     }
  //     if (seconds1 === 5 && seconds2 === 9 ) {
  //       playAudio2();
  //     }
  //   }, 1000);

  //   const intervalId3 = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
  //     const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

  //     if (seconds1 === 0 && seconds2 <= 5) {
  //       $(".van-overlay").fadeOut();
  //       $(".popup-join").css("transform", "translateY(600px)");
  //       $(".betting-mark .amount-box .li, .multiple-box .li").css({
  //         "background-color": "rgb(240, 240, 240)",
  //         color: "rgb(0, 0, 0)",
  //       });
  //       $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
  //         "background-color": "rgb(240, 240, 240)",
  //         color: "rgb(255, 255, 255)",
  //       });
  //       $(".stepper-box .digit-box input").val(1);
  //       $(".amount-box").attr("data-money", "1");
  //       $(".foot .right span:eq(1)").text(1000 + "");

  //       $(".box .mark-box").css("display", "flex");
  //       $(".box .mark-box .item:eq(0)").text(seconds1);
  //       $(".box .mark-box .item:eq(1)").text(seconds2);
  //     } else {
  //       $(".box .mark-box").css("display", "none");
  //     }
  //   }, 0);

  //   return () => {
  //     clearInterval(intervalId1);
  //     clearInterval(intervalId2);
  //     clearInterval(intervalId3);
  //   };
  // }, [countDownDate]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     let check = true;
  //     $('#history-order .item').click(function (e) {
  //       e.preventDefault();
  //       let parent = $(this).parent();
  //       let myVar = parent.find('.details');
  //       if (check) {
  //         check = false;
  //         myVar.fadeIn(0);
  //       } else {
  //         check = true;
  //         myVar.fadeOut(0);
  //       }
  //     });
  //   }, 1000);

  //   $('.van-notice-bar__wrap .van-notice-bar__content').css({
  //     'transition-duration': '48.9715s',
  //     'transform': 'translateX(-2448.57px)',
  //   });
  //   const intervalId = setInterval(() => {
  //     $('.van-notice-bar__wrap .van-notice-bar__content').css({
  //       'transition-duration': '0s',
  //       'transform': 'translateX(0)',
  //     });
  //     setTimeout(() => {
  //       $('.van-notice-bar__wrap .van-notice-bar__content').css({
  //         'transition-duration': '48.9715s',
  //         'transform': 'translateX(-2448.57px)',
  //       });
  //     }, 100);
  //   }, 48000);

  //   $('.van-button--default').click(function (e) {
  //     e.preventDefault();
  //     $('.van-popup-vf, .van-overlay').fadeOut(100);
  //   });

  //   $('.circular').click(function (e) {
  //     e.preventDefault();
  //     $('.van-popup-vf, .van-overlay').fadeIn(100);
  //   });

  //   return () => clearInterval(intervalId);
  // }, []);

  // const playAudio1 = () => {
  //   console.log('Playing audio 1');
  // };

  // const playAudio2 = () => {
  //   console.log('Playing audio 2');
  // };
  return (
    <>
       <div id="app">
		<div data-v-432e6ed0="" className="home mian game" id="application">
            <Header />
            <WinGoInfo />
            <div data-v-a9660e98="" className="game-betting">
                <div data-v-a9660e98="" className="tab">
                    <WingoTime />
                    {/* <WingoTesting /> */}
                </div>
            </div>
            <WinGoPeriod />
            <div data-v-a9660e98="" className="game-list p-b-20 pb-4">
            <WinGoList/>
            <WingoJoin />
            </div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default WinGoMain
