import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from '@/commons/types/generated/types';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import * as S from './Comment.Styler';
import { getDate } from '../../commons/Date';

export default function CommentWrite() {
  const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment(
      $createBoardCommentInput: CreateBoardCommentInput!
      $boardId: ID!
    ) {
      createBoardComment(
        createBoardCommentInput: $createBoardCommentInput
        boardId: $boardId
      ) {
        _id
      }
    }
  `;
  const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!) {
      fetchBoardComments(boardId: $boardId) {
        _id
        writer
        contents
        createdAt
      }
    }
  `;
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [inputData, setInputData] = useState({
    writer: '',
    password: '',
    contents: '',
  });
  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [event.target.id]: event.target.value });
  };
  const onClickCommentWrite = async () => {
    if (!(inputData.writer && inputData.password && inputData.contents)) {
      window.alert('작성자,비밀번호,내용을 모두 작성해주세요.');
      return;
    }
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: inputData.writer,
            password: inputData.password,
            contents: inputData.contents,
            rating: 123,
          },
          boardId: router.query.boardId ? String(router.query.boardId) : '',
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId ? String(router.query.boardId) : '',
            },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setInputData({
      writer: '',
      password: '',
      contents: '',
    });
  };
  console.log('data,', data);

  return (
    <S.Comment_Warp>
      <S.CommentTitle>COMMENT</S.CommentTitle>
      <S.CommentWrite_Wrap>
        <div>
          <S.WriterInput
            type='text'
            placeholder='작성자'
            onChange={onChangeInput}
            id='writer'
            value={inputData.writer}
          />
          <S.PasswordInput
            type='password'
            placeholder='비밀번호'
            onChange={onChangeInput}
            id='password'
            value={inputData.password}
          />
        </div>

        <S.ContentsInput
          placeholder='내용'
          onChange={onChangeInput}
          id='contents'
          value={inputData.contents}
        />
        <S.CommentWriteButton onClick={onClickCommentWrite}>
          작성하기
        </S.CommentWriteButton>
      </S.CommentWrite_Wrap>

      {data?.fetchBoardComments?.map(
        (el: {
          writer: string;
          contents: string;
          _id: string;
          createdAt: any;
        }) => (
          <S.Comment key={el._id}>
            <S.CommentWriteInfo>{el.writer}</S.CommentWriteInfo>
            <span>{getDate(el.createdAt)}</span>
            <S.CommentContent>{el.contents}</S.CommentContent>
          </S.Comment>
        )
      )}
    </S.Comment_Warp>
  );
}
