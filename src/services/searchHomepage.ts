import Playlist from '@/types/Playlist';
import axios from 'axios';

export const searchHomepage = async (searchTerm: string): Promise<Playlist> => {
    try {
        const response = await axios.get<Playlist>(`/api/spotify/tracks/${searchTerm}`);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the search results');
    }
}

