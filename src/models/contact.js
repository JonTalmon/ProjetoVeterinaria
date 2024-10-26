import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import PersonRegister from "./personRegister";

const Contact = new sequelize.define("Contact", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    personRegisterid: {
        type: DataTypes.INTEGER,
        references: {
            model: PersonRegister,
            key: "id",
        },
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    tableName: "contact",
    timestamps: false,
});

export default Contact