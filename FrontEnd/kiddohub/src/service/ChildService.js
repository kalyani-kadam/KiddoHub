import axios from 'axios'
import httpClient from '../http-common';

var baseUrl = "http://localhost:8080/children"

class ChildService {
    getAllchilds() {
        return axios.get(baseUrl);
    }

    deletechild(parentId) {
        return axios.delete(baseUrl + "/" + "delete/" + parentId)
    }

    addchild(formdetails) {
        console.log(formdetails)
        var myheader = { 'Content-Type': 'application/json' }
        return axios.post(baseUrl + "/" + "add", formdetails, { headers: myheader })
    }

    updateregchild(childdata) {
        console.log(childdata)
        console.log(childdata.childId)
        var myheader = { 'Content-Type': 'application/json', }
        return axios.put(baseUrl + "/updatestatus/" , childdata, { headers: myheader })
    }

    updatechild(childdata) {
        console.log(childdata)
        console.log(childdata.childId)
        var myheader = { 'Content-Type': 'application/json', }
        return axios.put(baseUrl + "/update" , childdata, { headers: myheader })
    }
    // Get a child by childId
    
    getChildById(childId) {
        return axios.get(`${baseUrl}/${childId}`);
    }
    // getAdmin(admin){
    //     return axios.get(adminurl)
    // }
    login(emailId,password){
        const payload = { emailId, password };
        return axios.post('children/login',payload);
    };
}
export default new ChildService();

// const loginAPICall = (usernameOrEmail, password) => axios.post(baseUrl + '/login', { usernameOrEmail, password});

// const addchild=(data) => {
//     return httpClient.post('children/add',data)
// };

// export default {addchild,loginAPICall};