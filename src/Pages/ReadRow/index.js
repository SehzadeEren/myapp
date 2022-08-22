import React from "react";

const ReadRow = ({ addForm }) => {
    return (

        <div>
            <tr key={i} >
                <td>{addForm.fullName}</td>
                <td>{addForm.email}</td>
                <td>{addForm.phoneNumber}</td>
                <td>{addForm.country}</td>
            </tr>
        </div>
    )
}

export default ReadRow