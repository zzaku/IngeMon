import icon from '../eclairci.png'
import { useEffect } from 'react'
import '../Mon-style/Api.css'


function Disk({postChild, btnChild, setDataArray, setDataArray1, setPostChild}){

    useEffect(() =>{
        postChild.map((elem) => {
            btnChild === 'DISK' && setDataArray({
                labels: ["Vitesse de lecture", "Vitesse d'écriture"],
                datasets: [{
                    label: "STATS DISK",
                    data: [elem.api[0].performance.disk.readspeed, elem.api[0].performance.disk.writespeed],
                    backgroundColor: ["blue", "red"]
                        }]
                })

                btnChild === 'DISK' && setDataArray1({
                    labels: ["Temps d'activité"],
                    datasets: [{
                        label: "STATS CPU",
                        data: [elem.api[0].performance.disk.activtime],
                        backgroundColor: ["green"]
                            }]
                        })
            })
    }, [btnChild, postChild])

    return(
            <>

            {postChild.map((elem) => <div className="api_container">
                                        <div className="api_container_texte">Temps d'activité : {elem.api[0].performance.disk.activtime} Go</div>
                                        <div className="api_container_texte">Vitesse de lecture (en Ko/s) : {elem.api[0].performance.disk.readspeed} Ko/s</div>
                                        <div className="api_container_texte">Vitesse d'écriture (en Ko/s) : {elem.api[0].performance.disk.writespeed} Ko/s</div>
                                    </div>
            )}

        </>
        )   

}


export default Disk