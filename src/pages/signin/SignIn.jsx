import React from 'react'
import * as FaIcons from "react-icons/fa";
import SectionHead from '../../UI/SectionHead'

const SignIn = () => {
  return (
    <div className="signin">
      <div className="container signin__container">
        <div className="section__head-container">
          <SectionHead icon={<FaIcons.FaSignInAlt />} title="Sign In" />
        </div>
      

      <div className="signup__form-wrapper">
          <form className="sign__form">
            <div className="form-group">
              <label htmlFor="reg-no">Reg No</label>
              <input
                type="text"
                id="reg-no"
                className="form-control"
                // onChange={valuesChangeHandler}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                required
              />
            </div>

            <div className="form-group btn-div">
              <button className="btn-pro btn-success">SIgn In</button>
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default SignIn