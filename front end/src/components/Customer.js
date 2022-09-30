import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import CustomerService from '../services/CustomerService'
import { ToastContainer,toast } from 'react-toastify';

const Customer= () => {

     const [accountNo, setAccountNo] = useState('');
     const [ifscNo, setifscNo] = useState('')
     const [pan, setPan] = useState('')
     const [bankID, setBankID] = useState({bankName:"",address:""})
    //  const [address, setAddress] = useState({bankName:""})
     const [cylinderId, setCylinderId] = useState({type:"",strapColor:"",weight:"",price:""})
     const his = useHistory();

     const saveCustomer = (i) => {
         i.preventDefault();
         const customer = { accountNo,ifscNo,pan,bankID,cylinderId }
         console.log(customer)
            CustomerService.saveCustomer(customer).then((response) => {
               console.log(response.data)
             his.push('/savedcustomer');
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
    <div style={{background:"url(https://images.unsplash.com/photo-1532379748758-4e2e95291f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80)center",
  boxShadow : "0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",opacity:"0.9"}}>
            <div className='container' style={{width:"500px",color : "aliceblue",height:"890px"}}>
              <h2 style={{    textAlign: 'center'}}>Enter Details</h2>
                <div className='row' style={{color: "floralwhite",fontFamily:"monospace"}}>
                    {/* <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "10px", backgroundColor: "gray" }}>
                        {
                            title()
                        } */}
                        <div className='card-body' style={{background:"#006666",padding:"23px",color:"white",borderRadius:"40px"}}>
                            <form>
                            
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Account No</label>
                                    <input
                                        type="number"
                                        placeholder='Enter valid account no'
                                        name='accountno'
                                        className='form-control'
                                        value={accountNo}
                                    onChange={(i) => setAccountNo(i.target.value)}
                                       
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>IFSC No</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid IfscNo'
                                        name='ifscno'
                                        className='form-control'
                                        value={ifscNo}
                                    onChange={(i) => setifscNo(i.target.value)}
                                        
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Pan No</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid pan'
                                        name='pan'
                                        className='form-control'
                                        value={pan}
                                    onChange={(i) => setPan(i.target.value)}

                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Bank Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid bank name'
                                        name='parkingTime'
                                        className='form-control'
                                        value={bankID.bankName}
                                    onChange={(i) => setBankID({ ...bankID, bankName: i.target.value })}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Bank Address</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid bank address'
                                        name='parkingTime'
                                        className='form-control'
                                        value={bankID.address}
                                    onChange={(i) => setBankID({ ...bankID, address: i.target.value })}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cylinder type</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid cylinderId'
                                        name='slot_no'
                                        className='form-control'
                                        value={cylinderId.type}
                                    onChange={(i) => setCylinderId({ ...cylinderId, type: i.target.value })}

                                    >
                                    </input>
                                    </div>
                                    <div className='form-group mb-2'>
                                    <label className='form-label'>Cylinder Strap Color</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid color'
                                        name='parkingTime'
                                        className='form-control'
                                        value={cylinderId.strapColor}
                                    onChange={(i) => setCylinderId({ ...cylinderId, strapColor: i.target.value })}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cylinder weight</label>
                                    <input
                                        type="number"
                                        placeholder='Enter valid weight'
                                        name='parkingTime'
                                        className='form-control'
                                        value={cylinderId.weight}
                                    onChange={(i) => setCylinderId({ ...cylinderId, weight: i.target.value })}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cylinder price</label>
                                    <input
                                        type="number"
                                        placeholder='Enter valid price'
                                        name='parkingTime'
                                        className='form-control'
                                        value={cylinderId.price}
                                    onChange={(i) => setCylinderId({ ...cylinderId, price: i.target.value })}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-primary' onClick={(i) => saveCustomer(i)}>Submit Data</button>
                                <Link to="/savedcustomer" className='btn btn-outline-danger' style={{ marginLeft: "10px", textDecoration: "none" }}> View Customers Details </Link>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
  )
}


export default Customer