const { Sequelize, DataTypes } = require('sequelize');
const { type } = require('os');
const { isNumberObject } = require('util/types');
const sequelize = new Sequelize('sqlite::memory:');

const Endereco = sequelize.define(
    'Endereco',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        municipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos',
        timestamps: true
    });