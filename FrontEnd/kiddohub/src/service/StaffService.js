import axios from 'axios'
import httpClient from '../http-common';

var baseUrl= "http://localhost:8080/staff"

class StaffService{
        getallstaffs(){
            return axios.get(baseUrl);
        }
    
        deletestaff(staffId){
            return axios.delete(baseUrl+"/"+"delete/"+staffId)
        }
    
        addstaff(formdetails){
            console.log(formdetails)
            var myheader= {'Content-Type': 'application/json'}
            return axios.post(baseUrl+"/"+"add",formdetails,{Headers:myheader})
        }
    
        updatestaff(staffdata){
            var myheader = {'Content-Type': 'application/json',}
            return axios.put(baseUrl+"/update",staffdata,{Headers:myheader})
        }
    
        
    }
export default new StaffService();

