
import eye from '../../assets/images/eye.png'

function ResetForm() {
  return (
    <>
       <div data-v-8752c9610="" className="login__container-form reset">
        <form action="/api/webapi/register" method="post">
            <div data-v-8752c961="" className="tab-content activecontent">
                <div data-v-0ce8d964="" data-v-8752c961="" className="signIn__container">
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type="password" name='pwd' placeholder="Old Password" maxLength="32" autoComplete="on" required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" />
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type="password" name='npwd' placeholder="New Password" maxLength="32" autoComplete="on" required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" />
                        </div>
                    </div>
                    <div data-v-57d49070="" data-v-0ce8d964="" className="passwordInput__container"> 
                        <div data-v-57d49070="" className="passwordInput__container-input">
                            <input data-v-57d49070="" id="passwordfield1" type="password" name='cpwd' placeholder="Confirm Password" maxLength="32" autoComplete="on" required />
                            <img data-v-57d49070="" id="eyeicon" src={eye} className="eye" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </>
  )
}

export default ResetForm
