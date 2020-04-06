import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() { }


  
  private _id : string;
  public get id() : string {
    return this._id;
  }
  public set id(v : string) {
    this._id = v;
  }
  

  
  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }


  
  private _mail : string;
  public get mail() : string {
    return this._mail;
  }
  public set mail(v : string) {
    this._mail = v;
  }
  


}
