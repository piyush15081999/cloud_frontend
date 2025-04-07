import axios from 'axios';
const API = 'http://16.16.253.44:5000';

export const predictPacket = (data) => axios.post(`${API}/predict`, data);
export const getLogs = () => axios.get(`${API}/logs`);
