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
import {toast} from "react-toastify";

const initialFormState = {
    email: null
}

function Examples(props) {
    const {toggle, isOpen}=props
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormState)
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{

    },[])

    const sendPassword = async () => {
        try {
            setLoading(true);
            setModalOpen(true);

        if (!formData?.email) {
            toast.error("Please enter a Email.");
            return;
        }
        const body = {
            email: formData?.email

        }
        const res = await sendNewPassword(body)
        if(res?.status===0){
            toast.success(res.message)
            setFormData({...initialFormState})
        }else if(res?.status===405 || res?.status===1){
            toast.error(res.message)
        }
        }finally {
            setLoading(false);
            setModalOpen(false);
        }
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
                    <Modal isOpen={modalOpen}>
                        <ModalHeader>Loading...</ModalHeader>
                        <ModalBody>
                            <p>Please wait while we process your request.</p>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                    {/*{loading && <p>Loading...</p>}*/}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Examples;
