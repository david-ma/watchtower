'use strict';
module.exports = (sequelize, DataTypes) => {
  const Crew = sequelize.define('Crew', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    phone: DataTypes.STRING,
    skills: DataTypes.STRING,
    allowedHours: DataTypes.NUMBER,
    photo: DataTypes.STRING
  }, {});
  Crew.associate = function(models) {
    // associations can be defined here
  };
  return Crew;
};