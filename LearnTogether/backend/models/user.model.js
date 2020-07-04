import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type:String,required:false, default:''},
    password: {type:String,required:false, default:''},
    email:{type: String, required:true},
    name: {type:String,required:true},
    date: {type: Date, required:true},
    skills_completed: [],
    skills_interested: [],
    friends: [],
    pfp: {type: String},
},{
    timestamps: true
})
const User = mongoose.model('User', UserSchema);

const custom = {};
const UserGraphQl = composeWithMongoose(User, custom);

schemaComposer.Query.addFields({
    userById: UserGraphQl.getResolver('findById'),
    userByIds: UserGraphQl.getResolver('findByIds'),
    userOne: UserGraphQl.getResolver('findOne'),
    userMany: UserGraphQl.getResolver('findMany'),
    userCount: UserGraphQl.getResolver('count'),
    userConnection: UserGraphQl.getResolver('connection'),
    userPagination: UserGraphQl.getResolver('pagination'),
  });
  
schemaComposer.Mutation.addFields({
    userCreateOne: UserGraphQl.getResolver('createOne'),
    userCreateMany: UserGraphQl.getResolver('createMany'),
    userUpdateById: UserGraphQl.getResolver('updateById'),
    userUpdateOne: UserGraphQl.getResolver('updateOne'),
    userUpdateMany: UserGraphQl.getResolver('updateMany'),
    userRemoveById: UserGraphQl.getResolver('removeById'),
    userRemoveOne: UserGraphQl.getResolver('removeOne'),
    userRemoveMany: UserGraphQl.getResolver('removeMany'),
  });

const graphqlUserSchema = schemaComposer.buildSchema();
module.exports = graphqlUserSchema;