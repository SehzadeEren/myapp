import React, { useState, createContext } from "react";


export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumberValue, setPhoneValue] = useState("");
    const [countryValue, setCountryValue] = useState("Turkiye");
    const [addFormData, setAddFormData] = useState([]);
    const handleClose=() => setShowModal(!showModal);
    const [editContactId, setEditContactId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        
      });
      
      const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };
      const handleCancelClick = () => {
        setEditContactId(null);
      };
    

    return (
        <GlobalContext.Provider value={{
            showModal,
            setShowModal,
            inputValue,
            setInputValue,
            emailValue,
            setEmailValue,
            phoneNumberValue,
            setPhoneValue,
            countryValue,
            setCountryValue,
            addFormData,
            setAddFormData,
            handleClose,
            editFormData,
            setEditFormData,
            handleEditFormChange,
            editContactId,
            setEditContactId,
            handleCancelClick,
        }} >
            {children}
        </GlobalContext.Provider>
    )
}
