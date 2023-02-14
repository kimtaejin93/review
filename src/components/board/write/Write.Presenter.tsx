import * as S from './Write.Styler';
import { IBoardWriteProps } from './Write.type';
export default function WriteUI(props: IBoardWriteProps) {
  return (
    <S.BoardWrite_Warp>
      <S.Writer_Warp>
        <S.Writer>
          <S.Input_style
            id='writer'
            type='text'
            placeholder='작성자를 입력하세요'
            onChange={props.onChangeInput}
            name='작성자'
          />
          {props.dataNullCheck.writerCheck ? (
            ''
          ) : (
            <S.NullAlert>작성자를 입력하세요.</S.NullAlert>
          )}
        </S.Writer>

        <S.Password>
          <S.Input_style
            id='password'
            type='password'
            placeholder='비밀번호 입력하세요'
            onChange={props.onChangeInput}
            name='비밀번호'
          />
          {props.dataNullCheck.passwordCheck ? (
            ''
          ) : (
            <S.NullAlert>비밀번호를 입력하세요.</S.NullAlert>
          )}
        </S.Password>
      </S.Writer_Warp>

      <S.Title>
        <S.Input_style
          id='title'
          type='text'
          placeholder='제목을 입력하세요'
          onChange={props.onChangeInput}
          name='제목'
        />
        {props.dataNullCheck.titleCheck ? (
          ''
        ) : (
          <S.NullAlert>제목을 입력하세요.</S.NullAlert>
        )}
      </S.Title>
      <S.Contents>
        <S.Contents_input_style
          id='contents'
          placeholder='내용을 입력하세요'
          onChange={props.onChangeInput}
        />
      </S.Contents>
      <S.Button_Warp>
        <S.Button_style onClick={props.onClickWrite}>작성하기</S.Button_style>
        <S.Button_style onClick={props.onClickCancel}>취소하기</S.Button_style>
      </S.Button_Warp>
    </S.BoardWrite_Warp>
  );
}
