import '../App.css';
import React from "react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import hotelcss from './css/hotelhotellist.module.css';
import { sendhoteldata, getallhotels, gethotel, getcontract } from "../dbconnector/connector";
import { useParams } from "react-router-dom";
import { pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const Createhotel = () => {

    const [contract, setContract] = useState({ value: '' })
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        sendhoteldata({ Name: name, Description: description, Contract: contract });
        navigate('/home');

    }
    return (
        <>

            <div id="main">
                <form className="form" onSubmit={onSubmit}>
                    <div className="formchild">
                        <label>
                            Hotel name:
                        </label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="formchild">
                        <label>
                            Hotel description:
                        </label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="formchild">
                        <label>
                            Upload Contract:
                        </label>
                        <input type='file' accept='.pdf' onChange={(e) => setContract({ value: e.target.files[0] })}></input>
                    </div>
                    <input type='submit' ></input>

                </form>
            </div>
        </>

    )
}

const Viewhotels = () => {
    const navigate = useNavigate();

    getallhotels().then((hotellist) => {

        Createhotelslist(hotellist, navigate)

    })

    return (
        <>
            <div id="main">


            </div>

        </>

    )
}

const Createhotelslist = (hotellist, navigate) => {

    let listForHotels = document.getElementById("hotelsList");
    if (listForHotels === null) {
        listForHotels = document.createElement("div");
        
        listForHotels.id = "hotelsList";
    
        const upperdiv = document.getElementById("main");


        //create zoekbalk en voegtoe
        const zoekbalk = document.createElement("input");
        zoekbalk.type = "text"
        zoekbalk.id = "Zoekbalk"
        zoekbalk.placeholder = "Search"

        zoekbalk.addEventListener("input", function (e) {
            const filteredhotels = hotellist.filter(element => element.Name.toLowerCase().includes(e.target.value.toLowerCase()))
            Createhotelslist(filteredhotels, navigate)
        })

        upperdiv.appendChild(zoekbalk)
        upperdiv.appendChild(listForHotels);


    } else {
        listForHotels.innerHTML = ""
    }


     /* #region  creating headings */
     const employediv = document.createElement("div")
     listForHotels.appendChild(employediv)


     const EMP_ID_div = document.createElement("p")
     EMP_ID_div.innerText = "Name"
     employediv.appendChild(EMP_ID_div)

     const name = document.createElement("p")
     employediv.appendChild(name)
     name.innerText = "Description"
     employediv.className = hotelcss.tableheader;

     /* #endregion */

    hotellist.forEach((hotel, index) => {

        const hotellink = document.createElement("div");
        //addname element to div
        const nameP = document.createElement("p");
        nameP.innerText = hotel.Name ;
        hotellink.appendChild(nameP);
        const description = document.createElement("p");
        description.innerText = hotel.Description ;
        hotellink.appendChild(description);

        
    


        //dinamicly add classname
        if (index % 2 === 0) {
            hotellink.className = hotelcss.linkVarient1
        } else {
            hotellink.className = hotelcss.linkVarient2
        }
        hotellink.addEventListener('click', function (e) {
            navigate("/hotels/" + hotel.Hotel_ID);
        });

        listForHotels.appendChild(hotellink)
    });
}


const HotelView = () => {
    
    const [hotel, setHotel] = useState('');
    let { id } = useParams();

    gethotel(id).then(response => {
        if(!hotel.Name){
            setHotel(response);
        }
        
    })
    
    
    const handlecontractpress= ()=>{
        const output = getcontract(hotel.Contract)
        window.open(output);  
        
    }


    return (
        <>
            <div id="hotel">
                <div id="hotelinfo">
                    <h1>{hotel.Name}</h1>
                    <p>{hotel.Description}</p>
                </div>
                <div id="hotelcontract">
                <button className="button-3" onClick={()=>handlecontractpress()}>Open Contract</button>
                </div>
                
            </div>
        </>
    )
}

export { Createhotel, Viewhotels, HotelView }