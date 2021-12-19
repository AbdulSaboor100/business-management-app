import React, { useContext, useEffect } from 'react';
import { db , doc , updateDoc ,deleteDoc } from '../../configs/firebase';
import { GlobalContext } from '../../context/context';
import styles from './homeComponent.module.scss';

const HomeComponent = () => {
    let {state , dispatch} = useContext(GlobalContext)
    useEffect(function(){
        console.log(state)
    },[state])
    function convertSeconds(seconds) {
        var convert = function(x) { return (x < 10) ? "0"+x : x; }
        return convert(parseInt(seconds / (60*60))) + ":" +
               convert(parseInt(seconds / 60 % 60)) + ":" +
               convert(seconds % 60)
      }

      async function approved(e){
        let uid = e.id;
        try {
            let dataRef = doc(db , "publcApplicaitons" , uid)
            await updateDoc(dataRef,{
                status : "approved",
                approvedData : new Date()
            })
        } catch (error) {
            console.log(error, "error")
        }
    }
      

      async function rejected(e){
          let uid = e.id;
          try {
              let dataRef = doc(db , "publcApplicaitons" , uid)
              await updateDoc(dataRef,{
                  status : "rejected",
                  rejectedDate : new Date(),
              })
          } catch (error) {
              console.log(error, "error")
          }
      }

      async function deleted(e){
        let uid = e.id;
        try {
            let dataRef = doc(db , "publcApplicaitons" , uid)
            await deleteDoc(dataRef)
        } catch (error) {
            console.log(error, "error")
        }
    }
      



    return (
        <div className={styles.home_Component}>
            <div className={styles.main_home1}>
                <p>Requested Tab</p>
            </div>

            <div className={styles.main_home2}>
                <table>
                <tr>
                            <th>Name</th>
                            <th>UID</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                {
                    state.allPublicApplications.map((doc)=>{
                        if(doc.status === "rejected"){
                            return(
                                <p>Dont Have Applications</p>
                            )
                        }else{
                            return(
                                <>
                     
                        <tr>
                           <td>{doc.name}</td>
                           <td>{doc.uid}</td>
                           <td>{convertSeconds(doc.createdAt.seconds)}</td>
                           <td><span><i class="fas fa-check" onClick={(e)=>{approved(e.target)}} id={doc.uid}></i></span><span><i class="far fa-times-circle" id={doc.uid} onClick={(e)=>{rejected(e.target)}}></i></span><span><i class="fas fa-trash" id={doc.uid} onClick={(e)=>{deleted(e.target)}}></i></span></td>
                        </tr>
                       
                                </>
                            )
                        }
                      
                        
                    })
                }
                </table>
            </div>
            
        </div>
    )
}

export default HomeComponent
