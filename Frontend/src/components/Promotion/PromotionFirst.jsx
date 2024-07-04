import { Link } from "react-router-dom"

function PromotionFirst() {
  return (
    <>
        <div data-v-7c8bbbf4="" className="tab">
            <ul data-v-7c8bbbf4="" className="c-row c-row-around">
               <Link to="/promotion"><li data-v-7c8bbbf4=""  className="action block-click">Data</li></Link> 
               <Link to="/myteam"><li data-v-7c8bbbf4="">My Team</li></Link>
               <Link to="/history"><li data-v-7c8bbbf4="">History</li></Link>
               <Link to="/tutorial"><li data-v-7c8bbbf4="">Tutorial</li></Link>
            </ul>
        </div>
    </>
  )
}

export default PromotionFirst
