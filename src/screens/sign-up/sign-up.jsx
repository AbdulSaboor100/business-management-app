import React from 'react';
import { Col, Row } from 'reactstrap';
import SideNavbar from '../../components/side-navbar/side-navbar';
import SignUpComponent from '../../components/sign-up/sign-up';
import styles from './sign-up.module.scss';

const SignUp = () => {
    return (
        <div className={styles.container}>
        <Row className='gx-0'>
            <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                <SideNavbar />
            </Col>         
            <Col xs={11} sm={11} md={11}>
                <SignUpComponent />
            </Col>
        </Row>
        </div>
    )
}

export default SignUp;
