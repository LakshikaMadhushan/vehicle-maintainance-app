import React, {useEffect, useState} from "react";
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
import {getAllItems} from "../../services/itemService";
import {getAllTechnician} from "../../services/technicianService";
import {getAllCategory} from "../../services/categoryService";
import {getAllVehicle} from "../../services/vehicleService";

const columns = [
    {
        name: 'ID',
        selector: row => row.serviceId,
    },
    {
        name: 'Service Type',
        selector: row => row.type,
    },
    {
        name: 'Vehicle No',
        selector: row => row.vehicle,
    },
    {
        name: 'Technician',
        selector: row => row.technician,
    },
    {
        name: 'Customer',
        selector: row => row.customer,
    },
    {
        name: 'Service Date',
        selector: row => row.service_date,
    },
    {
        name: 'Total cost',
        selector: row => row.cost,
    },
];

const options = [
    {value: 'FULL', label: 'FULL'},
    {value: 'NORMAL', label: 'NORMAL'}
];

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
    const [itemCost, setItemCost] = useState(0.00)
    const [serviceCost, setServiceCost] = useState(0.00)
    const [tableData, setTableData] = useState([])
    const [technician,setTechnician]=useState([])
    const [vehicle,setVehicle]=useState([])

    useEffect(()=>{
        onFilter();
        loadAllTechnician();
        loadAllVehicle();
    },[])


    const loadAllTechnician=async ()=>{
        const res= await getAllTechnician()
        setTechnician(res.body.map(technician=>{
            return {
                label:technician.name,
                value:technician.technicianId
            }
        }))
    }

    const loadAllVehicle=async ()=>{
        const res= await getAllVehicle()
        setVehicle(res.body.map(vehicle=>{
            return {
                label:vehicle.numberPlate,
                value:vehicle.vehicleId
            }
        }))
    }
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
        // setFilter(response.body);
        setTableData(response.body.adminReportResponseDTOList);
        setTotalCost(response.body.total)
        setItemCost(response.body.totalItem)
        setServiceCost(response.body.totalService)
        console.log(response);
    }

    return <div>
        <Row style={{alignItems: 'center', width: '100%', margin: 0, padding: 0, backgroundColor: "#f1f0e8"}}>
            <Row style={{alignItems: 'center', margin: '0',height:'80vh', padding: 10, backgroundColor: "#ffffff"}}>
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
                                <Select options={vehicle} value={filter.vehicleNo} onChange={(e) => {
                                    setFilter({...filter, vehicleNo: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={technician} value={filter.technician} onChange={(e) => {
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
                            data={tableData}
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
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR {itemCost}</Label>
                            </Col>
                            <Col md={4} style={{borderRadius: "5px", border: '2px solid #ccc'}}>
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Spare Parts Cost</Label><br/>
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR {serviceCost}</Label>
                            </Col>



                        </Row>

                    </Col>
                </Row>


            </Row>



        </Row>
    </div>
}
export default ManageReport;
