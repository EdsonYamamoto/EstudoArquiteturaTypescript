/*
import { ExpressOIDC } from "@okta/oidc-middleware";
import session from "express-session";

export const register = ( app: any ) => {
    // Create the OIDC client
    const oidc = new ExpressOIDC( {
        client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        issuer: `${ process.env.OKTA_ORG_URL }/oauth2/default`,
        redirect_uri: `${ process.env.HOST_URL }/authorization-code/callback`,
        scope: "openid profile"
    } );

    // Configure Express to use authentication sessions
    app.use( session( {
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    } ) );

    // Configure Express to use the OIDC client router
    app.use( oidc.router );

    // add the OIDC client to the app.locals
    app.locals.oidc = oidc;
};
*/


// require("dotenv-safe").config();

import jwt from "jsonwebtoken";
import session from "express-session";

export const register = ( app: any ) => {
    // Create the OIDC client
    const oidc = {}

    // Configure Express to use authentication sessions
    app.use( session( {
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    } ) );

    // Configure Express to use the OIDC client router
    // app.use( oidc.router );

    // add the OIDC client to the app.locals
    app.locals.oidc = oidc;
};

/*
function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}
*/