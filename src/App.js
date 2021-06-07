import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'

import SearchRepo from './components/SearchRepo'
import RepoInfo from './components/RepoInfo'


function App() {

	const [repoInfo, setRepoInfo] = useState({});

    const fetchRepo = async (repoOwner, repoName) => {
        const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        const data = await res.json();
        return data
    }

	const onSearch = async ({repoOwner, repoName}) => {
		const data = await fetchRepo(repoOwner, repoName);
		setRepoInfo(data);
	}

	const staticTexts = {
		title : "GitHub repo info",
		aboutText : "This project is for displaying information for a GitHub repository.",
		repoNotFound : "No Repo Found"
	}


	return (
        <Router>
            <div className="container">
                <Header title={staticTexts.title}/>

                <Route path='/' exact render={(props) => 
                (
                    <>
						<SearchRepo onSearch={onSearch}/>
						<RepoInfo repoInfo={repoInfo} repoNotFound={staticTexts.repoNotFound}/>
                    </>
                )} />
            </div>
        </Router>
	);
}

export default App;
