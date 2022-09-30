import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
// import CustomerService from '../services/CustomerService'
import { ToastContainer,toast } from 'react-toastify';

import SurrenderCylinderService from '../services/SurrenderCylinderService';

const SurrenderedCylinders = () => {

    const  [surrenderCylinders,setSurrenderCylinders] = useState([])

    useEffect(() => {
        getAllSurrenderCylinder();
    }, [])

    const deleteSurrenderCylinder = (surrenderId)=>{
        SurrenderCylinderService.deleteSurrenderCylinder(surrenderId).then((response)=>{
             getAllSurrenderCylinder();
            deleteButton();
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteButton=()=>{
        toast.success("The record has been deleted");
    };

    const getAllSurrenderCylinder=()=>{
        SurrenderCylinderService.getAllSurrenderCylinder().then((response)=>{
            setSurrenderCylinders(response.data)
        }).catch(error=>{
            console.log(error)
        })
}
return (
    <div style={{backgroundColor:"#a3c2c2",height:"650px"}}>
        <ToastContainer/>
        <Header/>
        <br></br>
        <br></br>
    
        <h2 className='text-center' style={{fontFamily:"auto",textDecoration:"auto"}}>Saved Banks</h2>
        <table className = "table container table-bordered table-striped table-hover" style={{backgroundColor:"aliceblue",marginTop:"40px",borderRadius:"25px"}}>
            <thead style={{padding:"20px",textAlign:"center"}}>
                <th style={{padding:"20px"}}> Surrender Id </th>
                <th style={{padding:"20px"}}> Surrender Date </th>
                <th style={{padding:"20px"}}> Customer </th>
                <th style={{padding:"20px"}}> Cylinder </th>
                <th style={{padding:"20px"}}> Actions </th>
            </thead>
            <tbody style={{textAlign:"center",background:""}}>
                {
                    surrenderCylinders.map(
                        surrender => 
                        <tr key={surrender.surrenderId}>
                            <td>{surrender.surrenderId}</td>                      
                            <td>{surrender.surrenderDate}</td>
                            <td>{surrender.customer}</td>
                            <td>{surrender.cylinder}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteSurrenderCylinder(surrender.surrenderId )}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <div>

        <Link to="/bank" className='btn btn-primary' style={{float:"right",marginRight:"50px",textDecoration:"none"}}> + ADD BANK </Link>
        </div>
        
    </div>
  )
}

export default SurrenderedCylinders
