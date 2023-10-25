import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import {getAllFilterTechnician} from "../../services/technicianService";
import {getAllMechanicServiceFilter} from "../../services/mechanicServiceService";
import {getAllMechanicServiceCategory} from "../../services/mechanicServiceCategoryService";


const options = [
    {value: 'ALL', label: 'ALL'},
    {value: 'SUV', label: 'SUV'},
    {value: 'HYBRID', label: 'HYBRID'},
    {value: 'MINI', label: 'MINI'}
];
const columns = [
    {
        name: 'ID',
        selector: row => row.mechanicServiceId,
    },
    {
        name: 'Service Name',
        selector: row => row.name,
    },
    {
        name: 'Service Price',
        selector: row => row.price,
    },
    {
        name: 'Vehicle Type',
        selector: row => row.vehicleType,
    },
    {
        name: 'Service Category Name',
        selector: row => row.mechanicServiceCategoryName,
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
    mechanicServiceName: "",
    vehicleType: null,
    mechanicServiceCategory: null
}

const ManageMechanicService = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [category,setCategory]=useState([])

    useEffect(()=>{
        onFilter();
        getAllServiceCategory();
    },[])

    const getAllServiceCategory=async ()=>{
        const res= await getAllMechanicServiceCategory()
        setCategory(res.body.map(category=>{
            return {
                label:category.name,
                value:category.mechanicServiceCategoryId
            }
        }))
    }

    const onFilter = async () => {
        const body = {
            mechanicServiceCategory: filter?.mechanicServiceCategory ? filter.mechanicServiceCategory.value : null,
            name: filter?.mechanicServiceName ? filter.mechanicServiceName : null,
            vehicleType: filter?.vehicleType ? filter.vehicleType.value : null,

        }
        const response=await getAllMechanicServiceFilter(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }


    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%' ,height:'80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Mechanic Service</Label>
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
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Price</Label>
                            <Input className="input-field-mechanic" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Vehicle Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
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
                </Row>
                <Row style={{
                    alignItems: 'center', margin: '0%', border: '2px solid #ccc',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px", justifyContent: "right"
                }}>
                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Save</Button>
                    </Col>
                </Row>

                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    backgroundColor: "yellow"
                }}>

                    <Col md={3} align="left" style={{padding: 0}}>
                        <FormGroup className="text-field-mechanic">
                            <Label>Mechanic Service Name</Label>
                            <Input className="input-field-mechanic" placeholder=""  value={filter.mechanicServiceName} onChange={(e) => {
                                setFilter({...filter, mechanicServiceName: e.target.value}) }}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={category} value={filter.mechanicServiceCategory} onChange={(e) => {
                                    setFilter({...filter, mechanicServiceCategory: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Vehicle Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={filter.vehicleType} onChange={(e) => {
                                    setFilter({...filter, vehicleType: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={1} align="right">
                        <Button color="danger" style={{width: '12vh', marginLeft: "0",marginTop:"10px"}}
                                onClick={() => {
                                    setFilter(initialFilterState);
                                    onFilter();
                                }}>Clear</Button>
                    </Col>
                    <Col md={1} align="right">
                        <Button color="success" style={{width: '12vh', marginLeft: "0",marginTop:"10px"}}
                                onClick={onFilter}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
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
                                paginationRowsPerPageOptions={[4, 5, 10]}
                                // defaultPageSize={2}
                                paginationPerPage={4}
                            />
                            {}
                        </Col>
                    </Row>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ManageMechanicService;
