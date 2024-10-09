import axios from 'axios';

export const login = async (username: String, password: String) => {
    try {
        const response = await axios.post('/api/auths/login', {
            username,
            password
        });
        
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching thee user');
    }
};

export const verify = async (token: String) => {
    try {
        const response = await axios.post('/api/auths/verify', {
            token
        });

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while verifying the user');
    }
};

export const register = async (username: String, password: String) => {
    try {
        const response = await axios.post('/api/auths/register', {
            username,
            password
        });

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while registering the user');
    }
};