import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>히치&헤치 배포 사이트</title>
      </Head>
      <div className="utau_wrap">
        <div className="utau_indexContainer">
          <div className="nav">
            <Link href="in/Notice">Notice</Link>
            <Link href="in/Download">Download</Link>
            <Link href="in/Cover">Cover</Link>
          </div>
          <div className="about_img"></div>

          <div className="img_inner">
            <div className="hitch_full"></div>
            <div className="hetch_full"></div>
          </div>
        </div>
        <p>
          이 홈페이지는 2023년에 완성되었으며, @sound_of_dog_의 소유입니다. 무단
          전재를 금하고 있습니다.
        </p>
      </div>
    </>
  );
}
