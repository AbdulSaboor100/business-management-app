import React, { useState } from 'react';
import styles from './login.module.scss';

const LoginComponent = () => {
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    return (
        <div className={styles.main_login}>
            <div className={styles.login_1}>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className={styles.login_2}>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className={styles.login_3}>
                <button>Log in</button>
            </div>
            <div className={styles.login_4}></div>
        </div>
    )
}

export default LoginComponent;
