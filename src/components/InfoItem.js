const InfoItem = (props) => {
    return (
        <div className="repo-info-item">
            <h3>{props.info}</h3>
            <p>{props.infoDescription}</p>
        </div>
    )
}

export default InfoItem
