import { FC } from 'react';
import { styled } from 'styled-components';
import type { TColumn } from './index';

type TTableHeader = {
  columns: TColumn[];
};

const TableHeader: FC<TTableHeader> = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((colum) => (
        <th key={colum.id}>{colum.name}</th>
      ))}
    </tr>
  </thead>
);

export default styled(TableHeader)``;
