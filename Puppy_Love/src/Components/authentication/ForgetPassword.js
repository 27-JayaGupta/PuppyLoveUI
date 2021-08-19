import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import {auth} from '../../firebase';

export default function ForgetPassword(props) {
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('');

    function resetPassword(){
        let email=document.getElementById('email').value;

        auth.sendPasswordResetEmail(email).then(()=>{
            setError('');
            setSuccess("Instructions has been sent to your registered email");
        })
        .catch((error)=>{
            setSuccess('');
            setError(error.message);
        });
    }
    return (
        <div style={{backgroundColor:"lightblue",right:0,bottom:0,left:0,top:0,position:"fixed"}}>
        <div class="container">

        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                        <p class="mb-4">We get it, stuff happens. Just enter your email address below
                                            and we'll send you a link to reset your password!</p>
                                    </div>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    {success && <Alert variant="success">{success}</Alert>}
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="email" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." />
                                        </div>
                                        <Link to="/forget" class="btn btn-primary btn-user btn-block" onClick={()=>resetPassword()}>
                                            Reset Password
                                        </Link>
                                    </form>
                                    <hr/>
                                    <div class="text-center">
                                        <Link to="/signup" class="small" >Create an Account!</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link to="/login" class="small" >Already have an account? Login!</Link>
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
