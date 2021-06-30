import styled from 'styled-components';

export const FormControlStyle = styled.div`

	flex: 1;
  	margin: 20px 0;
	margin-right: 3em;

    label {
        display: block;
        margin-left: 0.3em;
    }

    input {
        width: 100%;
        height: 2em;

        margin-top: 0.5em;
        padding-left: 1em;
        padding-right: 1em;

        font-size: 15px;
        border-radius: 15px;
    }

    input:focus {
        box-shadow: 0px 0px 1px 2px #00ffcd;
        outline: none;
    }

`;

export const FormStyle = styled.form`
    display: flex;
	align-items: center;
  	margin-bottom: 1em;
`;

export const ButtonStyle = styled.input`
	background: inherit;
	color: inherit;
	border: 2px solid white;
	font-size: 15px;
	border-radius: 15px;

	padding: 0.5em;
	margin-top: 1.5em;

	cursor: pointer;

    &:focus {
  	    outline: none;
    }

    &:hover {
        color: #00ffcd;
        border-color: #00ffcd;
    }

    &:active {
        transform: scale(0.95);
    }
`;
