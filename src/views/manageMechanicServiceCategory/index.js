import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import {getAllAdmin, saveAdmin, updateAdmin} from "../../services/adminService";
import {
    getAllMechanicServiceCategory,
    getAllMechanicServiceCategoryFilter, saveMechanicServiceCategory, updateMechanicServiceCategory
} from "../../services/mechanicServiceCategoryService";
import {getAllTechnician, saveTechnician, updateTechnician} from "../../services/technicianService";
import {toast} from "react-toastify";

const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.mechanicServiceCategoryId,
    },
    {
        name: 'Category Name',
        selector: row => row.name,
    },
    {
        name: 'Action',
        selector: row => <Button onClick={() => onEdit(row)} color={"success"}>Edit</Button>,
    }
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

const initialFilterState = {
    categoryName: null
}

const initialFormState = {
    mechanicCategoryName: ""
}
const ManageItemCategory = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [category,setCategory]=useState([])
    const [formData, setFormData] = useState(initialFormState)
    const [error, setError] = useState({mechanicCategoryName:false})


    useEffect(()=>{
        onFilter(true);
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
            name: tempBody?.categoryName ? tempBody.categoryName.value : null,
        }
        const response=await getAllMechanicServiceCategoryFilter(body)
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

    const mechanicServiceCategorySave = async () => {
        if(formData.mechanicCategoryName.trim()===""){
            setError({mechanicCategoryName:true})
            toast.error("Mechanic Category Name is required")
        }else{
            setError({mechanicCategoryName:false})
            const body = {
                name: formData?.mechanicCategoryName,
            }
            if (formData?.mechanicServiceCategoryId) {
                body.mechanicServiceCategoryId = formData.mechanicServiceCategoryId
                const res =await updateMechanicServiceCategory(body)
                if(res?.status===0){
                    toast.success(res.message)
                    setFormData({...initialFormState})
                    onFilter(true)
                }
            } else {
                const res =await saveMechanicServiceCategory(body)
                if(res?.status===0){
                    toast.success(res.message)
                    setFormData({...initialFormState})
                    onFilter(true)
                }
            }

            console.log(body)

            // console.log(formData)
        }

        // const body = {
        //     name: formData?.mechanicCategoryName,
        // }
        // if (formData?.mechanicServiceCategoryId) {
        //     body.mechanicServiceCategoryId = formData.mechanicServiceCategoryId
        //     await updateMechanicServiceCategory(body)
        // } else {
        //     await saveMechanicServiceCategory(body)
        // }
        //
        // console.log(body)

        // console.log(formData)
    }


    const mechanicServiceCategoryEdit = async (row) => {
        setFormData(
            {
                mechanicServiceCategoryId: row.mechanicServiceCategoryId,
                mechanicCategoryName: row.name
            }
        )
    }

    return  <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%',height:'80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Service Category</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field-mechanic">
                            <Label>Mechanic Service Name</Label>
                            <Input className="input-field-mechanic" value={formData.mechanicCategoryName}
                                   name={"mechanicCategoryName"} invalid={error.mechanicCategoryName} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col md={6} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => setFormData({...initialFormState})}>Clear</Button>
                    </Col>
                    <Col md={3} align="left">
                        <Button color={formData?.mechanicServiceCategoryId ? "warning" : "success"} style={{width: '30vh', marginLeft: "15px"}}
                                onClick={mechanicServiceCategorySave}>{formData?.mechanicServiceCategoryId ? 'Update' : 'Save'}</Button>
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
                    backgroundColor: "white"
                }}>


                    <Col md={6} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={category} value={filter.categoryName} onChange={(e) => {
                                    setFilter({...filter, categoryName: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', marginLeft: "0", marginTop: "10px"}}
                                onClick={async () => {
                                    await setFilter({...initialFilterState});
                                    await onFilter(true);
                                }}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', marginLeft: "0", marginTop: "10px"}}
                                onClick={()=>onFilter(false)}>Filter</Button>
                    </Col>

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
                                columns={columns(mechanicServiceCategoryEdit)}
                                data={tableData}
                                pagination
                                customStyles={customStyles}
                                paginationRowsPerPageOptions={[3,5, 10]}
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
export default ManageItemCategory;
