import styled from 'styled-components'

export const DataFields = styled.div`
    flex: 1;
    display: flex;
`

export const Field = styled.div`
    box-sizing: border-box;
    flex: 0 0 20%;
    text-align: center;
    overflow: hidden;
    border: 1px solid black;
    & + & { 
        border-left: none;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;    
    button {
        padding: 5px;
        margin-left: 5px;
    }
`

export const TextBox = styled.p``

export const InputBox = styled.input`
    padding: 10px 0;
    border: none;
    outline: none;
    width: 95%;
`

export const Button = styled.button``

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        ${DataFields} {
            flex: 1 0 100%;
            flex-wrap: wrap;
        }
        ${Field} {
            flex: 0 0 25%;
            font-size: 14px;
            &:last-child {
                flex-grow: 1;
                border-left: 1px solid black;
                padding: 5px 0;
            }
        }
    }   
`