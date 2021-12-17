import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import styles from './side-navbar.module.scss';

const SideNavbar = () => {
    return (
        <div className={styles.main_side_nav}>
                    <div className={styles.side_navber}>
                        <ul>
                            <li><Link to="/sign-up"><i class="fas fa-user-plus"></i><br /><span>Sign up</span></Link></li>
                            <li><Link to="/"><i class="fas fa-sign-in-alt"></i><br /><span>Sign in</span></Link></li>
                            <li><Link to="/account"><i class="fas fa-user-circle"></i><br /><span>Account</span></Link></li>
                        </ul>
                    </div>
        </div>
    )
}

export default SideNavbar;
