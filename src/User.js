import React from 'react';
import ToggleGames from './ToggleGames.js';

let User = ({user}) => (
    <li key={user.userName}>
      <h2>{user.userName}</h2>
	  <ToggleGames user={user} />
     </li>    
   );

export default User;