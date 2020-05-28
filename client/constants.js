import React from 'react';

//API URL
export const API_URL = 'http://192.168.0.3:3000/api'

//API End Points
export const REGISTER = `${API_URL}/auth/register`;
export const LOGIN = `${API_URL}/auth/login`;
export const USER = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;
export const SUBMIT_RATING = `${API_URL}/rating/user`;
export const GET_AVG = `${API_URL}/rating/user/averages`;