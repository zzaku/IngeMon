import '../Mon-style/Monitoring.css'
import Ram from './Ram'
import Cpu from './Cpu'
import Disk from './Disk'
import Debit from './Debit'
import Default from './Default'
import { Bar } from "react-chartjs-2"
import { useState } from 'react'


function Monitoring({dataArray, setDataArray, dataArray1, setDataArray1, dataArray2, setDataArray2, btnChild, postChild, setPostChild}){

    const [shopVisible, setShopVisible] = useState(false)
    const [budget, setBudget] = useState()
    const [displayButton, setDispalyButton] = useState(false)
    
    const noneDefault = 
        <div className="none-container">
            <h3 className="none-default">
                Ici vous sera affiché un graphique de vos performances
            </h3>
        </div>

    const graphCpu =
        <div className="stats">
            <div className="container_graph">
                <Bar data={dataArray2} />
            </div>

            <div className="container_graph">
                <Bar data={dataArray1} />
            </div>

            <div className="container_graph2">
            <Bar data={dataArray} width={100} height={26} />
            </div>
        </div>

    const graphRam = 
        <div className="stats">
            <div className="container_graph3">
            <Bar data={dataArray} />
            </div>    
        </div>

    const graphDisk = 
        <div className="statsdisk">
            <div className="container_graphdisk">
            <Bar data={dataArray} height={300} />
            </div>

            <div className="container_graphdisk">
            <Bar data={dataArray1} height={300} />
            </div>
        </div>

    const graphDebit = 
        <div className="stats">
            <div className="container_graph2">
            <Bar data={dataArray} />
            </div>
        </div>
        
    function handleChangeBudget(e){
            setBudget(e.target.value)
        }

    function submitBudget(e){
        
    }
        console.log(budget)
        console.log(displayButton)

    return(
        <div className="container-monitoring">
                <div className="analyse-performance">
                    
                    {btnChild === 'DEFAULT' && <Default className="clear-default" postChild={postChild} btnChild={btnChild} setDataArray={setDataArray} setDataArray1={setDataArray1} setDataArray2={setDataArray2} />}
                    {btnChild === 'RAM' && <Ram className="data-ram" postChild={postChild} btnChild={btnChild} setDataArray={setDataArray} setDataArray1={setDataArray1} setDataArray2={setDataArray2} />}
                    {btnChild === 'CPU' && <Cpu className="data-cpu" postChild={postChild} btnChild={btnChild} setDataArray={setDataArray} setDataArray1={setDataArray1} setDataArray2={setDataArray2} />}
                    {btnChild === 'DISK' && <Disk className="data-disk" postChild={postChild} btnChild={btnChild} setDataArray={setDataArray} setDataArray1={setDataArray1} setDataArray2={setDataArray2} />}
                    {btnChild === 'DEBIT' && <Debit className="data-debit" postChild={postChild} btnChild={btnChild} setDataArray={setDataArray} setDataArray1={setDataArray1} setDataArray2={setDataArray2} />}
                </div>

                {btnChild === 'DEFAULT' &&  noneDefault}
                {btnChild === 'CPU' &&  graphCpu}
                {btnChild === 'RAM' &&  graphRam}
                {btnChild === 'DISK' &&  graphDisk}
                {btnChild === 'DEBIT' &&  graphDebit}
        </div>
    )
}
export default Monitoring