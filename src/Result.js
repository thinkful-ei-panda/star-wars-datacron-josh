import React from 'react'
import PropTypes from 'prop-types'

export default function Result(props){
    const name= props.result.name
    return (
        <li>
            {name}
        </li>
    )

}

Result.propTypes = {
    result: PropTypes.object.isRequired
}