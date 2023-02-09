import { IQuery } from '@/commons/types/generated/types';

export interface IBoardDetailProps {
  detailData?: Pick<IQuery, 'fetchBoard'>;
  commentData?: Pick<IQuery, 'fetchBoardComments'>;
}
