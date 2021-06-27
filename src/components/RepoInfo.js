import InfoItem from './InfoItem'
import styled from 'styled-components';

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
            <RepoInfoStyle>
                <div>
                    <a target="_blank" rel="noreferrer" href={props.repoInfo.html_url ? props.repoInfo.html_url : "https://github.com"}><h2>{props.repoInfo.name ? props.repoInfo.name : "-"}</h2></a>
                    <div>
                        <p>{props.repoInfo.description ? props.repoInfo.description : ""}</p>
                    </div>
                </div>

                <TableStyle>
                    <tr>
                        <th><InfoItem infoDescription={"Language"} info={props.repoInfo.language ? props.repoInfo.language : "-"}/></th>
                        <th><InfoItem infoDescription={"License"} info={props.repoInfo.license ? props.repoInfo.license.key : "-"}/></th>                            
                        <th><InfoItem infoDescription={"Size"} info={props.repoInfo.size ? prettifySize(props.repoInfo.size) : "-"}/></th>
                    </tr>
                </TableStyle>

                <TableStyle>
                    <tr>
                        <th><InfoItem infoDescription={"Subscribers"} info={props.repoInfo.subscribers_count ? props.repoInfo.subscribers_count : "-"}/></th>
                        <th><InfoItem infoDescription={"Watchers"} info={props.repoInfo.watchers_count ? props.repoInfo.watchers_count : "-"}/></th>                                    
                        <th><InfoItem infoDescription={"Forks"} info={props.repoInfo.forks_count ? props.repoInfo.forks_count : "-"}/></th>                            
                        <th><InfoItem infoDescription={"Open issues"} info={props.repoInfo.open_issues_count ? props.repoInfo.open_issues_count : "-"}/></th>
                    </tr>
                </TableStyle>

                <TableStyle>
                    <tr>
                        <td><InfoItem infoDescription={"Created"} info={props.repoInfo.created_at ? prettifyDate(props.repoInfo.created_at) : "-"}/></td>
                        <td><InfoItem infoDescription={"Updated"} info={props.repoInfo.updated_at ? prettifyDate(props.repoInfo.updated_at) : "-"}/></td>
                    </tr>
                </TableStyle>
            </RepoInfoStyle>
        </>
    )
}

const RepoInfoStyle = styled.div`
	margin-left: 0.5em;
	margin-bottom: 0.5em;

    div h2{
        margin-bottom: 0.5em;
        margin-left: 0.5em;
        display: inline-block;
    }

    div div p{
        margin-bottom: 0.5em;
        margin-left: 1em;
    }
`;

const TableStyle = styled.table`
	table-layout: fixed;
	width: 100%;
`;

export default RepoInfo
