import { IQuery } from '@/commons/types/generated/types';

export interface IBoardDetailProps {
  onClickLike: () => void;
  onClickDisLike: () => void;
  detailData?: Pick<IQuery, 'fetchBoard'>;
  commentData?: Pick<IQuery, 'fetchBoardComments'>;
}
