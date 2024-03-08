import { device } from "styles/sizes";
import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 350px;
  margin-top: 24px;

  @media ${device.mobile} {
    width: 100%;
  }

  td, th {
    padding: 8px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.dark};
  }

  th {
    font-weight: 600;
  }
`