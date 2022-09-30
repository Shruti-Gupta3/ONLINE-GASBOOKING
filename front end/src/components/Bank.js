import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import { ToastContainer,toast } from 'react-toastify';
import BankService from '../services/BankService';

const Bank= () => {
    const [bankName, setBankName] = useState('')
    const [address, setAddress] = useState('')
    const his = useHistory();

    const saveBank = (i) => {
        i.preventDefault();
        const bank = { bankName,address }
        console.log(bank)
           BankService.saveBank(bank).then((response) => {
              console.log(response.data)
            his.push('/registeredbank');
            saveButton();
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    const saveButton = () => {
        toast.success("The details has been saved");
    };


  return (<div>
    <Header/>
    <div style={{background:"url(https://free4kwallpapers.com/uploads/originals/2015/07/18/red-background-images-png.png)center",
  boxShadow : "0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",opacity:"0.9"}}>
            <div className='container' style={{width:"500px",color : "aliceblue",height:"890px"}}>
              <h2 style={{ textAlign: 'center' ,color:"White"}}>Enter Details</h2>
                <div className='row' style={{color: "floralwhite",fontFamily:"monospace"}}>
                    {/* <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "10px", backgroundColor: "gray" }}>
                        {
                            title()
                        } */}
                        <div className='card-body' style={{background:"#006666",padding:"23px",color:"white",borderRadius:"40px"}}>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Bank Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Bank Name'
                                        name='bankname'
                                        className='form-control'
                                        value={bankName}
                                        onChange={(i) => setBankName(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Bank Address</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Bank Address'
                                        name= 'address'
                                        className='form-control'
                                        value={address}
                                    onChange={(i) => setAddress(i.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <button className='btn btn-primary' onClick={(i) => saveBank(i)}>Submit Data</button>
                                {<Link to="/registeredbank" className='btn btn-outline-danger' style={{ marginLeft: "10px", textDecoration: "none" }}> View Bank Details </Link>}
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
  )
}


export default Bank