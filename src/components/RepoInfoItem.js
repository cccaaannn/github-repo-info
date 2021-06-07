const RepoInfoItem = (props) => {
    return (
        <div className="repoInfoItem">
            <h3>{props.info}</h3>
            <p>{props.infoDescription}</p>
        </div>
    )
}

export default RepoInfoItem
