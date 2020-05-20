import axios from 'axios';
import handler from './auth';
import * as c from '../constants';


export async function submitRating(userId, data) {
    try {
        console.log("made it here - to submit rating")
        // const options = {
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

        // const form_data = new FormData();
        // for ( let key in data )
        //     form_data.append(key, data[key]);

        //     console.log(form_data, "--> THIS IS FORM DATA ")
        let res = await axios.post(`${c.SUBMIT_RATING}/${userId}`, data);

        return (res.data);
    } catch (e) {
    throw handler(e) 
    }
};

export async function getAvgRatings(userId) {
    try {
        console.log('getting here')
        let res = await axios.get(`${c.GET_AVG}/${userId}`);

        return res.data;
    } catch (e) {
        throw handler(e)
    }
};


