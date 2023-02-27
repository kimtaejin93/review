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
  UserImages,
  LikeDisLikeButton,
} from './Detail.Styler';

import { IBoardDetailProps } from './Detail.type';
import { getDate } from '@/components/commons/Date';
import CommentWrite from '../comment/CommentWrite';

export default function BoardDetailUI(props: IBoardDetailProps) {
  console.log('확인', props.detailData?.fetchBoard.images);
  return (
    <Board_Warp>
      <BoardHead_Warp>
        <Title>{props.detailData?.fetchBoard.title}</Title>
        <WriterInfo>
          <UserImages src='https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg' />
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
          <LikeDisLikeButton onClick={props.onClickLike}>
            <div>👍</div>
            <div>{props.detailData?.fetchBoard.likeCount}</div>
          </LikeDisLikeButton>
          <LikeDisLikeButton onClick={props.onClickDisLike}>
            <div>👎</div>
            <div>{props.detailData?.fetchBoard.dislikeCount}</div>
          </LikeDisLikeButton>
        </LikeDisLike>
      </BoardBody_Warp>
      <CommentWrite />
    </Board_Warp>
  );
}
