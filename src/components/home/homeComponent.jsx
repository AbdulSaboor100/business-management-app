import React, { useContext, useEffect } from 'react';
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
    return (
        <div className={styles.home_Component}>
            <div className={styles.main_home1}>
                <p>Requested Tab</p>
            </div>

            <div className={styles.main_home2}>
                <table>
                {
                    state.allPublicApplications.map((doc)=>{
                        return(
                            <>
                                 <tr>
                        <th>Name</th>
                        <th>UID</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                       <td>{doc.name}</td>
                       <td>{doc.uid}</td>
                       <td>{convertSeconds(doc.createdAt.seconds)}</td>
                       <td><span><i class="fas fa-check"></i></span><span><i class="far fa-times-circle"></i></span><span><i class="fas fa-trash"></i></span></td>
                    </tr>
                   
                            </>
                        )
                    })
                }
                </table>
            </div>
            
        </div>
    )
}

export default HomeComponent
