import {UserService} from "../service/userService";
// tslint:disable-next-line:no-var-requires
// const indexRouter = require('./home');
import homeRouter from "./home"
import usersRouter from "./user"
import apiRouter from "./api"

import { Router } from 'express';
export const register = ( app: Router ) => {
     app.use("/",homeRouter)
     app.use("/user/",usersRouter)
     app.use("/api/v1/",apiRouter)
};
