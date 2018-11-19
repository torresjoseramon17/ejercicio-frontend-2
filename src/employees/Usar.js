import React from 'react';

const User= (props) => (
 <div>
 <span>{props.employees}</span>
 
 <span>{props.obj}</span>
 <button onClick={props.delEvent}>Delete</button>
 </div>
)

export default User;