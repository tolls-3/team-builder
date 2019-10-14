import React, {useState} from 'react';
import uuid from 'uuid';
import './App.css';

const initialTeamList = [
  // why is it useful to have a unique id?
  { id: uuid(), name: 'olu', email: 'olu@email.com', role: 'UI Dev'},
  { id: uuid(), name: 'tomiwa', email: 'tomiwa@email.com', role: 'Javascript Dev'},
  { id: uuid(), name: 'andrew', email: 'andrew@email.com', role: 'Python Dev'},
];

const initialTeamForm = {
  name: '',
  email: '',
  role:'',
};


export default function App() {

  const [teamList,setTeamList]= useState(initialTeamList);
  const [teamForm,setTeamForm]=useState(initialTeamForm);

  const onNameChange = event => {
    // setTeamForm({...teamList, name: event.target.value})
    setTeamForm({
      name: event.target.value,
      email:teamForm.email,
      role:teamForm.role,
    })
  };

  const onEmailChange = event => {
    // setTeamForm({...teamList, email: event.target.value})
    setTeamForm({
      name: teamForm.name,
      email: event.target.value,
      role:teamForm.role,
    })
  };

  const onRoleChange = event => {
    // setTeamForm({...teamList, role: event.target.value})
    setTeamForm({
      name: teamForm.name,
      email: teamForm.role,
      role:event.target.value,
    })
  };


  const onFormSubmit = e =>{
   e.preventDefault();
   const newMember ={
     id: uuid(),
     name:teamForm.name,
     email:teamForm.email,
     role:teamForm.role,
   };
   const newTeamList = teamList.concat(newMember);
   setTeamList(newTeamList);
   setTeamForm(initialTeamForm);
  };

  return (
    <div className="App">
      <Form
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onRoleChange={onRoleChange}
      onFormSubmit={onFormSubmit}

      teamForm={teamForm}
  
      />


    {
      teamList.map(ind =>(
        <h5 key={ind.id}>
          {ind.name} is a {ind.role} and can be reached on {ind.email}.
        </h5>
      ))
    }
    </div>
  );
}

function Form(props){

  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit }= props;
  const{ name, email, role} = props.teamForm;

  const isDisabled = () => {
    if (!name || !email || !role) {
      return true;
    }
    return false;
  };

  return(
    <div>
      <form>
        <div>
          <label htmlFor='nameInput'>Name</label>
          <input
            value={name}
            onChange={onNameChange}
            id='nameInput'
            type='text'
          
          />
        </div>
        
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input
            value={email}
            onChange={onEmailChange}
            id='emailInput'
            type='text'
          
          />
        </div>
        
        <div>
          <label htmlFor='roleInput'>Role</label>
          <input
            value={role}
            onChange={onRoleChange}
            id='roleInput'
            type='text'
          
          />
        </div>
        
        <button
          disabled={isDisabled()}
          onClick={onFormSubmit}
        >
          submit
        </button>
      </form>
    </div>
    

  )
}


