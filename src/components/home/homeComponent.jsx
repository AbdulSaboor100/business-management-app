import React from 'react';
import styles from './homeComponent.module.scss';

const HomeComponent = () => {
    return (
        <div className={styles.home_Component}>
            <div className={styles.main_home1}>
                <p>Requested Tab</p>
            </div>

            <div className={styles.main_home2}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>UID</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                       <td>AbdulSaboor</td>
                       <td>afjagnamfmafm3829jfakfad</td>
                       <td>20 dec 2021</td>
                       <td><button>Accept</button><button>Reject</button><button>Delete</button></td>
                    </tr>
                   
                   
                </table>
            </div>
            
        </div>
    )
}

export default HomeComponent
