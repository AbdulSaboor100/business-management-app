import React, { useContext, useEffect, useState } from 'react';
import styles from './approved-rejected.module.scss';
import ApprovedAndRejectedComponent from '../../components/approved-rejected/approved-rejected';
import { Row , Col, Spinner } from 'reactstrap';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';
import { GlobalContext } from '../../context/context';

const ApprovedRejected = () => {
    let {state , dispatch} = useContext(GlobalContext)
    let [stateS , setStateS] = useState(false);
    useEffect(()=>{
        if(state.allApprovedApplications){
            state.allApprovedApplications.map((item,index)=>{
                if(item){
                    setStateS(true)
                }else{
                    setStateS(true)
                }
            })
            
        }else{
            setStateS(false)
        }
        
    },[state.allApprovedApplications])
    return (
        <div className={styles.container}>
        <Row className='gx-0'>
            <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                <HomeSideNav />
            </Col>         
            <Col xs={11} sm={11} md={11}>
                {
                    stateS === false ? (
                        <div className={styles.loader}>
                             <Spinner>
                            ...loading
                        </Spinner>
                        </div>
                       
                    ) : (
                        <ApprovedAndRejectedComponent />
                        
                    )
                }
            </Col>
        </Row>
    </div>
    )
}

export default ApprovedRejected;
