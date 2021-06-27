import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

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


    const FormControlStyle = styled.div`

        flex: 1;
        margin: 20px 0;
        margin-right: 3em;

        label {
            display: block;
            margin-left: 0.3em;
        }

        input {
            width: 100%;
            height: 2em;

            margin-top: 0.5em;
            padding-left: 1em;
            padding-right: 1em;

            font-size: 15px;
            border-radius: 15px;
        }

        input:focus {
            box-shadow: 0px 0px 1px 2px #00ffcd;
            outline: none;
        }

    `;

    const FormStyle = styled.form`
        display: flex;
        align-items: center;
        margin-bottom: 1em;
    `;

    const ButtonStyle = styled.input`
        background: inherit;
        color: inherit;
        border: 2px solid white;
        font-size: 15px;
        border-radius: 15px;

        padding: 0.5em;
        margin-top: 1.5em;

        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:hover {
            color: #00ffcd;
            border-color: #00ffcd;
        }

        &:active {
            transform: scale(0.95);
        }
    `;

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
            <ButtonStyle type='submit' value='Search Repo' className='btn btn-form' />
        </FormStyle>
    )
}

SearchRepo.propTypes = {
    onSearch: PropTypes.func
}

export default SearchRepo
