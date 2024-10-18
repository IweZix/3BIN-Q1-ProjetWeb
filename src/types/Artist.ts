class Artist {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;

    constructor(href: string, id: string, name: string, type: string, uri: string) {
        this.href = href;
        this.id = id;
        this.name = name;
        this.type = type;
        this.uri = uri;
    }
}

export default Artist;
  