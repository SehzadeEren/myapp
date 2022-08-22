import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import { AiTwotoneDelete } from "react-icons/ai";
import "./style.css"


const AppTable = () => {
    const { addFormData } = useContext(GlobalContext);
    return (

        <div className="table_container">
            <form>
                <Table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Country</th>
                            <th>Delete  <button><AiTwotoneDelete/></button>  </th>
                        </tr>
                    </thead>
                    <tbody>

                        {addFormData.map((addForm, i) => (
                            <tr key={i} >
                                <td>{addForm.fullName}</td>
                                <td>{addForm.email}</td>
                                <td>{addForm.phoneNumber}</td>
                                <td>{addForm.country}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </form>
        </div>


    );
}

export default AppTable;