import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "../../../src/App.css";



const ReadRow = ({ addForm }) => {
    const { addFormData, setAddFormData } = useContext(GlobalContext);

    const handleDeleteClick = (addFormId) => {
        const newAddFormData = addFormData.filter((_, index) =>
            index !== addFormId
        )

        setAddFormData(newAddFormData);
    };


    return (


        <tr>
            <td>{addForm.fullName}</td>
            <td>{addForm.email}</td>
            <td>{addForm.phoneNumber}</td>
            <td>{addForm.country}</td>
            <td>
                <div className="icon-delete" onClick={() => handleDeleteClick(addForm.id)}> </div>
            </td>
        </tr>

    )
}

export default ReadRow