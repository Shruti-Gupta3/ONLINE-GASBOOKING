import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import CylinderService from '../services/CylinderService'

const RegisteredCylinder = () => {

    const  [cylinders,setCylinders] = useState([])

    useEffect(() => {
        getAllCylinders();
    }, [])

    const getAllCylinders=()=>{
        CylinderService.getAllCylinders().then((response)=>{
            setCylinders(response.data)
        }).catch(error=>{
            console.log(error)
        })
}
return (
    <div style={{backgroundColor:"#a3c2c2",height:"650px"}}>
        <Header/>
        <br></br>
        <br></br>
    
        <h2 className='text-center' style={{fontFamily:"auto",textDecoration:"auto"}}>Saved Cylinders</h2>
        <table className = "table container table-bordered table-striped table-hover" style={{backgroundColor:"aliceblue",marginTop:"40px",borderRadius:"25px"}}>
            <thead style={{padding:"20px",textAlign:"center"}}>
                <th style={{padding:"20px"}}> Cylinder Id </th>
                <th style={{padding:"20px"}}> Type </th>
                <th style={{padding:"20px"}}> Weight </th>
                <th style={{padding:"20px"}}> Strap Color </th>
                <th style={{padding:"20px"}}> Price </th>
                {/* <th style={{padding:"20px"}}> Actions </th> */}
            </thead>
            <tbody style={{textAlign:"center",background:""}}>
                {
                    cylinders.map(
                        cylinder => 
                        <tr key={cylinder.cylinderId}>
                            <td>{cylinder.cylinderId}</td>                      
                            <td>{cylinder.type}</td>
                            <td>{cylinder.weight}</td>
                            <td>{cylinder.strapColor}</td> 
                            <td>{cylinder.price}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <div>

        <Link to="/cylinder" className='btn btn-primary' style={{float:"right",marginRight:"50px",textDecoration:"none"}}> + ADD CYLINDER </Link>
        </div>
        
    </div>
  )
}

export default RegisteredCylinder
