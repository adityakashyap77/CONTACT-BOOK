import React from 'react'
import { useSelector } from 'react-redux'
import { Contacts } from './Contacts';

export const Contact = () => {
    const contacts = useSelector((state)=>state.contacts)
    console.log(contacts);
  return (
    <div>
    <table class="table shadow">
  <thead>
    <tr>
      <th scope="col"><div className='custom-control custom-checkbox'>
      <input type="checkbox" className='custom-control-input'></input>
      <label className='custom-control-label'></label>        
      </div></th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=>{
        return (<Contacts contact={contact} key={contact.id}/>)
    })}
  </tbody>
</table>

    </div>
  )
}
