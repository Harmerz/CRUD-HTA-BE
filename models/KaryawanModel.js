import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Karyawan = db.define('karyawan',{
    nama:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    tags:{
        type: DataTypes.TEXT
    },
    alamat:{
        type: DataTypes.STRING
    },
    no_telp:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});



export default Karyawan;