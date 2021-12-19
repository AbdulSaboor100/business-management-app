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

        <div className={styles.main_home2}>
            <table>
            <tr>
                    <th>Name</th>
                    <th>UID</th>
                    <th>Rejected Or Accepted Date</th>
                    <th>Status</th>
                </tr>
            {
                state.allPublicApplications.map((doc)=>{
                   if(doc.status === "rejected"){
                    return(
                        <>
                   
                <tr>
                   <td>{doc.name}</td>
                   <td>{doc.uid}</td>
                   <td>{doc.rejectedDate.seconds}</td>
                   <td>Reject</td>
                </tr>
               
                        </>
                    )
                   }else{
                       return(
                           <p>Dont Have Applcations</p>
                       )
                   }
                })
            }
            </table>
        </div>
        
    </div>
    )
}

export default ApprovedAndRejectedComponent;
