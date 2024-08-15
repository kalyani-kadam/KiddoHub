import axios from 'axios'
import httpClient from '../http-common';

var baseUrl= "http://localhost:8080/activity"

class ActivityService{
        
        getallactivities(){
            return axios.get(baseUrl);
        }

        addactivity(formdetails){
            console.log(formdetails)
            var myheader= {'Content-Type': 'application/json'}
            return axios.post(baseUrl+"/add",formdetails,{Headers:myheader})
        }
    
        deleteactivity(activityId){
            return axios.delete(baseUrl+"/"+"delete/"+activityId)
        }

        updateactivity(activity){
            var myheader = {'Content-Type': 'application/json',}
            return axios.put(baseUrl+"/"+activity.activityId,activity,{Headers:myheader})
        }
      
    }
export default new ActivityService();