import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import CustomerService from '../services/CustomerService'
import { ToastContainer,toast } from 'react-toastify';

const SavedCustomer = () => {
    
    const  [customers,setCustomers] = useState([])

    useEffect(() => {
        getAllCustomer();
    }, [])

    const getAllCustomer=()=>{
        CustomerService.getAllCustomer().then((response)=>{
            setCustomers(response.data)
            //alert("received");
            //alert(customers);
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteCustomer = (customerid)=>{
        CustomerService.deleteCustomer(customerid).then((response)=>{
            getAllCustomer();
            deleteButton();
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteButton=()=>{
        toast.success("The record has been deleted");
    };


  return (
    <div style={{backgroundColor:"#a3c2c2",height:"650px"}}>
        <ToastContainer/>
        <Header/>
        <br></br>
        <br></br>
    
        <h2 className='text-center' style={{fontFamily:"auto",textDecoration:"auto"}}>Saved Customers</h2>
        <table className = "table container table-bordered table-striped table-hover" style={{backgroundColor:"aliceblue",marginTop:"40px",borderRadius:"25px"}}>
            <thead style={{padding:"20px",textAlign:"center"}}>
                <th style={{padding:"20px"}}> Customer Id </th>
               
                <th style={{padding:"20px"}}> Pan No </th>
                <th style={{padding:"20px"}}> Account No </th>
                <th style={{padding:"20px"}}> IFSC No </th>
                <th style={{padding:"20px"}}> Bank ID </th>
                <th style={{padding:"20px"}}> Cylinder ID </th>
                <th style={{padding:"20px"}}> Actions </th>
            </thead>
            <tbody style={{textAlign:"center",background:""}}>
                {
                    customers.map(
                        customer => 
                        <tr key={customer.id}>
                            <td>{customer.id}</td>                      
                            <td>{customer.pan}</td>
                            <td>{customer.accountNo}</td>
                            <td>{customer.ifscNo}</td> 
                            <td>{customer.bankID.bankId}</td>
                            <td>{customer.cylinderId.cylinderId}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteCustomer(customer.id)}>Delete</button></td>
                            </tr>
                    )
                }
            </tbody>
        </table>
        <div>

        <Link to="/customer" className='btn btn-primary' style={{float:"right",marginRight:"50px",textDecoration:"none"}}> + ADD CUSTOMER </Link>
        </div>
        
    </div>
  )
}

export default SavedCustomer