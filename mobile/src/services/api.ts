import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.4:3333'
});

export default api;

// RUN ANDROID EMULATOR
// > adb reverse tcp:3333 tcp:3333
// baseURL: 'http://192.168.1.15:3333'