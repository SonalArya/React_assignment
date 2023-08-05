
import React, {useState} from "react";

const BloodGroupDropDown=()=>
{

    const bloodGroups=[ 'select a blood group', 'A+', 'A-','B+', 'B-', 'O+','O-'];
    const [selectedBloodGroup,setSelectedBloodGroup] =useState('')


const handleBloodGroupChnge =(event) =>{
    setSelectedBloodGroup(event.target.value)
}

return (
<div>
<label>Select your BloodGroup</label>
<select id="bloodgroup" value={selectedBloodGroup} onChange={handleBloodGroupChnge} >
    {bloodGroups.map((group)=>(
        <option key={group} value={group}>{group}</option>
    ))}
</select>
{selectedBloodGroup && <p>your blood group is:{selectedBloodGroup}</p>}
</div>

)
}
export default BloodGroupDropDown;
