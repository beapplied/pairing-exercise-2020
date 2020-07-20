'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmailTemplate = sequelize.define('EmailTemplate', {
    orgId: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    text: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  EmailTemplate.associate = function(models) {
    // associations can be defined here
  };
  return EmailTemplate;
};
