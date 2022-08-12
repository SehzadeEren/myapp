/*import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 function modal({show,setShow}) {
 
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
       show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default modal;     */


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default function ModalComponent({ show ,handleClose }) {
  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}