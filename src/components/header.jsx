import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
`;

function Header() {
    return (
        <HeaderStyle>
            <h1> Shopping List</h1>

        </HeaderStyle>

    )
}


export default Header