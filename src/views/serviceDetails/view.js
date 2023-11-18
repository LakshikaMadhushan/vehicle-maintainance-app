import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label, FormGroup, Input} from 'reactstrap';
import Select from "react-select";
import DataTable from "react-data-table-component";
import {useNavigate} from "react-router-dom";
import {getAllMechanicServiceCategory} from "../../services/mechanicServiceCategoryService";
import {
    getAllMechanicServiceFilter,
    saveMechanicService,
    updateMechanicService
} from "../../services/mechanicServiceService";
import {getAllService} from "../../services/serviceDetailDetailsService";


const options = [
    {value: 'ITEM', label: 'ITEM'},
    {value: 'SERVICE', label: 'SERVICE'}
];
const columns = (onEdit) => [
    {
        name: 'ID',
        selector: row => row.serviceDetailsId,
    },
    {
        name: 'Type',
        selector: row => row.type,
    },
    {
        name: 'Category',
        selector: row => row.categoryName,
    },
    {
        name: 'Name',
        selector: row => row.itemName,
    },
    {
        name: 'Price',
        selector: row => row.cost,
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
            fontWeight: 'bold'
        },
    }
};

const initialFilterState = {
    serviceDetailsId: null,
    serviceTypeF: null

}

const initialFormState = {
    name: null,
    category: null,
    type: null,
    price: ""
}
function Example(props) {
    const {toggle, isOpen,selectedData}=props
    const navigate = useNavigate()
    const [filter, setFilter] = useState(initialFilterState)
    const [tableData, setTableData] = useState([])
    const [formData, setFormData] = useState(initialFormState)
    const [category,setCategory]=useState([])
    const [item,setItem]=useState([])
    const [serviceCategory,setServiceCategory]=useState([])
    const [service,setService]=useState([])


    useEffect(()=>{
        onFilter();
        getAllServiceCategory();
        console.log(selectedData)
    },[])

    const save=()=>{

    }


    // const navigate = useNavigate()
    // const [filter, setFilter] = useState(initialFilterState)
    // const [tableData, setTableData] = useState([])
    // const [category,setCategory]=useState([])
    // const [formData, setFormData] = useState(initialFormState)

    // useEffect(()=>{
    //     onFilter();
    //     getAllServiceCategory();
    // },[])

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
            type: tempBody?.serviceTypeF ? tempBody.serviceTypeF.value : null

        }
        const response=await getAllService(body)
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

    const serviceSave = async () => {
        const body = {

            name: formData?.name,
            category: formData?.category.value,
            type: formData?.type.value,
            price: formData?.price,
            vehicleServiceId:selectedData.vehicleServiceId
        }
        if (formData?.serviceDetailsId) {
            body.serviceDetailsId = formData.serviceDetailsId
            await updateMechanicService(body)
        } else {
            await saveMechanicService(body)
        }

        console.log(body)

        // console.log(formData)
    }
    const mechanicServiceEdit = async (row) => {
        setFormData(
            {
                serviceDetailsId: row.serviceDetailsId,
                type: {label: row.type, value: row.type},
                category: {label: row.categoryName, value: row.categoryId},
                name: {label: row.itemName, value: row.itemId},
                price: row.cost
            }
        )
    }


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: '1500px', width: '80%', maxHeight: '600px', height: '80%' }}  >
                <ModalHeader toggle={toggle}>Service Details</ModalHeader>
                <ModalBody>
                    <div>
                        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
                            <Row style={{alignItems: 'center', margin: '0%' ,height:'80vh', padding: 10, backgroundColor: "#ffffff"}}>
                                <Col md={12} align="left" style={{padding: 0}}>
                                    <Label className="heading-text">Manage Service Details</Label>
                                    <div className="line"></div>
                                </Col>

                                <Row style={{
                                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                                    borderRadius: '5px', backgroundColor: "white", padding: "0px"
                                }}>

                                    <Col md={3} align="left">
                                        <FormGroup className="text-field">
                                            <Label>Service Type</Label>
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
                                        <FormGroup className="text-field">
                                            <Label>Category</Label>
                                            <div className="modern-dropdown">
                                                <Select options={options} value={formData.category}
                                                        onChange={(e) => onChangeHandler({
                                                            target: {
                                                                name: 'category',
                                                                value: e
                                                            }
                                                        })}/>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3} align="left">
                                        <FormGroup className="text-field">
                                            <Label>Name</Label>
                                            <div className="modern-dropdown">
                                                <Select options={category} value={formData.name}
                                                        onChange={(e) => onChangeHandler({
                                                            target: {
                                                                name: 'name',
                                                                value: e
                                                            }
                                                        })}/>
                                            </div>
                                        </FormGroup>
                                    </Col>

                                    <Col md={3} align="left">
                                        <FormGroup className="text-field">
                                            <Label>Price</Label>
                                            <Input className="input-field-mechanic" value={formData.price}
                                                   name={"price"} onChange={onChangeHandler}/>
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
                                            <Button color={formData?.serviceDetailsId ? "warning" : "success"} style={{width: '30vh', marginLeft: "15px"}}
                                                    onClick={serviceSave}>{formData?.serviceDetailsId ? 'Update' : 'Save'}</Button>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row style={{
                                    alignItems: 'center',
                                    margin: '0%',
                                    padding: '0%',
                                    backgroundColor: "white"
                                }}>


                                    <Col md={3} align="left">
                                        <FormGroup className="text-field">
                                            <Label>Service Type</Label>
                                            <div className="modern-dropdown">
                                                <Select options={options} value={filter.serviceTypeF} onChange={(e) => {
                                                    setFilter({...filter, serviceTypeF: e})
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
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Cancel
                    </Button>{' '}
                    {/*<Button color="secondary" onClick={save}>*/}
                    {/*    Save changes*/}
                    {/*</Button>*/}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Example;
