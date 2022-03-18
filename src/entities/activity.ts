import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { sequelizeConnection } from '../../db/config';
import { Requisite } from './requisite';

export interface ActivityAttributes {
    id: number;
    activity_title: string;
    suggested_location: string;
    suggested_weather_conditions: string;
    unsuggested_weather_conditions: Array<string>;
    requisites_id: number;
}

export interface ActivityInput extends Optional<ActivityAttributes, 'suggested_location' | 'id'> {}
export interface ActivityOuput extends Required<ActivityAttributes> {}

class Activity extends Model<ActivityAttributes, ActivityInput> implements ActivityAttributes {
    public id: number;
    public activity_title: string;
    public suggested_location: string;
    public suggested_weather_conditions: string;
    public unsuggested_weather_conditions: string[];
    public requisites_id: number;
}

Activity.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        activity_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        suggested_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        suggested_weather_conditions: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unsuggested_weather_conditions: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        requisites_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'requisites',
                key: 'id'
            }
        },
    }, {
    sequelize: sequelizeConnection,
    paranoid: true,
    timestamps: false,
    modelName: 'activities'
});

Activity.hasOne(Requisite, {
    foreignKey: 'requisites_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Requisite.belongsTo(Activity);
  
export default Activity