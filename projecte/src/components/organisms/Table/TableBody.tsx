import { styled } from 'styled-components';
import { FC } from 'react';
import type { TTable } from './types';

type TTableBody = TTable;

const TableBody: FC<TTableBody> = ({ columns, data }) =>
	<tbody>
		{data.map((row) => (
			<tr key={row.id}>
				{columns.map((column) => (
					<td key={column.id}>{row[column.id]}</td>
				))}
			</tr>
		))}
	</tbody>;

export default styled(TableBody)``;
