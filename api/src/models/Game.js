const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "game",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },

      state: {
        type: DataTypes.JSON(DataTypes.ENUM("CREATED", "WON", "LOST")),
        allowNull: false,
      },

      cells: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
