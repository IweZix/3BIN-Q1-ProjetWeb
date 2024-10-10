class Song {
    id: Number;
    title: String;
    artist: String;
    album: String;
    image: String;
    
  
    constructor(id: Number, title: String, artist: String, album: String, image: String) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.image = image;
    }
}
  
export default Song;