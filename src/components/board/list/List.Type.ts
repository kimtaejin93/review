import { IQuery } from '@/commons/types/generated/types';
import { MouseEvent } from 'react';
export interface IBoardListUiProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
}
