import React from 'react';
//import { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong} from '../actions';

class SongList extends React.Component {


    mySelectSong = (song) => {
        this.props.selectSong(song);
    }

    renderList() {
        return this.props.songList.map ( (song) => 
        {
            return (
                <div className="item" key={song.title}>
                    
                    <div className="right floated content">
                        <button 
                            onClick={  () => this.props.selectSong(song)}
                            className="ui button primary">
                        select
                        </button>
                        <button 
                            onClick={ () =>  this.mySelectSong(song) }
                            className="ui button primary">
                        select2
                        </button>
                    </div>

                    <div className="content">{song.title}</div>

                </div>
            );    
        } );   
    }

    render() {
      //  console.log(' songlist props : ', this.props);
        //return <div>SongList</div>;

       // console.log('in render this props : ', this.props);
        return <div className="ui divided list">{  this.renderList() }</div>;
    };
}

//run whenever any item in state or reducers changed!
const mapStateToProps = (state) => {

    //console.log('state : ' , state);

    //return state;

    return { songList : state.songList };
}

//export default SongList;

export default connect(mapStateToProps, { selectSong} )(SongList);