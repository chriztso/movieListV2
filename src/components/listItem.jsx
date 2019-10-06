import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
const styles = theme => ({
root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
    margin: theme.spacing(1),
  },
})

class ExpansionPanelOne extends React.Component{
    constructor(props){
      super(props); 
      this.state = {
        selected: false, 
      }
      this.handleSelected = this.handleSelected.bind(this)
    }
    handleSelected(id){
      this.props.toggleWatched(id)
      this.setState({selected: !this.state.selected})
    }
    render(){
      const {selected} = this.state
      const {classes, movie, deleteMovie, id} = this.props;
      return(
        <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{movie}</Typography>
            <Button variant="contained" color="primary" className={classes.button} onClick = {()=> {deleteMovie(id)}}>
              Delete
            </Button>
            <ToggleButton
              value="check"
              selected={selected}
              onClick = {() => {this.handleSelected(id)}}
            >
      <CheckIcon />
    </ToggleButton>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
      )
    }
  }
  
  
  export default withStyles(styles)(ExpansionPanelOne);  