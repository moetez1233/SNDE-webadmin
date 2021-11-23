import { Component, OnInit } from '@angular/core';
import { Agree } from 'src/Models/Agree';
import { MapAgreeService } from '../MapAgreeService';
import { Justification } from 'src/Models/Justification';
import { Service } from 'src/Services/Service';
import { HttpClient } from '@angular/common/http';
import { Points } from 'src/Models/points';
import { AngularFireStorage } from '@angular/fire/storage';
import {Categorie} from 'src/Models/Categorie'


@Component({
  selector: 'app-agree-details',
  templateUrl: './agree-details.component.html',
  styleUrls: ['./agree-details.component.scss']
})
export class AgreeDetailsComponent implements OnInit {
  window = window;
  clickedDisplayAgree: Agree = new Agree();
  clickedAgree: Agree = new Agree();
  clickedDisplaypoints: Points = new Points();
  clickedpoints: Points = new Points();
  clickedCategorie: Categorie=new Categorie() ;
  images: string;
  url:string;
  clickedIndex:number=-1;
  categories :Categorie[] =[];
  propertie;
  justifyingImage;
  constructor(
    private http: HttpClient,
    private storage?:AngularFireStorage,

  ) { }


  ngOnInit() {
    MapAgreeService.get().subscribe(item => {
      if (item.clickedDisplaypoints && item.clickedpoints) {
        this.clickedDisplaypoints = item.clickedDisplaypoints;
        this.clickedpoints = item.clickedpoints;
        console.log("contact : "+this.clickedDisplaypoints.numeroCompteur);
        
        console.log(this.clickedDisplaypoints.nomClient)
        
        this.affichimage()
        this.categorie()
       
        
      }
    })
  }
  async categorie(){
    this.clickedCategorie=new Categorie()
    this.categories =[]
    await MapAgreeService.getCategories(this.http).then((result)=> {
      let categories :Categorie[]= result.categories;
      let displaycategories :Categorie[]= result.displaycategories;
      this.categories=(categories ? Object.values(categories) :[]);
      
      for(let i=0;i<this.categories.length;i++){
        if(this.categories[i].id==this.clickedDisplaypoints.numeroCompteur){
          this.clickedCategorie=this.categories[i]
        }
      }
})
  }
  async affichimage(){
    const imgAdminnistration=this.clickedDisplaypoints.nomClient
    this.images = await this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()
    this.url=this.images
    console.log(this.url)

  }
  

  justifying(propertie: string, justificationModal,justificationModal1, justification, justifyingImage) {
    justification.value = "";
    justificationModal.show()
    justificationModal1.show()
    this.propertie = propertie;
    this.justifyingImage = justifyingImage;
  }


  
  justify(justificationModal, justify) {
    if (justify.value !== "") {
      let justification: Justification = new Justification();
      justification.attribute = this.propertie;
      justification.description = justify.value;
      justification.interface = "Consulter agence"
      justification.fromCollection = "user"
      justification.idObject = this.clickedDisplaypoints.identifiant;
      this.justifyingImage.src = "assets/images/loading.gif";
      Service.sendJustification(this.http, justification).then(result => {
        if (result.status) {
          this.clickedDisplaypoints[this.propertie] = this.clickedpoints[this.propertie]
        }
      }).finally(() => {
        this.justifyingImage.src = "assets/images/showInfo.png";
      })
      justificationModal.hide();
    }
  }
  
  
  
  


  timestampToDate(timestamp) {
    let date = new Date(timestamp);
    return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
  }

  valueOf(i: number): string {
    if (i < 10) {
      return "0" + i
    }
    return i.toString();
  }
 

}
