import React from 'react'
import '../Mon-style/Horloge.css'
import { useEffect } from 'react'
import { useState } from 'react'

function Horloge() {

    const [time, setTime] = useState({date:new Date()})
    const label = time.date.toLocaleTimeString('en-US')
    var execloop = setInterval(clock, 3000)
    
   

    function clock(){
       
        setTime({date:new Date()})
        
    }

    
    
    useEffect(() => {
        },
        [execloop] /* rappel après 1 secondes = 1000 millisecondes */
    
    )
    
    function stopClock(){
       const deleted = clearInterval(execloop)
        
    }
    
    return <div>
            {label}
        </div>
    

}

export default Horloge