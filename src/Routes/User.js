import '../Mon-style/User.css'
import Connexion from './Connexion'
import Inscription from './Inscription'
import { useState } from 'react'


function User(){
    const [invisibleInscription, setInvisibleInscription] = useState(true)
    const [invisibleConnexion, setInvisibleConnexion] = useState(true)

    return invisibleInscription ?
            invisibleConnexion ? 
        (
            <div className="container-case-log">
                <div className="container_case_log_btn">
                    <div className="case-log">
                    <Connexion />
                        <div className="container-insc" onClick={() => setInvisibleInscription(false)}><h4 className="text-log">Incris-toi !</h4></div>
                        

                    </div>
                </div>
            </div>
        )
       
        :

        (
            null
        
        )

        :

        (
            <div className="container-case-log">
                <div className="container_case_log_btn">
                    <div className="case-log">
                        <div className="container-conn" onClick={() => setInvisibleConnexion(true) + setInvisibleInscription(true)}><h4 className="text-log">Connecte-toi !</h4></div>
                            <br></br>
                        <div className='case-log-insc'>
                            <Inscription setInvisibleInscription={setInvisibleInscription}/>
                        </div>

                    </div>
                </div>
            </div>
        )
}

export default User