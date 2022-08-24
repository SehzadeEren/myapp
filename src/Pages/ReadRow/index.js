import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "../../../src/App.css";
import { Modal, Button } from "react-bootstrap";
import ModalComponent from "../../Components/ModalComponent";



const ReadRow = ({ addForm }) => {
    const { addFormData, setAddFormData, showModal, setShowModal} = useContext(GlobalContext);
   
   function handleClose(addFormId) {
        const newAddFormData = addFormData.filter((_, index) =>
        index !== addFormId)

    setAddFormData(newAddFormData);
    setShowModal(false);
    }


    return (

        <>
        <tr>
            <td>{addForm.fullName}</td>
            <td>   {addForm.email}</td>
            <td>{addForm.phoneNumber}</td>
            <td>{addForm.country}</td>
            <td>
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
        <Button variant="primary" onClick={()=> handleClose(addForm.id)}>
          Yes
        </Button>
        <Button variant="secondary" onClick={()=>setShowModal(false)}> No </Button>
      </Modal.Footer>
      </ModalComponent>
            </>

    );
};

export default ReadRow