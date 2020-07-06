import React, {Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { sha256} from 'js-sha256';
import Identicon from 'identicon.js';
import {  logout, } from '../utils';


class Navbar extends Component{
    

    render() {
        return (
            
             <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#"
            rel="noopener noreferrer"
          >
            NEAR-ONES
          </a>
          <ul className="navbar-nav px3" >
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          { window.accountId
          ?<img className="ml-2"
          width='30' 
          height='30'
          alt='userIdenticon'
          src= {`data:image/png;base64,${new Identicon(sha256(window.accountId), 30).toString()}`}
           />
           : <span></span>
          }
            <small className="text-secondary">
            <p class="font-weight-bold text-light">{window.accountId}</p>
            </small>
            
          </li>
          
          
        
          </ul>
          {
           <p style={{ textAlign: 'center', marginTop: '2em' }}>
           <button onClick={logout}>Sign out</button>
         </p>
         
        }
          
        </nav>
        )
    }
}

export default Navbar;