import React, {useContext,useState,useEffect, Children } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase.js';

const AuthContext=React.createContext();

export function Auth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [CurrentUser,setCurrentUser]=useState();
    const [errorCode,setErrorCode]=useState('');
    const [errorMessage,setErrorMessage]=useState('');
    
    function signup(email,password,firstName,lastName){
        auth.createUserWithEmailAndPassword(email,password).then((result)=>{
           result.user.updateProfile({
               displayName:firstName+" "+lastName,
           });
        })
        .catch((error) =>{
            setErrorCode('');
            setErrorMessage('');
            setErrorCode(error.code);
            setErrorMessage(error.message);
        }); 
        return; 
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function googleSignup(){
        var provider =new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) =>{
           console.log(result);
        
            // code which runs on success
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            alert(errorCode);
          
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
          });


    }

    function facebookSignup(){
        var provider = new firebase.auth.FacebookAuthProvider();
        return auth.signInWithPopup(provider);
    }

    function logout(){
        auth.signOut();
    }

    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged(user =>{
             setCurrentUser(user);
             
         })   
         return unsubscribe;
     }, [])
   

    const value={
        CurrentUser,
        errorCode,
        errorMessage,
        signup,
        login,
        googleSignup,
        facebookSignup,
        logout
    };

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}