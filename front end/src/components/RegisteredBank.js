import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
// import CustomerService from '../services/CustomerService'
import { ToastContainer,toast } from 'react-toastify';
import BankService from '../services/BankService';

const RegisteredBank = () => {

    const  [banks,setBanks] = useState([])

    useEffect(() => {
        getAllBank();
    }, [])

    const deleteBank = (bankId)=>{
        BankService.deleteBank(bankId).then((response)=>{
             getAllBank();
            deleteButton();
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteButton=()=>{
        toast.success("The record has been deleted");
    };

    const getAllBank=()=>{
        BankService.getAllBank().then((response)=>{
            setBanks(response.data)
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
                <th style={{padding:"20px"}}> Bank Id </th>
                <th style={{padding:"20px"}}> Bank Name </th>
                <th style={{padding:"20px"}}> Address </th>
                {/* <th style={{padding:"20px"}}> Actions </th> */}
            </thead>
            <tbody style={{textAlign:"center",background:""}}>
                {
                    banks.map(
                        bank => 
                        <tr key={bank.bankId}>
                            <td>{bank.bankId}</td>                      
                            <td>{bank.bankName}</td>
                            <td>{bank.address}</td>
                            {/* <td><button className='btn btn-danger' onClick={()=>deleteBank(bank.bankId )}>Delete</button></td> */}
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

export default RegisteredBank
