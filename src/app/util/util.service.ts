import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  obj: Object;
  setObj(obj: Object) {
    this.obj = obj;
  }
  getObject(): Object {
    return this.obj;
  }
}
