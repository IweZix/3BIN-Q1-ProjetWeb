import Artist from './Artist';

class Song {
    id: number;
    title: string;
    artist: Artist[];
    album: string;
    image: string;
    
    constructor(id: number, title: string, artist: Artist[], album: string, image: string) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.image = image;
    }
}
  
export default Song;
