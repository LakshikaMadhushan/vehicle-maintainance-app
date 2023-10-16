import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";


const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
];
const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Item Name',
        selector: row => row.itemName,
    },
    {
        name: 'Selling Price',
        selector: row => row.sellingPrice,
    },
    {
        name: 'Buying Price',
        selector: row => row.buyingPrice,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Category Name',
        selector: row => row.categoryName,
    },
    {
        name: 'Quantity',
        selector: row => row.quantity,
    },
    {
        name: 'Item Status',
        selector: row => row.itemStatus,
    },
];


const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight:'bold'
        },
    }
};
const ManageCustomer = () => {
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
        }
    ]
    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',  padding: 10, backgroundColor: "#ffffff"}}>
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
                    // width: '98%',
                    backgroundColor: "yellow"
                }}>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Admin Name/ Email</Label>
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


                    <Col md={2} align="left">
                        <Button color="danger" style={{width: '25vh', marginLeft: "12%"}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={2} align="left">
                        <Button color="success" style={{width: '25vh', marginLeft: "8%"}}
                                onClick={() => navigate("/register")}>Filter</Button>
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
                                data={data}
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
