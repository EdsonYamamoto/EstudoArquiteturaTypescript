
export class Factory{
    /**
     * The client code works with factories and products only through abstract
     * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
     * product subclass to the client code without breaking it.
     */
    clientCode(factory: AbstractFactory) {
        const productA = factory.createProductA();
        const productB = factory.createProductB();

        // tslint:disable-next-line:no-console
        console.log(productB.usefulFunctionB());
        // tslint:disable-next-line:no-console
        console.log(productB.anotherUsefulFunctionB(productA));
    }

}
