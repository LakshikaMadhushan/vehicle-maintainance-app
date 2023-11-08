import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from "react-data-table-component";
import Flatpickr from "react-flatpickr";
import View from "react-flatpickr";
import {getAllTechnician} from "../../services/technicianService";
import {getAllVehicle} from "../../services/vehicleService";
import {getAllCustomer} from "../../services/customerService";
import moment from "moment";
import {DATE_FORMAT} from "../../const/const";
import {getAllItemsAdminReport} from "../../services/reportService";
import {getAllService} from "../../services/serviceDetailsService";
import {saveAdmin, updateAdmin} from "../../services/adminService";


const options = [
    {value: 'ITEM', label: 'ITEM'},
    {value: 'SERVICE', label: 'SERVICE'}
];
const columns = (onEdit) => [
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
        selector: row => <Button color={"warning"}>View</Button>,
    },
    {
        name: 'Action',
        selector: row => <Button color={"success"}>Edit</Button>,
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
    vehicleNo: null,
    technician: null,
    serviceDate: null

}

const initialFormState = {
    vehicleNo: null,
    technician: null,
    customer: null,
    serviceDate: null,
    serviceType: null,
    price: null
}

const ServiceDetails = () => {
    const navigate = useNavigate()
    const [technician, setTechnician] = useState([])
    const [vehicle, setVehicle] = useState([])
    const [customer, setCustomer] = useState([])
    const [formData, setFormData] = useState(initialFormState)
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        onFilter(true);
        loadAllTechnician();
        loadAllVehicle();
        loadAllCustomer();
    }, [])


    const loadAllTechnician = async () => {
        const res = await getAllTechnician()
        setTechnician(res.body.map(technician => {
            return {
                label: technician.name,
                value: technician.technicianId
            }
        }))
    }

    const loadAllVehicle = async () => {
        const res = await getAllVehicle()
        setVehicle(res.body.map(vehicle => {
            return {
                label: vehicle.numberPlate,
                value: vehicle.vehicleId
            }
        }))
    }
    const loadAllCustomer = async () => {
        const res = await getAllCustomer()
        setCustomer(res.body.map(customer => {
            return {
                label: customer.name,
                value: customer.customerId
            }
        }))
    }

    const onFilter = async (data) => {
        const tempBody = data ? {...initialState} : filter
        const body = {
            technicianId: tempBody?.technician ? tempBody.technician.value : null,
            vehicleNo: tempBody?.vehicleNo ? tempBody.vehicleNo.value : null,
            start: tempBody?.serviceDate ? moment(tempBody.serviceDate[0]).format(DATE_FORMAT) : null,
            end: tempBody?.serviceDate ? moment(tempBody.serviceDate[1]).format(DATE_FORMAT) : null
        }
        const response = await getAllService(body)
        // setFilter(response.body);
        // setTableData(response.body.adminReportResponseDTOList);
        // setTotalCost(response.body.total)
        // setItemCost(response.body.totalItem)
        // setServiceCost(response.body.totalService)
    }


    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const serviceSave = async () => {
        const body = {
            vehicleId: formData?.vehicleId?.value,
            technicianId: formData.technician?.value,
            service_date: formData?.serviceDate,
            type: formData?.type?.value,
            cost: formData?.cost

        }
        if (formData?.serviceId) {
            body.serviceId = formData.serviceId
            await updateService(body)
        } else {
            await saveService(body)
        }

        console.log(body)

        // console.log(formData)
    }


    const serviceEdit = async (row) => {
        setFormData(
            {

                vehicleNo: {label: row.numberPlate, value: row.vehicleId},
                technician: {label: row.technicianName, value: row.technicianId},
                customer: {label: row.customerName, value: row.customerId},
                serviceDate: row.serviceDate,
                serviceType: {label: row.type, value: row.type},
                price: row.cost
            }
        )
    }

    return <>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Service Details</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', marginTop: '15px', marginLeft: '0px',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={formData.vehicleNo}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'vehicleNo',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={formData.technician}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'technician',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={formData.type}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'type',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Customer</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={formData.customer}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'customer',
                                                value: e
                                            }
                                        })}/>
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
                                    //     onChange={(e) => {
                                    //         setFilter({...filter, serviceDate: e})
                                    //     }}
                                    // />
                                           value={formData.serviceDate}
                                           name={"serviceDate"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>
                        <Col md={3} style={{paddingRight: 0, paddingLeft: 0}} align="left">
                            <FormGroup className="text-field">
                                <Label>Cost</Label>
                                <Input className="input-field-service" value={formData.price}
                                       name={"price"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">

                            <Button color="danger" style={{width: '35vh', marginTop: "14px"}}
                                    onClick={() => setFormData({...initialFormState})}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color="success" color={formData?.adminId ? "warning" : "success"} style={{width: '35vh', marginTop: "14px"}}
                                    onClick={serviceSave}>{formData?.adminId ? 'Update' : 'Save'}</Button>

                        </Col>
                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>
                    <Col md={2} style={{padding: 0}} align="left">
                        <FormGroup className="text-field">
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown-service">
                                <Select options={vehicle} value={filter.vehicleNo} onChange={(e) => {
                                    setFilter({...filter, vehicleNo: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={2} style={{padding: 0}} align="left">
                        <FormGroup className="text-field">
                            <Label>Technician</Label>
                            <div className="modern-dropdown-service">
                                <Select options={options} value={filter.technician} onChange={(e) => {
                                    setFilter({...filter, technician: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup>
                            <Label className="label">Service Date</Label>
                            <Flatpickr style={{width: '27vh'}}
                                       value={filter.serviceDate}
                                       options={{mode: 'range'}}
                                       onChange={(e) => {
                                           setFilter({...filter, serviceDate: e})
                                       }}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <Button color="danger" style={{width: '27vh', marginLeft: "25px", marginTop: '10px'}}
                                onClick={async () => {
                                    await setFilter({...initialFilterState});
                                    await onFilter(true);
                                }}>Clear</Button>
                    </Col>
                    <Col md={2} align="left">
                        <Button color="success"
                                style={{width: '27vh', marginLeft: "15px", marginTop: '10px'}}
                                onClick={()=>onFilter(false)}>Filter</Button>
                    </Col>

                </Row>


                <Row style={{
                    alignItems: 'center',
                    backgroundColor: "yellow",
                    margin: '0%',
                    padding: "0",
                    paddingTop: "14px"
                }}>
                    <Col md={12} style={{padding: 0, margin: 0}}>
                        <DataTable
                            columns={columns(serviceEdit)}
                            data={tableData}
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

        <View/>


    </>
}
export default ServiceDetails;
