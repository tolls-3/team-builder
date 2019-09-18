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
    setTeamForm({...teamList, name: event.target.value})
  };

  const onEmailChange = event => {
    setTeamForm({...teamList, email: event.target.value})
  };

  const onRoleChange = event => {
    setTeamForm({...teamList, role: event.target.value})
  };



  return (
    <div className="App">
      <Form
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onRoleChange={onRoleChange}

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

  const {onNameChange, onEmailChange, onRoleChange}= props;
  const{name,email,role} = props.teamForm

  return(
    <form>
      <label htmlFor='nameInput'>Name</label>
      <input
      value={name}
      onChange={onNameChange}
      id='nameInput'
      type='text'
      
      />

      <label></label>
      <input
      value={email}
      onChange={onEmailChange}
      id='emailInput'
      type='text'
      
      />

      <label></label>
      <input
      value={role}
      onChange={onRoleChange}
      id='roleInput'
      type='text'
      
      />

      <button>
        submit
      </button>
    </form>

  )



}


