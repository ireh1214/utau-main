import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="utau_wrap">
        <div className="utau_indexContainer">
          <div className="cont">
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
      </div>
    </>
  );
}
