import { HttpClient } from '@angular/common/http';
import { Service } from 'src/Services/Service';
import { URLS } from 'src/Constants/Constants';
import { Injectable, Output, EventEmitter } from '@angular/core'
import{ Claim } from 'src/Models/claim'

@Injectable({
  providedIn: 'root'
})
export class ReleveurService {
/*
  @Output() static fire: EventEmitter<any> = new EventEmitter();

  static setReclamation(claim: Claim, displayclaim: Claim) {
      this.fire.emit({ "claim": claim, "displayclaim": displayclaim });
  }

  static getData() {
      return this.fire
  }*/

//constructor() { }
static async getReleveur(http: HttpClient) {
  let options = await Service.getHeadersWithIdToken();
  let result: any = (await http.get(URLS.getChaqueReleveurs, options).toPromise())
  return result;
}
static async getAdministrations(http: HttpClient) {
  let options = await Service.getHeadersWithIdToken();
  let result: any = (await http.get(URLS.getAdministration, options).toPromise())
  return result;
}
/* ================== users ====================== */
static async getUsers(http: HttpClient) {
  let options = await Service.getHeadersWithIdToken();
  let result: any = (await http.get(URLS.getUsers, options).toPromise())
  return result;
}

/* ======================== claim ============= */
static async getreclamation(http: HttpClient) {
  let options = await Service.getHeadersWithIdToken();
  let result: any = (await http.get(URLS.getClaims, options).toPromise())
  return result;
}
}
