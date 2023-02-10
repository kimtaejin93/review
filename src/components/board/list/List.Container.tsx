import ListUI from './List.Presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './List.Query';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../commons/types/generated/types';
import { useState } from 'react';
import PageNation from '@/components/commons/pagenation/Pagenation.Container';

export default function BoardList() {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page,
      },
    }
  );
  const boardsCount =
    useQuery<Pick<IQuery, 'fetchBoardsCount'>>(FETCH_BOARDS_COUNT);

  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <div>
      <ListUI data={data} onClickBoard={onClickBoard} />
      <PageNation
        setPage={setPage}
        boardsCount={boardsCount.data?.fetchBoardsCount}
        page={page}
      />
    </div>
  );
}
