import React from 'react';
import { Row ,Col } from 'reactstrap';
import LogoutComp from '../../components/logoutComp/logoutComp';
import styles from './logout.module.scss';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';

const LogoutFunc = () => {
    return (
        <div className={styles.container}>
        <Row className='gx-0'>
            <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                <HomeSideNav />
            </Col>         
            <Col xs={11} sm={11} md={11}>
                <LogoutComp />
            </Col>
        </Row>
    </div>
    )
}

export default LogoutFunc;
