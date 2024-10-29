import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
    width: 100%;
    height: 42px;
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')}; /* Cor de fundo */
    color: ${({ disabled }) => (disabled ? '#666' : '#FFF')}; /* Cor do texto */
    
    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: ${({ disabled }) => (disabled ? '1' : '0.6')}; /* Evita alteração de opacidade quando desabilitado */
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; /* Muda o cursor */
    }

    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; /* Impede interações quando desabilitado */
`;
