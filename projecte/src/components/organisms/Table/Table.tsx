import { FC } from 'react';
import { styled } from 'styled-components';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { TTable } from './types';

const TableStyled = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  table, th,
  td {
    border: 1px solid black;
  }

  td, th {
    padding: .5rem
  }

  th {
    text-align: left
  }
`;

const Table: FC<TTable> = ({ columns, data }) => (
  <TableStyled>
    <table>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  </TableStyled>
);

export default styled(Table)``;
