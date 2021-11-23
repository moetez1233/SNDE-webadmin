import { Position } from "./position";
import { Notice } from "./notice";
import { Language } from "./language";
import { AccountStatus } from "./account-status";
import { Wallet } from "./wallet";
import { Position1 } from './Position1';

export class Points {
  /*
  id?: string;
    //idUser?:string;
    categorie?: number;
    Lat?: number;
    Long?: number;
    idUser?: string;
    imagefacade?: string;
    contact?: number;
    adresse?:string;
    nip?:string;
    nomfr?:string;
    update?:number
    positionAdm?:Position
    */
   identifiant?: string;
   adresse?:string;
   location?: String;
   nomClient?: string;
   numeroCompteur?: number;
   dateDernierReleve?: number;
   snippet?: string;
   title?: number;
   geoPoint?: Position1;
   position?: Position1
   activite?: string
  }