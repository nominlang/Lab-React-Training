import React from 'react'
import studentsData from '../data/berlin.json';
import { useState } from 'react';


//const students = ['John', 'Dolores'];

function IdCard() {
  const [students] = useState(studentsData);

return (
<div>
{students.map(student => {
return (
<div key={student._id} className='Student'>
<p>First Name: {student.firstName}</p>
<p>Last Name: {student.lastName}</p>
<p>Gender: {student.gender}</p>
<p>height: {student.height}</p>
<p>birth: {student.birth}</p>
<img src={student.img} alt="Img" />
</div>
 );
})}
</div>
);
}
  
export default IdCard;
