import Table from 'react-bootstrap/Table';
import { Fragment, useContext } from "react";
import { GlobalContext } from "../../Components/Context/context";
import "./style.css"
import ReadRow from '../ReadRow';
import EditRow from '../EditRow';

const AppTable = () => {
    const { addFormData, editContactId } = useContext(GlobalContext);

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {addFormData.map((addForm, index) => (
                            addForm.id = index,
                            <Fragment>
                                {editContactId === addForm.id ? (
                                    <EditRow />
                                ) : (
                                    <ReadRow
                                        addForm={addForm}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>


    );
};

export default AppTable;