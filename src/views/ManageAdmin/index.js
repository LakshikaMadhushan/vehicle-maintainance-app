import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import moment from "moment";
import {DATE_FORMAT} from "../../const/const";
import {getAllItemsAdminReport} from "../../services/reportService";
import {getAllAdmin} from "../../services/adminService";


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
    adminNic: "",
    filterStatus: null
}

const ManageAdmin = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        onFilter();
    },[])



    const onFilter = async () => {
        const body = {
            nic: filter?.adminNic ? filter.adminNic : null,
            email: filter?.adminEmail ? filter.adminEmail : null,
            userStatus: filter?.filterStatus ? filter.filterStatus.value : null
        }
        const response=await getAllAdmin(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }

    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',  padding: 10,height:'80vh', backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Admin</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Admin Name</Label>
                            <Input className="input-field-admin" placeholder=""/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Email</Label>
                            <Input className="input-field-admin" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Address</Label>
                            <Input className="input-field-admin" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Mobile Number</Label>
                            <Input className="input-field-admin" placeholder="Lakshika"/>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Qualification</Label>
                                <Input className="input-field-admin" placeholder=""/>
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
                    padding: '0%',
                    // width: '98%',
                    backgroundColor: "yellow"
                }}>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Admin Email</Label>
                            <Input className="input-field-admin" placeholder="" value={filter.adminEmail} onChange={(e) => {
                            setFilter({...filter, adminEmail: e.target.value}) }}/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>NIC</Label>
                            <Input className="input-field-admin" placeholder="" value={filter.adminNic} onChange={(e) => {
                                setFilter({...filter, adminNic: e.target.value}) }}/>
                        </FormGroup>
                    </Col>


                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Status</Label>
                            <div className="modern-dropdown-technician">
                                <Select options={options} value={filter.filterStatus} onChange={(e) => {
                                    setFilter({...filter, filterStatus: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>


                    <Col md={1} align="left">
                        <Button color="danger" style={{width: '10vh', marginLeft: "12%"}}
                                onClick={() => {
                                    setFilter(initialFilterState);
                                    onFilter();
                                }}>Clear</Button>
                    </Col>
                    <Col md={1} align="left">
                        <Button color="success" style={{width: '10vh', marginLeft: "0"}}
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
export default ManageAdmin;
