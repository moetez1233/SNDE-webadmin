import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MapNewService } from './MapNewService';
import { Agree } from 'src/Models/Agree';
import { MapServices } from '../map/MapServices';
import { Constants, RolesId } from 'src/Constants/Constants';
import {Administration} from 'src/Models/administration';
import {Categorie} from 'src/Models/Categorie'
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';





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
  administrations:Administration[] =[];
  displayadministrations :Administration[]=[];
  categories :Categorie[] =[];
  displaycategories:Categorie[]=[];
  searching = false;
  clickedNomfre: Administration = new Administration();
  ClikedCat:Administration=new Administration()
  clickNomfrCategorie:Categorie =new Categorie();

  adminsColor = []
  administrationIndex = -1;
  categorieIndex =-1;
  deuxiemeClick=0;
  nip:string;
  Nomfrcategori:string;
  
  
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
  this.titleService.setTitle("Consulter les Administrations");
 this.initializeAdministration()
}
 


 

  
  createNewBlankAgree(agree: Agree) {
    agree.id = "***************";
    return agree;
  }

administrationClick(index, marker) {
  let clickedAdministration = this.administrations[index];
  this.clickedIndex = index
  setTimeout(() => { MapNewService.setAdministration(this.administrations[index], this.administrations[index]); }, 200);

  MapServices.setNewView(
    [
      clickedAdministration.Lat,
      clickedAdministration.Long,
    ],
    20,
    marker
  )
  this.resize();

}
async initializeAdministration(){
  this.administrations = []
  this.searching = false;
  await MapNewService.getAdministrations(this.http).then((result) => {
    console.log("Voici notre resultat"+result.administrations);
    let administrations: Administration[] = result.administrations;
    let displayadministrations: Administration[] = result.displayadministrations;
    this.administrations = (administrations ? Object.values(administrations) : []);

    this.displayadministrations = (displayadministrations ? Object.values(displayadministrations) : [])
    console.log(this.administrations.length);
    for (let i = 0; i < this.administrations.length; i++) {
        MapServices.addMarker(
          [
            this.administrations[i].Lat,
            this.administrations[i].Long,
          ],
          false,
          i,
          this.administrations[i].nip
        )
        console.log("helllo"+this.administrations[i].Lat)

     
      
       
     
  }
  });
  this.categories =[]
      await MapNewService.getCategories(this.http).then((result)=> {
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
    this.initializeAdministration()
    numbersearch=1;
  } else{
    
    numbersearch=2;
    
  }
}
verifyingSearch(event) {
  let search: string = (<HTMLInputElement>document.getElementById('m-search')).value;
  if (search == "") {
    this.searching = false;
    this.initializeAdministration()
  } else {
    if (event.key == "Enter")
      this.Search()
  }
}



  ngAfterViewInit() {
    this.resize()
    this.initializeAdministration()
    MapNewService.get().subscribe(item => {
      if (item.administrationClicked) {
        this.administrationClick(item.index, item.marker);
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
filterFunctionAdministration() {
  var input,output, filter, ul, li, a, i,administrations,j;
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
  var input,output, filter, ul, li, a, i1,administrations,j;
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
  var input,output, filter, ul, li, a, i2,administrations,j;
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
hoverOn(administrationIndex) {
  if (administrationIndex !== this.administrationIndex)
    this.adminsColor[administrationIndex] = "dark"
}

hoverOff(administrationIndex) {
  if (administrationIndex === this.administrationIndex) {
    this.adminsColor[administrationIndex] = "primary"
  } else {
    this.adminsColor[administrationIndex] = "light"
  }
}

clickedNomfr(index){
  var input;
  this.adminsColor.fill('light');
  this.adminsColor[index] = "primary"
  this.administrationIndex = index
  this.clickedNomfre = this.administrations[index];
  this.Nomfrcategori=this.clickedNomfre.nip
  console.log(this.clickedNomfre.nomfr)
  this.myFunction()
  MapServices.removeAllMarkers(
        
    )
  MapServices.addMarker(
    [
           this.clickedNomfre.Lat,
          this.clickedNomfre.Long,
    ],
    false,
    index,
    this.clickedNomfre.nip
     );

     MapServices.setNewView(
      [
             this.clickedNomfre.Lat,
            this.clickedNomfre.Long,
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
  for(let i=0;i<this.administrations.length;i++){
    if(this.administrations[i].categorie==this.categories[index].id){

      
      index=i;
      console.log(index)
      this.ClikedCat=this.administrations[index]
      
     console.log('hello '+this.administrations[i].nomfr)
      document.getElementById("myDropdown").classList.toggle("hide");
      console.log(this.administrations[i].Lat)
      console.log(this.administrations[i].Long)
      MapServices.removeAllMarkers(
        
        )

  MapServices.addMarker(
    [
      this.ClikedCat.Lat,
      this.ClikedCat.Long,
    ],
    false,
    index,
    this.ClikedCat.nip
     )
    MapServices.setNewView(
      [
        this.administrations[i].Lat,
        this.administrations[i].Long,
      ],
      20,
    
       );
       MapServices.resize()}}
    }
 
 close(){

  this.clickedIndex = -1
}

async affichImg(){
  
  for(let i=0;i<this.administrations.length;i++){
    const imgAdminnistration=this.administrations[i].imagefacade
    this.images = await this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()
       console.log("storegeRef : "+this.images)
    
  }

    
}

  
}
