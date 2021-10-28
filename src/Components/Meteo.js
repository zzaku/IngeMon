import icon from '../eclairci.png'

function Meteo({postChild, setPostChild}){


    return(
            <>

            {postChild.map((elem) => <div>{elem.api.city_info.name} : <br></br> {elem.api.fcst_day_0.day_short} En ce moment il fait  {elem.api.current_condition.tmp}°C / température min : {elem.api.fcst_day_0.tmin}°C / température max : {elem.api.fcst_day_0.tmax}°C / {elem.api.fcst_day_0.condition} {<img src={icon} alt="eclairci" style={{width: 30, height: 30}}/>} <br></br>
            {elem.api.fcst_day_1.day_short} température min : {elem.api.fcst_day_1.tmin}°C / température max : {elem.api.fcst_day_1.tmax}°C / {elem.api.fcst_day_0.condition} {<img src={icon} alt="eclairci" style={{width: 30, height: 30}}/>}
                                    </div> 
            )}

        </>
        )   

}


export default Meteo