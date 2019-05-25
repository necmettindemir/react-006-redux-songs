import React from 'react';
import {connect} from 'react-redux'

const SongDetail = (props) => {

    //console.log('song detail props : ' , props);
    if (props.mySelectedSong == null)
    {            
            return(
                <div>
                    select a song                    
                </div>
            );
    }
   
    return(
                <div>
                    <h3>song detail</h3>
                    <p>
                        {props.mySelectedSong.title} 
                        <br />
                        {props.mySelectedSong.duration}
                    </p>                    
                </div>
            );
    
    
};


const mapStateToProps = (state) => {

    return { mySelectedSong : state.selectedSong };
}



export default connect(mapStateToProps)(SongDetail);