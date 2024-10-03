import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/employee.css';
import '../App.css';

import { sendemployeedata, getemployees } from "../dbconnector/connector";


const ConstructEmployeePage = () => {
    const [employeelist, setEmployeelist] = useState('');

    const navigate = useNavigate();

    getemployees().then((result) => {
        console.log(result.count)
        if (!employeelist.count) {
            setEmployeelist(result)
            createlist(result.items, navigate)
        }

    })

    const createlist = (list, navigate) => {
        let divlist = document.getElementById("list")

        if (divlist === null) {

            const upperdiv = document.getElementById("main");
            divlist = document.createElement("div");
            divlist.id = "list"
            
            const zoekbalk = document.createElement("input");
            console.log("append zoekbalk")
            zoekbalk.type = "text"
            zoekbalk.id = "Zoekbalk"
            zoekbalk.placeholder = "Search"

            const addbutton = document.createElement("a");
            addbutton.id = "addbutton";
            addbutton.className="button-3";
            addbutton.href="/create-employee";
            addbutton.innerText="+"
            //<a type="Button" id="addbutton" className="button-3" href="/create-employee">+</a>
            
            

            zoekbalk.addEventListener("input", function (e) {
                console.log(e.target.value)
                const filteredlist = list.filter(element => (element.Firstname + " " + element.Lastname).toLowerCase().includes(e.target.value.toLowerCase()))
                createlist(filteredlist, navigate)
            })
            upperdiv.appendChild(zoekbalk);
            upperdiv.appendChild(addbutton);
            upperdiv.appendChild(divlist);
            

        }else{
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
         dateElement.innerText = "phone"
         employediv.appendChild(dateElement);

         employediv.className = "tableheader"

         /* #endregion */



        list.forEach((element, index) => {
            console.log(element)
            //create wrapper employeediv
            const employediv = document.createElement("div")
            divlist.appendChild(employediv)


            const EMP_ID_div = document.createElement("p")
            EMP_ID_div.innerText = element.EMP_ID
            employediv.appendChild(EMP_ID_div)

            const name = document.createElement("p")
            employediv.appendChild(name)
            name.innerText = element.Firstname + " " + element.Lastname

            // const address = document.createElement("p")
            // address.innerText = "Address: " + element.AdressLine + " " + element.Huisnummer
            // employediv.appendChild(address)
            // const cityline = document.createElement("p")
            // cityline.innerText = "City: " + element.city + ", " + element.country
            // employediv.appendChild(cityline)
            const phone = document.createElement("p")
            phone.innerText = element.Number
            employediv.appendChild(phone)

            //dinamicly add classname
            if (index % 2 === 0) {
                employediv.className = "linkVarient1"
            } else {
                employediv.className = "linkVarient2"
            }
            employediv.addEventListener('click', function (e) {
                navigate("/employee/" + element.EMP_ID);
            });

        });

    }



    return (
        <div id="main">
        </div>
    )

}




const Addemployee = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [huisnummer, setHuisnummer] = useState('');
    const [adressLine, setAdressLine] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rights, setRights] = useState('');
    const navigate = useNavigate()


    const onSubmit = (e) => {
        e.preventDefault();
        sendemployeedata({ firstname, lastname, huisnummer, adressLine, city, country, number, email, password });
        navigate('/employee');

    }

    return (
        <div id="main">
            <form className="form" onSubmit={onSubmit}>
                <div className="spacer"></div>
                <div className="formElement">
                    <label>
                        Firstname:
                    </label>
                    <input type='text' value={firstname} onChange={e => setFirstname(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Lastname:
                    </label>
                    <input type='text' value={lastname} onChange={e => setLastname(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Email:
                    </label>
                    <input type='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Password:
                    </label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Address line:
                    </label>
                    <input type='text' value={adressLine} onChange={e => setAdressLine(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        City:
                    </label>
                    <input type='text' value={city} onChange={e => setCity(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Number:
                    </label>
                    <input type='number' value={huisnummer} onChange={e => setHuisnummer(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Country:
                    </label>
                    <input type='text' value={country} onChange={e => setCountry(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Phone:
                    </label>
                    <input type='Phone' value={number} onChange={e => setNumber(e.target.value)}></input>
                </div>
                <div className="formElement">
                    <label>
                        Rights:
                    </label>
                    <select name="rights" id="Rights">
                        <option value="1">Employee</option>
                        <option value="2">Administrator</option>
                    </select>
                </div>

                <div className="formElement">
                    <input type='submit' ></input>
                </div>
            </form>
        </div>
    )
}
export { ConstructEmployeePage, Addemployee }