import Song from './Song';

class Playlist {
    id: Number;
    userId: Number;
    name: String;
    songs: Array<Song>;

    constructor(id: Number, userId: Number, name: String, songs: Array<Song>) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.songs = songs;
    }
}

export default Playlist;