import { Modal, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { GlobalContext } from '../Context/context';


export default function ModalComponent({ show, handleClose, children }) {

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