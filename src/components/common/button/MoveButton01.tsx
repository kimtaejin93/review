import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface IProps {
  title: string;
  router: string;
}
const Button = styled.button`
  padding: 15px;
  position: absolute;
  right: 0;
  bottom: -70px;
  border-radius: 20px;
`;

export default function MoveButton(props: IProps) {
  const router = useRouter();
  const pageMove = () => {
    router.push(props.router);
  };

  return <Button onClick={pageMove}>{props.title}</Button>;
}
