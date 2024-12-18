import Playlist from '@/types/Playlist';
import axios from 'axios';

export const searchHomepage = async (searchTerm: string): Promise<Playlist> => {
    try {
        const response = await axios.get<Playlist>(`https://melodiq-aretc3cfh4ggd8bs.northeurope-01.azurewebsites.net/spotify/tracks/${searchTerm}`);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the search results');
    }
}

