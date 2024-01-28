export class Game {
    id:number;
    name:string;
    fame:string;
    shortDesc:string;
    fullDesc:string;
    imageLink:string;
    category:string;

    constructor(id?: number, name?: string, fame?: string, shortDesc?:string, fullDesc?: string, imageLink?: string, category?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.fame = fame || '';
        this.shortDesc = shortDesc || '';
        this.fullDesc = fullDesc || '';
        this.imageLink = imageLink || '';
        this.category = category || '';
    }
}
