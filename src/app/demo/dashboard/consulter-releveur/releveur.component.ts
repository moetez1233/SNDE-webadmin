import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ReleveurService  } from './releveur.service';
import { Releveur} from 'src/Models/Releveur';
import { User } from 'src/Models/User';
import { MapServices } from '../map/MapServices';
import { Constants, RolesId } from 'src/Constants/Constants';
import {Administration} from 'src/Models/administration';
import{Categorie} from 'src/Models/Categorie'
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import{ Claim } from 'src/Models/claim'
import { Tag } from 'src/Models/tags';
import {pointsReleveur} from 'src/Models/pointsReleveur';
import { Service } from 'src/Services/Service';


//import { MapAgreeService } from './MapAgreeService';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-releveur',
  templateUrl: './releveur.component.html',
  styleUrls: ['./releveur.component.scss']
})
export class ReleveurComponent implements OnInit {
  click=0;
  c=-1;
  adminGotTheRole = false
  Releveur:Releveur[]=[];
  ListeReleve:Releveur[]=[];
  listReclamation:Claim[]=[];
  claimTags : Tag[]=[];
  administrations:Administration[] =[];
  recalmtions:Claim[]=[];
  users: User[] = [];
  usersIsReleve: User[] = [];
  //usersReleveur: User= new User();
 releveIndex = -1;
  clickedreleveIndex = -1;
  clickedClaimIndex=-1;
  ClickedUserIndex=-1;
  clickedReleve: Releveur = new Releveur();
  claimclick:Claim=new Claim();
  clickedUserRelev:User=new User();
  initializing = false;
  serchvalid=false;
  initUsers=false;
  releveColor = []
  tabrelev=[];
  xElement;
  clickSave=0;
  alertText = "";
  type = "";

  constructor(
    private Location: Location,
    private http?: HttpClient,
    private titleService?: Title,
    private storage?:AngularFireStorage,
    
  ) {
    if (Constants.admin.rolesGroupe.indexOf(RolesId.consulter_releveur) !== -1) {
      this.adminGotTheRole = true;
    }
  }

  ngOnInit() {
this.initializeReleveur()
//this.initializeAdministration()
this.initializeReclamation()
this.initializeUsers()
//this.verifsave()
  }
  async initializeReleveur(){
    this.Releveur = []
    //this.searching = false;
    await ReleveurService.getReleveur(this.http).then((result) => {
      let releveur: Releveur[] = result.releves;
      let displayreleveur: Releveur[] = result.releves;
      this.Releveur = ( releveur ? Object.values( releveur) : []);
      
  
    })}
    async initializeUsers() {
      this.initUsers = true;
      this.users = []
      let result = (await ReleveurService.getUsers(this.http)); 
      this.users=[];
      this.usersIsReleve=[];
        let users = Object.values(result.users);
      let displayUsers = result.displayUsers
      users = (users ? Object.values(users) : [])
      
      this.users = Object.values(result.users);;
      for (let i = 0; i < users.length; i++) {
        if(this.users[i].isreleveur==1){
          this.usersIsReleve.push(this.users[i]);
        }

      }

  
      
     
      
      
    }
    async initializeAdministration(){
      this.administrations = []
      //this.searching = false;
      await ReleveurService.getAdministrations(this.http).then((result) => {
        let administrations: Administration[] = result.administrations;
       
        let displayadministrations: Administration[] = result.displayadministrations;
        this.administrations = (administrations ? Object.values(administrations) : []);
       
      })}


      async initializeReclamation(){
        this.recalmtions = []
        await ReleveurService.getreclamation(this.http).then((result) => {
          let recalmtions: Claim[] = result.claims;

        
          this.recalmtions = (recalmtions ? Object.values(recalmtions) : []);
          console.log("claims "+this.recalmtions[0].idUser)
        })}
        refrech(){
          this.tabrelev=[];
        var xx = document.getElementById("alert");
        //document.getElementById("clicksave").innerHTML="";
        document.getElementById("clicksave").innerHTML="click sur + pour ajouter nouvelle reference"

        if (xx.style.display === "bloc") {
         
          xx.style.display = "block";
        } else {
          xx.style.display = "none";
        }
        const x=<HTMLInputElement> document.getElementById("saveRelev");
          const  x1=<HTMLInputElement> document.getElementById("addRelev");

          
          x1.disabled=false;
          x.disabled=false;
        }
      UserRelevClick(releveIndex){
      this.refrech()
        this.clickedUserRelev= new User();
        if (this.ClickedUserIndex!== releveIndex) {
          this.clickedUserRelev = this.usersIsReleve[releveIndex]
          //alert(this.clickedUserRelev.phoneNumber)
          this.initializing = true;
          
          //document.getElementById("myDropdown").classList.toggle("show");

          
          this.releveColor.fill('light');
          this.releveColor[releveIndex] = "primary"
         
        }
        this.ListeReleve=[];
        for(let i=0;i<this.Releveur.length;i++){
          if(this.Releveur[i].idReleveur==this.clickedUserRelev.id){
            this.ListeReleve.push(this.Releveur[i])//remplir un tableau de user clicker qui on plusieur relev
            
          }
        }
        this.listReclamation=[];
        for(let i=0;i<this.recalmtions.length;i++){
          if(this.recalmtions[i].idUser==this.clickedUserRelev.id){
            this.listReclamation.push(this.recalmtions[i]);
          }
        }
        this.myFunction()
        this.serchvalid=false;
      
          
      }

     
    
      releverClick(chaqueRelevindex){
        //this.clickedReleve = new Releveur();
       
        if (this.clickedreleveIndex!== chaqueRelevindex) {
          this.clickedReleve = this.ListeReleve[chaqueRelevindex]
          //console.log("liste de releve de ce user clicker "+this.ListeReleve[0].point.identifiant);
          //alert(this.clickedClicked.indexe)
         // this.initializing = true;
        // alert(chaqueRelevindex)
          
         //alert(this.ListeReleve[0].point.identifiant)
         document.getElementById("demo01").innerHTML =this.clickedReleve.point.nomClient ;
         //document.getElementById("demo01").innerHTML =this.clickedReleve.point.numeroCompteur ;
         document.getElementById("demo1").innerHTML =this.clickedReleve.point.identifiant ;
         document.getElementById("demo2").innerHTML =this.clickedReleve.point.location ;

         
     
          //document.getElementById("demo").style.color = "black";
         
      }
      
    }
    claimClick(chaqueClaimindex){
      //this.clickedReleve = new Releveur();
     
      if (this.clickedClaimIndex!== chaqueClaimindex) {
        this.claimclick = this.listReclamation[chaqueClaimindex]
        this.claimTags=this.listReclamation[chaqueClaimindex].tags
      }}
    alerttest(chaqueRelevindex){
      alert(this.ListeReleve[chaqueRelevindex].indexe)
    }
    ReclamAdmininstration1(myPersistenceModal){
      myPersistenceModal.show();
    }
    Reclam(myPersistenceModal1){
      myPersistenceModal1.show();
      MapServices.addMarker(
        [
          this.claimclick.position.lat,
          this.claimclick.position.lon,
        
        ],
        true,
        -1,
        this.claimclick.idUser
      );
    
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
    
      hoverOn(releveIndex) {
        if (releveIndex !== this.releveIndex)
          this.releveColor[releveIndex] = "dark"
      }
      
        
      
      
      
       mouseOut() {
        document.getElementById("demo").style.color = "black";
      }
    
      hoverOff(releveIndex) {
        if (releveIndex === this.releveIndex) {
          this.releveColor[releveIndex] = "primary"
        } else {
          this.releveColor[releveIndex] = "light"
        }
      }


      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        var x = document.getElementById("contenuUtlisateur");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      filterFunction() {
        var input,output, filter, ul, li, a, i,administrations,j;
        input = document.getElementById("newsearch");
       // output=document.getElementById("choix");
        filter = input.value.toUpperCase();
        let div = document.getElementById("myDropdown");
        i = div.getElementsByTagName("dt");
        for (j = 0; j < i.length; j++) {
          let txtValue = i[j].textContent || i[j].innerText;
          
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            i[j].style.display = "";
            //output=i[j]
          } else {
            i[j].style.display = "none";
            //output=i[j]
          }
        }
      }
      add(){ 
        this.click=this.click+1
         this.xElement = document.createElement('div');   
         this.xElement.className = 'row'; 
         this.xElement.innerHTML = ` 
          <br> 
          <div class="form-group row" id="oInput">
                        <label for="inputEmail3" class="col-sm-3 col-form-label">refrence </label>
                        <div class="col-sm-6">
                            <input type="nom" class="form-control" id="moetez" value="" placeholder="refrence">
                        </div>
                    </div>`; 
          document.querySelector('.showInputField').appendChild(this.xElement); 
          
      } 
      save(){
        this.c = document.getElementById("oInput").childNodes.length;
      
        this.clickSave=this.clickSave+1;
        if(this.clickSave !=0 && this.c !=0 ){
          const x=<HTMLInputElement> document.getElementById("saveRelev");
          const  x1=<HTMLInputElement> document.getElementById("addRelev");

          
          x1.disabled=true
          x.disabled=true;
          this.click=0;
         

        }
        for(let i=0;i<=this.c;i++){
          if(document.getElementsByTagName("input")[i].value !=""){
            this.tabrelev.push(document.getElementsByTagName("input")[i].value)

          }
        }
        this.tabrelev.shift() //delete the first item in array
        const json = Object.assign({}, this.tabrelev); // convert an array to json
        this.showAlert("success", "Reférences ajouter")
        document.getElementById("clicksave").innerHTML=""
        let pointReleve : pointsReleveur = new pointsReleveur();
        pointReleve.id=this.clickedUserRelev.id;
        pointReleve.references=json;
       
        /* ============== codage id et timestemps ===============  */
        

        let temp=Math.round(new Date().getTime()/1000) //return timestemp
        let tempcod= btoa(temp.toString()) //code le timestemp

        let idcode=btoa(this.clickedUserRelev.id)
        pointReleve.idTemps=idcode.concat(tempcod).slice(0,idcode.concat(tempcod).search("="))


        /* ============== end codage ============================ */
        Service.sendPointreleveur(this.http, pointReleve).then(result =>{
          if(result.status){
            console.log('add success');
          }
          
          
        })
        

      }
      showAlert(type: string, text: string) {
        this.type = type;
        this.alertText = text;
        var x = document.getElementById("alert");
        if (x.style.display === "block") {
         
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
        var div = document.getElementById("oInput");  
        while(div.firstChild) { 
            div.removeChild(div.firstChild); 
        } 

      }
     
      
    
  }
 
