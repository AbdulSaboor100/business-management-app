import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/context';
import styles from './approved-approved.module.scss';



const ApprovedAndRejectedComponent = () => {
    let {state , dispatch} = useContext(GlobalContext)

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
                    <th>Status</th>
                </tr>
            {
                state.allApprovedApplications.map((doc , index)=>{

                   if(doc.status === "rejected"){
                    return(
                        <>
                   
                <tr>    
                   <td>{doc.rejectedObj.name}</td>
                   <td>{doc.rejectedObj.uid}</td>
                   <td>{doc.rejectedObj.familyMembers}</td>
                   <td>{doc.rejectedObj.monthlyIncome}</td>
                   <td>{doc.status}</td>
                </tr>
               
                        </>
                    )
                   }else if(doc.status === "approved"){
                         return(
                        <>
                   
                <tr>
                   <td>{doc.approvedObj.name}</td>
                   <td>{doc.approvedObj.uid}</td>
                   <td>{doc.approvedObj.familyMembers}</td>
                   <td>{doc.approvedObj.monthlyIncome}</td>
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
