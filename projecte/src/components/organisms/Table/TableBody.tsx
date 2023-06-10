import { styled } from 'styled-components';
import { FC } from 'react';
import type { TTable } from './types';

type TTableBody = TTable;

const TableBody: FC<TTableBody> = ({ columns, data }) => (
  <tbody>
    {data.map((row) => {
      // console.log('row', row);
      return (
        <tr key={row.id}>
					{columns.map((column) => {
						// console.log('column.id', column.id, "dada", row[column.id]);
            return <td key={column.id}>{row[column.id]}</td>;
          })}
        </tr>
      );
    })}
  </tbody>
);

export default styled(TableBody)``;
