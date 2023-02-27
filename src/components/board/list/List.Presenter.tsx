import MoveButton from '@/components/common/button/MoveButton01';
import * as S from './List.Styled';
import { IBoardListUiProps } from './List.Type';
export default function ListUI(props: IBoardListUiProps) {
  const data = props.data?.fetchBoards;
  return (
    <S.DetailPage>
      <S.BoardArea>
        <strong>자유게시판</strong>
        {data?.map((item) => (
          <S.BoardWarp
            key={item._id}
            id={item._id}
            onClick={props.onClickBoard}
          >
            <S.Title>
              {item.title}
              {props.visit?.includes(item._id) ? '✔' : ''}
            </S.Title>

            <div>{item.writer}</div>
          </S.BoardWarp>
        ))}
        <MoveButton title='작성하기' router='boards/new' />
      </S.BoardArea>
      <S.SearchInputArea>
        <S.SearchInput
          onChange={props.onChangeSearch}
          placeholder='검색해보세요'
        />
      </S.SearchInputArea>
    </S.DetailPage>
  );
}
