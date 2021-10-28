import icon from '../eclairci.png'
import { useEffect, useState } from 'react'
import '../Mon-style/Api.css'


function Ram({postChild, btnChild, setPostChild, dataArray, setDataArray, setDataArray1}){

    useEffect(() =>{
        postChild.map((elem) => {
            btnChild === 'RAM' && setDataArray({
                labels: ["RAM utilisé", "Disponible", "Mise en cache"],
                datasets: [{
                    label: "STATS RAM",
                    data: [elem.api[0].performance.ram.useram, elem.api[0].performance.ram.free, elem.api[0].performance.ram.cache],
                    backgroundColor: ["blue", "yellow", "red", "green"]
                        }]
                })
            })
    }, [btnChild, postChild])

    return(
            <>

            {postChild.map((elem) => <div className="api_container">
                                        <div className="api_container_texte">Cache : {elem.api[0].performance.ram.cache} Go</div>
                                        <div className="api_container_texte">Espace libre : {elem.api[0].performance.ram.free} Go</div>
                                        <div className="api_container_texte">Espace utilisé : {elem.api[0].performance.ram.useram} Go</div>
                                    </div>
            )}

        </>
        )   

}


export default Ram 
