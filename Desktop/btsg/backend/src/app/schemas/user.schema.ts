import gql from 'graphql-tag';

export const UsertTypeDef = gql`
type User {
_id: Id!
email:String!
firstName: String!
sportType: String!
profile: String
lastName: String!
school: String
workPlace: String

}
type Mutation {
createUser(email:String!, firstName:String, lastName:String!, sportType:String! , profile:String,school:String, workPlace:String ) : User
updateUser(email:String!, userName:String!, profile:String, sportType: String!): User
}

type Query {
findUserByEmail(email:String!): User
getAllUsers: [User!]

}`
;



