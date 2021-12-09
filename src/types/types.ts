export interface IOwnerInfo {
    id: string,
    avatar_url: string,
    html_url: string,
    login: string,
    followers: string,
    following: string
}

export interface IRepoInfo {
    id: string,
    html_url: string,
    name: string,
    description: string,
    language: string,
    license: ILicense,
    size: string,
    subscribers_count: string
    watchers_count: string,
    forks_count: string,
    open_issues_count: string,
    created_at: string,
    updated_at: string
}

interface ILicense {
    key: string
}