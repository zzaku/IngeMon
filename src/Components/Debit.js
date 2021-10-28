import icon from '../eclairci.png'
import { useEffect } from 'react'
import '../Mon-style/Api.css'


function Debit({postChild, btnChild, setDataArray, setPostChild}){

    useEffect(() =>{
        postChild.map((elem) => {
            btnChild === 'DEBIT' && setDataArray({
                labels: ["Vitesse d'envoie", "Vitesse de Récéption"],
                datasets: [{
                    label: "STATS DEBIT",
                    data: [elem.api[0].performance.debit.send, elem.api[0].performance.debit.receive],
                    backgroundColor: ["blue", "red"]
                        }]
                })
            })
    }, [btnChild, postChild])


    return(
            <>

            {postChild.map((elem) => <div className="api_container">
                                        <div className="api_container_texte">Vitesse d'envoie (en kbits/s)  : {elem.api[0].performance.debit.send} kbits/s</div>
                                        <div className="api_container_texte">Vitesse de réception (en kbits/s) : {elem.api[0].performance.debit.receive} kbits/s</div>
                                    </div>
            )}

        </>
        )   

}


export default Debit