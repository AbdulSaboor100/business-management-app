import React, { useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import { GlobalContext } from '../context/context';
import MainHome from '../screens/home/home';
import MainLogin from '../screens/login/login';
import SignUp from '../screens/sign-up/sign-up';
import { auth , onAuthStateChanged , getDoc , doc, db ,onSnapshot  , collection  , getDocs} from './firebase';
import ApprovedRejected from '../screens/approved-rejected/approved-rejected';
import BranchManagerComponent from '../components/branch-manager/branch-managerComponent';
import BranchManager from '../screens/branch-manager/branch-manager';
import LogoutFunc from '../screens/logout/logout';

const AppRoutes = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [userStatus , setUserStatus] = useState();
    let {userData , setUserData} = useState({})
    useEffect(()=>{
        onAuthStateChanged(auth ,async (user)=>{
            if(user){
                console.log(user , "user Found");
                setUserStatus(user)
                
                try {
                    let userRef = doc(db, 'users' , user.uid)
                    let userDetails = await getDoc(userRef);
                    dispatch({type : "ACTIVE_USER" , payload : userDetails.data()})
                    let publicApplications = collection(db, "publcApplicaitons")
                    
                    onSnapshot(publicApplications , (data)=>{
                        data.docChanges().forEach((changes)=>{
                            if(changes.type === 'added'){
                                dispatch({type : "ALL_PUBLIC_APPLICATIONS" , payload : changes.doc.data()})
                                
                                
                            }else if(changes.type === "modified"){
                                dispatch({type : "ALL_PUBLIC_APPLICATIONS" , payload : changes.doc.data()})
                            }
                            else if(changes.type === "removed"){
                                dispatch({type : "ALL_PUBLIC_APPLICATIONS" , payload : changes.doc.data()})
                            }
                        })
                    })
                    let approvedApplications = collection(db, "approvedApplications")
                    onSnapshot(approvedApplications , (data)=>{
                        data.docChanges().forEach((changes)=>{
                            if(changes.type === 'added'){
                                dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                                
                            }else if(changes.type === "modified"){
                                dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                            }
                            else if(changes.type === "removed"){
                                dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                            }
                        })
                    })

                } catch (error) {
                    console.log("error : " , error)
                }
            }else{
                console.log("user not found" , state);
                setUserStatus(null)
                dispatch({type : "ACTIVE_USER" , payload : undefined});
                dispatch({type : "DESTORYING_DATA_FROM_ALL_PUBLIC_APPLICATIONS" , payload : []}) 
                dispatch({type : "DESTORYING_DATA_FROM_ALL_APPROVED_APPLICATIONS" , payload : []})


            }
        })
    },[])
    return (
        <div>
            <Router>
                <Switch>
                           

                            {
                                auth.currentUser ? (
                                    <>
                            <Route path="/" exact >
                                <MainHome />
                            </Route>
                            <Route path="/approved-and-rejected" >
                                <ApprovedRejected />
                            </Route>
                            <Route path="/branch-manager">
                                <BranchManager />
                            </Route>
                            <Route path="/logout">
                                <LogoutFunc />
                            </Route>
                                    </>
                                ) : (
                                    <Route path="/" exact >
                                    <MainLogin />
                                </Route>
                                )
                            }
                      
                            {/* <Route path="/sign-up">
                                <SignUp />
                            </Route> */}
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes;
