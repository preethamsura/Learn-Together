import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Skill = Schema({
    name : {type: String, required: true},
    num_completed: {type: Number, required: true, default: 0}, 
    description: {type: String, required: true, default: ''},
    image: { type:String},
    date: {type: Date}
}, {
    timestamps: true
})

const Skill = mongoose.model('Skill', Skill)

const custom = {};
const SkillGraphQl = composeWithMongoose(Skill, custom);

schemaComposer.Query.addFields({
    userById: SkillGraphQl.getResolver('findById'),
    userByIds: SkillGraphQl.getResolver('findByIds'),
    userOne: SkillGraphQl.getResolver('findOne'),
    userMany: SkillGraphQl.getResolver('findMany'),
    userCount: SkillGraphQl.getResolver('count'),
    userConnection: SkillGraphQl.getResolver('connection'),
    userPagination: SkillGraphQl.getResolver('pagination'),
  });
  
  schemaComposer.Mutation.addFields({
    userCreateOne: SkillGraphQl.getResolver('createOne'),
    userCreateMany: SkillGraphQl.getResolver('createMany'),
    userUpdateById: SkillGraphQl.getResolver('updateById'),
    userUpdateOne: SkillGraphQl.getResolver('updateOne'),
    userUpdateMany: SkillGraphQl.getResolver('updateMany'),
    userRemoveById: SkillGraphQl.getResolver('removeById'),
    userRemoveOne: SkillGraphQl.getResolver('removeOne'),
    userRemoveMany: SkillGraphQl.getResolver('removeMany'),
  });

const graphqlSkillSchema = schemaComposer.buildSchema();
module.exports = graphqlSkillSchema;