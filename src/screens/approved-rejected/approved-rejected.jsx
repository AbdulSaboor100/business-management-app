import React from 'react';
import styles from './approved-rejected.module.scss';
import ApprovedAndRejectedComponent from '../../components/approved-rejected/approved-rejected';
import { Row , Col } from 'reactstrap';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';

const ApprovedRejected = () => {
    return (
        <div className={styles.container}>
        <Row className='gx-0'>
            <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                <HomeSideNav />
            </Col>         
            <Col xs={11} sm={11} md={11}>
                <ApprovedAndRejectedComponent />
            </Col>
        </Row>
    </div>
    )
}

export default ApprovedRejected;
