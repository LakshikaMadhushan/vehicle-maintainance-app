import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import {getAllAdmin} from "../../services/adminService";
import {getAllFilterTechnician} from "../../services/technicianService";


const options = [
    {value: 'ACTIVE', label: 'ACTIVE'},
    {value: 'INACTIVE', label: 'INACTIVE'},
    {value: 'DEACTIVATED', label: 'DEACTIVATED'}
];

const columns = [
    {
        name: 'ID',
        selector: row => row.technicianId
        ,
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
    customerEmail: "",
    customerNic: "",
    customerName: "",
    filterStatus: null
}

const ManageTechnician = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        onFilter();
    },[])



    const onFilter = async () => {
        const body = {
            nic: filter?.customerName ? filter.customerName : null,
            email: filter?.customerEmail ? filter.customerEmail : null,
            name: filter?.customerName ? filter.customerName : null,
            status: filter?.filterStatus ? filter.filterStatus.value : null
        }
        const response=await getAllFilterTechnician(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }
    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',height:'80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Technician</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Technician Name</Label>
                            <Input className="input-field-technician" placeholder=""/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Email</Label>
                            <Input className="input-field-technician" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Address</Label>
                            <Input className="input-field-technician" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Mobile Number</Label>
                            <Input className="input-field-technician" placeholder="Lakshika"/>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>NIC</Label>
                                <Input className="input-field-technician" placeholder=""/>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <div className="modern-dropdown-technician">
                                    <Select options={options}/>
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
                            <Label>Technician Name</Label>
                            <Input className="input-field-technician-filter" placeholder="" value={filter.customerName} onChange={(e) => {
                                setFilter({...filter, customerName: e.target.value}) }}/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label className="label">status</Label>
                            <div className="modern-dropdown-technician-filter">
                                <Select options={options} value={filter.filterStatus} onChange={(e) => {
                                    setFilter({...filter, filterStatus: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>NIC</Label>
                            <Input className="input-field-technician-filter" placeholder=""value={filter.customerNic} onChange={(e) => {
                                setFilter({...filter, customerNic: e.target.value}) }}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Email</Label>
                            <Input className="input-field-technician-filter" placeholder="" value={filter.customerEmail} onChange={(e) => {
                                setFilter({...filter, customerEmail: e.target.value}) }}/>
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
export default ManageTechnician;
