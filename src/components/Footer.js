import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components';

const Footer = (props) => {
    const location = useLocation();

    return (
        <footer>
            <p>Copyright &copy; 2021</p>

            {location.pathname === props.aboutPath
            ? 
            <LinkStyle to={props.rootPath} className="link">Back</LinkStyle>
            :
            <LinkStyle to={props.aboutPath} className="link">About</LinkStyle>
            }
            
        </footer>
    )
}

const LinkStyle = styled(Link)`
    color: #00ffcd;
`;

export default Footer
