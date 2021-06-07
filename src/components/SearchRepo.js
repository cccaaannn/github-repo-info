import { useState } from 'react'
import PropTypes from 'prop-types'

const SearchRepo = (props) => {
    const [repoOwner, setRepoOwner] = useState('');
    const [repoName, setRepoName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!repoOwner) {
            alert('Please enter repo owner');
            return
        }

        if(!repoName) {
            alert('Please enter repo name');
            return
        }

        props.onSearch({ repoOwner, repoName })
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Repo owner</label>
                <input type='text' placeholder='Repo owner' value={repoOwner} onChange={(e) => setRepoOwner(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Repo name</label>
                <input type='text' placeholder='Repo name' value={repoName} onChange={(e) => setRepoName(e.target.value)}/>
            </div>
            <input type='submit' value='Search Repo' className='btn btn-form' />
        </form>
    )
}

SearchRepo.propTypes = {
    onSearch: PropTypes.func
}

export default SearchRepo
