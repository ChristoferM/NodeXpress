import { Request, Response } from "express";
import LoansService from "../../services/LoansService";

// import { checkKeys } from "../../shared/Validators";

const LoansController = {
 
    getAll: async (req: Request, res: Response) => {
        try {
            const loans = await LoansService.getAll()
            res.status(200).send(loans);
        } catch (error) {
            console.log(error.stacl && error.stack || error);
            res.status(500).send({
                error: true,
                msg: error
            })
        }
    },

    create: (req: Request, res: Response) => {

    }
}

export default LoansController;
