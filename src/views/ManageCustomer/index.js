import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import {getAllAdmin} from "../../services/adminService";
import {getAllFilterCustomer, saveCustomer, updateCustomer} from "../../services/customerService";
import {findObject} from "../../util/commonFunction";
import {wait} from "@testing-library/user-event/dist/utils";
import {toast} from "react-toastify";


const options = [
    {value: 'ACTIVE', label: 'ACTIVE'},
    {value: 'INACTIVE', label: 'INACTIVE'},
    {value: 'DEACTIVATED', label: 'DEACTIVATED'}
];
const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.customerId,
    },
    {
        name: 'Customer Name',
        selector: row => row.name,
    },
    {
        name: 'Address',
        selector: row => row.address1,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Contact No',
        selector: row => row.mobileNumber,
    },
    {
        name: 'status',
        selector: row => row.status,
    },
    {
        name: 'nic',
        selector: row => row.nic,
    }
    ,
    {
        name: 'Action',
        selector: row => <Button onClick={() => onEdit(row)} color={"success"}>Edit</Button>,
    }
];


const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight: 'bold'
        },
    }
};

const initialFilterState = {
    adminEmail: "",
    adminContact: "",
    adminNic: "",
    filterStatus: null
}

const initialFormState = {
    customerName: "",
    customerEmail: "",
    customerMobile: "",
    customerPassword: "",
    customerAddress: "",
    customerNic: "",
    customerStatus: null
}

const ManageCustomer = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    useEffect(() => {
        onFilter(true);
    }, [])


    const onFilter = async (data) => {
        const tempBody = data ? {...initialFilterState} : filter
        const body = {
            nic: tempBody?.adminNic ? tempBody.adminNic : null,
            email: tempBody?.adminEmail ? tempBody.adminEmail : null,
            contactNo: tempBody?.adminContact ? tempBody.adminContact : null,
            userStatus: tempBody?.filterStatus ? tempBody.filterStatus.value : null
        }
        const response = await getAllFilterCustomer(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }


    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const customerSave = async () => {
        if (!formData?.customerName) {
            toast.error("Please enter a customer name.");
            return; // Exit early if validation fails
        }

        if (!formData?.customerAddress) {
            toast.error("Please enter a customer address.");
            return;
        }

        if (!formData?.customerStatus?.value) {
            toast.error("Please select a customer status.");
            return;
        }

        if (!formData?.customerMobile) {
            toast.error("Please enter a customer mobile number.");
            return;
        }


        if (!formData?.customerNic) {
            toast.error("Please enter a customer NIC.");
            return;
        }

        if (!formData?.customerEmail) {
            toast.error("Please enter a customer email.");
            return;
        }
        const body = {
            name: formData?.customerName,
            address1: formData?.customerAddress,
            status: formData?.customerStatus?.value,
            mobileNumber: formData?.customerMobile,
            customerPassword: formData?.customerPassword,
            nic: formData?.customerNic,
            customerEmail: formData?.customerEmail
        }
        if (formData?.customerId) {
            if (!formData?.customerPassword) {
                toast.error("Please enter a customer password.");
                return;
            }
            body.customerId = formData.customerId
            const res=await updateCustomer(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        } else {
            const res=await saveCustomer(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        }


        // console.log(formData)
    }


    const customerEdit = async (row) => {
        setFormData(
            {
                customerId: row.customerId,
                customerName: row.name,
                customerEmail: row.email,
                customerMobile: row.mobileNumber,
                customerAddress: row.address1,
                customerNic: row.nic,
                // customerStatus: await findObject(options,row.status)
                customerStatus: {label: row.status, value: row.status}
            }
        )
    }

    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', height: '80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Customer</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Customer Name</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerName}
                                   name={"customerName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Email</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerEmail}
                                   name={"customerEmail"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Address</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerAddress}
                                   name={"customerAddress"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Mobile Number</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerMobile}
                                   name={"customerMobile"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>



                    <Row style={{
                        alignItems: 'center',  margin: '0%',
                        borderRadius: '5px', backgroundColor: "white", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>NIC</Label>
                                <Input className="input-field-admin" placeholder="" value={formData.customerNic}
                                       name={"customerNic"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <div className="modern-dropdown-technician">
                                    <Select options={options} value={formData.customerStatus}
                                            onChange={(e) => onChangeHandler({
                                                target: {
                                                    name: 'customerStatus',
                                                    value: e
                                                }
                                            })}/>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Password</Label>
                                <Input className="input-field-admin" placeholder="" value={formData.customerPassword}
                                       name={"customerPassword"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>

                        <Col md={1} align="left" style={{margin: "0px"}}>
                            <Button color="danger" style={{width: '12vh', marginLeft: "15px"}}
                                    onClick={() => setFormData({...initialFormState})}>Clear</Button>
                        </Col>
                        <Col md={1} align="left">
                            <Button color={formData?.customerId ? "warning" : "success"}
                                    style={{width: '12vh', marginLeft: "15px"}}
                                    onClick={customerSave}>{formData?.customerId ? 'Update' : 'Save'}</Button>
                        </Col>

                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    // width: '98%',
                    backgroundColor: "white"
                }}>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Customer Email</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder="" value={filter.adminEmail}
                                   onChange={(e) => {
                                       setFilter({...filter, adminEmail: e.target.value})
                                   }}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>NIC</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder="" value={filter.adminNic}
                                   onChange={(e) => {
                                       setFilter({...filter, adminNic: e.target.value})
                                   }}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Contact</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder=""
                                   value={filter.adminContact} onChange={(e) => {
                                setFilter({...filter, adminContact: e.target.value})
                            }}/>
                        </FormGroup>
                    </Col>


                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Status</Label>
                            <div className="modern-dropdown-customer-filter">
                                <Select options={options} value={filter.filterStatus} onChange={(e) => {
                                    setFilter({...filter, filterStatus: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>


                    <Col md={2} align="left">
                        <Button color="danger" style={{width: '25vh', marginLeft: "12%"}}
                                onClick={async () => {
                                    await setFilter({...initialFilterState});
                                    await onFilter(true);
                                }}>Clear</Button>
                    </Col>
                    <Col md={2} align="left">
                        <Button color="success" style={{width: '25vh', marginLeft: "8%"}}
                                onClick={()=>onFilter(false)}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
                        height: '50%',
                        backgroundColor: "white",
                        padding: 0,
                        paddingTop: "2px"
                    }}>
                        <Col md={12} style={{padding: 0, margin: 0}}>
                            <DataTable
                                columns={columns(customerEdit)}
                                data={tableData}
                                pagination
                                customStyles={customStyles}
                                paginationRowsPerPageOptions={[3, 5, 10]}
                                // defaultPageSize={2}
                                paginationPerPage={3}
                            />
                            {}
                        </Col>
                    </Row>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ManageCustomer;
