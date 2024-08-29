'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviciocliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Servicio.belongsToMany(models.Cliente, { through: 'ServicioCliente', foreignKey: 'servicioId', as: 'clientes' });
    }
  }
  serviciocliente.init({
    codigocliente: DataTypes.INTEGER,
    codigoservicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviciocliente',
  });
  return serviciocliente;
};