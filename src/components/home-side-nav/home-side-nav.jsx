import React from 'react';
import styles from './home-side-nav.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth , signOut } from '../../configs/firebase';

const HomeSideNav = () => {
    let history = useHistory()
    async function logoutBtnFunc(){
        try {
            await signOut(auth);
            history.push('/')
        } catch (error) {
            console.log(error , "error")
        }
    }
    return (
        <div className={styles.main_side_nav}>
                    <div className={styles.side_navber}>
                        <ul>
                            <li title="Recieved Food Request"><Link to="/"><i style={{color:'#89c343' }} class="fas fa-users-slash"></i><br /><span></span></Link></li>
                            <li title="Food Request Status"><Link to="/approved-and-rejected"><i style={{color:'#89c343'}} class="fas fa-users"></i><br /><span></span></Link></li>
                            <li title="Set Credientials"><Link to="/branch-manager"><i style={{color:'#89c343'}} class="fas fa-tools"></i><br /><span></span></Link></li>
                            <li title="Logout" onClick={logoutBtnFunc}><i style={{color:'#89c343'}} class="fas fa-sign-out-alt"></i><br /><span></span></li>
                            
                        
                        </ul>
                    </div>
        </div>
    )
}

export default HomeSideNav;
