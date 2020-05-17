import axios from 'axios';
import handler from './auth';
import * as c from '../constants';

export async function getUserInfo(userId) {
    try {
        let res = await axios.get(`${c.UPDATE_PROFILE}/${userId}`)
        return console.log(res.data)
    } catch (e) {
    throw handler(e)
    }
}