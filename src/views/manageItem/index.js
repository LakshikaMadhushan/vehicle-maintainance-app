import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import {getAllItemFilter, getAllItems} from "../../services/itemService";
import DataTable from "react-data-table-component";
import {getAllCategory} from "../../services/categoryService";
import {getAllFilterTechnician} from "../../services/technicianService";
import {saveAdmin, updateAdmin} from "../../services/adminService";


const options = [
    {value: 'IN_STOCK', label: 'IN_STOCK'},
    {value: 'OUT_STOCK', label: 'OUT_STOCK'},
    {value: 'DELETED', label: 'DELETED'}
];

const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.itemId,
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
        name: 'Seller Name',
        selector: row => row.sellerName,
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
    {
        name: 'Action',
        selector: row => <Button onClick={() => onEdit(row)} color={"success"}>Edit</Button>,
    }
];

const initialFilterState = {
    itemCategory: "",
    itemName: "",
    itemStatus: null
}

const initialFormState = {
    itemName: "",
    sellingPrice: "",
    sellerName: "",
    buyingPrice: "",
    brand: "",
    categoryName: null,
    quantity: "",
    status: null
}
const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight:'bold'
        },
    }
};
const ManageItem = () => {
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const [categories,setCategories]=useState([])
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [formData, setFormData] = useState(initialFormState)

    useEffect(()=>{
        // loadAllItems();
        onFilter();
        loadAllCategory();
    },[])

    const loadAllItems=async ()=>{
        const res= await getAllItems()
        setData(res.body)
    }

    const loadAllCategory=async ()=>{
        const res= await getAllCategory()
        setCategories(res.body.map(item=>{
            return {
                label:item.categoryName,
                value:item.categoryId
            }
        }))
    }



    const itemSave = async () => {
        const body = {
            name: formData?.adminName,
            address1: formData?.adminAddress,
            status: formData?.adminStatus?.value,
            mobileNumber: formData?.adminMobile,
            password: formData?.adminPassword,
            qualification: formData?.adminQualification,
            nic: formData?.adminNic,
            sellerName: formData?.sellerName,
            email: formData?.adminEmail
        }
        if (formData?.adminId) {
            body.userId = formData.adminId
            await updateAdmin(body)
        } else {
            await saveAdmin(body)
        }

        // console.log(formData)
    }


    const itemEdit = async (row) => {
        setFormData(
            {
                itemId: row.itemId,
                itemName: row.itemName,
                sellingPrice: row.sellingPrice,
                sellerName: row.sellerName,
                buyingPrice: row.buyingPrice,
                brand: row.brand,
                quantity: row.quantity,
                categoryName: {label: row.categoryName, value: row.categoryId},
                status: {label: row.itemStatus, value: row.itemStatus}
            }
        )
    }

    const onFilter = async (data) => {
        const tempBody = data ? {...initialFilterState} : filter
        const body = {
            // categoryId: tempBody?.itemCategory ? tempBody.itemCategory.value : null,
            name: tempBody?.itemName ? tempBody.itemName : null,
            status: tempBody?.itemStatus ? tempBody.itemStatus.value : null,
            type: tempBody?.itemCategory ? tempBody.itemCategory.value : null
        }
        const response=await getAllItemFilter(body)
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



    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Item</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',marginTop:"4px",
                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                }}>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Item Name</Label>
                            <Input className="input-field"  value={formData.itemName}
                                   name={"itemName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Brand</Label>
                            <Input className="input-field"  value={formData.brand}
                                   name={"brand"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Seller Name</Label>
                            <Input className="input-field"  value={formData.sellerName}
                                   name={"sellerName"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Selling Price</Label>
                            <Input className="input-field" value={formData.sellingPrice}
                                   name={"sellingPrice"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Buying Price</Label>
                            <Input className="input-field" value={formData.buyingPrice}
                                   name={"buyingPrice"} onChange={onChangeHandler}/>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', margin: '0%', backgroundColor: "white", padding: "0px"
                    }}>
                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label className="label">status</Label>
                                <div className="modern-dropdown-item">
                                    <Select options={options} value={formData.status}
                                            onChange={(e) => onChangeHandler({
                                                target: {
                                                    name: 'status',
                                                    value: e
                                                }
                                            })}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label>Qty</Label>
                                <Input className="input-field" value={formData.quantity}
                                       name={"quantity"} onChange={onChangeHandler}/>
                            </FormGroup>
                        </Col>

                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label>Category</Label>
                                <div className="modern-dropdown-item">
                                    <Select options={categories} value={formData.categoryName}
                                            onChange={(e) => onChangeHandler({
                                                target: {
                                                    name: 'categoryName',
                                                    value: e
                                                }
                                            })}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={2} align="left" style={{marginLeft: "10px"}}>
                            <Button color="danger" style={{width: '27vh', marginLeft: "15px"}}
                                    onClick={() => setFormData({...initialFormState})}>Clear</Button>
                        </Col>
                        <Col md={2} align="left">
                            <Button color={formData?.itemId ? "warning" : "success"} style={{width: '27vh', marginLeft: "15px"}}
                                    onClick={itemSave}>{formData?.itemId ? 'Update' : 'Save'}</Button>
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
                            <Label>Item Name</Label>
                            <Input className="input-field-item" placeholder="" value={filter.itemName} onChange={(e) => {
                                setFilter({...filter, itemName: e.target.value}) }}/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label className="label">Category</Label>
                            <div className="modern-dropdown">
                                <Select options={categories}value={filter.itemCategory} onChange={(e) => {
                                    setFilter({...filter, itemCategory: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label className="label">status</Label>
                            <div className="modern-dropdown">
                                <Select options={options}value={filter.itemStatus} onChange={(e) => {
                                    setFilter({...filter, itemStatus: e})
                                }}/>
                            </div>
                        </FormGroup>
                    </Col>


                    <Col md={1} align="left">
                        <Button color="danger" style={{width: '12vh'}}
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
                        padding: '0%',
                        // width: '98%',
                        backgroundColor: "white"
                    }}>
                        <Col md={12} style={{padding:0,margin:0}} >
                            <DataTable
                                columns={columns(itemEdit)}
                                data={tableData}
                                pagination
                                customStyles={customStyles}
                                paginationRowsPerPageOptions={[3, 25, 50, 100]}
                                // defaultPageSize={2}
                                paginationPerPage={3}
                            />

                        </Col>
                    </Row>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ManageItem;
