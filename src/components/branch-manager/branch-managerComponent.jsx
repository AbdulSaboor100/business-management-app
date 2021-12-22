import React, { useState } from 'react';
import styles from './branch-managerComponent.module.scss';
import {Form,FormGroup , Button, Label , Input  ,Spinner} from 'reactstrap'
import { db , auth , createUserWithEmailAndPassword , doc , setDoc ,signOut , signInWithEmailAndPassword} from '../../configs/firebase';
import { Alert } from 'bootstrap';
const BranchManagerComponent = () => {
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    let [check ,setCheck] = useState(false)

     async function addUserBtnFunc(){
        try {
            let {user} = await createUserWithEmailAndPassword(auth, email , password);
            if(user){
                setCheck(true)
                let userObj = {
                    email : user.email ,
                    uid : user.uid,
                    createdAt : new Date(),
                }
                let userRef = doc(db, "users" , user.uid)
                let userSaved = await setDoc(userRef,userObj)
                setEmail('');
                setPassword('');
                await signOut(auth)
                let email = localStorage.getItem('email')
                let password = localStorage.getItem('password')
                setCheck(true)
                let ourUser = await signInWithEmailAndPassword(auth , email , password)
                if(ourUser.user){
                    setCheck(false)
                    alert("Manager Added")
                }
              
            }
        } catch (error) {
            console.log("error : " ,error )
        }
    }
    return (
        <div className={styles.container}>
            
            <Form inline  className={styles.form} >
            <p style={{color:'#89c343'}}>Add Branch Manager </p>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        className={styles.input}
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        className={styles.input}
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    {
        check === true ? (
            <div style={{justifyContent:'center',alignItems:'center' ,display:'flex' ,width:'100%',paddingTop:"20px"}}>
            <Spinner
            color="success"
            type="grow"
            
          >
            Loading...
          </Spinner>
          <Spinner
            color="success"
            type="grow"
            
          >
            Loading...
          </Spinner>
          <Spinner
            color="success"
            type="grow"
            
          >
            Loading...
          </Spinner>
          </div>
        ) : (
            <Button className={styles.btn} onClick={addUserBtnFunc}>
      Add User
    </Button>
        )
    }
    
  </Form>

        
        </div>
    )
}

export default BranchManagerComponent
