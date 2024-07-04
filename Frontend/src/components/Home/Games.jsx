import game1 from "../../assets/images/lotterycategory_20240124125544jt65.png";
import game2 from "../../assets/images/lotterycategory_20240124125551se9i.png";
import game3 from "../../assets/images/lotterycategory_20240124125558slo1.png";
import game4 from "../../assets/images/lotterycategory_20240124125606db4a.png";
function Games() {
  return (
    <>
    <h1>welcome</h1>
      <div data-v-a900648a="" className="game-content">
        <div data-v-a900648a="" className="game-list">
          <div data-v-a900648a="" className="">
            <div
              data-v-52f62447=""
              data-v-a900648a=""
              className="daman-title daman-line"
            >
              <div data-v-52f62447="" className="daman-title-left">
                <span
                  data-v-9e5455f6=""
                  data-v-52f62447=""
                  className="cms-icon"
                >
                  <svg data-v-9e5455f6="" aria-hidden="true">
                    <use data-v-9e5455f6="" href="#cms-icon-hot" fill=""></use>
                  </svg>
                </span>
                <span data-v-52f62447="">Lottery</span>
              </div>
            
            </div>
            <div data-v-4feef803="" className="daman-lottery">
              <div data-v-4feef803="" className="daman_img">
                <h3 data-v-4feef803="">Win Go</h3>
                <img
                  data-v-4feef803=""
                  alt=""
                  data-src={game1}
                  src={game1}
                />
                <div data-v-4feef803="" className="daman-btn">
                  <span data-v-4feef803="">Go</span>
                  <span
                    data-v-9e5455f6=""
                    data-v-4feef803=""
                    className="cms-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
              <div data-v-4feef803="" className="daman_img">
                <h3 data-v-4feef803="">K3</h3>
                <img
                  data-v-4feef803=""
                  alt=""
                  data-src={game2}
                  src={game2}
                />
                <div data-v-4feef803="" className="daman-btn">
                  <span data-v-4feef803="">GO</span>{" "}
                  <span
                    data-v-9e5455f6=""
                    data-v-4feef803=""
                    className="cms-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
              <div data-v-4feef803="" className="daman_img">
                <h3 data-v-4feef803="">5D</h3>
                <img
                  data-v-4feef803=""
                  alt=""
                  data-src={game3}
                  src={game3}
                />
                <div data-v-4feef803="" className="daman-btn">
                  <span data-v-4feef803="">GO</span>{" "}
                  <span
                    data-v-9e5455f6=""
                    data-v-4feef803=""
                    className="cms-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
              <div data-v-4feef803="" className="daman_img">
                <h3 data-v-4feef803="">Trx Win Go</h3>
                <img
                  data-v-4feef803=""
                  alt=""
                  data-src={game4}
                  src={game4}
                />
                <div data-v-4feef803="" className="daman-btn">
                  <span data-v-4feef803="">GO</span>{" "}
                  <span
                    data-v-9e5455f6=""
                    data-v-4feef803=""
                    className="cms-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;
