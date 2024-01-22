import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd23;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
