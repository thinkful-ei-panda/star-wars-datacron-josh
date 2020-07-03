import React from 'react'
import PropTypes from 'prop-types'

export default function Search (props) {   
    let searchPrompt;
    switch (props.searchSelectValue){
        case 'people' :
            searchPrompt='Character Name'
            break;
        case 'films' :
            searchPrompt='Film Title'
        break;
        case 'starships' :
            searchPrompt='Starship Name'

        break;
        case 'vehicles' :
            searchPrompt='Vehicle Name'

        break;
        case 'species' :
            searchPrompt='Species Name'

        break;
        case 'planets' :
            searchPrompt='Planet Name'

        break;
        default:
    }
    
    return (
        <div>
            <label className="hidden" htmlFor='searchingFor'>Search For:</label>
            <div className='chips'>
                <button className="chip" type='submit' value='people' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Characters</button>
                <button className="chip" type='submit' value='films' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Films</button>
                <button className="chip" type='submit' value='starships' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Starships</button>
                <button className="chip" type='submit' value='vehicles' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Vehicles</button>
                <button className="chip" type='submit' value='species' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Species</button>
                <button className="chip" type='submit' value='planets' onClick={e=>props.handleSearchSelectChange(e)} name='searchingFor' id='searchingFor'>Planets</button>
            </div>

            <form onSubmit={e=>props.handleSubmitFormToAPI(e)}>
                <legend hidden>Search</legend>
                <fieldset>
                    <div className='search'>
                        <label className="hidden" htmlFor='query'>Search </label>
                        <input name='query' placeholder={searchPrompt} id='query'></input>
                        <button disabled={props.loading} type='submit'>Search</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

Search.propTypes = {
    handleSearchSelectChange: PropTypes.func.isRequired,
    handleSubmitFormToAPI: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}