import Song from './Song';


class Playlist {
    id: number;
    userId: number;
    name: string;
    songs: Song[];

    constructor(id: number, userId: number, name: string, songs: Song[]) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.songs = songs;
    }
}

export default Playlist;