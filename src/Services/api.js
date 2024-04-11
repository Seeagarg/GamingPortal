import axios from 'axios';

const BACKEND_URL = 'http://localhost:4001/api'


export const fetchDataFromBackend=async()=>{
    console.log('here')
    try{
        const response = await axios.get(`${BACKEND_URL}/games`);
        // console.log(response);
        return response;
    }
    catch(err){
        console.log(err)
        return err;
    }
}