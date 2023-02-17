import PageNationUI from './Pagenation.Presenter';
import { IPageNationProps } from './Pagenation.Type';
import { MouseEvent, useState } from 'react';
export default function PageNation(props: IPageNationProps) {
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.setPage(Number(event.currentTarget.id));
  };
  const [pageMove, setPageMove] = useState(0);
  const onClickPageMoveDown = () => {
    if (pageMove === 0) return;
    setPageMove((prev) => prev - 10);
  };
  const onClickPageMoveUp = () => {
    if (pageMove + 10 > lastPage) return;
    setPageMove((prev) => prev + 10);
  };
  let lastPage: number = 0;
  if (typeof props.boardsCount === 'number') {
    lastPage = Math.ceil(props.boardsCount / 10);
  }

  return (
    <PageNationUI
      onClickPage={onClickPage}
      onClickPageMoveDown={onClickPageMoveDown}
      onClickPageMoveUp={onClickPageMoveUp}
      pageMove={pageMove}
      lastPage={lastPage}
      page={props.page}
    />
  );
}
