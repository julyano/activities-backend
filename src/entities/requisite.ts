import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { sequelizeConnection } from '../../db/config';

interface RequisiteAttributes {
    id: number;
    cost: string;
    participants_number: number;
}

export interface RequisiteInput extends Optional<RequisiteAttributes, 'cost' | 'id'> {}
export interface RequisiteOuput extends Required<RequisiteAttributes> {}

export class Requisite extends Model<RequisiteAttributes, RequisiteInput> implements RequisiteAttributes {
    public id: number;
    public cost: string;
    public participants_number: number;
}

Requisite.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        cost: {
            type: DataTypes.STRING,
            allowNull: true
        },
        participants_number: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    }, {
    sequelize: sequelizeConnection,
    paranoid: true,
    timestamps: false,
    modelName: 'requisites'
});

export default Requisite