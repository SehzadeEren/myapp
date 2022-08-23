import Table from 'react-bootstrap/Table';
import { Fragment, useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "./style.css"
import ReadRow from '../ReadRow';


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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {addFormData.map((addForm, index) => (
                            addForm.id = index,
                            <Fragment>
                                <ReadRow
                                    addForm={addForm}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>


    );
};

export default AppTable;