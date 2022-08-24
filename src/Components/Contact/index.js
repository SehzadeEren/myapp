import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import ModalComponent from "../ModalComponent/index.js";
import Col from 'react-bootstrap/Col';
import { Alert } from "react-bootstrap";
import { GlobalContext } from "../Context/context.js";
import { Modal, Button } from 'react-bootstrap';

const Contact = () => {
  const {
    inputValue,
    setInputValue,
    showModal,
    setShowModal,
    emailValue,
    setEmailValue,
    phoneNumberValue,
    setPhoneValue,
    countryValue,
    setCountryValue,
    addFormData,
    setAddFormData,
    handleClose,
  } = useContext(GlobalContext);

  const buttonOnClick = () => {
    if (inputValue === "" || emailValue === "" || phoneNumberValue === "") {
      setShowModal(false);
    } else {
      setShowModal(true);
      // setInputValue("");
      //setEmailValue("");
      //setPhoneValue("");

    }

    const newToTable = [
      ...addFormData,
      {
        id: "",
        fullName: inputValue,
        email: emailValue,
        phoneNumber: phoneNumberValue,
        country: countryValue,
      },
    ];
    setAddFormData(newToTable);

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
              <Form.Select value={countryValue} onChange={(e) => setCountryValue(e.target.value)} defaultValue="Seçiniz" size="lg">
                <option> Turkiye </option>
                <option> Azerbaijan </option>
                <option> Japan </option>
                <option> Serbia </option>
                <option> France </option>
              </Form.Select>
            </>
          </div>

          <div className="button_special">
            <button type="button" className="button" onClick={() => buttonOnClick()}> Submit </button>
          </div>

        </form>

        {!showModal && (inputValue === "" || emailValue === "" || phoneNumberValue === "") &&
          <Alert><div> Hata Var </div> </Alert>}
      </div>

      <ModalComponent
        show={showModal}
        handleClose={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name And Surname: {inputValue} <br></br>
          E-Mail: {emailValue} <br></br>
          Phone Number: {phoneNumberValue} <br></br>
          Country: {countryValue}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Understood
        </Button>
        {/* <Button variant="secondary" >Understood</Button> */}
      </Modal.Footer>
      </ModalComponent>
    </>
  );
};
export default Contact;