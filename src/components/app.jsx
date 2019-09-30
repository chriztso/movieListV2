import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExpansionPanelOne from './listItem.jsx'
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
});

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }


class App extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            watched: false, 
            toWatch: true
        }
        this.switchToWatched = this.switchToWatched.bind(this)
        this.switchToNotWatched = this.switchToNotWatched.bind(this)
    }
    switchToWatched(){
        this.setState({watched: true, toWatch: false})
    }
    switchToNotWatched(){
        this.setState({watched: false, toWatch: true})
    }
    render(){
        const {classes} = this.props;
        const {watched} = this.state;
        let list; 
        if(watched){
            list = 
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                  <ListItemText primary="Watched"></ListItemText>
              </ListItem>
            </List>
        } else {
            list = 
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                  <ListItemText primary="Not Watched"></ListItemText>
              </ListItem>
            </List>
        }
        return (
            <div> 
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <HomeIcon />
                  <Typography variant="h6" className={classes.title}>
                    Movie List
                  </Typography>
                  <Avatar className={classes.avatar}>CT</Avatar>
                </Toolbar>
              </AppBar>
              <div style = {{display: 'flex', flexDirection: 'row'}}>
                <TextField
                  id="standard-name"
                  label="Movie"
                  className={classes.textField}
                  margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                  Add TO Watch List
                </Button>
              </div>
              <div style={{position: 'relative', 'top': '20px'}}>
                <ButtonGroup
                  color="primary"
                  fullWidth
                  aria-label="full width primary button group"
                >
                  <Button onClick={this.switchToNotWatched}>To Watch</Button>
                  <Button onClick={this.switchToWatched}>Watched</Button>
                </ButtonGroup>
              </div>
              <div style={{position: 'relative', 'top': '10px'}}>
                <ExpansionPanelOne />
              </div>
            </div>
        )
    }
}

export default withStyles(styles)(App);
