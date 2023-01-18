module.exports = (sequelize, DataTypes) => {
  
  const blog = sequelize.define('blog' , {
      
        title: {
          type: DataTypes.STRING,
        },
        slug: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        catId: {
          type: DataTypes.INTEGER,
        },
        publish_date: {
          type: DataTypes.DATE,
        },
        img_url: {
          type: DataTypes.STRING,
        },
        
    },
    {
      tableName : 'blog',
      timestamps: false

    });

  return blog;
  
}