import PropTypes from 'prop-types'
import RepoInfo from './RepoInfo'
import OwnerInfo from './OwnerInfo'

import styled from 'styled-components';

const InfoArea = (props) => {

    return (
        <>
            {
                props.repoInfo.id
                ?
                    <InfoAreaStyle>
                        <OwnerInfo ownerInfo={props.ownerInfo} userNotFound={props.userNotFound}/>
                        <RepoInfo repoInfo={props.repoInfo}/>
                    </InfoAreaStyle>
                :
                    <InfoAreaErrorStyle>
                        <h3>{props.repoNotFound}</h3>
                    </InfoAreaErrorStyle>
            }
        </>
    )
}

InfoArea.propTypes = {
    repoNotFound: PropTypes.string,
    userNotFound: PropTypes.string
}

const InfoAreaStyle = styled.div`
	display: flex;
	background: #0a2247;
	padding: 1em;
	border-radius: 15px;
`;

const InfoAreaErrorStyle = styled.div`
	text-align: center;
	background: #0a2247;
	padding: 1em;
	border-radius: 15px;
`;

export default InfoArea
