import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        clicked: false
      }
    }
    render(){
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