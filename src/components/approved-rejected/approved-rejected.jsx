import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/context';
import styles from './approved-approved.module.scss';



const ApprovedAndRejectedComponent = () => {
    let {state , dispatch} = useContext(GlobalContext)

    useEffect(()=>{
        console.log(state.allApprovedApplications)
    },[])

    return (
        <div className={styles.home_Component}>
        <div className={styles.main_home3}>
            <img src="/Assets/LogoKhanaSabkliye.png"  />
        </div>
        <div className={styles.main_home1}>
            <p>Food Request Status</p>
        </div>

        {
            state?.allApprovedApplications === undefined? (
                <p style={{fontSize:20}}>No Applications Found</p>
            ) : (
                <div className={styles.main_home2}>
            <table>
            <tr>    
                    <th>Name</th>
                    <th>UID</th>
                    <th>Family Members</th>
                    <th>Family Income</th>
                    <th>Monthly Ration Needed</th>
                    <th>Person Nearest Branch</th>
                    <th>Status</th>
                </tr>
            {
                state.allApprovedApplications.map((doc , index)=>{

                   if(doc.status === "rejected"){
                    return(
                        <>
                   
                <tr>    
                   <td>{doc.rejectObj.name}</td>
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
                       console.log(doc.approvedObj.nearestOne.name)
                         return(
                        <>
                   
                <tr>
                   <td>{doc.approvedObj.name}</td>
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
