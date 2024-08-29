'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.belongsToMany(models.Servicio, { through: 'ServicioCliente', foreignKey: 'clienteId', as: 'servicios' });
    }
  }
  servicio.init({
    codigo: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};