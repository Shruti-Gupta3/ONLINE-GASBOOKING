import axios from "axios"
const CUSTOMER_REST_API_URL = 'http://localhost:8080'

class SurrenderCylinderService{

    getAllSurrenderCylinder(){
        //alert("method called");
        return axios.get(CUSTOMER_REST_API_URL+'/count');

    }
    saveSurrenderCylinder(surrendercylinder){
        return axios.post(CUSTOMER_REST_API_URL + '/surrenderCylindersave',surrendercylinder);
    }

    deleteSurrenderCylinder(surrenderId){
        return axios.delete(CUSTOMER_REST_API_URL+'/surrendercylinderdelete/'+surrenderId);
    }
}
export default new SurrenderCylinderService();