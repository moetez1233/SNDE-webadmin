import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MapAgreeService } from './MapAgreeService';
import { Agree } from 'src/Models/Agree';
import { MapServices } from '../map/MapServices';
import { Constants, RolesId } from 'src/Constants/Constants';
import {Points} from 'src/Models/points';
import {Categorie} from 'src/Models/Categorie'
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { releves } from 'src/Models/releves';
import { config } from 'src/Models/configuration';







@Component({
  selector: 'app-map-agree',
  templateUrl: './mapAgree.component.html',
  styleUrls: ['./mapAgree.component.scss']
})

export class MapAgreeComponent implements OnInit {
url:string;
  images: string;
  window = window
  agrees: Agree[] = [];
  displayAgrees: Agree[] = [];
  points:Points[] =[];
  displaypoints :Points[]=[];
  categories :Categorie[] =[];
  displaycategories:Categorie[]=[];
  searching = false;
  clickedNomfre: Points = new Points();
  ClikedCat:Points=new Points()
  clickNomfrCategorie:Categorie =new Categorie();
  releves:releves[]=[];
  pointReleve : releves[]=[];
  configurations:config[] = []; 
  
  ourconfig: config[]=[];
  adminsColor = []
  pointsIndex = -1;
  categorieIndex =-1;
  deuxiemeClick=0;
  nip:string;
  Nomfrcategori:string;
  limiteReleveEnSecond: number;

  
  clickedIndex: number = -1;

  adminGotTheRole = false
  constructor(
    private Location: Location,
    private http?: HttpClient,
    private titleService?: Title,
    private storage?:AngularFireStorage,
    
  ) {
    if (Constants.admin.rolesGroupe.indexOf(RolesId.consulter_agree) !== -1) {
      this.adminGotTheRole = true;
    }
  }
  
  

 
  
 
 ngOnInit() {
  this.titleService.setTitle("Consulter les Points");
 this.initializePoints()
// console.log(this.ngOnInit);
}
 
 


 

  
  createNewBlankAgree(agree: Agree) {
    agree.id = "***************";
    return agree;
  }

pointsClick(index, marker) {
  let clickedPoints = this.points[index];
  this.clickedIndex = index
  setTimeout(() => { MapAgreeService.setPoints(this.points[index], this.points[index]); }, 200);

  MapServices.setNewView(
    [
      clickedPoints.geoPoint.latitude,
      clickedPoints.geoPoint.longitude,
    ],
    20,
    marker
  )
  this.resize();

}
async initializePoints(){
  this.points = []
  this.searching = false;
  await MapAgreeService.getConfigurations(this.http).then((result)=>{
   // this.limiteReleveEnSecond = result
    //let con: config[] = result.config;
    //this.limiteReleveEnSecond = con[0].limiteReleveEnSec
    //this.limiteReleveEnSecond = this.ourconfig[0].limiteReleveEnSec
   // console.log("Voici notre resultat de la configuration "+result);
   let confu = result.configurations;
   this.configurations = (confu ? Object.values(confu) : []);
   console.log("this is our confu", this.configurations);
  })
  await MapAgreeService.getReleveurs(this.http).then((result)=>{
    console.log("Voici notre resultat releves "+result.releves);
    let relv: releves[] = result.releves;
    
    this.pointReleve = (relv ? Object.values(relv) : []);
    
  });
  
 
  await MapAgreeService.getPoints(this.http).then((result) => {
    console.log("Voici notre resultat----------------------------------------------------------"+result.points);
    
    let points: Points[] = result.points;
    let displaypoints: Points[] = result.displaypoints;
    this.points = (points ? Object.values(points) : []);

    this.displaypoints = (displaypoints ? Object.values(displaypoints) : [])
    console.log(this.points.length);
        //console.log("**** rel ***** "+this.pointReleve.length);

    for (let i = 0; i < this.points.length; i++) {
      MapServices.addMarker(
        [
          this.points[i].geoPoint.latitude,
          this.points[i].geoPoint.longitude,
        ],
        false,
        i,
        this.points[i].nomClient
      );
      let testno = ""+this.configurations[5]
      //parseInt(testno)
      this.limiteReleveEnSecond = +testno
      let time = new Date().getTime() 
       for(let j = 0; j< this.pointReleve.length ; j++){
        if(this.pointReleve[j].point.identifiant.includes(this.points[i].identifiant)){//verify the existance of each point in releves
         let delai = time - this.pointReleve[j].dateReleve;
          console.log("voici le delai",delai);
          console.log("voici le limiteReleveEnSecond",this.limiteReleveEnSecond);
          console.log("time", time);
          console.log("voici la date releve", this.pointReleve[j].dateReleve);

          if(delai < this.limiteReleveEnSecond){
            console.log(""); 
            
            
          MapServices.addMarkerPointreleve(
            [
              this.points[i].geoPoint.latitude,
              this.points[i].geoPoint.longitude,
            ],
            false,
            i,
            this.points[i].nomClient
            
          )
        }

        }
        
      }
    }
 }
  );
  console.log("voici notre temps limite",this.limiteReleveEnSecond);
  
 
  this.categories =[]
      await MapAgreeService.getCategories(this.http).then((result)=> {
        let categories :Categorie[]= result.categories;
        let displaycategories :Categorie[]= result.displaycategories;
        this.categories=(categories ? Object.values(categories) :[]);
        displaycategories =(displaycategories ? Object.values(categories) :[])
 })
  
    let s=0;
  
    
  
  
}


async Search() {
  let numbersearch=0;
  
  let search: string = (<HTMLInputElement>document.getElementById('m-search')).value;
  console.log(search.length)
  if (search.length===0) {
    console.log(search.length)
    this.searching = false;
    this.initializePoints()
    numbersearch=1;
  } else{
    
    numbersearch=2;
    
  }
}
verifyingSearch(event) {
  let search: string = (<HTMLInputElement>document.getElementById('m-search')).value;
  if (search == "") {
    this.searching = false;
    this.initializePoints()
  } else {
    if (event.key == "Enter")
      this.Search()
  }
}



  ngAfterViewInit() {
    this.resize()
    this.initializePoints()
    MapAgreeService.get().subscribe(item => {
      if (item.pointsClicked) {
        this.pointsClick(item.index, item.marker);
      }
    })
  }

  resize() {
    setTimeout(() => { MapServices.resize() }, 400);
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
  numbersearch(numbersearch?:number){
  }
myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
filterFunctionPoints() {
  var input,output, filter, ul, li, a, i,points,j;
  input = document.getElementById("newsearch");
  filter = input.value.toUpperCase();
  let div = document.getElementById("myDropdown");
  i = div.getElementsByTagName("dt");
  for (j = 0; j < i.length; j++) {
    let txtValue = i[j].textContent || i[j].innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      i[j].style.display = "";
    } else {
      i[j].style.display = "none";
    }
  }
}
filterFunctionCategorie() {
  var input,output, filter, ul, li, a, i1,points,j;
  input = document.getElementById("newsearch");
  filter = input.value.toUpperCase();
  let div = document.getElementById("myDropdown");
  i1 = div.getElementsByTagName("dt");
  for (j = 0; j < i1.length; j++) {
    let txtValue = i1[j].textContent || i1[j].innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      i1[j].style.display = "";
    } else {
      i1[j].style.display = "none";
    }
  }
  document.getElementById("myDropdown").classList.toggle("hide");

}
filterFunctionAdress() {
  var input,output, filter, ul, li, a, i2,points,j;
  input = document.getElementById("newsearch");
  filter = input.value.toUpperCase();
  let div = document.getElementById("myDropdown");
  i2 = div.getElementsByTagName("dt");
  for (j = 0; j < i2.length; j++) {
    let txtValue = i2[j].textContent || i2[j].innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      i2[j].style.display = "";
    } else {
      i2[j].style.display = "none";
    }
  }
}
hoverOn(pointsIndex) {
  if (pointsIndex !== this.pointsIndex)
    this.adminsColor[pointsIndex] = "dark"
}

hoverOff(pointsIndex) {
  if (pointsIndex === this.pointsIndex) {
    this.adminsColor[pointsIndex] = "primary"
  } else {
    this.adminsColor[pointsIndex] = "light"
  }
}

clickedNomfr(index){
  var input;
  this.adminsColor.fill('light');
  this.adminsColor[index] = "primary"
  this.pointsIndex = index
  this.clickedNomfre = this.points[index];
  this.Nomfrcategori=this.clickedNomfre.nomClient
  console.log(this.clickedNomfre.nomClient)
  this.myFunction()
  MapServices.removeAllMarkers(
        
    )
  MapServices.addMarker(
    [
           this.clickedNomfre.geoPoint.latitude,
          this.clickedNomfre.geoPoint.longitude,
    ],
    false,
    index,
    this.clickedNomfre.identifiant
     );

     MapServices.setNewView(
      [
             this.clickedNomfre.geoPoint.latitude,
            this.clickedNomfre.geoPoint.longitude,
      ],
      20,
    
       );
       MapServices.resize()

}

clickedcaegories(index){
  this.adminsColor.fill('light');
  this.adminsColor[index] = "primary"
  this.categorieIndex = index
 
  console.log(this.categories[index].id)
 
  this.Nomfrcategori=this.categories[index].nomfr
  for(let i=0;i<this.points.length;i++){
    if(this.points[i].numeroCompteur==this.categories[index].id){

      
      index=i;
      console.log(index)
      this.ClikedCat=this.points[index]
      
     console.log('hello '+this.points[i].nomClient)
      document.getElementById("myDropdown").classList.toggle("hide");
      console.log(this.points[i].geoPoint.latitude)
      console.log(this.points[i].geoPoint.longitude)
      MapServices.removeAllMarkers(
        
        )

  MapServices.addMarker(
    [
      this.ClikedCat.geoPoint.latitude,
      this.ClikedCat.geoPoint.longitude,
    ],
    false,
    index,
    this.ClikedCat.nomClient
     )
    MapServices.setNewView(
      [
        this.points[i].geoPoint.latitude,
        this.points[i].geoPoint.longitude,
      ],
      20,
    
       );
       MapServices.resize()}}
    }
 
 close(){

  this.clickedIndex = -1
}

async affichImg(){
  
  for(let i=0;i<this.points.length;i++){
    const imgAdminnistration=this.points[i].nomClient
    this.images = await this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()
       console.log("storegeRef : "+this.images)
    
  }

    
}

  
}
