import axios from 'axios'
import httpClient from '../http-common';

const addStaff=(data) => {
    return httpClient.post('staff/add',data)
};

export default {addStaff};