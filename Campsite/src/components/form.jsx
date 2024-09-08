import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

function Form({pTitle, sTitle}) {
  const [outMsg, setOutMsg] = useState("");
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    checkDate: "",
    campLocation: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    let isValid = checkError();
    if (isValid) {
      if (document.getElementById("formOut").classList.contains("success")) {
        document.getElementById("formOut").classList.remove("success");
      }
      document.getElementById("formOut").classList.add("error");
    } else {
      if (document.getElementById("formOut").classList.contains("error")) {
        document.getElementById("formOut").classList.remove("error");
      }
      document.getElementById("formOut").classList.add("success");
      setOutMsg(
        `Thank you ${details.fName} ${details.lName} for booking with us!`
      );
    }
    document.getElementById("formOut").classList.add("active");
  }

  function checkError() {
    let hasError = false;
    if (details.fName == "" || details.lName == "") {
      setError(true);
      setOutMsg("Please enter your first and last name");
      hasError = true;
    } else if (details.email == "") {
      setError(true);
      setOutMsg("Please enter your email address");
      hasError = true;
    } else if (details.checkDate == "") {
      setError(true);
      setOutMsg("Please enter your check-in date");
      hasError = true;
    } else if (document.getElementById("agreement").checked == false) {
      setError(true);
      setOutMsg("Please read and accept the privacy policy");
      hasError = true;
    } else {
      setError(false);
      hasError = false;
    }
    console.log(details);
    return hasError;
  }

  return (
    <div className="section section-3 row">
      <img src="bg.png" alt="bg" className="bgImg" />
      <h1 className="title center">
        <span className="pColorText">{pTitle} </span>{sTitle}
      </h1>
      <form onSubmit={handleSubmit} className="formContent">
        <div className="row-1 row">
          <div className="fname">
            <label htmlFor="fName" className="inpTitle">
              first name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <label className="inputIcon" htmlFor="fName">
              <PersonIcon className="icon" />
            </label>
          </div>
          <div className="lName">
            <label htmlFor="lName" className="inpTitle">
              Last name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            <label className="inputIcon" htmlFor="lName">
              <PersonIcon className="icon" />
            </label>
          </div>
        </div>
        <div className="row-2 row">
          <div className="email" style={{ alignSelf: "baseline" }}>
            <label htmlFor="email" className="inpTitle">
              email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            <label className="inputIcon" htmlFor="email">
              <EmailIcon className="icon" />
            </label>
          </div>
          <div className="checkinDate">
            <label htmlFor="checkDate" className="inpTitle">
              Check-in Date
            </label>
            <input
              type="date"
              name="checkDate"
              id="checkDate"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-3 row">
          <div className="campSite">
            <label htmlFor="campLocation" className="inpTitle">
              Campsite location
            </label>
            <select
              name="campLocation"
              id="campLocation"
              onChange={handleChange}
            >
              <option value="all" selected>
                all
              </option>
              <option value="babra">Babarakanda</option>
              <option value="naran">Narangala</option>
              <option value="river">riverston</option>
              <option value="wange">wangedigala</option>
            </select>
          </div>
          <div className="agreementCheck">
            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="agreement">
              I've read and accept{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
            </label>
          </div>
        </div>
        <div className="row-3 row">
          <input
            type="submit"
            value="submit"
            className="pBtn"
            style={{ marginLeft: "0%", marginTop: "4rem" }}
          />
          <div id="formOut" className=" active">
            {outMsg}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
