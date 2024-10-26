import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import PersonRegister from "./personRegister";

const Address = new sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    addressStreet: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    addressNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    personRegisterid: {
        type:DataTypes.INTEGER,
        references: {
            model: PersonRegister,
            key: "id"
        },
        allowNull: false,
    }
}, {
    tableName: "address",
    timestamps: false,
});

export default Address