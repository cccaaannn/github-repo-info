import styled from 'styled-components';


type Props = {
    title: string
}

const Header = (props: Props) => {
    return (
        <HeaderStyle>
            <h1>{props.title}</h1>
            <hr />
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
	margin-bottom: 1em;

    hr {
	    margin-top: 1em;
	    border-color: #00ffcd;
    }
`;

export default Header
