import React from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "../../App.css"
import "./style.css"

const EditRow = () => {
    const {addFormData,setAddFormData, editFormData, handleEditFormChange, handleCancelClick } = useContext(GlobalContext);
    const [editContactId, setEditContactId] = useState(null);

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            email: editFormData.email,
            phoneNumber: editFormData.phoneNumber,
            country: editFormData.country,

        }; console.log(editedContact)

        const newAddFormData = [...addFormData];
    console.log(newAddFormData)

        const index = addFormData.findIndex((formData) => formData.id === editContactId);
console.log(index)
        newAddFormData[index] = editedContact;
        console.log(newAddFormData)

        setAddFormData(newAddFormData);
        setEditContactId(null);

    };



    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a full name..."
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    required="required"
                    placeholder="Enter an email..."
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <select
                    type="form"
                    required="required"
                    name="country"
                    value={editFormData.country}
                    onChange={handleEditFormChange}>
                    <option> Turkiye </option>
                    <option> Azerbaijan </option>
                    <option> Japan </option>
                    <option> Serbia </option>
                    <option> France </option>
                </select>
            </td>
            <td className="iconSideToSide">
                <div className="icon-save" onClick={handleEditFormSubmit}> </div>
                <div className="icon-cancel" onClick={handleCancelClick}> </div>
    
        </td>
        </tr>
    );
};

export default EditRow;