import { Router } from 'express';
import {UserService} from './../service/userService';
import {Factory} from "../service/factory";
import {ConcreteFactory1} from "../service/abstractFactory/ConcreteFactory1";
import {ConcreteFactory2} from "../service/abstractFactory/ConcreteFactory2";

const apiRouter = Router();

apiRouter.get( "", ( req: any, res ) => {
    const teste = new Factory();
    /**
     * The client code can work with any concrete factory class.
     */
    // tslint:disable-next-line:no-console
    console.log('Client: Testing client code with the first factory type...');
    teste.clientCode(new ConcreteFactory1());

    // tslint:disable-next-line:no-console
    console.log('');

    // tslint:disable-next-line:no-console
    console.log('Client: Testing the same client code with the second factory type...');
    teste.clientCode(new ConcreteFactory2());
    // tslint:disable-next-line:no-console
    console.log(teste);
    res.json({"batata":"teste"} );
    // const user = req.userContext ? req.userContext.userinfo : null;
    // res.render( "index", { isAuthenticated: req.isAuthenticated(), user } );
} );

export default apiRouter;