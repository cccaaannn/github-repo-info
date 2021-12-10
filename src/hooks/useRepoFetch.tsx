// react
import { useState } from "react";

// statics
import { repoBaseAPI, userBaseAPI } from "../statics/URLS";

// types
import { IOwnerInfo, IRepoInfo } from '../types/types';
import { emptyOwnerInfo, emptyRepoInfo } from '../types/emptyObjects';


const useRepoFetch = () => {

	const [repoInfo, setRepoInfo] = useState<IRepoInfo>(emptyRepoInfo);
	const [ownerInfo, setOwnerInfo] = useState<IOwnerInfo>(emptyOwnerInfo);

    async function fetchRepo(repoOwner: string, repoName: string) {
        const res = await fetch(`${repoBaseAPI}${repoOwner}/${repoName}`);
        const repoData = await res.json();
        setRepoInfo(repoData)
    }

	async function fetchOwner(repoOwner: string) {
        const res = await fetch(`${userBaseAPI}${repoOwner}`);
        const ownerData = await res.json();
        setOwnerInfo(ownerData)
    }

	async function onSearch(repoOwner: string, repoName: string) {
	    await fetchRepo(repoOwner, repoName);
		await fetchOwner(repoOwner);
	}

    return [repoInfo, setRepoInfo, ownerInfo, setOwnerInfo, onSearch] as const;
}

export default useRepoFetch;