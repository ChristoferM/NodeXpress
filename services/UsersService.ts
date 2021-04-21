import { User } from "../models/User"

const UserService={

    //servicio
    getAll: async()=>{
        return await User.find({});
    }

}

export default UserService;