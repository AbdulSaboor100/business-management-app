import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import styles from './side-navbar.module.scss';

const SideNavbar = () => {
    return (
        <div className={styles.main_side_nav}>
                    <div className={styles.side_navber}>
                        <ul>
                            <li title="Sign In"><Link to="/"><i style={{color:'##89c343'}} class="fas fa-sign-in-alt"></i><br /><span>Sign in</span></Link></li>
                        </ul>
                    </div>
        </div>
    )
}

export default SideNavbar;
