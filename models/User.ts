import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const userSchema = new Schema({
    dataUser:{
        name: String,
        lname: String
    }
});

const User = mongoose.model('user',userSchema);

export { User }

    
/*import { UserI } from "../interfaces/UserI";

const UserDB= require("../../db/user.json");
const fs = require('fs');

export class User{
    private _name:string;
    private _lname:string;
    
    constructor(name:string, lname:string){
        this._lname=lname;
        this._name=name;

    }
    get name():string{
        return this._name;
    }
    set name(value:string){
        this._name=value;
    }

    get lname():string{
        return this._lname;
    }
    set lname(value:string){
         this._lname=value;
    }

    save(){
        const flatData: UserI = {
            name: this.name,
            lname: this.lname
        };
        const newData =[... UserDB,flatData];
        fs.writeFile('./db/user.json',JSON.stringify(flatData),function(err:any){
            if(err) throw err;
        });
    }
}*/