// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const StepsTimelines = sequelize.define('stepsTimelines', {
    visible: {
      type: DataTypes.INTEGER,
    },
    edu: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'steps_timelines',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  StepsTimelines.associate = (models) => {
    StepsTimelines.belongsTo(models.gisus, {
      foreignKey: {
        name: 'gisusIdKey',
        field: 'gisus_id',
      },
      as: 'gisus',
    });
  };

  return StepsTimelines;
};
