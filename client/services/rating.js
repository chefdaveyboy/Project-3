import axios from 'axios';
import handler from './auth';
import * as c from '../constants';


export async function submitRating(userId, data) {
    try {
        console.log("made it here - to submit rating")

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


