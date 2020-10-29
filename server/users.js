const users = [] // This array will contain all the details of users

const addUser = ({ id, name, room })=> {
// removing white spaces and convert to lowercase - name and room
 name = name.trim().toLowerCase();
 room = room.trim().toLowerCase();

// check for existing User
 const existingUser = users.find( user => user.room === room && user.name === name );

 if(existingUser){
 // means user is already there
  return { error: 'User already exixt' };
 } 
 const user = { id, name, room };
 users.push(user);
 return { user };
}

module.exports = { addUser };