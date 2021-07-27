import styled from 'styled-components';

interface Props {
    disabled: boolean,
}

const LayoutMenuItem = styled.div.attrs({
    className: 'btn btn-prmiary',
})<Props>`
    background: green;
    overflow: auto;
    float: left;
    opacity: ${(props) => (props.disabled ? 0.8 : 1)};
    :hover {
        cursor: pointer;
    }
`;

export default LayoutMenuItem;
