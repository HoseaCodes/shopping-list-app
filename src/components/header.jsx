import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const HeaderStyle = styled.header`
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
`;
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const Header = () => {
    return (
        <HeaderStyle>
            <h1> Shopping List</h1>
            <Link style={linkStyle} to='/'>Home</Link> |{' '}
            <Link style={linkStyle} to='/about'>About</Link>
        </HeaderStyle>

    )
}


export default Header