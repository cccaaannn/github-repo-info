import PropTypes from 'prop-types'
import styled from 'styled-components';

const About = (props) => {
    return (
        <AboutStyle>
            <p>{props.aboutText}</p>            
        </AboutStyle>
    )
}

About.propTypes = {
    aboutText: PropTypes.string
}

const AboutStyle = styled.div`
	background: #0a2247;
	padding: 1em;
	border-radius: 15px;
	text-align: center;
`;

export default About
