import React, {useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import Flatpickr from "react-flatpickr";
import {DATE_FORMAT} from "../../const/const";
import moment from 'moment'
import {getAllItemsAdminReport} from "../../services/reportService";

const columns = [
    {
        name: 'ID',
        selector: row => row.title,
    },
    {
        name: 'Service Type',
        selector: row => row.year,
    },
    {
        name: 'Category',
        selector: row => row.year,
    },
    {
        name: 'Name',
        selector: row => row.year,
    },
    {
        name: 'Price',
        selector: row => row.year,
    },
];

const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
];
// const data = [
//     { id: 1, serviceType: 'Service', category: "SUV", name: "clean radiator", price: "2500" },
//     { id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000" },
//     { id: 3, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000" }
//
// ];

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight: 'bold'
        },
    }
};

const initialState = {
    vehicleNo: null,
    technician: null,
    customer: null,
    serviceDate: null,
    serviceType: null
}

const ManageReport = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialState)
    const [totalCost, setTotalCost] = useState(0.00)
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

    const onFilter = async () => {
        const body = {
            technicianId: filter?.technician ? filter.technician.value : null,
            customerId: filter?.customer ? filter.customer.value : null,
            start: filter?.serviceDate ? moment(filter.serviceDate[0]).format(DATE_FORMAT)  : null,
            end: filter?.serviceDate ? moment(filter.serviceDate[1]).format(DATE_FORMAT) : null,
            vehicleId: filter?.vehicleNo ? filter.vehicleNo.value : null,
            type: filter?.serviceType ? filter.serviceType.value : null
        }
        const response=await getAllItemsAdminReport(body)
    }

    return <div>
        <Row style={{alignItems: 'center', width: '100%', margin: 0, padding: 0, backgroundColor: "#f1f0e8"}}>
            <Row style={{alignItems: 'center', margin: '0', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Report</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', margin: '0%', border: '2px solid #ccc', marginTop: '5px', marginLeft: '0px',
                    borderRadius: '5px', display: "flex", backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={filter.vehicleNo} onChange={(e) => {
                                    setFilter({...filter, vehicleNo: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={filter.technician} onChange={(e) => {
                                    setFilter({...filter, technician: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Customer</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={filter.customer} onChange={(e) => {
                                    setFilter({...filter, customer: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Date</Label>
                            <Flatpickr
                                value={filter.serviceDate}
                                options={{mode: 'range'}}
                                onChange={(e) => {
                                    setFilter({...filter, serviceDate: e})
                                }}
                            />
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', margin: '0%', border: '2px solid #ccc',
                        borderRadius: '5px', display: "flex", backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Service Type</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} value={filter.serviceType} onChange={(e) => {
                                        setFilter({...filter, serviceType: e})
                                    }}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={3} align="left">
                            <Button color="dark" style={{width: '250px', marginLeft: "0", marginTop: "10px"}}
                                    onClick={() => navigate("/register")}>Export CSV</Button>
                        </Col>


                        <Col md={3} align="left">
                            <Button color="warning" style={{width: '250px', marginLeft: "0", marginTop: "10px"}}
                                    onClick={() => setFilter(initialState)}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color="success" style={{width: '250px', marginLeft: "0px%", marginTop: "10px"}}
                                    onClick={onFilter}>Filter</Button>
                        </Col>


                    </Row>

                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    height: '50%',
                    backgroundColor: "yellow",
                    padding: 0,
                    paddingTop: "2px"
                }}>
                    <Col md={12} style={{padding: 0, margin: 0}}>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            customStyles={customStyles}
                            paginationRowsPerPageOptions={[3, 5, 10]}
                            paginationPerPage={3}
                        />
                        {}

                        <Row style={{
                            alignItems: 'center',
                            margin: '0%',
                            height: '50%',
                            backgroundColor: "yellow"
                        }}>
                            <Col md={4} style={{borderRadius: "5px", border: '2px solid #ccc'}}>
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Total Cost</Label><br/>
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR {totalCost}</Label>
                            </Col>

                            <Col md={4} style={{borderRadius: "5px", border: '2px solid #ccc'}}>
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Mechanic Service Cost</Label><br/>
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR
                                    00.00</Label>
                            </Col>
                            <Col md={4} style={{borderRadius: "5px", border: '2px solid #ccc'}}>
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Spare Parts Cost</Label><br/>
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR
                                    00.00</Label>
                            </Col>



                        </Row>

                    </Col>
                </Row>


            </Row>



        </Row>
    </div>
}
export default ManageReport;
