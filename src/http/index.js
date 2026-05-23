import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://ulosya-pitomnik.ru'
})

export {
    $host
}
