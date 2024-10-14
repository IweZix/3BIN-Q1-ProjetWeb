import axios from 'axios';

export const getImage = async (id: String): Promise<any> => {
    try {
        const response = await axios.get<any>(`/api/spotify/image/${id}`);

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the image');
    }
}