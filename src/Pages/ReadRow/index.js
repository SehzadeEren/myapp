import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "../../../src/App.css";
import { Modal, Button } from "react-bootstrap";
import ModalComponent from "../../Components/ModalComponent";
import "./style.css"


const ReadRow = ({ addForm }) => {
  const { addFormData, setAddFormData, showModal, setShowModal, setEditContactId, setEditFormData } = useContext(GlobalContext);

  function handleClose(addFormId) {
    const newAddFormData = addFormData.filter((_, index) =>
      index !== addFormId)

    setAddFormData(newAddFormData);
    setShowModal(false);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      country: contact.country,
    };
    console.log(formValues)
    setEditFormData(formValues);
  };

  return (

    <>
      <tr>
        <td>{addForm.fullName}</td>
        <td>   {addForm.email}</td>
        <td>{addForm.phoneNumber}</td>
        <td>{addForm.country}</td>

        <td className="iconSide">
          <div className="icon-edit" onClick={(event) => handleEditClick(event, addForm)}> </div>
          <div className="icon-delete" onClick={() => setShowModal(true)}> </div>
        </td>
      </tr>
      <ModalComponent
        show={showModal}
        handleClose={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <p> <b> Are you sure you want to delete? </b> </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose(addForm.id)}> Yes </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}> No </Button>
        </Modal.Footer>
      </ModalComponent>
    </>

  );
};

export default ReadRow