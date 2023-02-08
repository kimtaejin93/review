import { Divider, List, Typography } from 'antd';
import 'antd/dist/reset.css';
import { BoardWarp, Title } from './List.Styled';
import { IBoardListUiProps } from './List.Type';
export default function ListUI(props: IBoardListUiProps) {
  const data = props.data?.fetchBoards;
  return (
    <div>
      <Divider orientation='left'>Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <BoardWarp id={item._id} onClick={props.onClickBoard}>
              <Title>{item.title}</Title>
              <div>{item.writer}</div>
            </BoardWarp>
          </List.Item>
        )}
      />
    </div>
  );
}
