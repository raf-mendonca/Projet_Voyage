import { Hotel } from './hotel';

export interface Forfait {
    destination: string,
    depart: string,
    hotel: Hotel,
    prix: number,
    rabais: number,
    dateDepart: string,
    dateRetour: string,    
    forfaitVedette: boolean,
}