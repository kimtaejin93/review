import {
  BoardHead_Warp,
  Board_Warp,
  WriterInfo,
  Writer,
  CreateAt,
  Title,
  LikeDisLike,
  BoardBody_Warp,
  Contents,
  Comment_Warp,
  CommentTitle,
  Comment,
  CommentWriter,
} from './Detail.Styler';

import { IBoardDetailProps } from './Detail.type';
import { getDate } from '@/components/commons/Date';

export default function BoardDetailUI(props: IBoardDetailProps) {
  console.log('확인', props.detailData?.fetchBoard.images);
  return (
    <Board_Warp>
      <BoardHead_Warp>
        <Title>{props.detailData?.fetchBoard.title}</Title>
        <WriterInfo>
          <div>이미지</div>
          <div>
            <Writer>{props.detailData?.fetchBoard.writer}</Writer>
            <CreateAt>
              {getDate(props.detailData?.fetchBoard.createdAt)}
            </CreateAt>
          </div>
        </WriterInfo>
      </BoardHead_Warp>
      <BoardBody_Warp>
        <Contents>{props.detailData?.fetchBoard.contents}</Contents>
        {props.detailData?.fetchBoard?.images?.[0] ? (
          <img
            src={`https://storage.googleapis.com/${props.detailData?.fetchBoard.images[0]}`}
          />
        ) : (
          <></>
        )}
        <LikeDisLike>
          {props.detailData?.fetchBoard.likeCount}
          {props.detailData?.fetchBoard.dislikeCount}
        </LikeDisLike>
      </BoardBody_Warp>
      <Comment_Warp>
        <>
          <CommentTitle>COMMENT</CommentTitle>
          {props.commentData?.fetchBoardComments.map((el) => (
            <Comment key={el._id}>
              <CommentWriter>{el.writer || '이름없음'}</CommentWriter>
              <div>{el.contents}</div>
            </Comment>
          ))}
        </>
      </Comment_Warp>
    </Board_Warp>
  );
}
