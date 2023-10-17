import React from "react";
import './style.css'
import '../common/style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';

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
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
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
            fontWeight:'bold'
        },
    }
};

const ManageItemCategory = () => {
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

    return  <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Service Category</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field-mechanic">
                            <Label>Mechanic Service Name</Label>
                            <Input className="input-field-mechanic" placeholder=""/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Save</Button>
                    </Col>

                </Row>
                {/*<Row style={{*/}
                {/*    alignItems: 'center', margin: '0%', border: '2px solid #ccc',*/}
                {/*    borderRadius: '5px', backgroundColor: "yellow", padding: "0px", justifyContent: "right"*/}
                {/*}}>*/}

                {/*</Row>*/}

                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    backgroundColor: "yellow"
                }}>

                    <Col md={3} align="left" style={{padding: 0}}>
                        <FormGroup className="text-field-mechanic">
                            <Label>Mechanic Service Name</Label>
                            <Input className="input-field-mechanic" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', marginLeft: "0", marginTop: "10px"}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', marginLeft: "0", marginTop: "10px"}}
                                onClick={() => navigate("/register")}>Filter</Button>
                    </Col>

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
                                paginationRowsPerPageOptions={[5, 10, 15]}
                                // defaultPageSize={2}
                                paginationPerPage={5}
                            />
                            {}
                        </Col>
                    </Row>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ManageItemCategory;
