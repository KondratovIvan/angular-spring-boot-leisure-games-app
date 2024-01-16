export class Game {
    id:number;
    name:string;
    fame:string;
    shortDesc:string;
    fullDesc:string;
    imageLink:string;

    constructor(id?: number, name?: string, fame?: string, shortDesc?:string, fullDesc?: string, imageLink?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.fame = fame || '';
        this.shortDesc = shortDesc || '';
        this.fullDesc = fullDesc || '';
        this.imageLink = imageLink || '';
    }
}
