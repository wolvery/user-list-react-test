import React from 'react';
import User from './User.js';

let UsersList = ({users}) =>{
    return <ol>{users.map(user => <User user={user}/>)}</ol>;
 }
export default UsersList ;