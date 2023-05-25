import React from 'react';

export default function Download() {
  return (
    <>
      <header className="info_header">다운로드 페이지 ⋆⁺₊⋆</header>
      <div className="utau_wrap">
        <div className="utau_download">
          <div className="hitch">
            <ul>
              <li>Hitch</li>
              <li>JP UTAU VCV / 4음계</li>
            </ul>
          </div>
          <div className="hetch">
            <ul>
              <li>Hetch</li>
              <li>JP UTAU VCV / 1음계</li>
            </ul>
          </div>
        </div>
        <a
          className="download"
          href="https://drive.google.com/drive/folders/1ghoTeU7gDlGBvFlupiHSSTh6RTtfzNZA?usp=sharing"
        >
          다운로드
        </a>
      </div>
    </>
  );
}
