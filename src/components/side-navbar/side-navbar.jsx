import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './side-navbar.module.scss';

const SideNavbar = () => {
    return (
        <div className={styles.main_side_nav}>
                    <div className={styles.side_navber}>
                        <ul>
                            <li><i class="fas fa-user-plus"></i><br /><span>Sign up</span></li>
                            <li><i class="fas fa-sign-in-alt"></i><br /><span>Sign in</span></li>
                            <li><i class="fas fa-user-circle"></i><br /><span>Account</span></li>
                        </ul>
                    </div>
        </div>
    )
}

export default SideNavbar;
