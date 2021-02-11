import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";
// import * as sessionAuth from "./middleware/sessionAuth";
import session from "express-session";
import bcrypt from "bcrypt";
import morgan from "morgan";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure session auth
// sessionAuth.register( app );

const sess = {
    key: 'user_sid',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {}
  }
app.use(session(sess))

app.use(morgan('dev'));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.

/*
app.use((req, res, next) => {
    if (req.cookies.user_sid
        // && !req.session.user
        ) {
        res.clearCookie('user_sid');
    }
    next();
});

// middleware function to check for logged-in users
app.use((req, res, next) => {
    if (req.cookies.user_sid
        // && req.session.user
        ) {
        res.redirect('/dashboard');
    } else {
        next();
    }
});
*/

// Configure routes
routes.register( app );


// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
