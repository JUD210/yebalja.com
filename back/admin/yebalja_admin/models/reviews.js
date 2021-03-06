// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Reviews = sequelize.define('reviews', {
    title: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    postDate: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'reviews',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.programs, {
      foreignKey: {
        name: 'programsIdKey',
        field: 'programs_id',
      },
      as: 'programs',
    });
  };

  return Reviews;
};
