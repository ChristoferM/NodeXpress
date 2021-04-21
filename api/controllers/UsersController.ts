import { Request, Response } from "express";
import UserService from "../../services/UsersService";
import { checkKeys } from "../../shared/validators";

const fs = require('fs')

const UsersController = {

    getAll:  async (req: Request, res: Response) => {
        try {
            const UserS= await UserService.getAll();
            res.status(200).send(UserS);
        } catch (error) {
            console.log(error.stacl && error.stack || error);
            res.status(500).send({
                error: true,
                msg: error
            })
        }
      
        
    },

    saludar: (req: Request, res: Response) => {
        res.send(`Hola ${req.params.name}`);
    },

    /*create: (req: Request, res: Response) => {
        try {
            checkKeys(["name", "lname"], req.body);
            const user: User = new User(req.body.name, req.body.lname);
            user.save();
            res.send(user).status(201);
        } catch (error) {
            res.send({error: true, msj: error.stack && error.stack || error }).status(500);
        }
        
    }*/
}

export default UsersController;


/*import { Request, Response } from "express";
import { UserI } from "../../interfaces/UserI";
import { User } from "../../models/User";
import { chechkKeys } from "../../shared/validators";
const userDB = require("../../DB/user.json");
// OBEJETO QUE CARGARA LA CONFIGURACION
const UserController = {
    index: (req: Request, res: Response) => {
        res.send(`Hola ${req.params.name}`);

    },
    saludar: (req: Request, res: Response) => {
        res.send(`Hola ${req.params.name}`);

    },
    create: (req: Request, res: Response) => {
        //res.send(`Hola ${req.params.name}`);
        //const user: UserI = { name: "Nombre", lname:: "lanme"};

        try {
            chechkKeys(['name', 'laname'], req.body);
            const user: User = new User(req.body.name, req.body.lname);
            console.log('');
            const data = <UserI>req.body;
            //const user = { name: data.name, lanme: data.lname }
            //const user: UserI = data;
            userDB.push(user);
            res.send(user).status(201);

        } catch (error) {
            res.send({
                erro: true,
                msj: error.stack && error.stack || error
            }).status(500);

        }


    }

}
export default UserController;*/