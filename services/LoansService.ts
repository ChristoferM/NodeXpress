import { Loan } from "../models/Loan"

const LoansService={

    //servicio
    getAll: async()=>{
        return await Loan.find({});
    }

}

export default LoansService;