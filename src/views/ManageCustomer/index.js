import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import {getAllAdmin} from "../../services/adminService";
import {getAllFilterCustomer} from "../../services/customerService";


const options = [
    {value: 'ACTIVE', label: 'ACTIVE'},
    {value: 'INACTIVE', label: 'INACTIVE'},
    {value: 'DEACTIVATED', label: 'DEACTIVATED'}
];
const columns = [
    {
        name: 'ID',
        selector: row => row.adminId,
    },
    {
        name: 'Admin Name',
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
        name: 'qualification',
        selector: row => row.qualification,
    },
    {
        name: 'nic',
        selector: row => row.nic,
    }
];


const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight:'bold'
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
    customerAddress: "",
    customerNic: "",
    customerStatus: null
}

const ManageCustomer = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    useEffect(()=>{
        onFilter();
    },[])



    const onFilter = async () => {
        const body = {
            nic: filter?.adminNic ? filter.adminNic : null,
            email: filter?.adminEmail ? filter.adminEmail : null,
            contactNo: filter?.adminContact ? filter.adminContact : null,
            userStatus: filter?.filterStatus ? filter.filterStatus.value : null
        }
        const response=await getAllFilterCustomer(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        }
    ]

    const onChangeHandler=(e)=>{console.log(e) }

    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',height:'80vh',  padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Customer</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Customer Name</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerName} name={"customerName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Email</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerEmail} name={"customerEmail"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Address</Label>
                            <Input className="input-field-admin" placeholder="" value={formData.customerAddress} name={"customerAddress"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Mobile Number</Label>
                            <Input className="input-field-admin" placeholder="Lakshika"  value={formData.customerMobile} name={"customerMobile"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>NIC</Label>
                                <Input className="input-field-admin" placeholder="" value={formData.customerNic} name={"customerNic"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <div className="modern-dropdown-technician">
                                    <Select options={options} value={formData.customerStatus} onChange={(e)=>onChangeHandler({
                                        target: {
                                            name:'customerStatus',
                                            value:e
                                        }
                                    })} />
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={3} align="left" style={{margin: "0px"}}>
                            <Button color="danger" style={{width: '30vh', marginLeft: "15px"}}
                                    onClick={() => navigate("/register")}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color="success" style={{width: '30vh', marginLeft: "15px"}}
                                    onClick={() => navigate("/register")}>Save</Button>
                        </Col>

                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    // width: '98%',
                    backgroundColor: "yellow"
                }}>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Customer Email</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder=""value={filter.adminEmail} onChange={(e) => {
                                setFilter({...filter, adminEmail: e.target.value}) }}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>NIC</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder=""value={filter.adminNic} onChange={(e) => {
                                setFilter({...filter, adminNic: e.target.value}) }}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Contact</Label>
                            <Input className="modern-dropdown-customer-filter" placeholder=""value={filter.adminContact} onChange={(e) => {
                                setFilter({...filter, adminContact: e.target.value}) }}/>
                        </FormGroup>
                    </Col>


                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Status</Label>
                            <div className="modern-dropdown-customer-filter">
                                <Select options={options}value={filter.filterStatus} onChange={(e) => {
                                    setFilter({...filter, filterStatus: e.target.value}) }}/>
                            </div>
                        </FormGroup>
                    </Col>


                    <Col md={2} align="left">
                        <Button color="danger" style={{width: '25vh', marginLeft: "12%"}}
                                onClick={() => {
                                    setFilter(initialFilterState);
                                    onFilter();
                                }}>Clear</Button>
                    </Col>
                    <Col md={2} align="left">
                        <Button color="success" style={{width: '25vh', marginLeft: "8%"}}
                                onClick={onFilter}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
                        height: '50%',
                        backgroundColor: "yellow",
                        padding:0,
                        paddingTop:"2px"
                    }}>
                        <Col md={12} style={{padding:0,margin:0}} >
                            <DataTable
                                columns={columns}
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
