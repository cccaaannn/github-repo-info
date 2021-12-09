// inner components
import RepoInfo from './RepoInfo';
import OwnerInfo from './OwnerInfo';

// styled components
import styled from 'styled-components';

// types
import { IOwnerInfo, IRepoInfo } from '../types/types';

type Props = {
    userNotFound: string,
    repoNotFound: string,

    ownerInfo: IOwnerInfo,
    repoInfo: IRepoInfo
}

const InfoArea = (props: Props) => {

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

export default InfoArea;