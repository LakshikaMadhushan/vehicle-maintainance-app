import React from 'react'
import './style.css'
import { Row, Col, Container, Label, Input, FormGroup, Button } from 'reactstrap'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    return <div className="login-container">
        <Container>
            <Row style={{ alignItems: 'center', height: '100vh' }}>
                <Col md={"6"} style={{ padding: 0 }}>
                    <div className="login-left-section">
                        <h1 className="lbl-header">GET Ready to Drive with Confidence!</h1>
                        <p className="lbl-description">
                            Welcome to AutoCare, where we combine technology and automotive expertise to bring you a game-changing car service and maintenance management solution. Our platform offers a host of features that will transform the way you take care of your vehicle, ensuring its peak performance and longevity.</p>
                    </div>
                </Col>

                <Col md={"6"} align="center" style={{ padding: 0 }}>
                    <div className='login-right-section'>
                        <img src={logo} width={150} />

                        <div className="login-form-container" align="left">
                            <FormGroup>
                                <Label>Username</Label>
                                <Input placeholder="Lakshika" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input placeholder="*****" type="password" />
                            </FormGroup>

                            <div align='right'>
                                <Label className="text-success">Forgot password?</Label>
                            </div>

                            <div align="center">
                                <Button color="success" style={{ width: '100%', marginBottom: 20 }} onClick={() => navigate("/dashboard")}>Sign In</Button>

                                <Label>Don't have an account yet?</Label>
                                <br />
                                <Label className="text-success">Create an account</Label>
                            </div>
                        </div>

                        <Label className="lbl-copyright">Copyright © 2023 <b>Lakshika Madhushan</b>. All rights reserved.</Label>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Login