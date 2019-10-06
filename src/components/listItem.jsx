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
import Axios from 'axios'
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
        releaseDate: null, 
        voteAverage: null, 
        popularity: null, 
        voteCount: null,
        info: false
      }
      this.handleSelected = this.handleSelected.bind(this)
      this.findMovie = this.findMovie.bind(this)
    }
    handleSelected(id){
      this.props.toggleWatched(id)
      this.setState({selected: !this.state.selected})
    }
    findMovie(movie){
      Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6a4cdf5cf8660cfa5ffb53f7b8741cb3&language=en-US&page=1&include_adult=false&query=${movie}`)
      .then((data) => {
        if(data.data.results[0]){
          this.setState({info: true})
          const {year, release_date, vote_average, popularity, vote_count} = data.data.results[0]; 
          this.setState({releaseDate: release_date, voteAverage: vote_average, popularity: popularity, voteCount: vote_count})
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
    render(){
      const {selected, info, releaseDate, voteAverage, popularity, voteCount} = this.state
      const {classes, movie, deleteMovie, id} = this.props;
      var infoDetails;
      if(info){
        infoDetails =
        <ul>
          <li>Release Date: {releaseDate}</li>
          <li>Vote Average: {voteAverage}</li>
          <li>Popularity: {popularity}</li>
          <li>Vote Count: {voteCount}</li>
        </ul>
      } else{
        infoDetails = 
        <div> 
          No details
        </div>
      }
      return(
        <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => {this.findMovie(movie)}}
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
               {infoDetails}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
      )
    }
  }
  
  
  export default withStyles(styles)(ExpansionPanelOne);  