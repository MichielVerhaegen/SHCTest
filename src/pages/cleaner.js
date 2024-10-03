import React from "react"
import { useNavigate } from 'react-router-dom'
import './css/createhotel.css';
import './css/cleaner.css';
import { getCookie } from '../dbconnector/checktoken'
import { checkin } from "../dbconnector/connector";
import '../App.css';



const CheckIn = async () => {
    const Bearer = await getCookie("logintoken")

    const result = checkin(Bearer);
    result.then(res=>{
        console.log(res)
        document.getElementById("checkintime").innerText = new Date(res.Checkintime).toLocaleTimeString();

    })


}

const Cleaner = () => {

    return (
        <>

            <div id="main" className="Screendiv">
                <header><div id="checkintime" className="checkinTime"></div></header>
                <article>
                    <div className="buttoncontainer">
                        <div className="box">My Cleaning Jobs</div>
                        <div className="divider"></div>
                        <div className="picto"><img src="img/CleaningTasks.svg" alt="buttonlogo" height={45} /></div>
                    </div>

                    <div className="buttoncontainer" >
                        <a href="mydata">
                            <div className="box">My Data</div>
                            <div className="divider"></div>
                            <div className="picto"><img src="img/Ico_MyData.png" alt="buttonlogo" height={30} /></div>
                        </a>
                    </div>
                    <div className="buttoncontainer">
                        <div className="box">My Contract</div>
                        <div className="divider"></div>
                        <div className="picto"><img src="img/Ico_MyContract.png" alt="buttonlogo" height={30} /></div>
                    </div>
                    <div className="buttoncontainer">
                        <div className="box" >Request Holiday</div>
                        <div className="divider"></div>
                        <div className="picto"><img src="img/Ico_MyHoliday.png" alt="buttonlogo" height={30} /></div>
                    </div>
                </article>
                <a type="button" onClick={()=>CheckIn()} className="a_in_out">
                    <footer className="checkin_out">
                            <div className="box" >Check in/out</div>
                            <div className="divider_in_out"></div>
                            <div className="picto"><img src="img/ico_CheckIn_Out.png" alt="buttonlogo" height={30} /></div>
                    </footer>
                </a>

            </div>
            {/* <input className={'inputButton'} type="button" value={'Request Holiday'} />
            <input className={'inputButton'} type="button" value={'My Cleaning jobs'} /> */}

        </>

    )
}
export default Cleaner