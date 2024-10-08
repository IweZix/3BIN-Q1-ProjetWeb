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