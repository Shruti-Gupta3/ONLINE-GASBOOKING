import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import { ToastContainer,toast } from 'react-toastify';
import SurrenderCylinderService from '../services/SurrenderCylinderService';

const SurrenderCylinder= () => {

    const [surrenderDate, setsurrenderDate] = useState('');
     const [customer, setcustomer] = useState({id:""})
     const [cylinder, setcylinder] = useState({cylinderId:""})
    //  const [bankID, setBankID] = useState({bankName:"",address:""})
    //  const [address, setAddress] = useState({bankName:""})
    //  const [cylinderId, setCylinderId] = useState({type:"",strapColor:"",weight:"",price:""})
     const his = useHistory();

     const savesurrendercylinder = (i) => {
         i.preventDefault();
         const surrendercylinder = { surrenderDate,customer,cylinder }
         console.log(surrendercylinder)
            SurrenderCylinderService.saveSurrenderCylinder(surrendercylinder).then((response) => {
               console.log(response.data)
             his.push('/surrenderedcylinders');
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
    <div style={{background:"url(https://swall.teahub.io/photos/small/169-1692047_wallpaper-wooden-solid-dark-brown-brown-wooden-background.jpg)center",
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
                                    <label className='form-label'>Surrender Cylinder Id</label>
                                    <input
                                        type="number"
                                        placeholder='Enter the valid Id'
                                        name='surrendercylinder Id'
                                        className='form-control'
                                        
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Surrender Cylinder Date</label>
                                    <input
                                        type="date"
                                        placeholder='Enter the correct date'
                                        name='surrendercylinderdate'
                                        className='form-control'
                                       
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Customer</label>
                                    <input
                                        type="text"
                                        placeholder='Enter the customer '
                                        name= 'customer'
                                        className='form-control'
                                        
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cylinder</label>
                                    <input
                                        type="text"
                                        placeholder='Enter the cylinder'
                                        name='cylinder'
                                        className='form-control'

                                    >
                                    </input>
                                </div>
                                
                                
                                <button className='btn btn-primary' onClick={(i) => savesurrendercylinder(i)}>Submit</button>
                                <Link to="/surrenderedcylinders" className='btn btn-outline-danger' style={{ marginLeft: "10px", textDecoration: "none" }}> View Surrendered Cylinders </Link>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
  )
}


export default SurrenderCylinder