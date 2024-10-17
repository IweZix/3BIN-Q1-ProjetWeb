import axios from 'axios';
import Playlist from '@/types/Playlist';

export const getImage = async (id: String): Promise<any> => {
    try {
        const response = await axios.get<any>(`/api/spotify/image/${id}`);

        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching the image');
    }
}

/**
 * Get the user's playlists
 * @returns {Promise<Playlist>} The user's playlists
 */
export const getPlaylistUser = async (id: Number): Promise<Playlist> => {
  try {
    const response = await axios.get<Playlist>(`/api/playlists/${id}`, {
        headers: {
            Authorization: `${localStorage.getItem('token')}`
        }
    });
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching the playlist');
  }
};