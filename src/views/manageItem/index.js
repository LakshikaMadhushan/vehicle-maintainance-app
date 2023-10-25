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


const options = [
    {value: 'IN_STOCK', label: 'IN_STOCK'},
    {value: 'OUT_STOCK', label: 'OUT_STOCK'},
    {value: 'DELETED', label: 'DELETED'}
];
// const data = [
//     {id: 1, serviceType: 'Service', category: "SUV", name: "clean radiator", price: "2500"},
//     {id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000"}
//
// ];
const columns = [
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
];

const initialFilterState = {
    itemCategory: "",
    itemName: "",
    itemStatus: null
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

    const onFilter = async () => {
        const body = {
            categoryId: filter?.itemCategory ? filter.itemCategory.value : null,
            name: filter?.itemName ? filter.itemName : null,
            status: filter?.itemStatus ? filter.itemStatus.value : null
        }
        const response=await getAllItemFilter(body)
        // setFilter(response.body);
        setTableData(response.body);
        // console.log(response);
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
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Item Name</Label>
                            <Input className="input-field" placeholder=""/>
                        </FormGroup>
                    </Col>

                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Brand</Label>
                            <Input className="input-field" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Seller Name</Label>
                            <Input className="input-field" placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Selling Price</Label>
                            <Input className="input-field" placeholder="Lakshika"/>
                        </FormGroup>
                    </Col>
                    <Col md={2} align="left">
                        <FormGroup className="text-field">
                            <Label>Buying Price</Label>
                            <Input className="input-field" placeholder="Lakshika"/>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <Input className="input-field" placeholder=""/>
                            </FormGroup>
                        </Col>
                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label>Qty</Label>
                                <Input className="input-field" placeholder=""/>
                            </FormGroup>
                        </Col>

                        <Col md={2} align="left">
                            <FormGroup className="text-field">
                                <Label>Category</Label>
                                <div className="modern-dropdown-item">
                                    <Select options={categories}/>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col md={2} align="left" style={{marginLeft: "10px"}}>
                            <Button color="danger" style={{width: '27vh', marginLeft: "10px",marginTop:"10px"}}
                                    onClick={() => navigate("/register")}>Clear</Button>
                        </Col>
                        <Col md={2} align="left">
                            <Button color="success" style={{width: '27vh', marginLeft: "10px",marginTop:"10px"}}
                                    onClick={() => navigate("/register")}>Save</Button>
                        </Col>

                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    // width: '98%',
                    backgroundColor: "yellow"
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
                                onClick={() => {
                                    setFilter(initialFilterState);
                                    onFilter();
                                }}>Clear</Button>
                    </Col>
                    <Col md={1} align="left">
                        <Button color="success" style={{width: '12vh'}}
                                onClick={onFilter}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center',
                        margin: '0%',
                        padding: '0%',
                        // width: '98%',
                        backgroundColor: "yellow"
                    }}>
                        <Col md={12} style={{padding:0,margin:0}} >
                            <DataTable
                                columns={columns}
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
