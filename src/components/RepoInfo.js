import PropTypes from 'prop-types'
import RepoInfoItem from './RepoInfoItem'

const RepoInfo = (props) => {

    const prettifySize = (size) => {
        if(size < 1000){
            return size.toFixed(2) + " KB";
        }
        else if(size > 1000 && size < 1000000){
            return (size / 1000).toFixed(2) + " MB";
        }
        else{
            return (size / 1000000).toFixed(2) + " GB";
        }
    }

    const prettifyDate = (dateISO) => {
        let d = new Date(Date.parse(dateISO));
        // return d.toLocaleString("tr");
        return d.toLocaleString();
    }

    return (
        <>
            {
                props.repoInfo.id
                ?
                    <div className="repoInfo">

                        <div className="repoInfoOwner">
                            <img src={props.repoInfo.owner.avatar_url ? props.repoInfo.owner.avatar_url : "https://github.com/github.png"} alt="avatar" width="100" height="100"></img>
                            <a target="_blank" rel="noreferrer" href={props.repoInfo.owner ? props.repoInfo.owner.html_url : "https://github.com"}><h2>{props.repoInfo.owner ? props.repoInfo.owner.login : "-"}</h2></a>
                        </div>

                        <div>
                            <div className="repoInfoHeader">
                                <a target="_blank" rel="noreferrer" href={props.repoInfo.html_url ? props.repoInfo.html_url : "https://github.com"}><h2>{props.repoInfo.name ? props.repoInfo.name : "-"}</h2></a>
                                <p>{props.repoInfo.description ? props.repoInfo.description : ""}</p>
                            </div>

                            <table>
                                <tr>
                                    <th><RepoInfoItem infoDescription={"Language"} info={props.repoInfo.language ? props.repoInfo.language : "-"}/></th>
                                    <th><RepoInfoItem infoDescription={"License"} info={props.repoInfo.license ? props.repoInfo.license.key : "-"}/></th>                            
                                    <th><RepoInfoItem infoDescription={"Size"} info={props.repoInfo.size ? prettifySize(props.repoInfo.size) : "-"}/></th>
                                </tr>
                            </table>

                            <table>
                                <tr>
                                    <th><RepoInfoItem infoDescription={"Subscribers"} info={props.repoInfo.subscribers_count ? props.repoInfo.subscribers_count : "-"}/></th>
                                    <th><RepoInfoItem infoDescription={"Watchers"} info={props.repoInfo.watchers_count ? props.repoInfo.watchers_count : "-"}/></th>                                    
                                    <th><RepoInfoItem infoDescription={"Forks"} info={props.repoInfo.forks_count ? props.repoInfo.forks_count : "-"}/></th>                            
                                    <th><RepoInfoItem infoDescription={"Open issues"} info={props.repoInfo.open_issues_count ? props.repoInfo.open_issues_count : "-"}/></th>
                                </tr>
                            </table>

                            <table>
                                <tr>
                                    <td><RepoInfoItem infoDescription={"Created"} info={props.repoInfo.created_at ? prettifyDate(props.repoInfo.created_at) : "-"}/></td>
                                    <td><RepoInfoItem infoDescription={"Updated"} info={props.repoInfo.updated_at ? prettifyDate(props.repoInfo.updated_at) : "-"}/></td>
                                </tr>
                            </table>


                        </div>

                    </div>

                :
                <h3 className="repoInfoNotFound">{props.repoNotFound}</h3>
            }
        </>
    )
}


RepoInfo.propTypes = {
    repoNotFound: PropTypes.string
}

export default RepoInfo
