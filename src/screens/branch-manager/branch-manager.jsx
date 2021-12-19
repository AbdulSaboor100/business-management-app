import React from 'react';
import { Button , UncontrolledCollapse , Col ,Row } from 'reactstrap';
import BranchManagerComponent from '../../components/branch-manager/branch-managerComponent';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';

const BranchManager = () => {
    return (
        <div className={styles.container}>
        <Row className='gx-0'>
            <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                <HomeSideNav />
            </Col>         
            <Col xs={11} sm={11} md={11}>
                <BranchManagerComponent />
            </Col>
        </Row>
    </div>
    )
}

export default BranchManager

