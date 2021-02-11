/*
type User = {
    dimension: number;
    innerRadius: number;

}
*/
/*
type User = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}
*/
export class User extends Prototype {
    username: string
    email: string
    password: string
}