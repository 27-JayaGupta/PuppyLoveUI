import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import "../../css/sb-admin-2.css";
import {Auth} from '../../context/AuthContext';

export default function SignUp(props) {
   
    const {googleSignup,facebookSignup,signup,CurrentUser,errorCode,errorMessage,logout}=Auth();  
    const [error,setError]=useState('');
    const history=useHistory();
    

    async function registerAccount(values){

        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        let confirmPassword=document.getElementById('confirmPassword').value; 
        let firstName=document.getElementById('firstName').value;  
        let lastName=document.getElementById('lastName').value; 

        if(email==='' || password==='' ||confirmPassword ==='' ||firstName==='' ||lastName===''){
            setError('');
            setError('Please fill all the details required');
            return;
        }

        if(confirmPassword!==password){
            setError('');
            setError('Passwords do not match');
            return;
        }

        await signup(email,password,firstName,lastName);

        if((errorMessage!=='')||(errorCode!=='')){
            setError(errorMessage);
            return;
        }
        
        history.push('/login');

    }

    return (
      <div style={{backgroundColor:"lightsteelblue",right:0,bottom:0,left:0,top:0,position:"fixed"}}>
        <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            {error && <Alert variant="danger">{ error}</Alert>}
                            <form className="user">
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="firstName"
                                            placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="lastName"
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="email"
                                        placeholder="Email Address" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="password" placeholder="Password" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="confirmPassword" placeholder="Repeat Password" />
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-user btn-block" onClick={()=>registerAccount()}>
                                    Register Account
                                </a>
                                <hr /> 
                                <a  className="btn btn-google btn-user btn-block" onClick={()=>googleSignup()}>
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a className="btn btn-facebook btn-user btn-block" onClick={()=>facebookSignup()}>
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </form>
                            <hr />
                            <div className="text-center">
                                <Link to="/forget" className="small" >Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                                <Link to="/login" className="small">Already have an account? Login!</Link>
                            </div>
                            <div className="text-center">
                                <Link onClick={()=> logout()} className="small">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  

    );
}
