import React from 'react';
import styles from './home-side-nav.module.scss';
import { Link } from 'react-router-dom';

const HomeSideNav = () => {
    return (
        <div className={styles.main_side_nav}>
                    <div className={styles.side_navber}>
                        <ul>
                            <li><Link to="/home"><i class="fas fa-users-slash"></i><br /><span></span></Link></li>
                            <li><Link to="/approved-and-rejected"><i class="fas fa-users"></i><br /><span></span></Link></li>
                            <li><Link to="/branch-manager"><i class="fas fa-tools"></i><br /><span></span></Link></li>
                        </ul>
                    </div>
        </div>
    )
}

export default HomeSideNav;
