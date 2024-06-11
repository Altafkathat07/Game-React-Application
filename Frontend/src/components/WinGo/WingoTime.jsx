// import { useEffect} from 'react';
// import $ from 'jquery';
import watcImg1 from "../../assets/images/icon_clock-red.webp"
import watcImg2 from "../../assets/images/icon_clock-gerrn.webp"

function WingoTime() {
    // const [clicked, setClicked] = useState(false);
//   const countDownDate = new Date('2030-07-16T23:59:59.9999999+01:00').getTime();

//   useEffect(() => {
//     const intervalId1 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//     //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

//       $('.number .item:eq(3)').text(seconds1);
//       $('.number .item:eq(4)').text(seconds2);
//     }, 0);

//     const intervalId2 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
      
//       if (seconds1 === 0 && seconds2 <= 5) {
//         playAudio1();
//       }
//       if (seconds1 === 5 && seconds2 === 9 ) {
//         playAudio2();
//       }
//     }, 1000);

//     const intervalId3 = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//       const seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);

//       if (seconds1 === 0 && seconds2 <= 5) {
//         $(".van-overlay").fadeOut();
//         $(".popup-join").css("transform", "translateY(600px)");
//         $(".betting-mark .amount-box .li, .multiple-box .li").css({
//           "background-color": "rgb(240, 240, 240)",
//           color: "rgb(0, 0, 0)",
//         });
//         $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
//           "background-color": "rgb(240, 240, 240)",
//           color: "rgb(255, 255, 255)",
//         });
//         $(".stepper-box .digit-box input").val(1);
//         $(".amount-box").attr("data-money", "1");
//         $(".foot .right span:eq(1)").text(1000 + "");

//         $(".box .mark-box").css("display", "flex");
//         $(".box .mark-box .item:eq(0)").text(seconds1);
//         $(".box .mark-box .item:eq(1)").text(seconds2);
//       } else {
//         $(".box .mark-box").css("display", "none");
//       }
//     }, 0);

//     return () => {
//       clearInterval(intervalId1);
//       clearInterval(intervalId2);
//       clearInterval(intervalId3);
//     };
//   }, [countDownDate]);

//   useEffect(() => {
//     setTimeout(() => {
//       let check = true;
//       $('#history-order .item').click(function (e) {
//         e.preventDefault();
//         let parent = $(this).parent();
//         let myVar = parent.find('.details');
//         if (check) {
//           check = false;
//           myVar.fadeIn(0);
//         } else {
//           check = true;
//           myVar.fadeOut(0);
//         }
//       });
//     }, 1000);

//     $('.van-notice-bar__wrap .van-notice-bar__content').css({
//       'transition-duration': '48.9715s',
//       'transform': 'translateX(-2448.57px)',
//     });
//     const intervalId = setInterval(() => {
//       $('.van-notice-bar__wrap .van-notice-bar__content').css({
//         'transition-duration': '0s',
//         'transform': 'translateX(0)',
//       });
//       setTimeout(() => {
//         $('.van-notice-bar__wrap .van-notice-bar__content').css({
//           'transition-duration': '48.9715s',
//           'transform': 'translateX(-2448.57px)',
//         });
//       }, 100);
//     }, 48000);

//     $('.van-button--default').click(function (e) {
//       e.preventDefault();
//       $('.van-popup-vf, .van-overlay').fadeOut(100);
//     });

//     $('.circular').click(function (e) {
//       e.preventDefault();
//       $('.van-popup-vf, .van-overlay').fadeIn(100);
//     });

//     return () => clearInterval(intervalId);
//   }, []);

//   const playAudio1 = () => {
//     console.log('Playing audio 1');
//   };

//   const playAudio2 = () => {
//     console.log('Playing audio 2');
//   };
  return (
    <>
      <div data-v-a9660e98="" className="box c-row">
    <div data-v-a9660e98="" className="item c-tc">
        <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
            <span data-v-a9660e98="" className="li">?</span>
        </div>
        <div data-v-a9660e98="" className=" c-row c-row-center p-b-10">
            <div data-v-a9660e98="" className="van-image watchImg">
                <img src={watcImg1} className="van-image__img" />
            </div>
            <div data-v-a9660e98="" className="van-image d-none watchImg">
                <img src={watcImg2} className="van-image__img" />
            </div>
            <i data-v-a9660e98="" className="triangle"></i>
        </div>
        <div data-v-a9660e98="" className="txt c-tc">1 min</div>
    </div>
    <div data-v-a9660e98="" className="item c-tc">
        <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
            <span data-v-a9660e98="" className="li">?</span>
        </div>
        <div data-v-a9660e98="" className=" c-row c-row-center p-b-10" >
            <div data-v-a9660e98="" className="van-image d-none watchImg">
                <img src={watcImg1} className="van-image__img" />
            </div>
            <div data-v-a9660e98="" className="van-image watchImg">
                <img src={watcImg2} className="van-image__img" />
            </div>
            <i data-v-a9660e98="" className="triangle"></i>
        </div>
        <div data-v-a9660e98="" className="txt c-tc">3 min</div>
    </div>
    <div data-v-a9660e98="" className="item c-tc">
        <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
            <span data-v-a9660e98="" className="li">?</span>
        </div>
        <div data-v-a9660e98="" className=" c-row c-row-center p-b-10 " >
            <div data-v-a9660e98="" className="van-image d-none watchImg">
                <img src={watcImg1} className="van-image__img" />
            </div>
            <div data-v-a9660e98="" className="van-image watchImg">
                <img src={watcImg2} className="van-image__img" />
            </div>
            <i data-v-a9660e98="" className="triangle"></i>
        </div>
        <div data-v-a9660e98="" className="txt c-tc">5 min</div>
    </div>
    <div data-v-a9660e98="" className="item c-tc">
        <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
            <span data-v-a9660e98="" className="li">?</span>
        </div>
        <div data-v-a9660e98="" className=" c-row c-row-center p-b-10" >
            <div data-v-a9660e98="" className="van-image d-none watchImg">
                <img src={watcImg1} className="van-image__img" />
            </div>
            <div data-v-a9660e98="" className="van-image watchImg" >
                <img src={watcImg2} className="van-image__img" />
            </div>
            <i data-v-a9660e98="" className="triangle"></i>
        </div>
        <div data-v-a9660e98="" className="txt c-tc">10 min</div>
    </div>
      </div> 
    </>
  )
}

export default WingoTime
