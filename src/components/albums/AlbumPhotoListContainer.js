import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../redux/actions/photoActions";
import Spinner from "../common/Spinner";
import { FixedSizeGrid as Grid } from 'react-window';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

export class AlbumPhotoListContainer extends Component {

  perRowCount=8;
  state = {    
    isOpen: false,
    photo: null
  };

  componentDidMount() {    
      console.log(this.props.match.id);
      this.props.getPhotos(1);    
  }

  onPhotoClick = (e, photo) => {
    e.preventDefault();
    this.setState({isOpen: true, photo});
  }

  render() {

    const Cell = ({ columnIndex, rowIndex, isScrolling, style}) => {  
      const index = rowIndex * this.perRowCount + columnIndex;
         
      const photo = this.props.photos[index];
      return isScrolling ? 'Scrolling' :
       (photo ? 
        <div style={style}>
          <a href={photo.url} onClick={(e)=>this.onPhotoClick(e, photo)}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </a>
        </div>
        :
        null
      )
    };


    return (
      
      this.props.loading ? 
      <Spinner /> 
      :
      <div style={{margin:'20px'}}>    
      <Grid
        className="albums"
        columnCount={this.perRowCount}
        rowCount={Math.ceil(this.props.photos.length/this.perRowCount)}
        columnWidth={200} 
        rowHeight={200}           
        width={1600}
        height={1000} 
        useIsScrolling           
      >
        {Cell}
      </Grid>

      {
        this.state.isOpen ?
          <Lightbox
            mainSrc={this.state.photo.url}          
            onCloseRequest={() => this.setState({ isOpen: false })}          
          />
          :
          null        
      }
      </div>
          
      
    )
  }
}

function mapStateToProps(state) {  
  return {    
    photos: state.photos,
    loading: state.apiCallsInProgress ? true: false
  };
}

export default connect(mapStateToProps, { getPhotos })(AlbumPhotoListContainer);