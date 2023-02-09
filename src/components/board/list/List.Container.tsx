import ListUI from './List.Presenter';
import { FETCH_BOARDS } from './List.Query';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>>(FETCH_BOARDS);
  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <div>
      <ListUI data={data} onClickBoard={onClickBoard} />
    </div>
  );
}
