import PropTypes from 'prop-types'

const About = (props) => {
    return (
        <div className="about">
            <p>{props.aboutText}</p>            
        </div>
    )
}

About.propTypes = {
    aboutText: PropTypes.string
}

export default About
