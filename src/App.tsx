// inner components
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import SearchRepo from './components/SearchRepo';
import InfoArea from './components/InfoArea';

// react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// styled components
import ContainerStyle from './components/Styled/AppStyles';
import GlobalStyles from './components/Styled/GlobalStyles';

// statics
import { staticTexts } from './statics/TEXTS';

// hooks
import useRepoFetch from './hooks/useRepoFetch';
import usePaths from './hooks/usePaths';


function App() {

    // custom hook for fetching repo info
    const [repoInfo, setRepoInfo, ownerInfo, setOwnerInfo, onSearch] = useRepoFetch();

    // paths
    const [paths] = usePaths();

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