/*
Enreutador de express
*/
import {Router} from "express";
import usersRouter from "./Users.route";
import loansRouter from "./Loans.route";
 const routes =Router();

 routes.use("/users", usersRouter);
 routes.use("/loans", loansRouter);

 export default routes;