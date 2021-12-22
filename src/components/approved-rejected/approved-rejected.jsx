import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { collection , onSnapshot , where , query, db } from '../../configs/firebase';
import { GlobalContext } from '../../context/context';
import styles from './approved-approved.module.scss';



const ApprovedAndRejectedComponent = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [search , setSearch] = useState('');
    let [redirectBtn , setRedirectBtn] = useState(false)

    function searchBtn(e){
        dispatch({type : "DESTORYING_DATA_FROM_ALL_APPROVED_APPLICATIONS" , payload : []})
    //    setTimeout(()=>{
        try {
            let dataRef = query(collection(db , "approvedApplications"),where("rejectObj.cnic" , "==" , search))
        onSnapshot(dataRef ,(data)=>{
            data.docChanges().forEach((changes)=>{
                if(changes.type === 'added'){
                    dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                    console.log(changes.doc.data())
                    
                }else if(changes.type === "modified"){
                    dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                }
                else if(changes.type === "removed"){
                    dispatch({type : "ALL_APPROVED_APPLICATIONS" , payload : changes.doc.data()})
                }
            })
        })


        let dataRef1 = query(collection(db , "approvedApplications"),where("approvedObj.cnic" , "==" , search))
        onSnapshot(dataRef1 ,(data1)=>{
            data1.docChanges().forEach((changes)=>{
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
        setRedirectBtn(true)
        setSearch('')
        } catch (error) {
            console.log(error,"error")
        }
    //    },2000)
    }

    function loadAllBtn(){
        dispatch({type : "DESTORYING_DATA_FROM_ALL_APPROVED_APPLICATIONS" , payload : []})
        try {
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
                    setRedirectBtn(false)

        } catch (error) {
            console.log(error,"error")
        }
    }
    
    return (
        <div className={styles.home_Component}>
        <div className={styles.main_home3}>
            <img src="/Assets/LogoKhanaSabkliye.png"  />
        </div>
        <div className={styles.main_home1}>
            <p>Food Request Status</p>
        </div>
        <div className={styles.main_home4}>
            <div>
                <input type="number" placeholder='Search Via Cnic' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            </div>
            <div>
                {
                    redirectBtn === true ? (
                        <button onClick={(e)=>{loadAllBtn(e.target)}}>Load All</button>
                    ) : (
                        <button onClick={(e)=>{searchBtn(e.target)}}>Search</button>
                    )
                }
            </div>
        </div>
    
        {
            state?.allApprovedApplications === undefined? (
                <p style={{fontSize:20}}>No Applications Found</p>
            ) : (

                <div className={styles.main_home2}>
            <table>
            <tr>    
                    <th>Name</th>
                    <th>Cnic</th>
                    <th>UID</th>
                    <th>Family</th>
                    <th>Income</th>
                    <th>Ration</th>
                    <th>Branch</th>
                    <th>Action</th>
                </tr>
            {
                state.allApprovedApplications.map((doc , index)=>{

                   if(doc.status === "rejected"){
                    return(
                        <>
                   
                <tr>    
                   <td>{doc.rejectObj.name}</td>
                   <td>{doc.rejectObj.cnic}</td>
                   <td>{doc.rejectObj.uid}</td>
                   <td>{doc.rejectObj.familyMembers}</td>
                   <td>{doc.rejectObj.monthlyIncome}</td>
                   <td>{doc.rejectObj.MonthlyRation}</td>
                   <td>{doc.rejectObj.nearestOne.name}</td>
                   <td>{doc.status}</td>
                </tr>
               
                        </>
                    )
                   }else if(doc.status === "approved"){
                         return(
                        <>
                   
                <tr>
                   <td>{doc.approvedObj.name}</td>
                   <td>{doc.approvedObj.cnic}</td>
                   <td>{doc.approvedObj.uid}</td>
                   <td>{doc.approvedObj.familyMembers}</td>
                   <td>{doc.approvedObj.monthlyIncome}</td>
                   <td>{doc.approvedObj.MonthlyRation}</td>
                   <td>{doc.approvedObj.nearestOne.name}</td>
                   <td>{doc.status}</td>
                </tr>
               
                        </>
                    )
                   }
                })
            }
            </table>
        </div>
            )
        }
        
    </div>
    )
}

export default ApprovedAndRejectedComponent;
