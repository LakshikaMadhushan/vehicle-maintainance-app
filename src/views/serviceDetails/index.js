import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from "react-data-table-component";
import Flatpickr from "react-flatpickr";


const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
];
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
    {
        name: 'View',
        selector: row => <Button  color={"warning"}>View</Button>,
    },
    {
        name: 'Action',
        selector: row => <Button  color={"success"}>Edit</Button>,
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
const ServiceDetails = () => {
    const navigate = useNavigate()
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



    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Service Details</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', marginTop: '15px',marginLeft: '0px',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Customer</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Service Date</Label>
                                <Flatpickr style={{width: '35vh'}}
                                    // value={filter.serviceDate}
                                    // options={{mode: 'range'}}
                                    onChange={(e) => {
                                        setFilter({...filter, serviceDate: e})
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={3} style={{paddingRight:0, paddingLeft:0}}  align="left">
                            <FormGroup className="text-field">
                                <Label>Cost</Label>
                                <Input  className="input-field-service" />
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">

                            <Button color="danger" style={{width: '35vh',marginTop:"14px"}}
                                    onClick={() => navigate("/register")}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color="success" style={{width: '35vh',marginTop:"14px"}}
                                    onClick={() => navigate("/register")}>Save</Button>

                        </Col>
                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>
                    <Col md={2} style={{padding:0}} align="left">
                        <FormGroup className="text-field">
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown-service">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={2} style={{padding:0}} align="left">
                        <FormGroup className="text-field">
                            <Label>Technician</Label>
                            <div className="modern-dropdown-service">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup>
                            <Label className="label">Service Date</Label>
                            <Flatpickr style={{width: '27vh'}}
                                // value={filter.serviceDate}
                                options={{mode: 'range'}}
                                       onChange={(e) => {
                                           setFilter({...filter, serviceDate: e})
                                       }}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left" >
                        <Button color="danger" style={{width: '27vh', marginLeft: "25px",marginTop:'10px'}}
                               >Clear</Button>
                    </Col>
                    <Col md={2} align="left">
                        <Button color="success" style={{width: '27vh', marginLeft: "15px",marginTop:'10px'}}> Filter</Button>
                    </Col>

                </Row>





                <Row style={{
                    alignItems: 'center',
                    backgroundColor: "yellow",
                    margin: '0%',
                    padding:"0",
                    paddingTop:"14px"
                }}>
                    <Col md={12} style={{padding:0,margin:0}} >
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            customStyles={customStyles}
                            paginationRowsPerPageOptions={[4, 5, 10]}
                            paginationPerPage={4}
                        />
                        {

                        }
                        </Col>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ServiceDetails;
