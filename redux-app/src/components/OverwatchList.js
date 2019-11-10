import React,{useEffect} from 'react';

import { connect } from 'react-redux'

import { overwatchData } from '../action'

import {Overwatch} from './Overwatch'

const OverwatchList = props => {

    
    useEffect(()=>{
        props.overwatchData();
    },[])

    if(props.gettiingData){
        return <h1>Getting the heros.....</h1>
    }

    return(
        <div className='card-list'>
            {
                props.data.map(one =>(
                    <Overwatch  key={one.id} data={one} />
                ))
            }
        </div>
    )



}

const mapStateToProps = state => {
    return{
        data: state.data,
        gettiingData: state.gettiingData,
        error: state.error
    }
}


export default connect( mapStateToProps, { overwatchData } )(OverwatchList)