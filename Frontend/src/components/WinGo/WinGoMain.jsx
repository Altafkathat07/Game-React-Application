// import { useEffect} from 'react';
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
import "../WinGo/wingo";


// import $ from 'jquery';




function WinGoMain() {

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
