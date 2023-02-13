import * as S from './Write.Styler';

export default function WriteUI() {
  return (
    <S.BoardWrite_Warp>
      <S.Writer_Warp>
        <S.Writer>
          <S.Input_style type='text' placeholder='작성자를 입력하세요' />
        </S.Writer>

        <S.Password>
          <S.Input_style type='text' placeholder='비밀번호 입력하세요' />
        </S.Password>
      </S.Writer_Warp>

      <S.Title>
        <S.Input_style type='text' placeholder='제목을 입력하세요' />
      </S.Title>
      <S.Contents>
        <S.Contents_input_style placeholder='내용을 입력하세요' />
      </S.Contents>
      <S.Button_Warp>
        <S.Button_style>작성하기</S.Button_style>
        <S.Button_style>취소하기</S.Button_style>
      </S.Button_Warp>
    </S.BoardWrite_Warp>
  );
}
