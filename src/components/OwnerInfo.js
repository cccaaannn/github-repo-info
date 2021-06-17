import InfoItem from './InfoItem'

const OwnerInfo = (props) => {
    return (
        <>
            {
                props.ownerInfo.id
                ?
                    <div className="owner-info">
                        <img src={props.ownerInfo.avatar_url ? props.ownerInfo.avatar_url : "https://github.com/github.png"} alt="avatar" width="100" height="100"></img>
                        <a target="_blank" rel="noreferrer" href={props.ownerInfo.html_url ? props.ownerInfo.html_url : "https://github.com"}><h2>{props.ownerInfo.login ? props.ownerInfo.login : "-"}</h2></a>
                        
                        <InfoItem infoDescription={"Followers"} info={props.ownerInfo.followers ? props.ownerInfo.followers : "-"}/>
                        <InfoItem infoDescription={"Following"} info={props.ownerInfo.following ? props.ownerInfo.following : "-"}/>
                    </div>
                :
                    <div className="owner-info">
                        <img src="https://github.com/github.png" alt="avatar" width="100" height="100"></img>
                        <a target="_blank" rel="noreferrer" href="https://github.com"><h2>{props.userNotFound}</h2></a>
                    </div>
            }
        </>
    )
}

export default OwnerInfo