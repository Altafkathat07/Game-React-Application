import { useState, useEffect } from "react";
import "../../assets/home/css/winning.css";
import img1 from "../../assets/images/win1.png";
import img2 from "../../assets/images/face1.jpg";
import img3 from "../../assets/images/face2.jpg";
import img4 from "../../assets/images/face3.jpg";
import img5 from "../../assets/images/face4.jpg";
import img6 from "../../assets/images/facebook.jpg";
import img7 from "../../assets/images/win2.png";

function WinnigInfomationSection() {
    const [currentWinnerIndex, setCurrentWinnerIndex] = useState(0);
    const winners = [
        { img: img1, name: 'Mem***FasnN', amount: 296 },
        { img: img2, name: 'Mem***L3UX1', amount: 479 },
        { img: img3, name: 'Mem***4nCyd', amount: 168 },
        { img: img4, name: 'Mem***fj39w', amount: 199 },
        { img: img5, name: 'Mem***Gw8Lq', amount: 401 },
        { img: img6, name: 'Mem***xfiFJ', amount: 171 },
        { img: img7,  name: 'Mem***fj39w', amount: 199 },
        { img: img1, name: 'Mem***7eYaR', amount: 700 },
        { img: img2, name: 'Mem***U9DP13', amount: 250 },
        { img: img5, name: 'Mem***AeSiP', amount: 886 },
      ];


      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentWinnerIndex(prevIndex => (prevIndex + 1) % winners.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [winners.length]);

      const duplicatedWinners = [...winners, ...winners, ...winners, ...winners, ...winners];
  return (
    <>
      <div data-v-6a35701e="" className="luckyWinners__container" style={{width: "94%", marginLeft: "3%"}}>
                <h1 data-v-6a35701e="" style={{position: "relative", marginBottom: "0.667rem", paddingLeft: "0.26667rem", fontSize: "1rem", fontWeight: "700", color: "#fff"}}>Winning information</h1>
        <div data-v-6a35701e="" className='luckyWinners__container-wrapper' style={{height: "15.66667rem", overflow: "hidden"}}>
        {duplicatedWinners.map((winner, index) => (
            <div data-v-6a35701e="" key={index} className="luckyWinners__container-wrapper__item " style={{
                transform: `translateY(-${currentWinnerIndex * 100}%)`,
                transition: 'transform 1s ease'
              }}>
                <div data-v-6a35701e="" className="luckyWinners__container-wrapper__item-img">
                    <img data-v-6a35701e="" data-src={winner.img} src={winner.img}  />
                </div>
                <div data-v-6a35701e="" className="luckyWinners__container-wrapper__item-info" style={{marginTop: "1rem"}}>
                    <h1 data-v-6a35701e="" >{winner.name}</h1>
                </div>
                <div data-v-6a35701e="" className="luckyWinners__container-wrapper__item-winType">
                    <img data-v-6a35701e="" data-src={winner.img} src={winner.img}  />
                </div>
                <div data-v-6a35701e="" className="luckyWinners__container-wrapper__item-winAmount mt-2">
                    <h1 data-v-6a35701e="">Receive ₹{winner.amount}</h1>
                    <span data-v-6a35701e="">Winning amount</span>
                </div>
            </div>
             ))}
        </div>
            </div>
    </>
  )
}

export default WinnigInfomationSection
