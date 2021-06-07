import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <hr />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
