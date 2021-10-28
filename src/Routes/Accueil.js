import '../Mon-style/Accueil.css'
import {Link} from 'react-router-dom'

function Accueil(){

    return(
        <div className='accueil-ingemon'>
            <h1 style={{color: 'white'}}>Bienvenue sur IngeMon !</h1>
            <span style={{color: 'black'}} className="span-ingemon">IngeMon est une application de monitoring qui vous permettra de connaître et tester les performances de votre pc</span><br></br>
           <Link to='/Test' style={{textDecoration: 'none'}}>
            <button variant="contained" color='primary' className='button-start button-start-circle' style={{ borderRadius: 50 }}>COMMENCER LE TEST</button>        
           </Link>
        </div>
    )
}

export default Accueil