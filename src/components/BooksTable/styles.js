import styled from 'styled-components'

export const HeaderRow = styled.div`
    display: flex;
    margin-top: 20px;
`

export const Header = styled.div`
    box-sizing: border-box;
    font-weight: bold;
    text-align: center;
    flex: 0 0 20%;
    text-transform: capitalize;
    overflow: hidden;
    padding: 10px 0;
    border: 1px solid black;
    & + & {
        border-left: none
    }
`

export const Button = styled.button`
    margin-bottom: 10px;
`

export const Wrapper = styled.div`
    @media screen and (max-width: 768px) {
        ${Header} {
            font-size: 14px;
            flex: 0 0 25%;
            &:last-child {
                display: none;
            }
        }
    }
`