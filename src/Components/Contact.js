import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import ModalComponent from "./ModalComponent/index.js";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";


const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneValue] = useState("");
  const [countryValue, setCountryValue] = useState("Turkiye");


  const buttonOnClick = () => {
    if (inputValue === "" || emailValue === "" || phoneNumberValue === "") {
      setShowModal(false);
    } else {
      setShowModal(true);
      // setInputValue("");
      //setEmailValue("");
      //setPhoneValue("");
      // sa
    }
    console.log(`Form submitted, ${showModal}`);

  }


  return (
    <>
      <div className="main">

        <form>
          <div className="baslik">
            <div className="container center">
              <h1>Contact Form</h1>
            </div>
          </div>

          <div className="field">
            <Form.Group as={Col} value={inputValue}>
              <Form.Label className="text"> Name and Surname: </Form.Label>
              <Form.Control type="text" placeholder="Kerem Kurt" onChange={(e) => setInputValue(e.target.value)} required size="lg" />
            </Form.Group>
          </div>

          <div className="field">
            <Form.Group as={Col} value={emailValue}>
              <Form.Label className="text"> Email: </Form.Label>
              <Form.Control type="email" placeholder="udenditfy@gmail.com" onChange={(e) => setEmailValue(e.target.value)} required size="lg" />
            </Form.Group>
          </div>

          <div className="field">
            <Form.Group as={Col} value={phoneNumberValue}>
              <Form.Label className="text"> Phone Number: </Form.Label>
              <Form.Control type="tel" pattern="[0-9]*" placeholder="+905373199437" onChange={(e) => setPhoneValue(e.target.value)} required size="lg" />
            </Form.Group>
          </div>


          <div className="field">
            <label className="text" required > Country: </label>
            <>
              <Form.Select value={countryValue} onChange={(e) => setCountryValue(e.target.value)} defaultValue="Turkiye" size="lg">
                <option> Turkiye </option>
                <option> Azerbaijan </option>
                <option> Japan </option>
                <option> Serbia </option>
                <option> France </option>
              </Form.Select>
            </>
          </div>

          <div className="button_special">
            <button type="button" className="button" onClick={() => buttonOnClick()}> Enter </button>
          </div>

        </form>

        {!showModal && (inputValue === "" || emailValue === "" || phoneNumberValue === "") &&
          <Alert><div> Hata Var </div> </Alert> }
      </div>

      <ModalComponent show={showModal}
        inputValue={inputValue}
        emailValue={emailValue}
        phoneNumberValue={phoneNumberValue}
        countryValue={countryValue}
        handleClose={() => setShowModal(!showModal)} />
    </>
  );
};
export default Contact;