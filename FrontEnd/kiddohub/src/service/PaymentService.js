import axios from 'axios'
import httpClient from '../http-common';

var baseUrl= "http://localhost:8080/payment"

class PaymentService{
        
        getallpayments(){
            return axios.get(baseUrl);
        }

        addpayment(formdetails){
            console.log(formdetails)
            var myheader= {'Content-Type': 'application/json'}
            return axios.post(baseUrl+"/add",formdetails,{Headers:myheader})
        }
    
        deletepayment(tId){
            return axios.delete(baseUrl+"/"+"delete/"+tId)
        }

        updatepayment(payment){
            var myheader = {'Content-Type': 'application/json',}
            return axios.put(baseUrl+"/"+payment.tId,payment,{Headers:myheader})
        }
      
    
      
    }
export default new PaymentService();