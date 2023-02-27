import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from '@/commons/types/generated/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BoardDetailUI from './Detail.Presenter';
import {
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
} from './Detail.Query';

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
  const [LikeBoard] = useMutation(LIKE_BOARD);
  const [disLikeBoard] = useMutation(DISLIKE_BOARD);
  const onClickLike = async () => {
    await LikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };
  const onClickDisLike = () => {
    disLikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };
  useEffect(() => {
    if (localStorage.getItem('visit') === null) {
      localStorage.setItem(
        'visit',
        JSON.stringify([String(router.query.boardId)])
      );
    }

    const temp = JSON.parse(localStorage.getItem('visit')!);
    temp.includes(router.query.boardId) ? '' : temp.push(router.query.boardId);
    localStorage.setItem('visit', JSON.stringify(temp));
  }, []);
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
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      detailData={detailData.data}
      commentData={commentData.data}
    />
  );
}
