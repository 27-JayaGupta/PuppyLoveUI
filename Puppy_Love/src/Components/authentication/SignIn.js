import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import {Auth} from '../../context/AuthContext';

export default function SignIn(props) {
    const {googleSignup,facebookSignup,login}=Auth();
    const [error,setError]=useState('');
    const history=useHistory();

    async function loginUser(){
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;

        try{
            await login(email,password);
            setError('');
            history.push('/dashboard');
        }
        catch{
            setError('Invalid email or password');

        }
    }
    return (
    <div style={{backgroundColor:"#3c3c3e",right:0,bottom:0,left:0,top:0,position:"fixed"}}>
        <div class="container" >

        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5" style={{backgroundColor:"#c8c8e2"}}>
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        {error && <Alert variant="danger"> {error}</Alert>}
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="email" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="password" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a  class="btn btn-primary btn-user btn-block" onClick={()=>loginUser()}>
                                            Login
                                        </a>
                                        <hr />
                                        <a href="" class="btn btn-google btn-user btn-block" onClick={()=>googleSignup()}>
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="" class="btn btn-facebook btn-user btn-block" onClick={()=>facebookSignup()}>
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr/>
                                    <div class="text-center">
                                        <Link to="/forget">Forgot Password?</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link to="/signup" class="small" >Create an Account!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>
    )
}
