import { Modal, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { GlobalContext } from '../Context/context';


export default function ModalComponent({ show, handleClose, children }) {
  //const [show, setShow] = useState(true);
  //const handleModalClose = () => setShow(false);
  //const handleShow = () => setShow(true);
 /* const {
    inputValue,
    emailValue,
    phoneNumberValue,
    countryValue,
  } =*/
   useContext(GlobalContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
{children}
       
        
      </Modal>
    </>
  );
}