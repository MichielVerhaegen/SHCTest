import '../App.css';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { retrieveCheckinData } from '../dbconnector/connector'
import { getCookie } from '../dbconnector/checktoken'
import './css/checkinpage.css';


const setErrorMessage = (message) => {
    const errormessage = document.getElementById("errorMessage");
    errormessage.innerHTML = ""
    errormessage.innerText = message
    errormessage.className = "showError"
}



const hideErrorMessage = () => {
    const errormessage = document.getElementById("errorMessage");
    errormessage.innerHTML = ""
    errormessage.className = "hideError"
}



const Constructcheckinpage = () => {

    let checkinlist = "";

    const navigate = useNavigate();
    const token = getCookie("logintoken");
    retrieveCheckinData(token).then((result) => {
        if (result.errormessage) {
            setErrorMessage(result.errormessage)
        } else if (!checkinlist.count) {
            checkinlist = result;
            createcheckinlist(checkinlist.checkins, navigate);
        }

    })


    const filterlist = (navigate) => {
        let list = checkinlist.checkins;
        const datefilter = document.getElementById("dateinput");
        const namefilter = document.getElementById("Zoekbalk");
        const datevalue = new Date(datefilter.value).toLocaleDateString();
        const namevalue = namefilter.value;

        console.log("date value:", datevalue)
        console.log("name value:", namevalue)

        if (namevalue !== "") {
            console.log("in name if")
            list = list.filter(element => (element.Firstname + " " + element.Lastname).toLowerCase().includes(namevalue.toLowerCase()))
            console.log("list after name if", list)
        }
        if (!datevalue.includes("Invalid Date")) {
            console.log(!datevalue.includes("Invalid Date"))
            console.log(datevalue)
            console.log("in date if")
            list = list.filter(element => {
                const date = new Date(element.loginDateTime);
                const date2 = datevalue
                if (date.toLocaleDateString() === date2) {
                    return element
                }
                return false

            })
            console.log("list after date if", list)
        }
        createcheckinlist(list, navigate)


    }

    const createcheckinlist = (list, navigate) => {
        hideErrorMessage();

        let divlist = document.getElementById("list")
        //id divlist does not exist we need to create filters and create divlist otherwise we need to empty the divlist
        //this so that the data is not dupplicated
        if (divlist === null) {

            const upperdiv = document.getElementById("main");
            divlist = document.createElement("div");
            divlist.id = "list"

            /* #region  creating filters */
            const zoekbalk = document.createElement("input");
            zoekbalk.type = "text"
            zoekbalk.id = "Zoekbalk"
            zoekbalk.placeholder = "Search"
            zoekbalk.addEventListener("input", function (e) {
                filterlist(navigate)
            })

            const dateInput = document.createElement("input");
            dateInput.id = "dateinput";
            dateInput.type = "date";
            dateInput.onchange = e => {
                filterlist(navigate)
            }
            upperdiv.appendChild(zoekbalk);
            upperdiv.appendChild(dateInput);
            /* #endregion */

            upperdiv.appendChild(divlist);





        } else {
            divlist.innerHTML = "";

        }

         /* #region  creating headings */
                    const employediv = document.createElement("div")
                    divlist.appendChild(employediv)
        
        
                    const EMP_ID_div = document.createElement("p")
                    EMP_ID_div.innerText = "ID"
                    employediv.appendChild(EMP_ID_div)
        
                    const name = document.createElement("p")
                    employediv.appendChild(name)
                    name.innerText = "Fullname"
        
                    const dateElement = document.createElement("p")
                    dateElement.innerText = "Date"
                    employediv.appendChild(dateElement);
        
                    const timeElement = document.createElement("p");
                    timeElement.innerText = " Time"
                    employediv.appendChild(timeElement);
                    employediv.className = "tableheader"
                    dateElement.className="numberalign"
        
                    /* #endregion */
        //create a list item for every element in the received array
        list.forEach((element, index) => {
            //create wrapper employeediv
            const employediv = document.createElement("div")
            divlist.appendChild(employediv)


            const EMP_ID_div = document.createElement("p")
            EMP_ID_div.innerText = element.EMP_ID
            employediv.appendChild(EMP_ID_div)

            const name = document.createElement("p")
            employediv.appendChild(name)
            name.innerText = element.Firstname + " " + element.Lastname


            const dateTime = new Date(element.loginDateTime)

            const dateElement = document.createElement("p")
            dateElement.innerText = dateTime.toLocaleDateString();
            employediv.appendChild(dateElement);

            const timeElement = document.createElement("p");
            timeElement.innerText = dateTime.toLocaleTimeString();
            employediv.appendChild(timeElement);
            dateElement.className="numberalign"

            //dynamicaly add classname
            if (index % 2 === 0) {
                employediv.className = "linkVarient1"
            } else {
                employediv.className = "linkVarient2"
            }
            employediv.addEventListener('click', function (e) {
                navigate("/checkin/" + element.ID);
            });

        });

    }



    return (
        <div id="main">
            <div id="errorMessage"></div>


        </div>
    )

}


export { Constructcheckinpage }