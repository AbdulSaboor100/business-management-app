import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import styles from './approved-approved.module.scss';



const ApprovedAndRejectedComponent = () => {
    let {state , dispatch} = useContext(GlobalContext)
    return (
        <div className={styles.home_Component}>
        <div className={styles.main_home1}>
            <p>Approved And Rejected Tab</p>
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
                    <th>Rejected Or Accepted Date</th>
                    <th>Status</th>
                </tr>
            {
                state.allApprovedApplications.map((doc)=>{
                    console.log(doc.approvedObj)
                   if(doc.status === "rejected"){
                    return(
                        <>
                   
                <tr>
                   <td>{doc.approvedObj.name}</td>
                   <td>{doc.approvedObj.uid}</td>
                   {/* <td>{doc.approvedObj.rejectedDate.seconds}</td> */}
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
                   <td>{doc.approvedObj.rejectedDate.seconds}</td>
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
