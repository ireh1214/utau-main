import React from 'react';
import CoverSong from '/components/CoverSong';

export default function Cover() {
  return (
    <>
      <header className="info_header">커버곡 목록 ⋆⁺₊⋆</header>
      <div className="utau_wrap">
        <div className="cover_img"></div>
        <CoverSong />
      </div>
    </>
  );
}
