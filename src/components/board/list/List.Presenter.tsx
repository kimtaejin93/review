import { Divider, List } from 'antd';

import * as S from './List.Styled';
import { IBoardListUiProps } from './List.Type';
export default function ListUI(props: IBoardListUiProps) {
  const data = props.data?.fetchBoards;
  return (
    <div>
      <Divider orientation='left'>{data ? 'Default Size' : '로딩중'}</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <S.BoardWarp id={item._id} onClick={props.onClickBoard}>
              <S.Title>{item.title}</S.Title>
              <div>{item.writer}</div>
            </S.BoardWarp>
          </List.Item>
        )}
      />
    </div>
  );
}
