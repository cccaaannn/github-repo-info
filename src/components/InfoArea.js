import PropTypes from 'prop-types'
import RepoInfo from './RepoInfo'
import OwnerInfo from './OwnerInfo'

const InfoArea = (props) => {

    return (
        <>
            {
                props.repoInfo.id
                ?
                    <div className="info-area">
                        <OwnerInfo ownerInfo={props.ownerInfo} userNotFound={props.userNotFound}/>
                        <RepoInfo repoInfo={props.repoInfo}/>
                    </div>
                :
                    <div className="info-area-error">
                        <h3>{props.repoNotFound}</h3>
                    </div>
            }
        </>
    )
}

InfoArea.propTypes = {
    repoNotFound: PropTypes.string,
    userNotFound: PropTypes.string
}

export default InfoArea
