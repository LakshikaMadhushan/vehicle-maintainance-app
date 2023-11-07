import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import {
    getAllMechanicServiceCategory,
    getAllMechanicServiceCategoryFilter, saveMechanicServiceCategory, updateMechanicServiceCategory
} from "../../services/mechanicServiceCategoryService";
import {
    getAllCategory,
    getAllItemCategoryFilter,
    saveItemCategory,
    updateItemCategory
} from "../../services/categoryService";

const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.categoryId,
    },
    {
        name: 'Item Category Name',
        selector: row => row.categoryName,
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
    categoryName: null
}

const initialFormState = {
    ItemCategoryName: ""
}
const ManageMechanicServiceCategory = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [category,setCategory]=useState([])
    const [formData, setFormData] = useState(initialFormState)


    useEffect(()=>{
        onFilter(true);
        getAllItemCategory();
    },[])

    const getAllItemCategory=async ()=>{
        const res= await getAllCategory()
        setCategory(res.body.map(category=>{
            return {
                label:category.categoryName,
                value:category.categoryId
            }
        }))
    }

    const onFilter = async (data) => {
        const tempBody = data ? {...initialFilterState} : filter
        const body = {
            name: tempBody?.categoryName ? tempBody.categoryName.value : null,
        }
        const response=await getAllItemCategoryFilter(body)
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


    const itemCategorySave = async () => {
        const body = {
            name: formData?.ItemCategoryName,
        }
        if (formData?.categoryId) {
            body.categoryId = formData.categoryId
            await updateItemCategory(body)
        } else {
            await saveItemCategory(body)
        }

        console.log(body)

        // console.log(formData)
    }


    const itemCategoryEdit = async (row) => {
        setFormData(
            {
                categoryId: row.categoryId,
                ItemCategoryName: row.categoryName
            }
        )
    }


    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', padding: 0, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Item Category</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field-mechanic">
                            <Label>Item Category Name</Label>
                            <Input className="input-field-mechanic" value={formData.ItemCategoryName}
                                   name={"mechanicCategoryName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>


                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => setFormData({...initialFormState})}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color={formData?.categoryId ? "warning" : "success"} style={{width: '30vh', marginLeft: "15px"}}
                                onClick={itemCategorySave}>{formData?.categoryId ? 'Update' : 'Save'}</Button>
                    </Col>
                </Row>

                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    backgroundColor: "yellow",
                    borderRadius: '5px'
                }}>

                    <Col md={3} align="left">
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
                        backgroundColor: "yellow",
                        padding: 0,
                        paddingTop: "2px"
                    }}>
                        <Col md={12} style={{padding: 0, margin: 0}}>
                            <DataTable
                                columns={columns(itemCategoryEdit)}
                                data={tableData}
                                pagination
                                customStyles={customStyles}
                                paginationRowsPerPageOptions={[ 5, 10]}
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
export default ManageMechanicServiceCategory;
