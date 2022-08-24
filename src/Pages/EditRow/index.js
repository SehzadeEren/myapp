import React from "react";

const EditRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {

return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a full name..."
          name="fullName"
          value={editFormData.inputValue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.emailValue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumberValue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select 
        type="form"
        required="required"
        name="country"
        value={editFormData.countryValue}
        onChange={handleEditFormChange}
        ></select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;