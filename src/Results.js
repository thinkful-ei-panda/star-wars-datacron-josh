import React from 'react'
import Result from './Result'
import PropTypes from 'prop-types'

export default function Results (props) {
    let results;
    if (props.results.length>0 || props.searched===false){
        results= props.results.map((result, index) => <Result key={index} result={result}/>)
    } else {
        results= <li>We cannot find what you are looking for. Please try again.</li>
    }

    return (
        <div>
            <div hidden={!props.loading}>
                Loading...
            </div>
            <ul hidden={props.loading}>
                {results}
            </ul>
        </div>
    )
}

Results.propTypes ={
    results: PropTypes.array.isRequired,
    searched: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}