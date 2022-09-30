import axios from "axios"
const CUSTOMER_REST_API_URL = 'http://localhost:8080'

class CustomerService{

    getAllCustomer(){
        //alert("method called");
        return axios.get(CUSTOMER_REST_API_URL+'/customer');

    }
    saveCustomer(customer){
        return axios.post(CUSTOMER_REST_API_URL + '/customersave',customer);
    }

    deleteCustomer(customerid){
        return axios.delete(CUSTOMER_REST_API_URL+'/customerdeletebyId/'+customerid);
    }
}
export default new CustomerService();