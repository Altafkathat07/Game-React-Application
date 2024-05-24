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
              {/* <div data-v-52f62447="" className="btn-all">
                <p data-v-52f62447="">All</p>
                <span data-v-52f62447="">4</span>
                <svg
                  data-v-52f62447=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    data-v-52f62447=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5064 19.541C7.99993 19.9904 7.2002 19.6308 7.2002 18.9537C7.2002 18.7288 7.29666 18.5147 7.46512 18.3657L14.6731 11.9896C14.7178 11.95 14.7181 11.8804 14.6738 11.8404L7.45763 5.33217C7.29374 5.18437 7.2002 4.97403 7.2002 4.75334C7.2002 4.078 8.00051 3.72221 8.50188 4.17465L15.8798 10.8325L16.2562 11.1964C16.6628 11.5895 16.6628 12.2412 16.2562 12.6343L15.8798 12.9982L8.5064 19.541Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div> */}
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
