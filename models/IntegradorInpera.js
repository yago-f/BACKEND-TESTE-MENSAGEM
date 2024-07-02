module.exports = (sequelize, DataTypes) => {
  const integradorInpera = sequelize.define(
    'IntegradorInpera',
    {
      ID_INTEGRADORES: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      I_NOMEINTEGRACAO: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'INTEGRADORES_INPERA',
    },
  );

  return integradorInpera;
};
