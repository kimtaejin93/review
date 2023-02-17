import { CreateAt } from './Detail.Styler';

import { gql } from '@apollo/client';
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      images
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
    }
  }
`;
