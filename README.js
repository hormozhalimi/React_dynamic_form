# React_dynamic_form
creating dynmic form in REACT that could add and remove fields in order to send/store informtion. 



import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';




const useStyles =  makeStyles((theme) =>({
  root: {
    '& .MuiTextField-root' : {
      margin: theme.spacing(1),

    }

  },
  button:{
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles();
  const [inputfields, setInputFields]=useState([
    {firstName: '', lastName: ''},
    {firstName: '', lastName: ''},

  ]);

  const handleSubmit=(e) => {
    e.preventDefault();
    console.log("InputFields", inputfields);

  };

  const handleChangeInput = (index,event)=> {
    const values = [... inputfields];
    values[index][event.target.name]=event.target.value;
    setInputFields(values);
  }

  const handleAddFields=()=>{
    setInputFields([...inputfields, {firstName: '' , lastName: ''}])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputfields];
    values.splice(index,1);
    setInputFields(values);
  }
  return (
    <Container>

      <h1> Add New Member </h1>
      <form className={classes.root} onSubmit ={handleSubmit}>
        {inputfields.map((inputField, index)=>( 
          <div key={index}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
              onChange ={event => handleChangeInput(index, event)}
              />

            <TextField
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange ={event => handleChangeInput(index, event)}
              />
              <IconButton 
                onClick={()=> handleAddFields()}
              >
                <AddIcon/>
              </IconButton>

              <IconButton 
                onClick={()=> handleRemoveFields(index)}
              >
                <RemoveIcon/>
              </IconButton>


          </div>
        ))}

        <button 
        className={classes.button}
        variant='contained' 
        color="primary" type="submit" 
        endicon={<Icon>Send</Icon>}
        onClick={handleSubmit}
        >Send</button>

      </form>

    </Container>
  );
}

export default App;
