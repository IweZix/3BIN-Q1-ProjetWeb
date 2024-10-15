import axios from 'axios';

export const searchHomepage = async (searchTerm: string): Promise<Array<any>> => {
    try {
        const response = await axios.get<Array<any>>(`/api/spotify/tracks/${searchTerm}`);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the search results');
    }
}

