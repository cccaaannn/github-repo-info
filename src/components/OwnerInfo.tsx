// inner components
import InfoItem from './InfoItem';

// styled components
import styled from 'styled-components';

// statics
import { placeHolderImageURL } from '../statics/URLS';

// types
import { IOwnerInfo } from '../types/types';

type Props = {
    userNotFound: string,
    ownerInfo: IOwnerInfo
}

const OwnerInfo = (props: Props) => {
    return (
        <>
            {
                props.ownerInfo.id
                ?
                    <OwnerInfoStyle>
                        <img src={props.ownerInfo.avatar_url ? props.ownerInfo.avatar_url : placeHolderImageURL} alt="avatar" width="100" height="100"></img>
                        <a target="_blank" rel="noreferrer" href={props.ownerInfo.html_url ? props.ownerInfo.html_url : "https://github.com"}><h2>{props.ownerInfo.login ? props.ownerInfo.login : "-"}</h2></a>
                        
                        <InfoItem infoDescription={"Followers"} info={props.ownerInfo.followers ? props.ownerInfo.followers : "-"}/>
                        <InfoItem infoDescription={"Following"} info={props.ownerInfo.following ? props.ownerInfo.following : "-"}/>
                    </OwnerInfoStyle>
                :
                    <OwnerInfoStyle>
                        <img src={placeHolderImageURL} alt="avatar" width="100" height="100"></img>
                        <a target="_blank" rel="noreferrer" href="https://github.com"><h2>{props.userNotFound}</h2></a>
                    </OwnerInfoStyle>
            }
        </>
    )
}

const OwnerInfoStyle = styled.div`
	text-align: center;

    h2{
        margin-bottom: 0.5em;
    }
`;

export default OwnerInfo
