module.exports = (sequelize, DataTypes) => {
  
  const user = sequelize.define('user' , {
      
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        
    },
    {
      tableName : 'users',

    });

  return user;
  
}