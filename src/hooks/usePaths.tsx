const usePaths = () => {
    // this app is deployed to github pages, so on production paths should start with repo name

    const paths = {
        "rootPath" : process.env.NODE_ENV === 'production' ? "/github-repo-info" : "/",
        "aboutPath" : process.env.NODE_ENV === 'production' ? "/github-repo-info/about" : "/about"
    }

    return [paths] as const;
}

export default usePaths;