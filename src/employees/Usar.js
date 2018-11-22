import React from 'react';

const User= (props) => (
 <div>
{/*stateless component to call each value of array so we can deleted */}
 <span>{props.obj}</span>
 
 <span>{props.obj}</span>
 <button onClick={props.delEvent}>Delete</button>
 </div>
)

export default User;