import axios from 'axios';
import handler from './auth';
import * as c from '../constants';


export async function submitRating(userId, data) {
    try {
        console.log("made it here - to submit rating")
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        }

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);
        console.log(c.SUBMIT_RATING)
        let res = await axios.post(`${c.SUBMIT_RATING}/${userId}`, form_data, options);

        return console.log(res.data);
    } catch (e) {
    throw handler(e) 
    }
};

export async function getAvgRatings(userId) {
    try {
        let res = await axios.get(c.GET_AVG);

        return res.data;
    } catch (e) {
        throw handler(e)
    }
};


