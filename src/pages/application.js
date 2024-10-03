import React from "react"
import parse from 'html-react-parser';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/application.css';
import Navigatie from "./nav";

//example
const Application = (props) => {
    
    console.log(props)
    console.log(props.loggedIn)
    const [contract, setContract] = useState({ value: '' })
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    


    const navigate = useNavigate()


    return (

        <div>
            <Navigatie></Navigatie>      
            <div id="main">
                <h1>
                    application
                </h1>
                <p> email: {props.email}</p>
                <p> logged in: {parse(props.loggedIn ? "<span>&#9989;</span>" : "<span>&#10060;</span>")}</p>
            </div>
        </div>
    )
}

export default Application;