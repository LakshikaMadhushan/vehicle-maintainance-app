import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import {getAllTechnician} from "../../services/technicianService";
import {getAllVehicle} from "../../services/vehicleService";
import {getAllCategory} from "../../services/categoryService";
import {getAllMechanicServiceCategory} from "../../services/mechanicServiceCategoryService";
import {getAllsMechanicService} from "../../services/mechanicServiceService";
import {getAllItems} from "../../services/itemService";

const columns = (onRemove) => [
    {
        name: 'Service Model',
        selector: row => row.model,
    },
    {
        name: 'Service Type',
        selector: row => row.type,
    },
    {
        name: 'Name',
        selector: row => row.serviceName,
    },
    {
        name: 'Price',
        selector: row => row.price,
    },
    {
        name: 'Action',
        selector: (row, index) => <Button onClick={() => onRemove(index)} color={"danger"}>Remove</Button>,
    }
];

const options = [
    {value: 'ITEM', label: 'ITEM'},
    {value: 'SERVICE', label: 'SERVICE'}
];

const model = [
    {value: 'FULL', label: 'FULL'},
    {value: 'NORMAL', label: 'NORMAL'}
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

const initialFormState = {
    vehicle: null,
    technician: null,
    type: null,
    model: null,
    category: null,
    service: null,
    price: "",
}


const ManageService = () => {
    const navigate = useNavigate()
    const [technician, setTechnician] = useState([])
    const [vehicle, setVehicle] = useState([])
    const [formData, setFormData] = useState(initialFormState)
    const [category, setCategory] = useState([])
    const [item, setItem] = useState([])
    const [serviceCategory, setServiceCategory] = useState([])
    const [service, setService] = useState([])
    const [list, setList] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        loadAllTechnician();
        loadAllVehicle();
        // getAllServiceCategory();
        // getAllItem();
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

    const getAllItemCategory = async () => {
        const res = await getAllCategory()
        setCategory(res.body.map(category => {
            return {
                label: category.categoryName,
                value: category.categoryId
            }
        }))
    }

    const getAllItem = async () => {
        const res = await getAllItems()
        setItem(res.body.map(category => {
            return {
                label: category.itemName,
                value: category.itemId,
                price: category.sellingPrice
            }
        }))
    }

    const getAllMechanicService = async () => {
        const res = await getAllsMechanicService()
        setItem(res.body.map(category => {
            return {
                label: category.name,
                value: category.mechanicServiceId,
                price: category.price
            }
        }))
    }

    const getAllServiceCategory = async () => {
        const res = await getAllMechanicServiceCategory()
        setCategory(res.body.map(category => {
            return {
                label: category.name,
                value: category.mechanicServiceCategoryId
            }
        }))
    }

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onAddHandler = () => {
        // console.log(formData)
        if (list.length === 0) {
            setList([{
                model: formData?.model?.value,
                vehicle: formData?.vehicle?.value,
                technician: formData?.technician?.value,
                type: formData?.type?.value,
                category: formData?.category?.value,
                price: price,
                service: formData?.service?.value,
                serviceName: formData?.service?.label
            }])
        } else {
            const tempList = [...list]
            tempList.push({
                model: formData?.model?.value,
                vehicle: formData?.vehicle?.value,
                technician: formData?.technician?.value,
                type: formData?.type?.value,
                category: formData?.category?.value,
                price: price,
                service: formData?.service?.value,
                serviceName: formData?.service?.label
            })
            setList(tempList)
        }

    }

    const onRemove = (index) => {
        if (list.length === 1) {
            setList([])
        } else {
            const tempList = [...list]
            tempList.splice(index, 1)
            setList(tempList)
        }


    }

    const onSave = () => {
        console.log(list)
        const dataArray = [];
        const body = {
            vehicleId: formData?.vehicle?.value,
            technicianId: formData?.technician?.value,
            type: formData?.model?.value,
            saveServiceDetails: []
         }



        list.forEach(item => {
            const dataObject = {
                cost: item.price,
                type:item.type,
                itemId:item.service
            };

            dataArray.push(dataObject);
        });


        body.saveServiceDetails = dataArray;

        console.log(body);


    }


    return <div>
        <Row style={{alignItems: 'center', width: '100%', margin: 0, padding: 0, backgroundColor: "#f1f0e8"}}>
            <Row style={{alignItems: 'center', margin: '0', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Service</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', margin: '0%', border: '2px solid #ccc', marginTop: '5px', marginLeft: '0px',
                    borderRadius: '5px', display: "flex", backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={vehicle} value={formData.vehicle}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'vehicle',
                                                value: e
                                            }
                                        })}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={technician} value={formData.technician}
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
                            <Label className="label">Service Model</Label>
                            <div className="modern-dropdown">
                                <Select options={model} value={formData.model} onChange={(e) => onChangeHandler({
                                    target: {
                                        name: 'model',
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
                                        onChange={(e) => {
                                            // Run getAllItemCategory() if the selected value is 'item'
                                            if (e && e.value === 'ITEM') {
                                                category.value = null;
                                                getAllItemCategory();
                                            } else if (e && e.value === 'SERVICE') {
                                                category.value = null;
                                                getAllServiceCategory();
                                            }

                                            // Update the state with the selected value
                                            onChangeHandler({
                                                target: {
                                                    name: 'type',
                                                    value: e
                                                }
                                            });
                                        }}
                                />
                            </div>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', margin: '0%', display: "flex", backgroundColor: "white", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Category</Label>
                                <div className="modern-dropdown">
                                    <Select options={category} value={formData.category}
                                            onChange={(e) => {

                                                // Run getAllItemCategory() if the selected value is 'item'
                                                if (formData?.type.value === 'ITEM') {
                                                    getAllItem();
                                                } else if (formData?.type.value  === 'SERVICE') {
                                                    getAllMechanicService();
                                                }
                                                // Update the state with the selected value
                                                onChangeHandler({
                                                    target: {
                                                        name: 'category',
                                                        value: e
                                                    }
                                                });
                                            }}


                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Name</Label>
                                <div className="modern-dropdown">
                                    <Select options={item} value={formData.service} onChange={(e) => {

                                        // Run getAllItemCategory() if the selected value is 'item'
                                        setPrice(e.price);

                                        // Update the state with the selected value
                                        onChangeHandler({
                                            target: {
                                                name: 'service',
                                                value: e
                                            }
                                        });
                                    }}/>
                                </div>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <Label style={{
                                padding: "5px",
                                width: "35vh",
                                alignItems: "center",
                                color: "green"
                            }}>price</Label><br/>
                            <Label style={{padding: "5px", width: "35vh", alignItems: "center", color: "green"}}>LKR
                                {price}</Label>
                        </Col>
                        <Col md={1} align="left">
                            <Button color="warning" style={{width: '100px', marginLeft: "0"}}
                                    onClick={() => {
                                        setPrice(0);  // Call the setPrice() method
                                        setFormData({ ...initialFormState }); // Set form data
                                    }}>clear</Button>
                        </Col>
                        <Col md={1} align="right">
                            <Button color="success" style={{width: '100px', marginLeft: "0px%"}}
                                    onClick={onAddHandler}>Add</Button>
                        </Col>


                    </Row>

                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    height: '50%',
                    backgroundColor: "white",
                    padding: 0,
                    paddingTop: "2px"
                }}>
                    <Col md={12} style={{padding: 0, margin: 0}}>
                        <DataTable
                            columns={columns(onRemove)}
                            data={list}
                            pagination
                            customStyles={customStyles}
                            paginationRowsPerPageOptions={[3, 5, 10]}
                            // defaultPageSize={2}
                            paginationPerPage={3}
                        />


                        <Row style={{
                            alignItems: 'center',
                            margin: '0%',
                            height: '50%',
                            backgroundColor: "white"
                        }}>
                            <Col md={6} style={{borderRadius: "5px", border: '2px solid #ccc'}}>
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Total</Label><br/>
                                <Label style={{padding: "2px", width: "35vh", alignItems: "center", color: "green"}}>LKR
                                    {price}</Label>
                            </Col>

                            <Col md={6} style={{borderRadius: "5px", margin: 0, padding: 0}}>
                                <div style={{backgroundColor: "white", alignItems: 'center', justifyContent: "right"}}
                                     align="right">
                                    <Button color="success" style={{width: '25vh'}}
                                            onClick={onSave}>Confirm Service</Button>
                                </div>
                            </Col>


                        </Row>

                    </Col>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ManageService;
