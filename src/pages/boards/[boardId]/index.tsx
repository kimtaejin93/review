import BoardDetail from '@/components/board/detail/Detail.Container';

import { useRouter } from 'next/router';
export default function detailPage() {
  const router = useRouter();
  console.log(router.query);
  return <BoardDetail />;
}
