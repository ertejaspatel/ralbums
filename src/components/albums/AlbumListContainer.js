import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlbums } from "../../redux/actions/albumActions";
import { getUsers } from "../../redux/actions/userActions";
import Spinner from "../common/Spinner";
import Album from "./Album";
import { FixedSizeGrid as Grid } from 'react-window';
import "./Albums.css";


export class AlbumListContainer extends Component {

  perRowCount=5;

  componentDidMount() {    
    this.props.getAlbums();
    this.props.getUsers();    
  }
  

  render() {

    const Cell = ({ columnIndex, rowIndex, isScrolling, style}) => {  
        const index = rowIndex * this.perRowCount + columnIndex;
           
        const album = this.props.albums[index];
        return isScrolling ? <div>Scrolling...</div> 
          : 
          (album ? 
            <div style={style}>
              <Album album={album} user={this.props.users[album.userId]} />
            </div>
            :
            null
          )
    };

    return (
      
        this.props.loading ? 
          <Spinner /> 
          :    
          <Grid
            className="albums"
            columnCount={this.perRowCount}
            rowCount={Math.ceil(this.props.albums.length/this.perRowCount)}
            columnWidth={300} 
            rowHeight={400}           
            width={1600}
            height={1000}
            useIsScrolling            
          >
            {Cell}
          </Grid>        
      
    );
  }
}

function mapStateToProps(state) {  
  return {
    albums: state.albums,
    users: state.users,    
    loading: state.apiCallsInProgress ? true: false
  };
}

export default connect(mapStateToProps, { getAlbums, getUsers })(AlbumListContainer);