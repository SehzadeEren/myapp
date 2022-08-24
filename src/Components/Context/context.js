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
        }} >
            {children}
        </GlobalContext.Provider>
    )
}
