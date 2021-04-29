// Components from MaterialUi
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

// Import makeStyles to allow us to make our own pre made styles
// Import ThemeProvider to allow us to create a parent component we can pull styles from
// Import createMuiTheme is called on as a function in our theme const
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// Import color so we can use it in our theme
import { orange } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import 'fontsource-oswald';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Two components needed to add grids to MaterialUI 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// useStyles is what we made to create a preset style that we can apply to any component
// Use camelCases and separate properties with commas
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, Blue, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '1% 1%',
    
  }
})
// Separate objects with comas
// Look at documentation to learn how to Nest in themes 
// Can use theme to edit Typography
// Syntax: Strict
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 24,
      marginBottom: 0
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: blue[500]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return(
    <div>
      {/* Used to pass in label prop on checkboxes */}
      <FormControlLabel
      // Checkbox is passed in as props in component above
        control={<Checkbox
          // Checked items usually have some wrapping 
          // If you want to pass additional props you have to use
          inputProps={{
            'aria-label' : 'secondary checkbox'
          }}
          // disabled
          color='primary'
          checked={checked}
          icon={<SaveIcon/>}
          checkedIcon={<DeleteIcon/>}
          //e is the event target
          //onChange changes checkbox from being checked and unchecked using target.checked on event (click event)
          onChange={(e)=>{setChecked(e.target.checked)}}
          />}
          // Allows us to label (add text to) the checkbox
          label="Checkbox Test"
      />
        
    </div>
  )
}


function App() {
  return (
    // Container adds max-width to page and some padding on left and right by default
    < Container maxWidth="xs">
      {/* have to pass in theme as a prop */}
      <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          < AppBar color='primary'>
            <ToolBar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>
            </ToolBar>
          </AppBar>
          {/* Use variant to change preset styles, use component to set what you want the element to be */}
          <Typography variant="h2" component='h1'>
            MUI Cheatsheet v1.0
          </Typography>
          <Typography variant="subtitle 1">
            A basic intro into MaterialUI
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonStyled />

          {/* Grids can be a container or an item */}
          {/* You can pass props in to design and adjust layout */}
          <Grid container spacing={2} justify="center">
            {/* You can create responsive items by assigning values to viewport props */}
            {/* Assign just viewport sizes and it will auto fit items to grid */}
            <Grid item xs={3} sm={6}>
              <Paper style={{height: '75px', width: '100%'}}/>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height: '75px', width: '100%'}}/>
            </Grid>
            <Grid item xs={3} sm={12}>
              <Paper style={{height: '75px', width: '100%'}}/>
            </Grid>
          </Grid>

          <TextField 
            variant="outlined"
            color='secondary'
            type='email'
            label='Email'
            placeholder='12345678@test.com'
          />
          <CheckboxExample />
          {/* Everything passed in here affects all Buttons in Group */}
          <ButtonGroup variant='contained' size='small'>
            <Button
              // Pass Icons in using Material-UI/icons
              startIcon={<SaveIcon />}
              // onClick Functions can be passed in as props
              onClick={()=> {
                console.log("OnClick ran")
              }}
              // Greys component out and stops functionality
              // disabled 
              // Add your own style
              // style={{
              //   fontSize: 24
              // }}
              href='#' 
              color='primary'>
              1st Button
            </Button>
            <Button
              // Pass Icons in using Material-UI/icons
              startIcon={<DeleteIcon />}
              // onClick Functions can be passed in as props
              onClick={()=> {
                console.log("OnClick ran")
              }}
              // Greys component out and stops functionality
              // disabled 
              // Add your own style
              // style={{
              //   fontSize: 24
              // }}
              href='#' 
              color='secondary'>
              2nd Button
            </Button>
            
            
          </ButtonGroup>
        </header>
      </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
