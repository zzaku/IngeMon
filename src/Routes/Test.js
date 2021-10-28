import '../Mon-style/Test.css'
import Button from "@material-ui/core/Button";
import Monitoring from '../Components/Monitoring';
import { perfComponents } from '../data/data';
import { useState, useEffect } from 'react';


function Test(){

    const [dataArray, setDataArray] = useState({
        labels: ["", "", ""],
        datasets: [{
                label: "",
                data: []
        }]
})

const [dataArray1, setDataArray1] = useState({
    labels: ["RAM utilisé", "Disponible", "Mise en cache"],
    datasets: [{
            label: "STATS RAM",
            data: []
    }]
})

const [dataArray2, setDataArray2] = useState({
    labels: ["RAM utilisé", "Disponible", "Mise en cache"],
    datasets: [{
            label: "STATS RAM",
            data: []
    }]
})
    const [post, setPost] = useState([])
    const [btn, setBtn] = useState('DEFAULT')
    const [modifyPost, setModifyPost] = useState({perfComponents})

    function getPerf(){
        fetch('http://localhost:4000/performances')
        .then((response) => { 
            return response.json()
        })
        .then(data => {
            setPost([{api: data}])
        })
    }

    useEffect(() => {
        const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(perfComponents)
        };

        fetch('http://localhost:4000/performances/60fe7660c1bdfd3cf80dd8bb', requestOptions)
    }, []);

    function clear(){
        setBtn('DEFAULT')
        setDataArray({})
        setDataArray1({})
        setDataArray2({})
    }

    return(
        <div className="container-performances">
            <h2>
                Testez les performances de vos composants !
            </h2>
            <ul className="BarNav-test">
                <li className="BarNav-composant"><Button variant="contained" color="primary" onClick={()=> clear()}>Default</Button></li>
                <li className="BarNav-composant"><Button variant="contained" color="primary" onClick={()=> getPerf() + setBtn('CPU')}>CPU</Button></li>
                <li className="BarNav-composant"><Button variant="contained" color="primary" onClick={() => getPerf() + setBtn('RAM')}>RAM</Button></li>
                <li className="BarNav-composant"><Button variant="contained" color="primary" onClick={() => getPerf() + setBtn('DISK')}>DISK</Button></li>
                <li className="BarNav-composant"><Button variant="contained" color="primary" onClick={() => getPerf() + setBtn('DEBIT')}>DEBIT</Button></li>
            </ul>
                <Monitoring postChild={post} setPostChild={setPost} btnChild={btn} setBtnChild={setBtn} dataArray={dataArray} setDataArray={setDataArray} dataArray1={dataArray1} setDataArray1={setDataArray1} dataArray2={dataArray2} setDataArray2={setDataArray2} />
        </div>
    )
}

export default Test