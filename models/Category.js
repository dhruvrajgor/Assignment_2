module.exports = (sequelize, DataTypes) => {
  
  const category = sequelize.define('category' , {
      
        name: {
          type: DataTypes.STRING,
        },
        
        
    },
    {
      tableName : 'category',
      timestamps: false

    });

  return category;
  
}