import PropTypes from 'prop-types'
import styled from 'styled-components';

const Header = (props) => {
    return (
        <HeaderStyle>
            <h1>{props.title}</h1>
            <hr />
        </HeaderStyle>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

const HeaderStyle = styled.div`
	margin-bottom: 1em;

    hr {
	    margin-top: 1em;
	    border-color: #00ffcd;
    }
`;

export default Header
