import React, { useContext, useEffect , useState } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import styles from './home.module.scss';
import HomeComponent from '../../components/home/homeComponent';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';
import { GlobalContext } from '../../context/context';

const MainHome = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [stateS , setStateS] = useState(false);

    useEffect(()=>{
        console.log(state.allPublicApplications)
        if(state.allPublicApplications){
           setStateS(true)
        }else{
            console.log(false)
        }
        // setTimeout()
        
    },[state.allPublicApplications])

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
                        <HomeComponent />
                        
                    )
                }
                    </Col>
                </Row>
            </div>
    )
}

export default MainHome;


