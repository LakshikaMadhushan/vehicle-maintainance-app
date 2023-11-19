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
import {getAllAdmin, saveAdmin, updateAdmin} from "../../services/adminService";
import {getAllCustomer, saveCustomer, updateCustomer} from "../../services/customerService";
import {getAllVehicle, getAllVehicleFilter, saveVehicle, updateVehicle} from "../../services/vehicleService";
import {toast} from "react-toastify";


const options = [
    {value: 'ACTIVE', label: 'ACTIVE'},
    {value: 'INACTIVE', label: 'INACTIVE'},
    {value: 'DEACTIVATED', label: 'DEACTIVATED'}
];
const types = [
    {value: 'ALL', label: 'ALL'},
    {value: 'MINI', label: 'MINI'},
    {value: 'SUV', label: 'SUV'},
    {value: 'HYBRID', label: 'HYBRID'}
];

const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.vehicleId,
    },
    {
        name: 'Number Plate',
        selector: row => row.numberPlate,
    },
    {
        name: 'Colour',
        selector: row => row.colour,
    },
    {
        name: 'status',
        selector: row => row.status,
    },
    {
        name: 'Engine Capacity',
        selector: row => row.engineCapacity,
    },
    {
        name: 'milege',
        selector: row => row.mileage,
    },
    {
        name: 'Next Milege',
        selector: row => row.nextMileage,
    },
    {
        name: 'vehicle Type',
        selector: row => row.category,
    },
    {
        name: 'Customer Name',
        selector: row => row.customerName,
    },
    {
        name: 'Action',
        selector: row => <Button onClick={() => onEdit(row)} color={"success"}>Edit</Button>,
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
    vehicleNoF: "",
    customerF: null,
    filterStatus: null
}





const initialFormState = {
    vehicleNo: "",
    vehicleType: null,
    vehicleCapacity: "",
    vehicleStatus: null,
    vehicleColor: "",
    mileage: "",
    nextMileage: "",
    customer: null
}
const ManageVehicle = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [formData, setFormData] = useState(initialFormState)
    const [customer, setCustomer] = useState([])

    useEffect(()=>{
        onFilter(true);
        loadAllCustomer();
    },[])



    const onFilter = async (data) => {
        const tempBody = data ? {...initialFilterState} : filter
        const body = {
            numberPlate: tempBody?.vehicleNoF ? tempBody.vehicleNoF : null,
            customerId: tempBody?.customerF ? tempBody.customerF : null,
            status: tempBody?.filterStatus ? tempBody.filterStatus.value : null
        }
        const response=await getAllVehicleFilter(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
    }

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const vehicleSave = async () => {
        if (!formData?.numberPlate) {
            toast.error("Please enter a vehicle number plate.");
            return; // Exit early if validation fails
        }

        if (!formData?.vehicleType?.value) {
            toast.error("Please select a vehicle type.");
            return;
        }

        if (!formData?.vehicleStatus?.value) {
            toast.error("Please select a vehicle status.");
            return;
        }

        if (!formData?.customer?.value) {
            toast.error("Please select a customer.");
            return;
        }

        if (!formData?.vehicleColor) {
            toast.error("Please enter a vehicle color.");
            return;
        }

        if (!formData?.vehicleCapacity) {
            toast.error("Please enter a vehicle engine capacity.");
            return;
        }

        if (!formData?.mileage) {
            toast.error("Please enter a vehicle mileage.");
            return;
        }

        if (!formData?.nextMileage) {
            toast.error("Please enter the next vehicle mileage.");
            return;
        }
        const body = {
            numberPlate: formData?.numberPlate,
            category: formData?.vehicleType?.value,
            status: formData?.vehicleStatus?.value,
            customerId: formData?.customer?.value,
            colour: formData?.vehicleColor,
            engineCapacity: formData?.vehicleCapacity,
            mileage: formData?.mileage,
            nextMileage: formData?.nextMileage
        }
        if (formData?.vehicleId) {
            body.vehicleId = formData.vehicleId
            const res=await updateVehicle(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        } else {
            const res=await saveVehicle(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        }


        // console.log(formData)
    }


    const vehicleEdit = async (row) => {
        setFormData(
            {
                vehicleId: row.vehicleId,
                vehicleNo: row.numberPlate,
                category: row.vehicleType,
                vehicleStatus: {label: row.status, value: row.status},
                customer: {label: row.customerName, value: row.customerId},
                vehicleColor: row.colour,
                vehicleCapacity: row.engineCapacity,
                mileage: row.mileage,
                nextMileage:row.nextMileage

            }
        )
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

    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',  padding: 10,height:'80vh', backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Vehicle</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Number Plate</Label>
                            <Input className="input-field-admin" value={formData.vehicleNo}
                                   name={"vehicleNo"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>colour</Label>
                            <Input className="input-field-admin" value={formData.vehicleColor}
                                   name={"vehicleColor"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Engine Capacity</Label>
                            <Input className="input-field-admin" value={formData.vehicleCapacity}
                                   name={"vehicleCapacity"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Vehicle Type</Label>
                            <div className="modern-dropdown-technician">
                                <Select options={types} value={formData.vehicleStatus}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'vehicleStatus',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', margin: '0%',
                        borderRadius: '5px', backgroundColor: "white", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Mileage</Label>
                                <Input className="input-field-admin" value={formData.mileage}
                                       name={"mileage"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>

                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Next Mileage</Label>
                                <Input className="input-field-admin" value={formData.nextMileage}
                                       name={"nextMileage"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <div className="modern-dropdown-technician">
                                    <Select options={options} value={formData.vehicleStatus}
                                            onChange={(e) => onChangeHandler({
                                                target: {
                                                    name: 'vehicleStatus',
                                                    value: e
                                                }
                                            })}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={3} align="left">
                            <FormGroup className="text-field">
                                <Label>Customer</Label>
                                <div className="modern-dropdown-technician">
                                    <Select options={customer} value={formData.customer}
                                            onChange={(e) => onChangeHandler({
                                                target: {
                                                    name: 'customer',
                                                    value: e
                                                }
                                            })}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={9} align="right" style={{margin: "0px"}}>
                            <Button color="danger" style={{width: '30vh', marginLeft: "0px",marginRight:"60px"}}
                                    onClick={() => setFormData({...initialFormState})}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color={formData?.vehicleId ? "warning" : "success"} style={{width: '30vh', marginLeft: "15px"}}
                                    onClick={vehicleSave}>{formData?.vehicleId ? 'Update' : 'Save'}</Button>
                        </Col>

                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    // width: '98%',
                    backgroundColor: "white"
                }}>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Number Plate</Label>
                            <Input className="input-field-admin" placeholder="" value={filter.vehicleNoF} onChange={(e) => {
                            setFilter({...filter, vehicleNoF: e.target.value}) }}/>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Customer</Label>
                            <div className="modern-dropdown-technician">
                                <Select options={customer} value={filter.customerF} onChange={(e) => {
                                    setFilter({...filter, customerF: e})
                                }}/>
                            </div>
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
                                onClick={async () => {
                                    await setFilter({...initialFilterState});
                                    await onFilter(true);
                                }}>Clear</Button>
                    </Col>
                    <Col md={1} align="left">
                        <Button color="success" style={{width: '10vh', marginLeft: "0"}}
                                onClick={()=>onFilter(false)}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
                        height: '50%',
                        backgroundColor: "white",
                        padding:0,
                        paddingTop:"2px"
                    }}>
                        <Col md={12} style={{padding:0,margin:0}} >
                            <DataTable
                                columns={columns(vehicleEdit)}
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
export default ManageVehicle;
