import * as firebase from "firebase"
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Justification } from 'src/Models/Justification';
import { URLS } from 'src/Constants/Constants';
import { User } from 'src/Models/User';
import {pointsReleveur} from 'src/Models/pointsReleveur';

export class Service {
    static async getHeadersWithIdToken(): Promise<any> {
        let options = {
            headers: new HttpHeaders({
                "authorisation": await this.getIdToken(),
            })
        }
        return options
    }

    static async getIdToken(): Promise<any> {        
        return await firebase.auth().currentUser.getIdToken();
    }

    static async sendJustification(http: HttpClient, justification: Justification): Promise<any> {
        let options = await this.getHeadersWithIdToken();
        let result: any = (await http.post(URLS.sendJustification,{justification}, options).toPromise())
        return result
    }
    static async sendReleveur(http: HttpClient, Userreleveur: User): Promise<any> {
        let options = await this.getHeadersWithIdToken();
        let result: any = (await http.post(URLS.addReleveur,{Userreleveur}, options).toPromise())
        return result
    }
    static async sendPointreleveur(http: HttpClient, pointReleve: pointsReleveur): Promise<any> {
        let options = await this.getHeadersWithIdToken();
        let result: any = (await http.post(URLS.addPointsReleveur,{pointReleve}, options).toPromise())
        return result
    }
}