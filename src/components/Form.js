import React from 'react'
import bgImg from '../assets/img1.webp';
import logo from '../assets/logo.png';
import {useForm} from 'react-hook-form';

export default function Form() {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));

    return (
        <section>
            <div className="register">

                <div className="col-2">
                    <img src={bgImg} alt=""/>
                    <p1 className="overlay-text">GET Ready To <br/> Drive With <br/> Confidence!</p1>
                    <p1 className="overlay-text-desc">Welcome to AutoCare, where we combine<br/>
                        technology and automotive expertise to bring<br/>
                        you a game-changing car service and<br/>
                        maintenance management solution. Our <br/>
                        platform offers a host of features that will<br/>
                        transform the way you take care of your <br/>
                        vehicle, ensuring its peak performance and <br/>
                        longevity.
                    </p1>
                </div>

                <div>

                    <div className="col-1">
                        <div className="col-3">

                            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                                <p className="text">User Name</p>
                                <input type="text" {...register("username")} placeholder='username'/>
                                <p className="text">Password</p>
                                <input type="text" {...register("password")} placeholder='password'/>
                                {/*<input type="text" {...register("confirmpwd")} placeholder='confirm password' />*/}
                                {/*<input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />*/}
                                {/*{errors.mobile?.type === "required" && "Mobile Number is required"}*/}
                                {/*{errors.mobile?.type === "maxLength" && "Max Length Exceed"}*/}
                                <p className="text1">forgot password?</p>
                                <button className='btn'>Sign In</button>
                                <p className="text2">Don’t have an account yet?</p>
                                <p className="text3">Create an account</p>
                            </form>
                        </div>

                    </div>

                </div>
                <p className="text4">Copyright © 2023 Lakshika Madhushan. All rights reserved.</p>
                <div className="text5">
                    <img src={logo} alt=""   />
                </div>
            </div>

        </section>
    )
}
