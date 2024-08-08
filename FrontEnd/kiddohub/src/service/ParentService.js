import React from "react";
import axios from 'axios'

// var baseUrl = "http://localhost:3003/parents"
// var adminurl = "http://localhost:3003/admin"
var baseUrl= "http://localhost:8080/parents"

class ParentService{
    getAllParents(){
        return axios.get(baseUrl);
    }

    deleteparent(parentId){
        return axios.delete(baseUrl+"/"+"delete/"+parentId)
    }

    addparent(parent){
        var myheader= {"content-type":"application/json"}
        return axios.post(baseUrl+"/"+"add",parent,{Headers:myheader})
    }

    updateparent(parent){
        var myheader = {"content-type":"application/json"}
        return axios.put(baseUrl+"/"+parent.parent_id,parent,{Headers:myheader})
    }

    // getAdmin(admin){
    //     return axios.get(adminurl)
    // }
}

export default new ParentService();