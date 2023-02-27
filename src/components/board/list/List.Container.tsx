import ListUI from './List.Presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './List.Query';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useEffect } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../commons/types/generated/types';
import { useState } from 'react';
import PageNation from '@/components/commons/pagenation/Pagenation.Container';
import { debounce } from 'lodash';

export default function BoardList() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [visit, setVisit] = useState<null | string[]>();
  const router = useRouter();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('visit')!) !== null) {
      setVisit(JSON.parse(localStorage.getItem('visit')!));
      console.log(visit);
    }
  }, []);

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page,
        search: keyword,
      },
    }
  );
  useEffect(() => {}, [keyword]);
  const boardsCount =
    useQuery<Pick<IQuery, 'fetchBoardsCount'>>(FETCH_BOARDS_COUNT);

  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };
  const onChangeSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    console.log(event);
  }, 1000);

  return (
    <div>
      <ListUI
        visit={visit}
        data={data}
        onClickBoard={onClickBoard}
        onChangeSearch={onChangeSearch}
      />
      <PageNation
        setPage={setPage}
        boardsCount={boardsCount.data?.fetchBoardsCount}
        page={page}
      />
    </div>
  );
}
