import axios from 'axios'
import httpClient from '../http-common';


const getallstaffs =()=>{
    return httpClient.get('staff');
};

const addstaff=(data) => {
    return httpClient.post('staff/add',data)
};

const updatestaff=(data)=>{
    return httpClient.put('staff/update/id',data,data.parentId);
};

const deletestaff = (id) => {
    return httpClient.delete(`staff/delete/${id}`);
};
export default {getallstaffs,addstaff,updatestaff,deletestaff};

