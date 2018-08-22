import { URL_BASE } from './../constants/api';

const API = {
    LoadUser: userCode => fetch(`${URL_BASE}?login.uuid=${userCode}`).then(data => data.json()),
    LoadUsers: () => fetch(URL_BASE).then(data => data.json()),
};

export default API;