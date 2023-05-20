const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('Pokemon', {
    id: {                           //pk
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {                           //nombre
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {                           //imagen
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {                           //vida
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stroke: {                           //ataque
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defending: {                           //defensa
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {                           //velocidad
      type: DataTypes.INTEGER,
    },
    height: {                           //altura
      type: DataTypes.INTEGER,
    },
    weight: {                           //peso
      type: DataTypes.INTEGER,
    }
  }, { timestamps : false });
};
