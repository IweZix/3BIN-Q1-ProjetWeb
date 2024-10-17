import axios from 'axios';

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
 * @returns {Promise<Array<any>>} The user's playlists
 */
export const getPlaylistUser = async (id: Number): Promise<Array<any>> => {
  try {
    const response = await axios.get<Array<any>>(`/api/playlists/${id}`, {
        headers: {
            Authorization: `${localStorage.getItem('token')}`
        }
    });
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching the playlist');
  }
};