import { IOwnerInfo, IRepoInfo } from './types';

// empty versions for defining useEffect
export const emptyOwnerInfo: IOwnerInfo = {
    id: "",
    avatar_url: "",
    html_url: "",
    login: "",
    followers: "",
    following: ""
}

export const emptyRepoInfo: IRepoInfo = {
    id: "",
    html_url: "",
    name: "",
    description: "",
    language: "",
    license: { key: "" },
    size: "",
    subscribers_count: "",
    watchers_count: "",
    forks_count: "",
    open_issues_count: "",
    created_at: "",
    updated_at: ""
}
