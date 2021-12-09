import styled from 'styled-components';


type Props = {
    aboutText: string
}

const About = (props: Props) => {
    return (
        <AboutStyle>
            <p>{props.aboutText}</p>
        </AboutStyle>
    )
}

const AboutStyle = styled.div`
	background: #0a2247;
	padding: 1em;
	border-radius: 15px;
	text-align: center;
`;

export default About
