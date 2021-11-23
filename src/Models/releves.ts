/*import { Position } from "./position";
import { Notice } from "./notice";
import { Language } from "./language";
import { AccountStatus } from "./account-status";
import { Wallet } from "./wallet";

export class Releves {
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
  }*/
  import { Points} from "./points";
  export class releves {
      id?: string;
      idUser?: string;
      idTrans?: string;
      dateReleve?: number;
      indexe?: number;
      point?:Points;
      idReleveur?:string;
  }
  