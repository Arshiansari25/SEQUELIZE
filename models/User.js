module.exports=(sequelize,DataTypes)=>{
    const User= sequelize.define("User",{
       firstName:{
        type:DataTypes.STRING,
        allowNull:false,
        validation:{
            notEmpty:true,
        },
       },
           
       age:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validation:{
            notEmpty:true,
        },
       },

    });
    return User;
};