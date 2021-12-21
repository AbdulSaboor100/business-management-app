import React from 'react'
import { auth , signOut} from '../../configs/firebase';
import styles from './logoutComp.module.scss';

const LogoutComp = () => {
    async function logoutFunc(){
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error ,"error")
        }
    }
    return (
        <div className={styles.LogOutBtn}>
            <button onClick={logoutFunc}>Logout</button>
        </div>
    )
}

export default LogoutComp
