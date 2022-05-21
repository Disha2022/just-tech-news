const User = require('./User');
const Post = require("./Post");
//=======================
//Association between model and post
User.hasMany(Post,{
    foreignKey:'user_id'
});
//reverse association
Post.belongsTo(User,{
    foreignKey:'user_id'
})

module.exports = { User, Post };