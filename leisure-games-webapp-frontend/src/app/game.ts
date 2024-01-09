export class Game {
    id:number;
    name:string;
    minPlayersAmount:number;
    description:string;
    imageLink:string;

    constructor(id?: number, name?: string, minPlayersAmount?: number, description?: string, imageLink?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.minPlayersAmount = minPlayersAmount || 0;
        this.description = description || '';
        this.imageLink = imageLink || '';
    }
}
