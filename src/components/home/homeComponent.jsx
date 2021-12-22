import React, { useContext, useEffect } from 'react';
import { db , doc , updateDoc ,deleteDoc , collection ,addDoc , setDoc , getDoc } from '../../configs/firebase';
import { GlobalContext } from '../../context/context';
import styles from './homeComponent.module.scss';

const HomeComponent = () => {
    let {state , dispatch} = useContext(GlobalContext);

    useEffect(()=>{
        console.log(state)
    },[])
 
    function convertSeconds(seconds) {
        var convert = function(x) { return (x < 10) ? "0"+x : x; }
        return convert(parseInt(seconds / (60*60))) + ":" +
               convert(parseInt(seconds / 60 % 60)) + ":" +
               convert(seconds % 60)
      }

      async function approved(e){
        let uid = e.id;
        try {
         

            let dataRef1 = doc(db , "publcApplicaitons" , uid)
            let data1 = await getDoc(dataRef1)
            
            let dataRef2 = doc(db , "approvedApplications" , uid)
            await setDoc(dataRef2 , {
                approvedObj : data1.data(),
                status : "approved",
                approvedDate : new Date()
            })

            await deleteDoc(dataRef1)
        } catch (error) {
            console.log(error, "error")
        }
    }
      

      async function rejected(e){
        let uid = e.id;
        try {
            let dataRef1 = doc(db , "publcApplicaitons" , uid)
            let data1 = await getDoc(dataRef1)
            
            let dataRef2 = doc(db , "approvedApplications" , uid)
            await setDoc(dataRef2 , {
                rejectObj : data1.data(),
                status : "rejected",
                rejectedDate : new Date()
            })

            await deleteDoc(dataRef1)
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
              <div className={styles.main_home3}>
            <img src="/Assets/LogoKhanaSabkliye.png"  />
        </div>
            <div className={styles.main_home1}>
                <p>Recieved Food Requests</p>
            </div>

        
            {
                state.allPublicApplications[0] ? (
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
                    state.allPublicApplications.map((doc)=>{
                        if(doc){
                            return(
                                <>

                <tr>    
                   <td>{doc.name}</td>
                   <td>{doc.cnic}</td>
                   <td>{doc.uid}</td>
                   <td>{doc.familyMembers}</td>
                   <td>{doc.monthlyIncome}</td>
                   <td>{doc.MonthlyRation}</td>
                   <td>{doc.nearestOne.name}</td>
                   <td><span><i title="Accept" class="fas fa-check" onClick={(e)=>{approved(e.target)}} id={doc.uid}></i></span><span><i class="far fa-times-circle" title="Reject" id={doc.uid} onClick={(e)=>{rejected(e.target)}}></i></span><span><i class="fas fa-trash" title="Remove" id={doc.uid} onClick={(e)=>{deleted(e.target)}}></i></span></td>
                </tr>
                     
                        {/* <tr>
                           <td>{doc.name}</td>
                           <td>{doc.uid}</td>
                           <td>{convertSeconds(doc.createdAt.seconds)}</td>
                           <td><span><i class="fas fa-check" onClick={(e)=>{approved(e.target)}} id={doc.uid}></i></span><span><i class="far fa-times-circle" id={doc.uid} onClick={(e)=>{rejected(e.target)}}></i></span><span><i class="fas fa-trash" id={doc.uid} onClick={(e)=>{deleted(e.target)}}></i></span></td>
                        </tr> */}
                       
                                </>
                            )
                            
                        }else{
                            return(
                                <p style={{fontSize:"30px" , paddingTop:"3rem"}}>Dont Have Applications</p>
                            )
                          
                        }
                      
                        
                    })
                }   
                </table>
            </div>
           
                ) : (
                    <p style={{fontSize:"30px" ,paddingTop:'3rem'}}>Don't Have Applications</p>
                )
            }
            
        </div>
    )
}

export default HomeComponent
