import { Modal, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { GlobalContext } from '../Context/context';


export default function ModalComponent({ show, handleClose }) {
  //const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const {
    inputValue,
    emailValue,
    phoneNumberValue,
    countryValue,
  } = useContext(GlobalContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}