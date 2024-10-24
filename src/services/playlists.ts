import axios from 'axios';

/**
 * Get all playlists
 * @returns {Promise<Array<any>>} - All playlists
 */
export const getAllPlaylists = async (): Promise<Array<any>> => {
    try {
        const response = await axios.get<Array<any>>('/api/playlists/all', {
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        });

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the playlists');
    }
}

/**
 * Create a new playlist
 * @param {string} name - The name of the playlist
 * @returns {Promise<any>} - The created playlist
 */
export const create = async (name: string): Promise<any> => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post('/api/playlists/create', 
            { name },
            {
                headers: {
                    Authorization: token
                }
            }
        );

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while creating the playlist');
    }
}