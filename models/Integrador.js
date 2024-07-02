module.exports = (sequelize, DataTypes) => {
  const integrador = sequelize.define(
    'Integrador',
    {
      integradoresID: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      idDatabase: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'DATABASES',
          key: 'databaseId',
        },
      },
      integracaoID: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      dadosIntegracao: {
        type: DataTypes.JSON,
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
      tableName: 'INTEGRADORES',
    },
  );

  return integrador;
};
