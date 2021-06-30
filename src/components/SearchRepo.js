import { useState } from 'react'
import PropTypes from 'prop-types'

import { FormStyle, FormControlStyle, ButtonStyle } from './Styled/SearchRepoStyles'

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
        <FormStyle onSubmit={onSubmit}>
            <FormControlStyle>
                <label>Repo owner</label>
                <input type='text' placeholder='Repo owner' value={repoOwner} onChange={(e) => setRepoOwner(e.target.value)}/>
            </FormControlStyle>
            <FormControlStyle>
                <label>Repo name</label>
                <input type='text' placeholder='Repo name' value={repoName} onChange={(e) => setRepoName(e.target.value)}/>
            </FormControlStyle>
            <ButtonStyle type='submit' value='Search Repo' />
        </FormStyle>
    )
}

SearchRepo.propTypes = {
    onSearch: PropTypes.func
}

export default SearchRepo
