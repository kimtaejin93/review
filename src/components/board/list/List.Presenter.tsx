import * as S from './List.Styled';
import { IBoardListUiProps } from './List.Type';
export default function ListUI(props: IBoardListUiProps) {
  const data = props.data?.fetchBoards;
  return (
    <div>
      <S.BoardArea>
        <strong>자유게시판</strong>
        {data?.map((item) => (
          <S.BoardWarp
            key={item._id}
            id={item._id}
            onClick={props.onClickBoard}
          >
            <S.Title>{item.title}</S.Title>
            <div>{item.writer}</div>
          </S.BoardWarp>
        ))}
      </S.BoardArea>
      <S.SearchInputArea>
        <S.SearchInput
          onChange={props.onChangeSearch}
          placeholder='검색해보세요'
        />
      </S.SearchInputArea>
    </div>
  );
}
