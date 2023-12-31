import axios from "axios";

export const BASE_URL = 'https://rezayari.ir:8000/api';

export const authLogin = async (username, password) => {

    const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
            'username': username,
            'password': password
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );

    if (response.status === 200) {
        return response.data
    }
}
