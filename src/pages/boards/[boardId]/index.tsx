import { useRouter } from 'next/router';
export default function detailPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>상세페이지 온걸 환영</div>;
}
