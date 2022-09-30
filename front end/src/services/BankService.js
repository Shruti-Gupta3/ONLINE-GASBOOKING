import axios from "axios";
const BANK_REST_API_URL = 'http://localhost:8080'

class BankService{

    getAllBank()
    {
        return axios.get(BANK_REST_API_URL + '/banks');
    }
    saveBank(bank){
        return axios.post(BANK_REST_API_URL + '/banksave',bank);
    }
    deleteBank(bankId){
        return axios.delete(BANK_REST_API_URL+'/bankdelete/'+bankId);
    }

}
export default new BankService();