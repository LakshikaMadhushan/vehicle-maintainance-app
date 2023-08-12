import React from "react";
import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import './style.css'
import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";

const Register = () => {
    const navigate = useNavigate()

    return <div className="login-container">
        <Container>
            <Row style={{alignItems: 'center', height: '100vh'}}>
                <Col md={"6"} style={{padding: 0}}>
                    <div className="login-left-section">
                        <h1 className="lbl-header">GET Ready to Drive with Confidence!</h1>
                        <p className="lbl-description">
                            Welcome to AutoCare, where we combine technology and automotive expertise to bring you a
                            game-changing car service and maintenance management solution. Our platform offers a host of
                            features that will transform the way you take care of your vehicle, ensuring its peak
                            performance and longevity.</p>
                    </div>
                </Col>

                <Col md={"6"} align="center" style={{padding: 0}}>
                    <div className='login-right-section'>
                        <img src={logo} width={150}/>
                        <Row style={{alignItems: 'center', height: '50vh'}}>


                            <div className="login-form-container"style={{ display: "flex"}} align="left" >
                                <Col md={"6"} style={{padding: 0}}>
                                    <div  style={{paddingRight: "10%"}}>
                                        <FormGroup>
                                            <Label>User Email</Label>
                                            <Input placeholder="lakshika@gmailcom"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>User Name</Label>
                                            <Input placeholder="Lakshika"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Password</Label>
                                            <Input placeholder="*****" type="password"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Contact</Label>
                                            <Input placeholder="0712377585"/>
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col md={"6"} style={{padding: 0}}>
                                    <div>
                                        <FormGroup>
                                            <Label>Permanent Address</Label>
                                            <Input placeholder=""/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Residential Address </Label>
                                            <Input placeholder=""/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Higher Qualification</Label>
                                            <Input placeholder=""/>
                                        </FormGroup>
                                        <div align="center">
                                            <Button color="success" style={{width: '100%', marginTop: "10%"}}
                                                    onClick={() => navigate("/dashboard")}>Register</Button>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Label className="lbl-copyright">Copyright © 2023 <b>Lakshika Madhushan</b>. All rights
                            reserved.</Label>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}


export default Register;
