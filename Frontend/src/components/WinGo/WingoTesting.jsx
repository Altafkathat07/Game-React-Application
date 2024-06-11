// import  { useState, useEffect } from 'react';
// import $ from 'jquery'; 
// import io from 'socket.io-client'
// import watcImg1 from "../../assets/images/icon_clock-red.webp"
// import watcImg2 from "../../assets/images/icon_clock-gerrn.webp"

// function showListOrder(list_orders, x) {
//     if (list_orders.length == 0) {
//       return $(`.game-list .con-box:eq(${x}) .hb`).html(
//         `
//                       <div data-v-a9660e98="" class="van-empty">
//                           <div class="van-empty__image">
//                               <img src="/images/empty-image-default.png" />
//                           </div>
//                           <p class="van-empty__description">No data</p>
//                       </div>
//                       `
//       );
//     }
//     let htmls = "";
//     let result = list_orders.map((list_orders) => {
//       return (htmls += `
//                       <div data-v-a9660e98="" class="c-tc item van-row">
//                           <div data-v-a9660e98="" class="van-col van-col--8">
//                               <div data-v-a9660e98="" class="c-tc goItem">${
//                                 list_orders.period
//                               }</div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--5">
//                               <div data-v-a9660e98="" class="c-tc goItem">
                                  
//                                   <span data-v-a9660e98="" class="${
//                                     list_orders.amount % 2 == 0 ? "red" : "green"
//                                   }"> ${list_orders.amount} </span>
//                               </div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--5">
//                               <div data-v-a9660e98="" class="c-tc goItem">
//                                   <span data-v-a9660e98=""> ${
//                                     list_orders.amount < 5 ? "Small" : "Big"
//                                   } </span>
                                
//                               </div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--6">
//                               <div data-v-a9660e98="" class="goItem c-row c-tc c-row-center">
//                                   <div data-v-a9660e98="" class="c-tc c-row box c-row-center">
//                                       <span data-v-a9660e98="" class="li ${
//                                         list_orders.amount % 2 == 0
//                                           ? "red"
//                                           : "green"
//                                       }"></span>
//                                       ${
//                                         list_orders.amount == 0 ||
//                                         list_orders.amount == 5
//                                           ? '<span data-v-a9660e98="" class="li violet"></span>'
//                                           : ""
//                                       }
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                       `);
//     });
//     $(`.game-list .con-box:eq(${x}) .hb`).html(htmls);
//   }

// // function xlad(x, color) {
// //     $(".multiple-box .li").css({
// //       "background-color": "rgb(240, 240, 240)",
// //       color: "rgb(0, 0, 0)",
// //     });
// //     $(`.multiple-box .li:eq(${x})`).css({
// //       "background-color": `${color}`,
// //       color: "rgb(255, 255, 255)",
// //     });
// //   }
  
// //   function selectX(x, color) {
// //     switch (String(x)) {
// //       case "1":
// //         xlad(0, color);
// //         break;
// //       case "5":
// //         xlad(1, color);
// //         break;
// //       case "10":
// //         xlad(2, color);
// //         break;
// //       case "20":
// //         xlad(3, color);
// //         break;
// //       case "50":
// //         xlad(4, color);
// //         break;
// //       case "100":
// //         xlad(5, color);
// //         break;
// //       default:
// //         $(".multiple-box .li").css({
// //           "background-color": "rgb(240, 240, 240)",
// //           color: "rgb(0, 0, 0)",
// //         });
// //         break;
// //     }
// //   }
// // function sleep(ms) {
// //     return new Promise((resolve) => setTimeout(resolve, ms));
// //   }
  
// //   function selectCss(color, bg, text) {
// //     $(".betting-mark").attr("class", "betting-mark");
// //     $(".color").css("color", bg);
// //     $(".color .p-l-10").text(text);
// //     $(".betting-mark").addClass(color);
// //     $(".amount-box .li:eq(0)").css("background-color", bg);
// //     $(".plus").css("background-color", bg);
// //     $(".multiple-box .li:eq(0)").css("background-color", bg);
// //     $(".foot .right").css("background-color", bg);
// //   }
  
// //   function totalMoney() {
// //     let value = $(".stepper-box .digit-box input").val().trim();
// //     let money = $(".amount-box").attr("data-money");
// //     let total = value * money;
// //     $(".foot .right span:eq(1)").text(total + "");
// //   }
  
// //   function alertBox(join, addText) {
// //     $(".foot .right").attr("data-join", join);
// //     switch (join) {
// //       case "x":
// //         selectCss("colorgreen", "rgb(92, 186, 71)", addText);
// //         break;
// //       case "t":
// //         selectCss("colorviolet", "rgb(152, 49, 233)", addText);
// //         break;
// //       case "d":
// //         selectCss("colorred", "rgb(251, 78, 78)", addText);
// //         break;
// //       case "l":
// //         selectCss("colorbig", "rgb(255, 168, 46)", addText);
// //         break;
// //       case "n":
// //         selectCss("colorsmall", "rgb(109, 167, 244)", addText);
// //         break;
// //       default:
// //         if (join % 2 == 0) {
// //           selectCss(`color${join}`, "rgb(251, 78, 78)", addText);
// //         } else {
// //           selectCss(`color${join}`, "rgb(92, 186, 71)", addText);
// //         }
// //         break;
// //     }
// //     $(".van-overlay").fadeIn();
// //     $(".popup-join").fadeIn();
// //     $(".stepper-box .minus").css({
// //       "background-color": "rgb(240, 240, 240)",
// //       color: "rgb(200, 201, 204)",
// //     });
// //     $(".popup-join").css("transform", "translateY(1px)");
// //     let active = $(".random-box .c-row .active").attr("data-x");
// //     let color = $(".foot .right").attr("style").split(":");
// //     color = color[1].split(";")[0].trim();
// //     $(".stepper-box input").val(active);
// //     totalMoney();
// //     selectX(active, color);
// //     if (active <= 1) {
// //       $(".stepper-box .minus").css({
// //         "background-color": "rgb(240, 240, 240)",
// //         color: "rgb(200, 201, 204)",
// //       });
// //     } else {
// //       $(".stepper-box .minus").css({
// //         "background-color": `${color}`,
// //         color: "rgb(255, 255, 255)",
// //       });
// //     }
// //   }

//   function showListOrder3(list_orders, x) {
//     if (list_orders.length == 0) {
//       return $(`.game-list .con-box:eq(${x}) .hb`).html(
//         `
//                       <div data-v-a9660e98="" class="van-empty">
//                           <div class="van-empty__image">
//                               <img src="/images/empty-image-default.png" />
//                           </div>
//                           <p class="van-empty__description">No data</p>
//                       </div>
//                       `
//       );
//     }
//     let htmls = "";
//     let result = list_orders.map((list_orders) => {
//       return (htmls += `
//                       <div data-v-a9660e98="" class="c-tc item van-row">
//                           <div data-v-a9660e98="" class="van-col van-col--8">
//                               <div data-v-a9660e98="" class="c-tc goItem">${list_orders.period
//         }</div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--5">
//                               <div data-v-a9660e98="" class="c-tc goItem">
                                  
//                                   <span data-v-a9660e98="" class="${list_orders.amount % 2 == 0 ? "red" : "green"
//         }"> ${list_orders.amount} </span>
//                               </div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--5">
//                               <div data-v-a9660e98="" class="c-tc goItem">
//                                   <span data-v-a9660e98=""> ${list_orders.amount < 5 ? "Small" : "Big"
//         } </span>
//                               </div>
//                           </div>
//                           <div data-v-a9660e98="" class="van-col van-col--6">
//                               <div data-v-a9660e98="" class="goItem c-row c-tc c-row-center">
//                                   <div data-v-a9660e98="" class="c-tc c-row box c-row-center">
//                                       <span data-v-a9660e98="" class="li ${list_orders.amount % 2 == 0
//           ? "red"
//           : "green"
//         }"></span>
//                                       ${list_orders.amount == 0 ||
//           list_orders.amount == 5
//           ? '<span data-v-a9660e98="" class="li violet"></span>'
//           : ""
//         }
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                       `);
//     });
//     $(`.game-list .con-box:eq(${x}) .hb`).prepend(htmls);
//     $(`.game-list .con-box:eq(${x}) .hb .c-tc`).last().remove();
//   }

// function WingoTesting() {

//   const [listOrders, setListOrders] = useState([]);
//   const [pageInfo, setPageInfo] = useState({ pageno: 0, limit: 10, page: 1 });
// //   const [firstGame, setFirstGame] = useState(null);
//   const [audio1] = useState(new Audio("/audio/di1.da40b233.mp3"));
//   const [audio2] = useState(new Audio("/audio/di2.317de251.mp3"));
//   const [clicked, setClicked] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const socket = io();

//     socket.on("data-server", (msg) => {
//       console.log(msg.data, 'msg');
//       if (msg.data[0].game !== 'wingo') return;

//       $(".Loading").fadeIn(0);
//       setTimeout(() => {
//         const data1 = msg.data[0];
//         const data2 = [msg.data[1]];

//         $(".time-box .info .number").text(data1.period);
//         showListOrder3(data2, 0);
//         setPageInfo({ pageno: 0, limit: 10, page: 1 });

//         $(".Loading").fadeOut(0);
//       }, 1000);
//     });

//     return () => {
//       socket.off("data-server");
//     };
//   }, []);

//   useEffect(() => {
//     fetch("/api/webapi/GetUserInfo")
//       .then((response) => response.json())
//       .then((data) => {
//         $(".Loading").fadeOut(0);
//         if (data.status === false) {
//           return false;
//         }
//         $(".num span").text(`₹ ${data.data.money_user}.00 `);
//       });
//   }, []);

//   const openAudio = () => {
//     audio1.muted = true;
//     // audio1.play();
//     audio2.muted = true;
//     // audio2.play();
//   };

//   $("body").click((e) => {
//     e.preventDefault();
//     if (clicked) return;
//     openAudio();
//     setClicked(true);
//   });

// //   const playAudio1 = () => {
// //     audio1.muted = false;
// //     audio1.play();
// //   };

// //   const playAudio2 = () => {
// //     audio2.muted = false;
// //     audio2.play();
// //   };

// //   const reloadMoney = () => {
// //     $(".reload_money").addClass("action block-click");
// //     setTimeout(() => {
// //       $(".reload_money").removeClass("action block-click");
// //     }, 3000);
// //     fetch("/api/webapi/GetUserInfo")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         if (data.status === false) {
// //         //   unsetCookie();
// //           return false;
// //         }
// //         $(".num span").text(`₹ ${data.data.money_user}.00 `);
// //       });
// //   };

// //   const alertBox = (join, addText) => {
// //     $(".foot .right").attr("data-join", join);
// //     switch (join) {
// //       case "x":
// //         selectCss("colorgreen", "rgb(92, 186, 71)", addText);
// //         break;
// //       case "t":
// //         selectCss("colorviolet", "rgb(152, 49, 233)", addText);
// //         break;
// //       case "d":
// //         selectCss("colorred", "rgb(251, 78, 78)", addText);
// //         break;
// //       case "l":
// //         selectCss("colorbig", "rgb(255, 168, 46)", addText);
// //         break;
// //       case "n":
// //         selectCss("colorsmall", "rgb(109, 167, 244)", addText);
// //         break;
// //       default:
// //         if (join % 2 === 0) {
// //           selectCss(`color${join}`, "rgb(251, 78, 78)", addText);
// //         } else {
// //           selectCss(`color${join}`, "rgb(92, 186, 71)", addText);
// //         }
// //         break;
// //     }
// //     $(".van-overlay").fadeIn();
// //     $(".popup-join").fadeIn();
// //     $(".stepper-box .minus").css({
// //       "background-color": "rgb(240, 240, 240)",
// //       color: "rgb(200, 201, 204)",
// //     });
// //     $(".popup-join").css("transform", "translateY(1px)");
// //     let active = $(".random-box .c-row .active").attr("data-x");
// //     let color = $(".foot .right").attr("style").split(":");
// //     color = color[1].split(";")[0].trim();
// //     $(".stepper-box input").val(active);
// //     totalMoney();
// //     selectX(active, color);
// //     if (active <= 1) {
// //       $(".stepper-box .minus").css({
// //         "background-color": "rgb(240, 240, 240)",
// //         color: "rgb(200, 201, 204)",
// //       });
// //     } else {
// //       $(".stepper-box .minus").css({
// //         "background-color": `${color}`,
// //         color: "rgb(255, 255, 255)",
// //       });
// //     }
// //   };

 

//   useEffect(() => {
//     fetchDataForTab(activeTab);
//   }, [activeTab]);

//   const fetchDataForTab = (tabIndex) => {
//     let url;
//     switch (tabIndex) {
//       case 0:
//         url = "/api/webapi/GetNoaverageEmerdList";
//         break;
//       case 1:
//         url = "/api/webapi/GetMyEmerdList";
//         break;
//       case 2:
//         url = "/api/webapi/GetNoaverageEmerdList";
//         break;
//       default:
//         url = "/api/webapi/GetNoaverageEmerdList";
//     }

//     // Example of AJAX request using fetch API
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: "0",
//         pageto: "10",
//         language: "vi"
//       })
//     })
//     .then(response => response.json())
//     .then(data => {
//       setListOrders(data.data.gameslist);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     //   error.json("something went wrong");
//     });
//   };

// //   const handleTabClick = (tabIndex) => {
// //     setActiveTab(tabIndex);
// //   };



//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   const fetchData = () => {
//     // AJAX request for the first list
//     fetchListOrders("/api/webapi/GetNoaverageEmerdList", 0);
//     // AJAX request for the second list
//     fetchListOrders("/api/webapi/GetMyEmerdList", 1);
//   };

//   const fetchListOrders = (url, index) => {
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: (page - 1) * 10,
//         pageto: "10",
//         language: "vi"
//       })
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (index === 0) {
//         // Update first list
//         $(".time-box .info .number").text(data.period);
//         showListOrder(data.data.gameslist, 0);
//       } else if (index === 1) {
//         // Update second list
//         $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + `${(data.page) ? data.page : '1'}`);
//         showListOrder(data.data.gameslist, 1);
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     //   error.json("something went wrong");
//     });
//   };

// //   const showListOrder = (orders, index) => {
// //     // Logic to render list orders
// //     // You can directly manipulate the DOM elements using jQuery or use React components
// //   };

// //   const handleNextPage = () => {
// //     setPage(page + 1);
// //   };

// //   const handlePrevPage = () => {
// //     setPage(page - 1);
// //   };

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

// // ======================================== OLD ========================================//    
//         // const [pageno, setPageno] = useState(0);
//         // const [limit] = useState(10);
//         // const [page, setPage] = useState(1);
      
//         // useEffect(() => {
//         //   const fetchData = async () => {
//         //     try {
//         //       const response = await $.ajax({
//         //         type: "POST",
//         //         url: "/api/webapi/GetMyEmerdList",
//         //         data: {
//         //           typeid: "1",
//         //           pageno: pageno,
//         //           pageto: "10",
//         //           language: "vi",
//         //         },
//         //         dataType: "json",
//         //       });
//         //       const { data, page } = response;
//         //       $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + `${page ? page : '1'}`);
//         //       showListOrder2(data.gameslist, 1);
//         //     } catch (error) {
//         //       console.error("Error fetching data:", error);
//         //     }
//         //   };
      
//         //   fetchData();
//         // }, [pageno]);
      
//         // const handleNextPage = () => {
//         //   setPageno(prevPageNo => prevPageNo + 10);
//         //   let pageto = limit;
//         //   $.ajax({
//         //     type: "POST",
//         //     url: "/api/webapi/GetNoaverageEmerdList",
//         //     data: {
//         //       typeid: "1",
//         //       pageno: pageno + 10,
//         //       pageto: pageto,
//         //       language: "vi",
//         //     },
//         //     dataType: "json",
//         //     success: function (response) {
//         //       if (response.status === false) {
//         //         setPageno(prevPageNo => prevPageNo - 10);
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").addClass("block-click");
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").removeClass("action");
//         //         $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-right").css("color", "#7f7f7f");
//         //         alertMessJoin(response.msg);
//         //         return false;
//         //       }
//         //       $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("block-click");
//         //       $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("action");
//         //       $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#fff");
//         //       setPage(prevPage => prevPage + 1);
//         //       $(".game-list .con-box:eq(0) .page-nav .number").text(page + "/" + response.page);
//         //       let list_orders = response.data.gameslist;
//         //       $(".time-box .info .number").text(response.period);
//         //       showListOrder(list_orders, 0);
//         //     },
//         //   });
//         // };
      
//         // const handlePrevPage = () => {
//         //   $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").removeClass("block-click");
//         //   $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").addClass("action");
//         //   $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-right").css("color", "#fff");
//         //   setPageno(prevPageNo => prevPageNo - 10);
//         //   let pageto = limit;
//         //   $.ajax({
//         //     type: "POST",
//         //     url: "/api/webapi/GetNoaverageEmerdList",
//         //     data: {
//         //       typeid: "1",
//         //       pageno: pageno - 10,
//         //       pageto: pageto,
//         //       language: "vi",
//         //     },
//         //     dataType: "json",
//         //     success: function (response) {
//         //       if (page - 1 <= 1) {
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("block-click");
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("action");
//         //         $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
//         //       }
//         //       if (response.status === false) {
//         //         setPageno(0);
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("block-click");
//         //         $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("action");
//         //         $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
//         //         alertMessJoin(response.msg);
//         //         return false;
//         //       }
//         //       setPage(prevPage => prevPage - 1);
//         //       $(".game-list .con-box:eq(0) .page-nav .number").text(page + "/" + response.page);
//         //       let list_orders = response.data.gameslist;
//         //       $(".time-box .info .number").text(response.period);
//         //       showListOrder(list_orders, 0);
//         //     },
//         //   });
//         // };
      
//   return (
//     <>
//        <div data-v-a9660e98="" className="box c-row">
//     <div data-v-a9660e98="" className="item c-tc">
//         <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
//             <span data-v-a9660e98="" className="li">?</span>
//         </div>
//         <div data-v-a9660e98="" className=" c-row c-row-center p-b-10">
//             <div data-v-a9660e98="" className="van-image watchImg">
//                 <img src={watcImg1} className="van-image__img" />
//             </div>
//             <div data-v-a9660e98="" className="van-image d-none watchImg">
//                 <img src={watcImg2} className="van-image__img" />
//             </div>
//             <i data-v-a9660e98="" className="triangle"></i>
//         </div>
//         <div data-v-a9660e98="" className="txt c-tc">1 min</div>
//     </div>
//     <div data-v-a9660e98="" className="item c-tc">
//         <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
//             <span data-v-a9660e98="" className="li">?</span>
//         </div>
//         <div data-v-a9660e98="" className=" c-row c-row-center p-b-10" >
//             <div data-v-a9660e98="" className="van-image d-none watchImg">
//                 <img src={watcImg1} className="van-image__img" />
//             </div>
//             <div data-v-a9660e98="" className="van-image watchImg">
//                 <img src={watcImg2} className="van-image__img" />
//             </div>
//             <i data-v-a9660e98="" className="triangle"></i>
//         </div>
//         <div data-v-a9660e98="" className="txt c-tc">3 min</div>
//     </div>
//     <div data-v-a9660e98="" className="item c-tc">
//         <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
//             <span data-v-a9660e98="" className="li">?</span>
//         </div>
//         <div data-v-a9660e98="" className=" c-row c-row-center p-b-10 " >
//             <div data-v-a9660e98="" className="van-image d-none watchImg">
//                 <img src={watcImg1} className="van-image__img" />
//             </div>
//             <div data-v-a9660e98="" className="van-image watchImg">
//                 <img src={watcImg2} className="van-image__img" />
//             </div>
//             <i data-v-a9660e98="" className="triangle"></i>
//         </div>
//         <div data-v-a9660e98="" className="txt c-tc">5 min</div>
//     </div>
//     <div data-v-a9660e98="" className="item c-tc">
//         <div data-v-a9660e98="" className="circular c-row c-row-middle-center c-tc">
//             <span data-v-a9660e98="" className="li">?</span>
//         </div>
//         <div data-v-a9660e98="" className=" c-row c-row-center p-b-10" >
//             <div data-v-a9660e98="" className="van-image d-none watchImg">
//                 <img src={watcImg1} className="van-image__img" />
//             </div>
//             <div data-v-a9660e98="" className="van-image watchImg" >
//                 <img src={watcImg2} className="van-image__img" />
//             </div>
//             <i data-v-a9660e98="" className="triangle"></i>
//         </div>
//         <div data-v-a9660e98="" className="txt c-tc">10 min</div>
//     </div>
//       </div> 
//     </>
//   )
// }

// export default WingoTesting
