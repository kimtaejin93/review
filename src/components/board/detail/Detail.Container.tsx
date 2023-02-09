import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from '@/commons/types/generated/types';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './Detail.Presenter';
import { FETCH_BOARD, FETCH_BOARD_COMMENTS } from './Detail.Query';

export default function BoardDetail() {
  const router = useRouter();
  const detailData = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );
  const commentData = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });
  console.log(commentData);
  return (
    <BoardDetailUI
      detailData={detailData.data}
      commentData={commentData.data}
    />
  );
}
