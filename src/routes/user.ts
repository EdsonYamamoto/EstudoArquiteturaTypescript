import { Router } from 'express';
import {UserService} from './../service/userService';
const usersRouter = Router();
const userService = new UserService();

usersRouter.get( "", ( req: any, res ) => {
    userService.foo();
    res.render( "index" );
    // const user = req.userContext ? req.userContext.userinfo : null;
    // res.render( "index", { isAuthenticated: req.isAuthenticated(), user } );
} );

// define a route handler for the default home page
usersRouter.get( "form", ( req: any, res ) => {
    res.render( "form" );
    // const user = req.userContext ? req.userContext.userinfo : null;
    // res.render( "index", { isAuthenticated: req.isAuthenticated(), user } );
} );

// define a secure route handler for the login page that redirects to /guitars
usersRouter.get( "login",
    // oidc.ensureAuthenticated(),
    // verifyJWT,
    ( req, res ) => {
        res.redirect( "guitars" );
    } );

// define a route to handle logout
usersRouter.get( "logout", ( req: any, res ) => {
    req.logout();
    res.redirect( "" );
} );

// define a secure route handler for the guitars page
usersRouter.get( "guitars",
    // oidc.ensureAuthenticated(),
    // verifyJWT,
    ( req: any, res ) => {
        res.render( "guitars" );
    } );
export default usersRouter;