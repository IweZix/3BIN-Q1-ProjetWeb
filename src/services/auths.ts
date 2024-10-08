import axios from 'axios';
import AuthenticatedUser from '@/types/AuthenticatedUser';

/**
 * Logs in a user
 * @param {String} username - user's username
 * @param {String} password - user's password
 * @returns {Promise<AuthenticatedUser>} - the authenticated user
 */
export const login = async (username: String, password: String): Promise<AuthenticatedUser> => {
    try {
        const response = await axios.post<AuthenticatedUser>('/api/auths/login', {
            username,
            password
        });
        
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching thee user');
    }
};

/**
 * Verifies a user
 * @param {String} token - the user's token
 * @returns {Promise<AuthenticatedUser>} - the authenticated user
 */
export const verify = async (token: String): Promise<AuthenticatedUser> => {
    try {
        const response = await axios.post<AuthenticatedUser>('/api/auths/verify', {
            token
        });

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while verifying the user');
    }
};