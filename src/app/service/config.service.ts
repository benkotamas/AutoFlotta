import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#', type: "plain"},
      { key: 'name', text: 'Sofőr Neve', type: "text"},
      { key: 'email', text: 'Email', type: "email"},
      { key: 'phone', text: 'Telefonszám', type: "number"},
      { key: 'city', text: 'Város', type: "text"},
      { key: 'address', text: 'Utca', type: "text" }
    ],
    vehicles: [
      { key: "id", text: "#", type: "plain"},
      { key: "lp", text: "Rendszám", type: "text"},
      { key: "year", text: "Évjárat", type: "number"},
      { key: "manufacturer", text: "Típus", type: "text"},
      { key: "consumption", text: "Fogyasztás", type: "text"},
      { key: "engine", text: "Motor", type: "text" }
    ],
    fuelings: [
      { key: "id", text: "#", type: "plain"},
      { key: "vehicleId", text: "Jármű", type: "text"},
      { key: "driverId", text: "Sofőr", type: "text"},
      { key: "amount", text: "Tankolás", type: "text"},
      { key: "date", text: "Dátum", type: "date" }
    ]
  };

  constructor() { }
  }
