import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import { ToastContainer,toast } from 'react-toastify';
import CylinderService from '../services/BankService';

const Cylinder= () => {
        const [type, setType] = useState('')
        const [strapColor, setStrapColor] = useState('')
        const [weight, setWeight] = useState('')
        const [price, setPrice] = useState('')
        const his = useHistory();
    
        const saveCylinder = (i) => {
            i.preventDefault();
            const cylinder = { type,strapColor,weight,price }
            console.log(cylinder)
               CylinderService.saveCylinder(cylinder).then((response) => {
                  console.log(response.data)
                his.push('/registeredcylinder');
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
    <div style={{background:"url(https://img.freepik.com/free-vector/abstract-bokeh-lights-background_1409-1235.jpg?w=2000)center",
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
                                    <label className='form-label'>Type</label>
                                    <input
                                        type="text"
                                        placeholder='Enter valid cylinder type'
                                        name='accountno'
                                        className='form-control'
                                        value={type}
                                        onChange={(i) => setType(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Weight</label>
                                    <input
                                        type="text"
                                        placeholder='Enter weight of the cylinder'
                                        name= 'weight'
                                        className='form-control'
                                        value={weight}
                                        onChange={(i) => setWeight(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Strap Color</label>
                                    <input
                                        type="text"
                                        placeholder='Enter color of the strap'
                                        name='strapcolor'
                                        className='form-control'
                                        value={strapColor}
                                        onChange={(i) => setStrapColor(i.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Price</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Price of the cylinder'
                                        name='price'
                                        className='form-control'
                                        value={price}
                                        onChange={(i) => setPrice(i.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className='btn btn-primary' onClick={(i) => saveCylinder(i)}>Submit Data</button>
                                {<Link to="/registeredcylinder" className='btn btn-outline-danger' style={{ marginLeft: "10px", textDecoration: "none" }}> View Cylinder Details </Link>}
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
  )
}


export default Cylinder