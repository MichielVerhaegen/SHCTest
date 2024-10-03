import React from "react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/createhotel.css';
import './css/cleaner.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import '../App.css';

const MyData = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <form className="form">
                    <div className="formElement">
                        <label>
                            Last name:
                        </label>
                        <input type='text'disabled ></input>
                    </div>
                    <div className="formElement">
                        <label>
                           First name:
                        </label>
                        <input type='text' disabled></input>
                    </div>       

                    <div className="formElement">
                        <label>
                           Address:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           Zip Code:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           City:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           Country:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           Nationality:
                        </label>
                        <input type='text' disabled></input>
                    </div>
                    <div className="formElement">
                        <label>
                           Email:
                        </label>
                        <input type='text' disabled></input>
                    </div>
                    <div className="formElement">
                        <label>
                           Phone:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           Bank account:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           NRN:
                        </label>
                        <input type='text' disabled></input>
                    </div> 
                    <div className="formElement">
                        <label>
                           Start date:
                        </label>
                        <input type='text' disabled></input>
                    </div>  
                    <div className="buttoncontainer">
                        <div className ="small_button">Show my contract</div>
                    </div>  
                    <div className="buttoncontainer">
                        <div className ="small_button">Edit my data</div>
                    </div>  
                         
                </form>
            </div>
        </>
    )
}
export default MyData