'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      Id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Cep: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Numero: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      Complemento: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Bairro: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Cidade: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Estado: {
          type: Sequelize.STRING,
          allowNull: false
      },
      MunicipioIBGE: {
          type: Sequelize.STRING,
          allowNull: false
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};
