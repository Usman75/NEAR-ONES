import React,{Component} from 'react';
import { login, logout, onSubmit } from '../utils';
import '../global.css'

 class Welcome extends Component{
    render(){
        return(
            <main>
        <h1>Welcome to NEAR-ONES!</h1>
        <p>
          NEAR-ONES is decentralized Social Network for University Students and Teachers
          Where they can shear their thought's ideas, and also ask quetions to the other 
          Students and Teachers. 

          To make use of the NEAR blockchain, you need to sign in. The button
          below will sign you in using NEAR Wallet.
        </p>
        <p>
          Go ahead and click the button below to try it out:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
        );   
    }
}
export default Welcome;