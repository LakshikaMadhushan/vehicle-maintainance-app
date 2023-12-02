import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label, FormGroup, Input} from 'reactstrap';
import Select from "react-select";
import DataTable from "react-data-table-component";
import {useNavigate} from "react-router-dom";
import {getAllMechanicServiceCategory} from "../../services/mechanicServiceCategoryService";
import {
    getAllMechanicServiceFilter,
    saveMechanicService,
    updateMechanicService
} from "../../services/mechanicServiceService";
import {getAllService, saveService, updateService} from "../../services/serviceDetailDetailsService";
import {getAllItemFilter} from "../../services/itemService";
import {getAllCategory} from "../../services/categoryService";
import {getAllCustomer} from "../../services/customerService";
import {sendNewPassword} from "../../services/authService";

const initialFormState = {
    email: null
}

function Examples(props) {
    const {toggle, isOpen}=props
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormState)


    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{

    },[])

    const sendPassword = async () => {
        const body = {
            vehicleId: formData?.email

        }
        const res = await sendNewPassword(body)
        // setCustomer(res.body.map(customer => {
        //     return {
        //         label: customer.name,
        //         value: customer.customerId
        //     }
        // }))
    }


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: '500px', width: '80%', maxHeight: '300px', height: '80%' }}  >
                <ModalHeader toggle={toggle}>Password Setting</ModalHeader>
                <ModalBody>
                    <label htmlFor="email">Enter Email:</label>
                    <input type="email" id="email" value={formData.email}
                           name={"email"} onChange={onChangeHandler} />

                    <Button color="success" style={{ marginTop: '15px' }}  onClick={sendPassword} >
                        Send New Password
                    </Button>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggle}>
                        Cancel
                    </Button>{' '}
                    {/*<Button color="secondary" onClick={save}>*/}
                    {/*    Save changes*/}
                    {/*</Button>*/}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Examples;
