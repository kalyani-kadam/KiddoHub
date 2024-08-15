import axios from 'axios'
import httpClient from '../http-common';

var baseUrl= "http://localhost:8080/doctors"

class DoctorService{
        getAlldoctors(){
            return axios.get(baseUrl);
        }
    
        deleteparent(doctorId){
            return axios.delete(baseUrl+"/"+"delete/"+doctorId)
        }
    
        adddoctor(formdetails){
            console.log(formdetails)
            var myheader= {'Content-Type': 'application/json'}
            return axios.post(baseUrl+"/"+"add",formdetails,{Headers:myheader})
        }
    
        updatechild(parent){
            var myheader = {'Content-Type': 'application/json',}
            return axios.put(baseUrl+"/"+parent.doctorId,parent,{Headers:myheader})
        }
    
        // getAdmin(admin){
        //     return axios.get(adminurl)
        // }
    }
    export default new DoctorService();

// const loginAPICall = (usernameOrEmail, password) => axios.post(baseUrl + '/login', { usernameOrEmail, password});

// const addchild=(data) => {
//     return httpClient.post('children/add',data)
// };

// export default {addchild,loginAPICall};