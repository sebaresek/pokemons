const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('TypesOfPokemon', {
        id: {                           //pk
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        name: {                           //nombre
        type: DataTypes.STRING,
        allowNull: false,
        }  
    }, { timestamps : false });
};
  
