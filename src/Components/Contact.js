/*import React, { useState } from 'react';
import Modal from './Modal/index.js';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [show, setShow] = useState(false);

  const buttonOnClick = () => {
    if (inputValue === "" || emailValue === "" || phoneNumberValue === "") {
      setShowModal(false)
    } else {
      setShowModal(true)
      setInputValue("")
    }
    console.log(`Form submitted, ${showModal}`);
  }


  return (
    <div className="main">

      <form >
        <div className="baslik">
          <div className="container center">
            <h1>Contact Form</h1>
          </div>
        </div>
        <div className="field" >
          <label className="text"> Name And Surname: </label>
          <input type="text" className="form" placeholder="Kerem Kurt" required value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>

        <div className="field">
          <label className="text"> E-mail: </label>
          <input type="email" className="form" placeholder="udenditfy@gmail.com" required value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
        </div>

        <div className="field">
          <label className="text"> Phone Number: </label>
          <input type="tel" className="form" pattern="[0-9]*" placeholder="+905373199437" required value={phoneNumberValue} onChange={(e) => setPhoneValue(e.target.value)} />
        </div>

        <div className="field">
          <label className="text" required > Country: </label>
          <select className="form" placeholder="Turkiye" required value={countryValue} onChange={(e) => setCountryValue(e.target.value)}>
            <option value="Turkiye">Turkiye</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Japan">Japan</option>
            <option value="Serbia">Serbia</option>
            <option value="France">France</option>
          </select>
        </div>

        <button type="button" className="button" onClick={() => buttonOnClick()}> Enter </button>
      </form>
      <Modal show={show} setShow={setShow} />
    </div>

  );
};

export default Contact;                    */


import React, { useState } from "react";
import ModalComponent from "./ModalComponent/index.js";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneValue] = useState("");
  const [countryValue, setCountryValue] = useState("");

  const buttonOnClick = () => {
    if (inputValue === "" || emailValue === "" || phoneNumberValue === "") {
      setShowModal(false);
    } else {
      setShowModal(true);
      setInputValue("");
      setEmailValue("");
      setPhoneValue("");
    }
    console.log(`Form submitted, ${showModal}`);

  }


  return (
    <>
      <div className="main">

        <form >
          <div className="baslik">
            <div className="container center">
              <h1>Contact Form</h1>
            </div>
          </div>
          <div className="field" >
            <label className="text"> Name And Surname: </label>
            <input type="text" className="form" placeholder="Kerem Kurt" value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
          </div>

          <div className="field">
            <label className="text"> E-mail: </label>
            <input type="email" className="form" placeholder="udenditfy@gmail.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required />
          </div>

          <div className="field">
            <label className="text"> Phone Number: </label>
            <input type="tel" className="form" pattern="[0-9]*" placeholder="+905373199437" value={phoneNumberValue} onChange={(e) => setPhoneValue(e.target.value)} required />
          </div>

          <div className="field">
            <label className="text" required > Country: </label>
            <select className="form" placeholder="Turkiye" value={countryValue} onChange={(e) => setCountryValue(e.target.value)}>
              <option value="Turkiye">Turkiye</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Japan">Japan</option>
              <option value="Serbia">Serbia</option>
              <option value="France">France</option>
            </select>
          </div>
          <button type="button" className="button" onClick={() => buttonOnClick()}> Enter </button>
        </form>
        {!showModal && (inputValue === "" || emailValue === "" || phoneNumberValue === "") &&
          <div>Hata Var</div>}
      </div>
      <ModalComponent show={showModal} handleClose={() => setShowModal(!showModal)} />
    </>
  );
};
export default Contact;