import { Component, OnInit } from '@angular/core';
import { MapServices } from '../map/MapServices';
import * as L from 'leaflet'
import 'leaflet.markercluster';
import { MapNewService } from '../map-new/MapNewService';
import { MapAgreeService } from '../map-agree/MapAgreeService';
  import { from } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: L.Map;
  markers: L.LayerGroup;
  window = window;
 
  smallGreenIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
  });
  smallRedIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
  })
  constructor() { }

  initMap() {
    this.markers = new L.LayerGroup();
    //console.log(this.map);
    
    if (!this.map) {
      this.map = new L.Map("map");
      //this.map.fitBounds(this.map.getBounds());
    }
    let layer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { minZoom: 9, attribution: "Web Admin" })
    layer.addTo(this.map);
    this.map.setView(
      new L.LatLng(18.079181214135577, -15.96642281860113),
      4
    )
  }

  ngOnInit() {
    this.initMap();
    MapServices.getEmittedValue().subscribe(item => {
      switch (true) {
        case item.addMarker:
          let coordinates = item.coordinates;
          let zoom = item.zoom
          let index = item.index
          let popup=item.popup
          
          this.addMarker(coordinates,  zoom, index ,popup)
          break;
          case item.addMarkerPointreleve:
            let coordinatesrel = item.coordinates;
            let zoomrel = item.zoom
            let indexrel = item.index
            let popuprel=item.popup
            
            this.addMarkerPointreleve(coordinatesrel,  zoomrel, indexrel ,popuprel)
            break;
          case item.addMarkerPoint:
            let coordinates1 = item.coordinates;
            let zoom2 = item.zoom
            let index3 = item.index
            let popup4=item.popup
            
            this.addMarkerPoint(coordinates1,  zoom2, index3 ,popup4)
            break;
        case item.resize:
          this.resize();
          break;
        case item.removeMarker:
          this.removeAllMarker()
          break;
        case item.initMap:
          this.initMap();
          break;
        case item.setNewView:
          let marker = item.marker
          let coords = item.coordinates;
          let zoomIn = item.zoom;
          this.setNewView(coords, zoomIn, marker);
          break;
          case item.NewView:
            let marker1 = item.marker
            let coords2 = item.coordinates;
            let zoomIn3 = item.zoom;
            this.NewView(coords2, zoomIn3, marker1);
            break;
      }

    })
  }

  setNewView(coordinates, zoomIn, marker: L.Marker) {
    this.map.setView(coordinates, zoomIn);
    //this.initMarkersColor()
    if (marker) {
      //marker.setIcon(this.smallGreenIcon)
    } 
  }
  NewView(coordinates, zoomIn, marker: L.Marker) {
    this.map.setView(coordinates, zoomIn);
    //this.initMarkersColor()
    if (marker){ 
      //marker.setIcon(this.smallRedIcon)

    }
  }
  initMarkersColor() {
    this.markers.getLayers().forEach(layer => {
      let mark: L.Marker = layer as L.Marker;
      mark.setIcon(this.smallRedIcon)

    })

  }

  addMarker(coordinates, zoom: boolean, index: number,popup:string) {

    let marker = L.marker(coordinates, { icon: this.smallRedIcon }).bindPopup(popup)
    .openPopup();
    if (index !== -1)
      marker.addEventListener("click", () => {
      
        MapNewService.clickOnAdministration(index, marker);
        MapAgreeService.clickOnPoints(index, marker)
      })
    this.markers.addLayer(marker);
    this.markers.addTo(this.map);
    
    
    if (zoom)
      this.map.setView(coordinates, 15);
  }
  addMarkerPoint(coordinates, zoom: boolean, index: number,popup:string) {

    let marker = L.marker(coordinates, { icon: this.smallRedIcon }).bindPopup(popup)
    .openPopup();
    console.log("this our L.marker",L.marker);
    
    if (index !== -1)
      marker.addEventListener("click", () => {
      
        MapNewService.clickOnAdministration(index, marker);
        MapAgreeService.clickOnPoints(index, marker)
      })
    this.markers.addLayer(marker);
    this.markers.addTo(this.map);
    
    
    if (zoom)
      this.map.setView(coordinates, 15);
  }
  addMarkerPointreleve(coordinates, zoom: boolean, index: number,popup:string) {

    let marker = L.marker(coordinates, { icon: this.smallGreenIcon }).bindPopup(popup)
    .openPopup();
    console.log("this our L.marker",L.marker);
    
    if (index !== -1)
      marker.addEventListener("click", () => {
      
        MapNewService.clickOnAdministration(index, marker);
        MapAgreeService.clickOnPoints(index, marker)
      })
    this.markers.addLayer(marker);
    this.markers.addTo(this.map);
    
    
    if (zoom)
      this.map.setView(coordinates, 15);
  }


  removeAllMarker() {
    this.markers.clearLayers();
  }
  resize() {
    this.map.invalidateSize()
  }
  focusOnMarker() {

  }

}
