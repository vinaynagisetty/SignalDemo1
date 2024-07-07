import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalDataService {

  constructor() { }
  private dataSignal = signal([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Michael Johnson', age: 35 }
  ]);

  getData() {
    return this.dataSignal;
  }
}
