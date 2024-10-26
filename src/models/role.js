import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import PersonRegister from "./personRegister";

const Role = new sequelize.define("Role", {
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
    roleType: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [["Tutor", "Vet", "Nurse"]]
        },
    },
    crmv: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
}, {
    tableName: "role",
    timestamps: false,
});

export default Role