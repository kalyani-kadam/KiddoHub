// import React from "react";
import axios from 'axios'
import httpClient from '../http-common';
// var baseUrl = "http://localhost:3003/parents"
// var adminurl = "http://localhost:3003/admin"
var baseUrl= "http://localhost:8080/parents"

// class ParentService{
//     getAllParents(){
//         return axios.get(baseUrl);
//     }

//     deleteparent(parentId){
//         return axios.delete(baseUrl+"/"+"delete/"+parentId)
//     }

//     addparent(formdetails){
//         var myheader= {'Content-Type': 'application/json'}
//         return axios.post(baseUrl+"/"+"add",formdetails,{Headers:myheader})
//     }

    // updateparent(parent){
    //     var myheader = {'Content-Type': 'application/json',}
    //     return axios.put(baseUrl+"/"+parent.parentId,parent,{Headers:myheader})
    // }

//     getAdmin(admin){
//         return axios.get(adminurl)
//     }
// }
// export default new ParentService();

// const loginAPICall = (emailId, password) => axios.post(baseUrl + "/login",JSON.stringify({"emailId": emailId,"password": password}),{ headers: {"Content-Type": "application/json"}});
const getAllParents =()=>{
    return httpClient.get('parents');
};
const updateparent=(data)=>{
    return httpClient.put('parents/update/id',data,data.parentId);
};
const loginAPICall =(emailId,password) =>{
    const payload = { emailId, password };
    return httpClient.post('parents/login',payload);
};

const addparent=(data) => {
    return httpClient.post('parents/add',data)
};

export default {addparent,loginAPICall,getAllParents,updateparent};