import logo from '../logo.png'
import React from 'react'
import '../Mon-style/Nav.css';
import {Link} from 'react-router-dom'



function Nav(){

    function modeNuit(){
        const element=document.getElementsByClassName('boule_nuit')
        element[0].classList.toggle('night')
        const element2=document.getElementsByTagName('body')
        element2[0].classList.toggle('night2')
        const element3=document.getElementsByClassName('container_nuit')
        element3[0].classList.toggle('night2')
        localStorage.setItem('element',true)
    }

    return(
        <header className="container-header">
            <React.Fragment >
                <ul className="navbar">
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li className="li-header1" style={{marginLeft: 0}}>Accueil</li>
                    </Link>

                    <Link to='/Test' style={{textDecoration: 'none'}}>
                        <li className="li-header1" style={{marginLeft: 0}}>Testez vos performances</li>
                    </Link>

                    <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    </Link>

                    <Link to='/Contact' style={{textDecoration: 'none'}}>
                        <li className="li-header1" style={{marginLeft: 0}}>Contact</li>  
                    </Link>

                    <Link to='/Connexion' style={{textDecoration: 'none'}}>
                        <li className="li-header1" style={{marginLeft: 0}}>Connexion/Inscription</li>
                    </Link>
                </ul>
                
                <div class='container_nuit'><div class='boule_nuit' onClick={modeNuit}></div></div>

            </React.Fragment>
            
        </header>
    )
}

export default Nav
