import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DataTable from "react-data-table-component";
import {getAllFilterTechnician} from "../../services/technicianService";
import {
    getAllMechanicServiceFilter,
    saveMechanicService,
    updateMechanicService
} from "../../services/mechanicServiceService";
import {
    getAllMechanicServiceCategory, saveMechanicServiceCategory,
    updateMechanicServiceCategory
} from "../../services/mechanicServiceCategoryService";
import {toast} from "react-toastify";


const options = [
    {value: 'ALL', label: 'ALL'},
    {value: 'SUV', label: 'SUV'},
    {value: 'HYBRID', label: 'HYBRID'},
    {value: 'MINI', label: 'MINI'}
];
const columns = (onEdit) => [
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
    mechanicServiceName: "",
    vehicleType: null,
    mechanicServiceCategory: null
}

const initialFormState = {
    mechanicServiceFormName: "",
    mechanicServicePrice: "",
    mechanicServiceType: null,
    mechanicServiceCategory: null
}

const ManageMechanicService = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [category,setCategory]=useState([])
    const [formData, setFormData] = useState(initialFormState)

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

    const onFilter = async (data) => {
        const tempBody = data ? {...initialFilterState} : filter
        const body = {
            mechanicServiceCategoryId: tempBody?.mechanicServiceCategory ? tempBody.mechanicServiceCategory.value : null,
            name: tempBody?.mechanicServiceName ? tempBody.mechanicServiceName : null,
            vehicleType: tempBody?.vehicleType ? tempBody.vehicleType.value : null,

        }
        const response=await getAllMechanicServiceFilter(body)
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

    const mechanicServiceSave = async () => {

        if (!formData?.mechanicServiceCategory?.value) {
            toast.error("Please select a mechanic service category.");
            return; // Exit early if validation fails
        }

        if (!formData?.mechanicServiceFormName) {
            toast.error("Please enter a mechanic service name.");
            return;
        }

        if (!formData?.mechanicServicePrice) {
            toast.error("Please enter a mechanic service price.");
            return;
        }

        if (!formData?.mechanicServiceType?.value) {
            toast.error("Please select a mechanic service vehicle type.");
            return;
        }
        const body = {
            mechanicServiceCategoryId: formData?.mechanicServiceCategory?.value,
            name: formData?.mechanicServiceFormName,
            price: formData?.mechanicServicePrice,
            vehicleType: formData?.mechanicServiceType?.value,

        }
        if (formData?.mechanicServiceId) {
            body.mechanicServiceId = formData.mechanicServiceId
            const res=await updateMechanicService(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        } else {
            const res=await saveMechanicService(body)
            if(res?.status===0){
                toast.success(res.message)
                setFormData({...initialFormState})
                onFilter(true)
            }else if(res?.status===405 || res?.status===1){
                toast.error(res.message)
            }
        }

        console.log(body)

        // console.log(formData)
    }


    const mechanicServiceEdit = async (row) => {
        setFormData(
            {
                mechanicServiceId: row.mechanicServiceId,
                mechanicServiceFormName: row.name,
                mechanicServicePrice: row.price,
                mechanicServiceType: {label: row.vehicleType, value: row.vehicleType},
                mechanicServiceCategory:{label: row.mechanicServiceCategoryName, value: row.mechanicServiceCategoryId}
            }
        )
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
                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field-mechanic">
                            <Label>Mechanic Service Name</Label>
                            <Input className="input-field-mechanic" value={formData.mechanicServiceFormName}
                                   name={"mechanicServiceFormName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Price</Label>
                            <Input className="input-field-mechanic" value={formData.mechanicServicePrice}
                                   name={"mechanicServicePrice"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Vehicle Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options} value={formData.mechanicServiceType}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'mechanicServiceType',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={category} value={formData.mechanicServiceCategory}
                                        onChange={(e) => onChangeHandler({
                                            target: {
                                                name: 'mechanicServiceCategory',
                                                value: e
                                            }
                                        })}/>
                            </div>
                        </FormGroup>
                    </Col>

                <Row style={{
                    alignItems: 'center', margin: '0%',
                    borderRadius: '5px', backgroundColor: "white", padding: "4px", justifyContent: "right"
                }}>
                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => setFormData({...initialFormState})}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color={formData?.mechanicServiceId ? "warning" : "success"} style={{width: '30vh', marginLeft: "15px"}}
                                onClick={mechanicServiceSave}>{formData?.mechanicServiceId ? 'Update' : 'Save'}</Button>
                    </Col>
                </Row>
                </Row>
                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    backgroundColor: "white"
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
                                onClick={async () => {
                                    await setFilter({...initialFilterState});
                                    await onFilter(true);
                                }}>Clear</Button>
                    </Col>
                    <Col md={1} align="right">
                        <Button color="success" style={{width: '12vh', marginLeft: "0",marginTop:"10px"}}
                                onClick={()=>onFilter(false)}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
                        backgroundColor: "white",
                        padding:0,
                        paddingTop:"2px"
                    }}>
                        <Col md={12} style={{padding:0,margin:0}} >
                            <DataTable
                                columns={columns(mechanicServiceEdit)}
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
export default ManageMechanicService;
