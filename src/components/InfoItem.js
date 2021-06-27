import styled from 'styled-components';

const InfoItem = (props) => {
    return (
        <InfoItemStyle>
            <h3>{props.info}</h3>
            <p>{props.infoDescription}</p>
        </InfoItemStyle>
    )
}

const InfoItemStyle = styled.div`

	flex: 1;
	padding: 0.7em;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	margin-bottom: 0.5em;

	background: #051835;
	border-radius: 15px;
	color: #00ffcd;
	text-align: center;

    p{
        color: #ffff;
        font-size: 12px;
        font-weight: normal;
    }

`;


export default InfoItem
