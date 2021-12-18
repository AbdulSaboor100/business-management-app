import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './home.module.scss';
import HomeComponent from '../../components/home/homeComponent';
import HomeSideNav from '../../components/home-side-nav/home-side-nav';

const MainHome = () => {
    return (
        <div className={styles.container}>
                <Row className='gx-0'>
                    <Col xs={1} sm={1} md={1} className='gx-0' id={styles.remove}>
                        <HomeSideNav />
                    </Col>         
                    <Col xs={11} sm={11} md={11}>
                        <HomeComponent />
                    </Col>
                </Row>
            </div>
    )
}

export default MainHome;
