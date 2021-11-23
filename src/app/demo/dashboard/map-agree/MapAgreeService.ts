import { Service } from 'src/Services/Service';
import { HttpClient } from '@angular/common/http';
import { URLS } from 'src/Constants/Constants';
import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core'
import { Agree } from 'src/Models/Agree';
import{ Points} from 'src/Models/points';
import{ releves} from 'src/Models/releves'
@Injectable()
export class MapAgreeService {
    @Output() static fire: EventEmitter<any> = new EventEmitter();

   

   

    static get() {
        return this.fire;
    }

    
    /* les points  */
    static async getPoints(http: HttpClient) {
        let options = await Service.getHeadersWithIdToken();
        let result: any = (await http.get(URLS.getPoints, options).toPromise())
        return result;
    }
    static clickOnPoints(index, marker) {
        this.fire.emit({ "pointsClicked": true, index, marker })
    }
    static setPoints(clickedpoints: Points, clickedDisplaypoints: Points) {
        this.fire.emit({ clickedpoints, clickedDisplaypoints })
    }
    /* get Releveur  */
    static async getReleveurs(http: HttpClient) {
        let releveur = await Service.getHeadersWithIdToken();
        let resultr: any = (await http.get(URLS.getReleves, releveur).toPromise())
        return resultr;    
    }
    /*get Configuration*/
    static async getConfigurations(http: HttpClient){
        let config = await Service.getHeadersWithIdToken();
        let result_config : any = (await http.get(URLS.getConfigurations , config).toPromise())
        return result_config;
    }
    /* ========================= Function Categories ========================================= */
    static async getCategories(http: HttpClient) {
        let options = await Service.getHeadersWithIdToken();
        let result: any = (await http.get(URLS.getCategories, options).toPromise())
        return result;
    }
    
}