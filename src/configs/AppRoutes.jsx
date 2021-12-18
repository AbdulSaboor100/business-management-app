import React, { useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import { GlobalContext } from '../context/context';
import MainHome from '../screens/home/home';
import MainLogin from '../screens/login/login';
import SignUp from '../screens/sign-up/sign-up';
import { auth , onAuthStateChanged , getDoc , doc, db } from './firebase';

const AppRoutes = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [userStatus , setUserStatus] = useState()
    useEffect(()=>{
        onAuthStateChanged(auth ,async (user)=>{
            if(user){
                console.log(user , "user Found");
                setUserStatus(user)
                try {
                    let userRef = doc(db, 'users' , user.uid)
                    let userDetails = await getDoc(userRef);
                    dispatch({type : "ACTIVE_USER" , payload : userDetails.data()})
                } catch (error) {
                    console.log("error : " , error)
                }
            }else{
                console.log("user not found");
                setUserStatus(null)
                dispatch({type : "ACTIVE_USER" , payload : undefined})
            }
        })
    },[])
    return (
        <div>
            <Router>
                <Switch>
                    
                            <Route path="/home" >
                                <MainHome />
                            </Route>
                        
                            <Route path="/" exact>
                                <MainLogin />
                            </Route>
                            <Route path="/sign-up">
                                <SignUp />
                            </Route>
                      
            
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes;
