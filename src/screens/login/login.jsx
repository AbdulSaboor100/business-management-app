import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import LoginComponent from '../../components/login/login';
import SideNavbar from '../../components/side-navbar/side-navbar';
import styles from './login.module.scss';

const MainLogin = () => {
    

    return (
        <>  
            <div className={styles.container}>
                <Row className='gx-0'>
                    <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                        <SideNavbar />
                    </Col>         
                    <Col xs={11} sm={11} md={11}>
                        <LoginComponent />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MainLogin;
