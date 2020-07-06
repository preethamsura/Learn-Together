const User = require('./backend/models/user.model')
const Skill = require('./backend/models/skill.model')

const resolvers = {
    Query: {
        
        user: async (_,{id}) => {
            return User.findById(id)
        },
        users: ()=> User.find()
    },
    Mutation: {
        createUser: async (_, {email, name, pfp, friends, skills_completed, skills_interested}) => {
           const newUser = new User({
                name, email, skills_completed, skills_interested, friends,  pfp,  
           });
           await newUser.save();
           console.log("User added using graphQL!")
           return newUser;
        }
    }
}
module.exports = resolvers