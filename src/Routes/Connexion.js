import '../Mon-style/Connexion.css'
import { useState, useEffect, useContext } from 'react'
import { FrirebaseContext } from "../Components/Firebase"
import { useHistory } from 'react-router-dom'



function Connexion({setInvisibleConnexion}){

    let history = useHistory();
    const firebase = useContext(FrirebaseContext);

    const data = {
        email: '',
        password: ''
    }


    const [connexion, setConnexion] = useState(data)
    const [btn, setBtn] = useState(false)
    const [error, setError] = useState('')


    function handleChange(e){
        const name = e.target.name
        setConnexion({...connexion, [name]: e.target.value})
        
    }

    function handleSubmit(e){
        e.preventDefault();
        firebase.loginUser(connexion.email, connexion.password)
        .then(user => {
            setConnexion({email: '', password: ''})
            history.push('/')
        })
        .catch(error => {
            setError(error)
            setConnexion({email: '', password: ''})
        })
    }

    function mailValidator(){
        const mail = connexion.email.includes("@")
        return mail
        
    }

    useEffect(() => {
        if(connexion.password.length > 6 && connexion.email !== '' && mailValidator()){
            setBtn(true)
        } else {
            setBtn(false)
        }
    }, [connexion.password, connexion.email])

    return(
        <div>
            {error !== '' && <span>{error.message}</span>}
            <h1>Connexion</h1>
                <form onSubmit={handleSubmit} className="form-connexion" style={{display:"flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
                    <div className="col-10">
                        <input className="form-control" type="texte" id="email" name="email" value={connexion.email} autoComplete="true" placeholder="Pseudo" onChange={handleChange} required></input>
                    </div>
    
                    <br></br>

                    <div className="col-10">
                        <input className="form-control" type="password" id="password" name="password" autoComplete="true" placeholder="Mot de passe" onChange={handleChange} value={connexion.password} required></input>
                    </div>
                    <div>
                        {btn ? <button>Se connecter</button> : <button disabled>Se connecter</button>}
                    </div>

                    <div>
                        <button onClick={() => setInvisibleConnexion(true)}>Retour
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default Connexion