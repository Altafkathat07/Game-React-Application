// import io from "socket.io-client"

// function showListOrder3(list_orders, x) {
//     const gameList = document.querySelectorAll('.game-list .con-box');
//     if (list_orders.length === 0) {
//       const html = `
//         <div data-v-a9660e98="" class="van-empty">
//             <div class="van-empty__image">
//                 <img src="/images/empty-image-default.png" />
//             </div>
//             <p class="van-empty__description">No data</p>
//         </div>
//       `;
//       gameList[x].querySelector('.hb').innerHTML = html;
//       return;
//     }
    
//     let htmls = '';
//     list_orders.forEach(list_order => {
//       htmls += `
//         <div data-v-a9660e98="" class="c-tc item van-row">
//             <div data-v-a9660e98="" class="van-col van-col--8">
//                 <div data-v-a9660e98="" class="c-tc goItem">${list_order.period}</div>
//             </div>
//             <div data-v-a9660e98="" class="van-col van-col--5">
//                 <div data-v-a9660e98="" class="c-tc goItem">
//                     <span data-v-a9660e98="" class="${list_order.amount % 2 === 0 ? 'red' : 'green'}">${list_order.amount}</span>
//                 </div>
//             </div>
//             <div data-v-a9660e98="" class="van-col van-col--5">
//                 <div data-v-a9660e98="" class="c-tc goItem">
//                     <span data-v-a9660e98="">${list_order.amount < 5 ? 'Small' : 'Big'}</span>
//                 </div>
//             </div>
//             <div data-v-a9660e98="" class="van-col van-col--6">
//                 <div data-v-a9660e98="" class="goItem c-row c-tc c-row-center">
//                     <div data-v-a9660e98="" class="c-tc c-row box c-row-center">
//                         <span data-v-a9660e98="" class="li ${list_order.amount % 2 === 0 ? 'red' : 'green'}"></span>
//                         ${list_order.amount === 0 || list_order.amount === 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : ''}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       `;
//     });
    
//     gameList[x].querySelector('.hb').insertAdjacentHTML('afterbegin', htmls);
//     gameList[x].querySelector('.hb .c-tc:last-child').remove();
//   }
  
//   let socket = io();
//   let pageno = 0;
//   let limit = 10;
//   let page = 1;
  
//   socket.on('data-server', async function (msg) {
//     console.log(msg.data, 'msg');
//     if (msg.data[0].game !== 'wingo') return;
//     document.querySelector('.Loading').style.display = 'block';
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     let data1 = msg.data[0];
//     let data2 = [msg.data[1]];
    
//     document.querySelector('.time-box .info .number').textContent = data1.period;
//     showListOrder3(data2, 0);
    
//     pageno = 0;
//     limit = 10;
//     page = 1;
  
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
//       console.log(lastGame)
//       console.log(firstGame);
//       showListOrder2(data, 1);
      
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
  
//       showListOrder(list_orders, 0);
//       showListOrder_t(list_orders, 2);
//     })
//     .catch(error => console.error('Error:', error))
//     .finally(() => {
//       document.querySelector('.Loading').style.display = 'none';
//     });
//   });
  
//   function alertMessJoin(msg) {
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
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
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
//     this.classList.add("block-click");
//     let formData = new FormData();
//     formData.append("typeid", "1");
//     formData.append("join", join);
//     formData.append("x", x);
//     formData.append("money", money);
  
//     fetch("/api/webapi/action/join", {
//       method: "POST",
//       body: formData
//     })
//     .then(response => response.json())
//     .then(response => {
//       alertMessJoin(response.message);
//       if (!response.status) return;
//       document.getElementById("history-order").insertAdjacentHTML("afterbegin", response.data);
//       document.querySelector(".total-box .num span").textContent = "₹ " + response.money + ".00";
//       socket.emit('data-server_2', { money: x * money, join, time: Date.now(), change: response.change });
//     })
//     .catch(error => console.error('Error:', error))
//     .finally(() => {
//       setTimeout(() => {
//         document.querySelector(".van-overlay").style.display = "none";
//         document.querySelector(".popup-join").style.transform = "translateY(600px)";
//         document.querySelectorAll(".betting-mark .amount-box .li, .multiple-box .li").forEach(el => {
//           el.style.backgroundColor = "rgb(240, 240, 240)";
//           el.style.color = "rgb(0, 0, 0)";
//         });
//         document.querySelectorAll(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").forEach(el => {
//           el.style.backgroundColor = "rgb(240, 240, 240)";
//           el.style.color = "rgb(255, 255, 255)";
//         });
//         document.querySelector(".stepper-box .digit-box input").value = 1;
//         document.querySelector(".amount-box").setAttribute("data-money", "1");
//         document.querySelector(".foot .right span:eq(1)").textContent = "1000";
//         this.classList.remove("block-click");
//       }, 500);
//     });
//   });
// } 
// });
//   function showListOrder(list_orders, x) {
//     const container = document.querySelector(`.game-list .con-box:nth-child(${x + 1}) .hb`);
//     if (list_orders.length === 0) {
//       container.innerHTML = `
//         <div class="van-empty">
//           <div class="van-empty__image">
//             <img src="/images/empty-image-default.png" />
//           </div>
//           <p class="van-empty__description">No data</p>
//         </div>
//       `;
//       return;
//     }
//     let htmls = list_orders.map(list_order => `
//       <div class="c-tc item van-row">
//         <div class="van-col van-col--8 c-tc goItem">${list_order.period}</div>
//         <div class="van-col van-col--5 c-tc goItem">
//           <span class="${list_order.amount % 2 === 0 ? "red" : "green"}">${list_order.amount}</span>
//         </div>
//         <div class="van-col van-col--5 c-tc goItem">
//           <span>${list_order.amount < 5 ? "Small" : "Big"}</span>
//         </div>
//         <div class="van-col van-col--6 c-tc c-row c-row-center goItem">
//           <div class="c-tc c-row box c-row-center">
//             <span class="li ${list_order.amount % 2 === 0 ? "red" : "green"}"></span>
//             ${list_order.amount === 0 || list_order.amount === 5 ? '<span class="li violet"></span>' : ""}
//           </div>
//         </div>
//       </div>
//     `).join("");
//     container.innerHTML = htmls;
//   }
  
//   function showListOrder_t(list_orders, x) {
//     const container = document.querySelector(`.game-list .con-box:nth-child(${x + 1}) .hb`);
//     if (list_orders.length === 0) {
//       container.innerHTML = `
//         <div class="van-empty">
//           <div class="van-empty__image">
//             <img src="/images/empty-image-default.png" />
//           </div>
//           <p class="van-empty__description">No data</p>
//         </div>
//       `;
//       return;
//     }
//     let amounts = list_orders.map(order => order.amount);
//     let labels = list_orders.map(order => order.period % 100);
  
//     let canvasHtml = `
//       <style>
//         canvas {
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//           transform: rotate(360deg);
//           transform-origin: center;
//         }
//       </style>
//       <canvas id="graphCanvas" width="380" height="400"></canvas>
//       <script>
//         let labels1 = ${JSON.stringify(labels)};
//         let amounts1 = [${amounts.join(', ')}];
//         labels1.reverse();
//         amounts1.reverse();
  
//         let data = {
//           labels: labels1,
//           values: amounts1
//         };
  
//         let canvas = document.getElementById('graphCanvas');
//         let ctx = canvas.getContext('2d');
  
//         function createGradient(value, ctx, x, y, prevX, prevY) {
//           let gradient = ctx.createLinearGradient(prevX, prevY, x, y);
//           if (value === 0) {
//             gradient.addColorStop(0, 'rgba(149,2,156,1)');
//             gradient.addColorStop(0.35, 'rgba(121,9,111,1)');
//             gradient.addColorStop(1, 'rgba(1,255,0,1)');
//           } else if (value === 5) {
//             gradient.addColorStop(0, 'rgba(149,2,156,1)');
//             gradient.addColorStop(0.35, 'rgba(121,9,111,1)');
//             gradient.addColorStop(1, 'rgba(255,0,14,1)');
//           }
//           return gradient;
//         }
  
//         function plotGraph(data) {
//           let padding = 50;
//           let spaceBetween = (canvas.width - padding * 2) / (data.values.length - 1);
  
//           ctx.font = '14px Arial';
//           ctx.lineWidth = 2;
  
//           // Draw the Y axis labels
//           for (let i = 0; i <= 9; i++) {
//             ctx.fillText(9 - i, padding - 30, padding + i * (canvas.height - padding * 2) / 9);
//           }
  
//           data.values.forEach((value, index) => {
//             let x = padding + index * spaceBetween;
//             let y = padding + (9 - value) * (canvas.height - padding * 2) / 9;
  
//             if (index > 0) {
//               let prevX = padding + (index - 1) * spaceBetween;
//               let prevY = padding + (9 - data.values[index - 1]) * (canvas.height - padding * 2) / 9;
  
//               ctx.beginPath();
//               ctx.moveTo(prevX, prevY);
//               ctx.lineTo(x, y);
  
//               if (value === 0 || value === 5) {
//                 ctx.strokeStyle = createGradient(value, ctx, x, y, prevX, prevY);
//               } else {
//                 ctx.strokeStyle = getColorForValue(value);
//               }
//               ctx.stroke();
//             }
  
//             ctx.beginPath();
//             ctx.arc(x, y, 5, 0, Math.PI * 2);
//             ctx.fillStyle = getColorForValue(value);
//             ctx.fill();
  
//             ctx.fillText(data.labels[index], x - ctx.measureText(data.labels[index]).width / 2, canvas.height - padding + 20);
//           });
//         }
  
//         function getColorForValue(value) {
//           switch (value) {
//             case 1:
//             case 3:
//             case 7:
//             case 9:
//               return 'green';
//             case 2:
//             case 4:
//             case 6:
//             case 8:
//               return 'red';
//             default:
//               return '#000'; // default color
//           }
//         }
  
//         plotGraph(data);
//       </script>
//     `;
//     container.innerHTML = canvasHtml;
//   }
  
//   function showListOrder2(list_orders, x) {
//     const container = document.querySelector(`.game-list .con-box:nth-child(${x + 1}) #history-order`);
//     if (list_orders.length === 0) {
//       container.innerHTML = `
//         <div class="van-empty">
//           <div class="van-empty__image">
//             <img src="/images/empty-image-default.png" />
//           </div>
//           <p class="van-empty__description">No data</p>
//         </div>
//       `;
//       return;
//     }
//     let htmls = list_orders.map(list_order => `
//       <div class="c-tc item van-row">
//         <div class="van-col van-col--8 c-tc goItem">${list_order.period}</div>
//         <div class="van-col van-col--5 c-tc goItem">
//           <span class="${list_order.amount % 2 === 0 ? "red" : "green"}">${list_order.amount}</span>
//         </div>
//         <div class="van-col van-col--5 c-tc goItem">
//           <span>${list_order.amount < 5 ? "Small" : "Big"}</span>
//         </div>
//         <div class="van-col van-col--6 c-tc c-row c-row-center goItem">
//           <div class="c-tc c-row box c-row-center">
//             <span class="li ${list_order.amount % 2 === 0 ? "red" : "green"}"></span>
//             ${list_order.amount === 0 || list_order.amount === 5 ? '<span class="li violet"></span>' : ""}
//           </div>
//         </div>
//       </div>
//     `).join("");
//     container.innerHTML = htmls;
//   }
  
//   document.querySelector(".game-list").addEventListener("click", function (event) {
//     const target = event.target;
//     if (target.classList.contains("li")) {
//       const item = target.parentElement.parentElement.parentElement;
//       let s = item.querySelector(".c-tc:first-child").textContent;
//       let join = item.querySelector(".c-tc:last-child").textContent;
//       fetch("/api/webapi/action/x_order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           s,
//           join
//         })
//       })
//       .then(response => response.json())
//       .then(response => {
//         if (response.length > 0) {
//           showListOrder2(response, 2);
//         }
//       })
//       .catch(error => console.error('Error:', error));
//     }
//   });
  
//   // Initial AJAX request on page load
// fetch("/api/webapi/GetMyEmerdList", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       typeid: "1",
//       pageno: "0",
//       pageto: "10",
//       language: "vi",
//     }),
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       let data = response.data.gameslist;
//       document.querySelector(".game-list .con-box:nth-child(2) .page-nav .number").textContent =
//         `1/${response.page ? response.page : '1'}`;
//       showListOrder2(data, 1);
//     });
  
//   // Event listener for next page button
//   document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(2)").addEventListener("click", function (e) {
//     e.preventDefault();
//     let pageno = 0;
//     let limit = 10;
//     pageno += 10;
//     let pageto = limit;
//     fetch("/api/webapi/GetNoaverageEmerdList", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: pageno,
//         pageto: pageto,
//         language: "vi",
//       }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.status === false) {
//           pageno -= 10;
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(2)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(2)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .van-icon-arrow-right").style.color = "#7f7f7f";
//           alertMessJoin(response.msg);
//           return false;
//         }
//         document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.remove("block-click");
//         document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.add("action");
//         document.querySelector(".game-list .con-box:nth-child(1) .page-nav .van-icon-arrow-left").style.color = "#fff";
//         page += 1;
//         document.querySelector(".game-list .con-box:nth-child(1) .page-nav .number").textContent = `${page}/${response.page}`;
//         let list_orders = response.data.gameslist;
//         document.querySelector(".time-box .info .number").textContent = response.period;
//         showListOrder(list_orders, 0);
//       });
//   });
  
//   // Event listener for previous page button
//   document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(2)").classList.remove("block-click");
//     document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(2)").classList.add("action");
//     document.querySelector(".game-list .con-box:nth-child(1) .page-nav .van-icon-arrow-right").style.color = "#fff";
//     let pageno = 0;
//     let limit = 10;
//     pageno -= 10;
//     let pageto = limit;
//     fetch("/api/webapi/GetNoaverageEmerdList", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: pageno,
//         pageto: pageto,
//         language: "vi",
//       }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (page - 1 <= 1) {
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .van-icon-arrow-left").style.color = "#7f7f7f";
//         }
//         if (response.status === false) {
//           pageno = 0;
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .arr:nth-child(1)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(1) .page-nav .van-icon-arrow-left").style.color = "#7f7f7f";
//           alertMessJoin(response.msg);
//           return false;
//         }
//         page -= 1;
//         document.querySelector(".game-list .con-box:nth-child(1) .page-nav .number").textContent = `${page}/${response.page}`;
//         let list_orders = response.data.gameslist;
//         document.querySelector(".time-box .info .number").textContent = response.period;
//         showListOrder(list_orders, 0);
//       });
//   });
  
//   // Event listener for next page button (second section)
//   document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(2)").addEventListener("click", function (e) {
//     e.preventDefault();
//     let pageno = 0;
//     let limit = 10;
//     pageno += 10;
//     let pageto = limit;
//     fetch("/api/webapi/GetMyEmerdList", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: pageno,
//         pageto: pageto,
//         language: "vi",
//       }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.status === false) {
//           pageno -= 10;
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(2)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(2)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .van-icon-arrow-right").style.color = "#7f7f7f";
//           alertMessJoin(response.msg);
//           return false;
//         }
//         document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.remove("block-click");
//         document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.add("action");
//         document.querySelector(".game-list .con-box:nth-child(2) .page-nav .van-icon-arrow-left").style.color = "#fff";
//         page += 1;
//         document.querySelector(".game-list .con-box:nth-child(2) .page-nav .number").textContent = `1/${response.page ? response.page : '1'}`;
//         let list_orders = response.data.gameslist;
//         document.querySelector(".time-box .info .number").textContent = response.period;
//         showListOrder2(list_orders, 1);
//       });
  
//     // Toggle details on click
//     setTimeout(() => {
//       let check = true;
//       document.querySelectorAll("#history-order .item").forEach((item) => {
//         item.addEventListener("click", function (e) {
//           e.preventDefault();
//           let parent = this.parentElement;
//           let myVar = parent.querySelector(".details");
//           if (check) {
//             check = false;
//             myVar.style.display = "block";
//           } else {
//             check = true;
//             myVar.style.display = "none";
//           }
//         });
//       });
//     }, 1000);
//   });
  
//   // Event listener for previous page button (second section)
//   document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(2)").classList.remove("block-click");
//     document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(2)").classList.add("action");
//     document.querySelector(".game-list .con-box:nth-child(2) .page-nav .van-icon-arrow-right").style.color = "#fff";
//     let pageno = 0;
//     let limit = 10;
//     pageno -= 10;
//     let pageto = limit;
//     fetch("/api/webapi/GetMyEmerdList", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         typeid: "1",
//         pageno: pageno,
//         pageto: pageto,
//         language: "vi",
//       }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (page - 1 <= 1) {
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .van-icon-arrow-left").style.color = "#7f7f7f";
//         }
//         if (response.status === false) {
//           pageno = 0;
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.add("block-click");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .arr:nth-child(1)").classList.remove("action");
//           document.querySelector(".game-list .con-box:nth-child(2) .page-nav .van-icon-arrow-left").style.color = "#7f7f7f";
//           alertMessJoin(response.msg);
//           return false;
//         }
//         page -= 1;
//         document.querySelector(".game-list .con-box:nth-child(2) .page-nav .number").textContent = `1/${response.page ? response.page : '1'}`;
//         let list_orders = response.data.gameslist;
//         document.querySelector(".time-box .info .number").textContent = response.period;
//         showListOrder2(list_orders, 1);
//       });
  
//     // Toggle details on click
//     setTimeout(() => {
//       let check = true;
//       document.querySelectorAll("#history-order .item").forEach((item) => {
//         item.addEventListener("click", function (e) {
//           e.preventDefault();
//           let parent = this.parentElement;
//           let myVar = parent.querySelector(".details");
//           if (check) {
//             check = false;
//             myVar.style.display = "block";
//           } else {
//             check = true;
//             myVar.style.display = "none";
//           }
//         });
//       });
//     }, 1000);
//   });
  
//   window.onload = function () {
//     function cownDownTimer() {
//       var countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
//       setInterval(function () {
//         var now = new Date().getTime();
//         var distance = countDownDate - now;
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var minute = Math.ceil(minutes / 20 - 2);
//         var seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//         var seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
//         document.querySelectorAll(".number .item")[3].textContent = seconds1;
//         document.querySelectorAll(".number .item")[4].textContent = seconds2;
//         console.log(minute)
//       }, 0);
//       setInterval(() => {
//         var now = new Date().getTime();
//         var distance = countDownDate - now;
//         var seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//         var seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
//         if (seconds1 == 0 && seconds2 <= 5) {
//           if (chicked) {
//             playAudio1();
//           }
//         }
//         if (seconds1 == 5 && seconds2 == 9) {
//           if (clicked) {
//             playAudio2();
//           }
//         }
//       }, 1000);
//       setInterval(function () {
//         var now = new Date().getTime();
//         var distance = countDownDate - now;
//         var seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
//         var seconds2 = Math.floor(((distance % (1000 * 60)) / 1000) % 10);
//         if (seconds1 == 0 && seconds2 <= 5) {
//           document.querySelector(".van-overlay").style.display = "none";
//           document.querySelector(".popup-join").style.transform = "translateY(600px)";
//           document.querySelectorAll(".betting-mark .amount-box .li, .multiple-box .li").forEach((el) => {
//             el.style.backgroundColor = "rgb(240, 240, 240)";
//             el.style.color = "rgb(0, 0, 0)";
//           });
//           document.querySelector(".betting-mark .amount-box .li:first-child, .multiple-box .li:first-child").style.backgroundColor = "rgb(240, 240, 240)";
//           document.querySelector(".betting-mark .amount-box .li:first-child, .multiple-box .li:first-child").style.color = "rgb(255, 255, 255)";
//           document.querySelector(".stepper-box .digit-box input").value = 1;
//           document.querySelector(".amount-box").setAttribute("data-money", "1");
//           document.querySelector(".foot .right span:nth-child(2)").textContent = "1000";
//           document.querySelector(".box .mark-box ").style.display = "flex";
//           document.querySelectorAll(".box .mark-box .item")[0].textContent = seconds1;
//           document.querySelectorAll(".box .mark-box .item")[1].textContent = seconds2;
//         } else {
//           document.querySelector(".box .mark-box ").style.display = "none";
//         }
//       }, 0);
//     }
  
//     cownDownTimer();
  
//     // Toggle details on click (initial load)
//     setTimeout(() => {
//       let check = true;
//       document.querySelectorAll("#history-order .item").forEach((item) => {
//         item.addEventListener("click", function (e) {
//           e.preventDefault();
//           let parent = this.parentElement;
//           let myVar = parent.querySelector(".details");
//           if (check) {
//             check = false;
//             myVar.style.display = "block";
//           } else {
//             check = true;
//             myVar.style.display = "none";
//           }
//         });
//       });
//     }, 1000);
//   };

//   // Handle notice bar animation
// document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transitionDuration = '48.9715s';
// document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transform = 'translateX(-2448.57px)';

// setInterval(() => {
//   document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transitionDuration = '0s';
//   document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transform = 'translateX(0)';
//   setTimeout(() => {
//     document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transitionDuration = '48.9715s';
//     document.querySelector('.van-notice-bar__wrap .van-notice-bar__content').style.transform = 'translateX(-2448.57px)';
//   }, 100);
// }, 48000);

// // Handle click events
// document.querySelectorAll('.van-button--default').forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector('.van-popup-vf').style.display = 'none';
//     document.querySelector('.van-overlay').style.display = 'none';
//   });
// });

// document.querySelector('.circular').addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.van-popup-vf').style.display = 'block';
//   document.querySelector('.van-overlay').style.display = 'block';
// });

// // Example of attribute manipulation
// let selectPageTime = Number(document.querySelector('html').getAttribute("data-dpr"));
// console.log(selectPageTime - 1);
// document.querySelector(`.game-betting .box .item:nth-child(${selectPageTime})`).classList.add('action');
// document.querySelector(`.game-betting .box .item:nth-child(${selectPageTime}) .img`).classList.add('block-click');
// document.querySelector(`.game-betting .box .item .img .van-image img`).setAttribute('src', '/images/icon_clock-gerrn.webp');
// document.querySelector(`.game-betting .box .item:nth-child(${selectPageTime}) .img .van-image img`).setAttribute('src', '/images/icon_clock-red.webp');
