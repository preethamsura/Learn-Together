const User = require('./backend/models/user.model')
const Skill = require('./backend/models/skill.model')

const resolvers = {
    Query: {
        users: ()=> User.find()
    },
    Mutation: {
        createUser: async (_, {email, name, pfp}) => {
           const newUser = new User({
                name, email, pfp
           });
           await newUser.save();
           console.log("User added using graphQL!")
           return newUser;
        }
    }
}
module.exports = resolvers