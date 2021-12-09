import { useState } from 'react';

import { FormStyle, FormControlStyle, ButtonStyle } from './Styled/SearchRepoStyles';


type Props = {
    onSearch: (repoOwner: string, repoName: string) => void;
}

const SearchRepo = (props: Props) => {
    const [repoOwner, setRepoOwner] = useState('');
    const [repoName, setRepoName] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!repoOwner) {
            alert('Please enter repo owner');
            return
        }

        if(!repoName) {
            alert('Please enter repo name');
            return
        }

        props.onSearch(repoOwner, repoName)
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


export default SearchRepo;
