export function Form(props){

    const {onNameChange, onEmailChange, onRoleChange, onFormSubmit}= props;
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
  
        <button
          disabled={false}
          onClick={onFormSubmit}
        >
          submit
        </button>
      </form>
  
    )
  
  
  
  }