import { Component, OnInit } from '@angular/core';
import { Releveur} from 'src/Models/Releveur';
import { User } from 'src/Models/User';
import { Service } from 'src/Services/Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-releveur',
  templateUrl: './add-releveur.component.html',
  styleUrls: ['./add-releveur.component.scss']
})
export class AddReleveurComponent implements OnInit {

  constructor(private http?: HttpClient) { }

  ngOnInit() {
  }
  addRelveur(infoNom,InfoPrenom,InfoNumero) {
    if ((infoNom.value !== "") && (InfoPrenom.value !== "") && (InfoNumero.value !== "")) {
      let Userreleveur: User = new User();
      Userreleveur.nom = infoNom.value;
      Userreleveur.prenom = InfoPrenom.value;
      Userreleveur.phoneNumber = InfoNumero.value;
      Userreleveur.isreleveur = 1;
      console.log(Userreleveur.phoneNumber);
      //console.log(Userreleveur);
      
      
      //Userreleveur.id="58Z5FZTHZwUlaZ7SSpDccL16XpJ3"
      /* ============================= codage time ============================ */
      let temp=Math.round(new Date().getTime()/1000) //return timestemp
     let tempcod= btoa(temp.toString()) //code le timestemp
     //alert(tempcod.slice(0,tempcod.search("=")))
     /* = ============================== end codage time ============================*/


/* ======================================= codage numero ===========================  */
if (Userreleveur.phoneNumber.toString().slice(0,1)=="+"){
  console.log("il ya + ");
  let numTelCod=btoa(Userreleveur.phoneNumber.toString().replace("+", "00"));//remplace + par 00
     //let numTelCod=btoa(Userreleveur.numeoTelephon.toString()) 
     let idfinal=numTelCod.concat(tempcod)
     let telcodef=idfinal.slice(0,numTelCod.search("="))
   
     Userreleveur.id=telcodef 
     console.log(telcodef);
}else{
  let numTelCod =btoa(Userreleveur.phoneNumber.toString())
  //console.log(numTelCod);
  let idfinal=numTelCod.concat(tempcod)
  let telcodef=idfinal.slice(0,numTelCod.search("="))

  Userreleveur.id=telcodef  
  console.log(telcodef);
}
     /* ========================== end codage numero ========================== */
      Service.sendReleveur(this.http, Userreleveur).then(result => {
        if (result.status) {
          InfoPrenom.value = "";
          infoNom.value = "";
          InfoNumero.value="";

        }
       })
    }
  

}}
