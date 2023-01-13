import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','DTIhxh19463',{
    host: "103.167.132.107",
    dialect: "mysql"
});

export default db;