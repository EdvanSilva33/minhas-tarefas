import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background: linear-gradient(
    0deg,
    rgba(18, 129, 139, 1) 0%,
    rgba(166, 237, 243, 1) 100%
  );
  height: 100vh;
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const ImagenBarra = styled.img`
  display: none;
  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-left: 20%;
    width: 60%;
    height: 200px;
    border-radius: 16px;
    display: block;
  }
`
