import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/context';
import styles from './sign-up.module.scss';

const SignUpComponent = () => {
    let {state , dispatch} = useContext(GlobalContext);
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    let [username , setUsername] = useState('');
    let [age , setAge] = useState('')

    function signUpFunc(){}
    return (
        <div className={styles.main_login}>
        <div className={styles.main2}>
            <div className={styles.login_5}>
                <p>Sign up</p>
            </div>
            <div className={styles.login_1}>
                <input placeholder='Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className={styles.login_2}>
                <input placeholder='Password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className={styles.login_6}>
                <input placeholder='username' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
            <div className={styles.login_7}>
                <input placeholder='age' type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} />
            </div>
            <div className={styles.login_3}>
                <button onClick={signUpFunc}>Sign up</button>
            </div>
            <div className={styles.login_4}>
                <p>Have an account <Link to="/">Login here</Link></p>
            </div>
         </div>
        </div>
    )
}

export default SignUpComponent;
