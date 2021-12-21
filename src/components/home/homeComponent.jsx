import React, { useContext, useEffect } from 'react';
import { db , doc , updateDoc ,deleteDoc , collection ,addDoc , setDoc } from '../../configs/firebase';
import { GlobalContext } from '../../context/context';
import styles from './homeComponent.module.scss';

const HomeComponent = () => {
    let {state , dispatch} = useContext(GlobalContext)
    useEffect(function(){
        console.log(state)
    },[state.allPublicApplications])
    function convertSeconds(seconds) {
        var convert = function(x) { return (x < 10) ? "0"+x : x; }
        return convert(parseInt(seconds / (60*60))) + ":" +
               convert(parseInt(seconds / 60 % 60)) + ":" +
               convert(seconds % 60)
      }

      async function approved(e){
        let uid = e.id;
        try {
            state.allPublicApplications.map(async (doc1,item)=>{
                if(doc1.uid === uid){
                    let dataRef = doc(db , "publcApplicaitons" , uid)
                    await deleteDoc(dataRef)
                let dataRef2 = doc(db, "approvedApplications" , uid)
                await setDoc(dataRef2 ,{ 
                approvedObj : doc1,
                status : "approved"
            })

            }
            })
        } catch (error) {
            console.log(error, "error")
        }
    }
      

      async function rejected(e){
        let uid = e.id;
        try {
            state.allPublicApplications.map(async (doc,item)=>{
                if(doc.uid === uid){
                    let deleteDocRef = doc(db , "publcApplicaitons" , uid)
                    await deleteDoc(deleteDocRef)   
                    let dataRef = doc(db, "rejectedApplications" , uid )
                    await setDoc(dataRef ,{ 
                approvedObj : doc,
                status : "approved"
            })

            }
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
      
    let msgArr = [
        <p style={{fontSize:40 , paddingTop :'5rem' ,textAlign:'center',width:'100% '}}>No Applications Found</p>,
    ]


    return (
        <div className={styles.home_Component}>
            <div className={styles.main_home1}>
                <p>Requested Tab</p>
            </div>

        
            {
                state.allPublicApplications[0] ? (
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
                        if(doc){
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
                            
                        }else{
                            return(
                                <p>Dont Have Applications</p>
                            )
                          
                        }
                      
                        
                    })
                }   
                </table>
            </div>
           
                ) : (
                    <p>Don't Have Applications</p>
                )
            }
            
        </div>
    )
}

export default HomeComponent
