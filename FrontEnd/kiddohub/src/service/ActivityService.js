import axios from 'axios'
import httpClient from '../http-common';

var baseUrl= "http://localhost:8080/activity"

class ActivityService{
        
    
        addactivity(formdetails){
            console.log(formdetails)
            var myheader= {'Content-Type': 'application/json'}
            return axios.post(baseUrl+"/add",formdetails,{Headers:myheader})
        }
    
      
    }
export default new ActivityService();