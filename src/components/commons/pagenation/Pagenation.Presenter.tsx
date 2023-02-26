import {
  PageNation_Warp,
  PageNumber,
  PageNumber_Warp,
} from './Pagenation.Styler';
import { IPageNationUIProps } from './Pagenation.Type';

export default function PageNationUI(props: IPageNationUIProps) {
  const PageIndex = new Array(10).fill(1);

  return (
    <PageNation_Warp>
      <div onClick={props.onClickPageMoveDown}>&lt;&lt; </div>
      <PageNumber_Warp>
        {PageIndex.map(
          (_, index) =>
            index + 1 + props.pageMove < props.lastPage && (
              <PageNumber
                key={index + 1 + props.pageMove}
                id={String(index + 1 + props.pageMove)}
                onClick={props.onClickPage}
                activePage={props.page}
              >
                <div>{index + 1 + props.pageMove}</div>
              </PageNumber>
            )
        )}
      </PageNumber_Warp>
      <div onClick={props.onClickPageMoveUp}> &gt;&gt;</div>
    </PageNation_Warp>
  );
}
