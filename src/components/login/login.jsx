import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

const LoginComponent = () => {
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    return (
        <div className={styles.main_login}>
        <div className={styles.main2}>
            <div className={styles.login_5}>
                <p>Login</p>
            </div>
            <div className={styles.login_1}>
                <input placeholder='Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className={styles.login_2}>
                <input placeholder='Password' type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className={styles.login_3}>
                <button>Log in</button>
            </div>
            <div className={styles.login_4}>
                <p>Don't have an account <Link>create here</Link></p>
            </div>
         </div>
        </div>
    )
}

export default LoginComponent;
