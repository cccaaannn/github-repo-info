import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'

import SearchRepo from './components/SearchRepo'
import InfoArea from './components/InfoArea'

// styled components
import ContainerStyle from './components/Styled/AppStyles'
import GlobalStyles from './components/Styled/GlobalSyles'

function App() {

	const [repoInfo, setRepoInfo] = useState({});
	const [ownerInfo, setOwnerInfo] = useState({});

    const fetchRepo = async (repoOwner, repoName) => {
        const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        const data = await res.json();
        return data
    }

	const fetchOwner = async (repoOwner) => {
        const res = await fetch(`https://api.github.com/users/${repoOwner}`);
        const data = await res.json();
        return data
    }

	const onSearch = async ({repoOwner, repoName}) => {
		const repoData = await fetchRepo(repoOwner, repoName);
		const ownerData = await fetchOwner(repoOwner);
		setRepoInfo(repoData);
		setOwnerInfo(ownerData);
	}

	const staticTexts = {
		title : "GitHub repo info",
		aboutText : "This project is for getting information for a GitHub repository.",
		repoNotFound : "No Repo Found",
		userNotFound: "User not found"
	}

    const paths = {
        "rootPath" : process.env.NODE_ENV === 'production' ? "/github-repo-info" : "/",
        "aboutPath" : process.env.NODE_ENV === 'production' ? "/github-repo-info/about" : "/about"
    }

	return (
        <Router>
            <GlobalStyles />
            <ContainerStyle>
                <Header title={staticTexts.title}/>

                <Route path={paths.rootPath} exact render={(props) => 
                (
                    <>
						<SearchRepo onSearch={onSearch}/>
						<InfoArea repoInfo={repoInfo} ownerInfo={ownerInfo} repoNotFound={staticTexts.repoNotFound} userNotFound={staticTexts.userNotFound}/>
                    </>
                )} />

                <Route path={paths.aboutPath} exact render={(props) => 
                (
                    <>
						<About aboutText={staticTexts.aboutText}/>
                    </>
                )} />

                <Footer rootPath={paths.rootPath} aboutPath={paths.aboutPath}/>
            </ContainerStyle>
        </Router>
	);
}


export default App;
