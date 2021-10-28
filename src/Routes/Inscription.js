import { useState, useContext, useEffect} from "react"
import { FrirebaseContext } from "../Components/Firebase"
import "../Mon-style/Inscription.css"

function Inscription({setInvisibleInscription}){

    const firebase = useContext(FrirebaseContext)


    const [form, setForm] = useState({})
    const [error, setError] = useState('')
    const [erreur, setErreur] = useState('')


    function handleChangeName(e){
        const name = e.target.name
        setForm({...form, [name]: e.target.value
        })
    }

    function submit(e){
        e.preventDefault()
        firebase.signupUser(form.email, form.password)
        .then(user => {
            setForm({nom:'', prenom:'', email:'', pseudo:'', password:'', passwordchecked:''})
            setError(false)
        })
        .catch(error => {
            setError(error)
            setForm({nom:'', prenom:'', email:'', pseudo:'', password:'', passwordchecked:''})
        })

        
    }

    function mailValidator(){
        const mail = form.email.includes("@")
        return mail
        
    }


    function manageEnableButton(){
        return form.nom === undefined || form.prenom === undefined || form.pseudo === undefined || form.email === undefined || !mailValidator() || form.password === undefined || form.password !== form.passwordchecked || 
        form.nom === '' || form.prenom === '' || form.pseudo === '' || form.email === '' || form.password === '' || form.password.length < 6
    }

    
    const btn = manageEnableButton() ? <button className="btn btn-primary" disabled>S'inscrire</button> : <button className="btn btn-primary">S'inscrire</button>


//gestion des erreurs
const errorMsg = error !== '' && <span>{error.message}</span>
const validMessage = error === false && <span className="valid-form">Votre compte à été crée avec succés !</span>


//rendu
    return(
        <div className="formulaire-inscription">
            
            <h1>Inscription{erreur}</h1>
            <form style={{display:"flex", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}} onSubmit={submit}>  
               
                {validMessage}
                {errorMsg}

                <div className="col-3">
                    <input className="form-control" type="texte" id="nom" name="nom" autoComplete="true" value={form.nom} placeholder="Votre nom" onChange={handleChangeName} ></input>
                </div>

                <br></br>

                <div className="col-3">
                    <input className="form-control" type="texte" id="prenom" name="prenom" autoComplete="true" value={form.prenom} placeholder="Votre Prénom" onChange={handleChangeName} ></input>
                </div>
                  
                <br></br>

                <div className="col-5">
                    <input className="form-control" type="texte" id="email" name="email" autoComplete="true" value={form.email} placeholder="Votre adresse mail" onChange={handleChangeName} onBlur={mailValidator} ></input>
                </div>
                  
                <br></br>

                <div className="col-4">
                    <input className="form-control" type="texte" id="pseudo" name="pseudo" autoComplete="true" value={form.pseudo} placeholder="Choissisez un pseudo" onChange={handleChangeName} ></input>
                </div>
  
                <br></br>

                <div className="col-5">
                    <input className="form-control" type="password" id="password" name="password" autoComplete="true" value={form.password} placeholder="Choissisez un mot de passe" onChange={handleChangeName} ></input>
                </div>
                  
                <br></br>

                <div className="col-5">
                    <input className="form-control" type="password" id="passwordchecked" name="passwordchecked" autoComplete="true" value={form.passwordchecked} placeholder="Confirmez votre mot de passe" onChange={handleChangeName} ></input>
                </div>

                <div className="">
                    {btn}
                </div>

            </form>  
                
        </div>
    )
}

export default Inscription