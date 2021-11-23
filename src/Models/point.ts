import{geoPoint} from'./geoPoint'
export interface point {
    adresse?:string;
    dateDernierReleve?:number;
    identifiant?:string;
    nomClient?:string;
    numeroCompteur?:number;
    position?:geoPoint;
    geoPoint?:geoPoint;
    snippet?:string;
    title?:string;
    location?:string;
}