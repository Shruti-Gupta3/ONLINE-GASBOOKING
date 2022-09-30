import axios from "axios";
const CYLINDER_REST_API_URL = 'http://localhost:8080'

class CylinderService{

    getAllCylinders()
    {
        return axios.get(CYLINDER_REST_API_URL + '/cylinders');
    }
    saveCylinder(cylinder){
        return axios.post(CYLINDER_REST_API_URL + '/cylindersave',cylinder);
    }
}
export default new CylinderService();