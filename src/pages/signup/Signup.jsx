import React from "react";
import * as IoIcons from "react-icons/io";
import SectionHead from "../../UI/SectionHead";
import { facultyDataArr } from "../../studentData";
import "./signup.css";

const Signup = () => {
  // const regNo = document.getElementById("reg-no");
  // const showSignupForm = document.getElementById("signup__form-container");
  return (
    <div className="signup">
      <div className="container signup__container">
        <div className="section__head-container">
          <SectionHead icon={<IoIcons.IoIosCreate />} title="Sign Up" />
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
              />
            </div>
            <div className="auth__btn-container" id="signup__form-container">
              <button
                className="auth__btn"
                // onClick={() => {
                //   if (regNo.value === "") {
                //     alert("Please Input your Registeration Number");
                //   } else {
                //     console.log("I am a Student with the Reg Number above");
                //   }
                // }}
              >
                Auth
              </button>
            </div>

            <div className="auth__complete-data">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  // onChange={valuesChangeHandler}
                  required
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="faculty">Faculty</label>
                <select
                  id="faculty"
                  className="form-control"
                  // onChange={facultyChangeHandler}
                >
                  {facultyDataArr.map(({ id, name }) => {
                    return (
                      <option value={id} key={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select id="department" className="form-control"></select>
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

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group btn-div">
                <button className="btn-pro btn-success">SIgn Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
