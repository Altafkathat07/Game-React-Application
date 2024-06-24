import WinGoBet from "./WinGoBet"
import { useEffect} from 'react';
import $ from 'jquery';


function WinGoPeriod() {
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

  return (
    <>
      <div data-v-a9660e98="" className="content">
          <div data-v-a9660e98="" className="time-box c-row c-row-between m-b-10">
            <div data-v-a9660e98="" className="info">
              <div data-v-a9660e98="" className="txt per"> Period</div>
              <div data-v-a9660e9800="" className="number">2022062610925</div>
            </div>
            <div data-v-a9660e98="" className="out">
              <div data-v-a9660e98="" className="txt">
                Time Left
              </div>
              <div data-v-a9660e98="" className="number c-row c-row-middle c-flew-end">
                <div data-v-a9660e981="" className="item">0</div>
                <div data-v-a9660e981="" className="item">0</div>
                <div data-v-a9660e9="" className="item c-row c-row-middle">
                  :
                </div>
                <div data-v-a9660e981="" className="item">0</div>
                <div data-v-a9660e981="" className="item">0</div>
              </div>
            </div>
          </div>
          <WinGoBet />
        </div>
    </>
  )
}

export default WinGoPeriod
