import React, { useState } from 'react';

export default function Notice() {
  const [selectedLang, setSelectedLang] = useState('ko');

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div>
      <header className="info_header"> 주의사항(Notice) ⋆⁺₊⋆</header>
      <div className="utau_wrap">
        <div className="utau_container">
          <div className="lang">
            <button onClick={() => handleLangChange('ko')}>Ko</button>
            <button onClick={() => handleLangChange('en')}>En</button>
            <button onClick={() => handleLangChange('jp')}>Jp</button>
            <button onClick={() => handleLangChange('cn')}>中文</button>
          </div>

          <div className="notice">
            {selectedLang === 'ko' && (
              <div>
                <p>
                  <b>안녕하세요!</b>
                  작곡 연습하는 개(@Sound_of_dog_), 이하 달늑대의 음성합성엔진
                  배포 사이트입니다. 이전의 Wix 사이트에서 이모저모 바뀐 부분이
                  많아 아예 제 홈페이지로 이주하였습니다!
                </p>
                <p>
                  UTAU의 모든 것에 있어서 상당히, 여전히 아마추어입니다.
                  관련하여 제게 조언과 가르침을 주시는 분들께 항상 감사합니다.
                </p>
                <h2>기본 사항</h2>
                <p>
                  ■ 『Hitch』와 『Hetch』 의 저작권은 관리자인
                  @sound_of_dog_에게 있음을 명시합니다.
                </p>
                <p>
                  ■ 해당 음원은 UTAU와 open UTAU용으로 만들어졌으며, 동인적인
                  범위에선 자유롭게 이용이 가능합니다. 음원을 사용할 시, 반드시
                  해당 음원의 이름 표기를 부탁드립니다.
                </p>
                <p>
                  ■ 해당 음원의 개인 비방을 목적으로 둔 사용, 저작권을 침해하는
                  행위, 범죄를 조장하는 행위, 정치적인 목적, 혹은 종교적인
                  목적으로 사용하는 것을 원하지 않습니다. 만일 음원을 이용해
                  발생한 문제로 관리자에게 피해가 발생한다고 판단했을 경우
                  음원에 대한 사용이 제한될 수 있음을 미리 말씀드립니다.
                </p>
                <p>
                  ■ 음원의 가공은 개인적인 사용을 위한 것이라면 전체적으로
                  허용하고 있습니다. 단, 해당 가공품을 2차 배포하는 행위는
                  지양해주세요.
                </p>
                <p>
                  ■ 웹 투고에도 특별히 제한을 두고 있지 않습니다. 모쪼록
                  자유롭게 이용해주세요. 유튜브, 사운드클라운드, 그 외
                  사이트들... 분명 멋지게 사용해주셨을 것이라고 생각합니다.
                </p>
                <p>
                  ■ 음원을 창작한 관리자에 대한 인격적인 예의를 지켜주시는 선에
                  한에서, 창작에 대해서는 크게 관여하지 않고 있습니다. (아니
                  근데 진짜 저 좀 보여주세요 저 궁금해요)
                </p>
                <p>
                  ■ 외에, 히치로 커버를 하고싶은데 일러스트가 필요하시다면
                  개인적으로 연락 주세요. 가능한 선에서 지원하겠습니다!
                </p>
                <h2>상업적 이용 제한</h2>
                <p>
                  ■해당 음원을 이용한 상업적 이용을 희망하시는 경우, 별도의
                  연락을 부탁드립니다. 현재까지 들어온 요청은 모두 합의 하에
                  수락하였음을 알립니다.
                </p>
                <p>
                  ■캐릭터의 디자인을 이용한 상품이나 음원을 이용한 앨범 등,
                  동인적 의미를 모두 포함하여 해당 음원 라이브러리와 음원
                  캐릭터를 모든 상업적 이용은 개인적인 허가가 없었다면 금지하고
                  있습니다.
                </p>
              </div>
            )}
            {selectedLang === 'en' && (
              <div>
                <p>
                  <b>Hello!</b>
                  This is the voice synthesis engine distribution site of
                  Hi-wolfy also known as @Sound_of_dog_, a composer in practice.
                  Due to many changes from the previous Wix site, I have
                  completely migrated to my new website!
                </p>
                <p>
                  In all aspects of UTAU, I am still an amateur. I am always
                  grateful to those who provide advice and guidance.
                </p>
                <h2>Basic Guidelines</h2>
                <p>
                  ■ The copyrights of "Hitch" and "Hetch" belong to the
                  administrator, @Sound_of_dog_.
                </p>
                <p>
                  ■ These voicebanks are created for UTAU and open UTAU, and can
                  be freely used within the doujin scope. When using the
                  voicebanks, please make sure to credit the name of the
                  corresponding voicebank.
                </p>
                <p>
                  ■ Please refrain from using the voicebanks for personal
                  defamation, copyright infringement, promoting criminal
                  activities, political purposes, religious purposes, or any
                  other inappropriate purposes.
                </p>
                <p>
                  ■ I would like to inform you in advance that if any problems
                  arise from the use of the voicebanks and it causes harm to the
                  administrator, the usage of the voicebanks may be restricted.
                </p>
                <p>
                  ■ Personal modifications of the voicebanks are generally
                  allowed for personal use. However, please avoid redistributing
                  the modified versions.
                </p>
                <p>
                  ■ There are no specific restrictions on web submissions.
                  Please feel free to use them in various platforms such as
                  YouTube, SoundCloud, and other websites. I believe you have
                  used them wonderfully.
                </p>
                <p>
                  ■ Regarding the creation process, I am not heavily involved as
                  long as you maintain personal respect towards the
                  administrator who created the voicebanks. (But seriously,
                  please show me. I'm curious.)
                </p>
                <p>
                  ■ Additionally, if you need illustrations for covering Hitch,
                  please contact me personally. I will provide support to the
                  best of my ability!
                </p>
                <h2>Commercial Use Restrictions:</h2>
                <p>
                  ■ If you wish to use the voicebanks for commercial purposes,
                  please contact me separately.
                </p>
                <p>
                  ■ Unauthorized commercial use of the voicebanks, including
                  merchandise featuring character designs or albums utilizing
                  the voicebanks, is strictly prohibited, encompassing all
                  doujin-related activities.
                </p>
              </div>
            )}
            {selectedLang === 'jp' && (
              <div>
                <p>
                  <b>こんにちは！</b>
                  僕は作曲の練習中のワンちゃん（@Sound_of_dog_）で、愛称は「ハイウルフィー」です！これが僕の音声合成エンジンの配布サイトだよ。前のWixサイトがいろいろ変わったので、完全に新しいホームページに移行しちゃったんだ！
                </p>
                <p>
                  UTAUに関しては、まだまだアマチュアだよ。アドバイスや教えてくれる方々にはいつも感謝してるよ！
                </p>
                <h2>基本事項</h2>
                <p>
                  ■
                  「ヒッチ」と「ヘッチ」の著作権は、管理者である@sound_of_dog_に属してることを明記するね。
                </p>
                <p>
                  ■ これらの音源はUTAUとopen
                  UTAU用に作られたんだけど、同人的な範囲では自由に使ってもらって大丈夫だよ。音源を使う場合は、必ずその音源の名前を表示してくれると嬉しいな。
                </p>
                <p>
                  ■
                  この音源を個人の中傷目的で使ったり、著作権を侵害したり、犯罪を助長するような行為、政治的な目的や宗教的な目的で使ってほしくないんだ。もし音源を使って問題が発生して管理者に被害が出ると判断した場合は、使い方に制限がかかるかもしれないから、事前に言っておくよ。
                </p>
                <p>
                  ■
                  音源の加工については、個人的な使用なら大丈夫だよ。ただし、その加工品を二次配布するのは避けてくれると助かるな。
                </p>
                <p>
                  ■
                  ウェブへの投稿に関しては特に制限はないよ。自由に使ってね！YouTubeやSoundCloudなどのサイトで素敵に使ってくれたらうれしいな。
                </p>
                <p>
                  ■
                  音源の作者である管理者に対しては、人としての礼儀を守ってくれる限り、作成にはあまり関与しないよ。（でも本当に見せてよ。気になるんだ）
                </p>
                <p>
                  ■
                  それ以外で、ヒッチのカバーをしたくてイラストが必要なら、個別に連絡してね。できる限りのサポートをするよ！
                </p>
                <h2>商業利用の制限</h2>
                <p>
                  ■
                  この音源を商業目的で使いたい場合は、別途連絡してね。今までのリクエストは全て合意の上で受け入れられたことをお伝えするよ。
                </p>
                <p>
                  ■
                  キャラクターのデザインを利用した商品や音源を利用したアルバムなど、同人的な意味を含め、該当する音源ライブラリや音源キャラクターを無断で商業利用することはご遠慮ください。
                </p>
              </div>
            )}

            {selectedLang === 'cn' && (
              <div>
                <p>
                  <b>你好！</b>
                  我是音乐创作练习者(@Sound_of_dog_)，以下简称为"Hi-wolfy"，这是我的音频合成引擎发布网站。由于之前的Wix网站发生了很多变化，我完全迁移到了我的新网站上！
                </p>
                <p>
                  在UTAU的所有方面，我仍然是个业余爱好者。对于那些给予我建议和指导的人，我始终心存感激。
                </p>
                <h2>基本事项</h2>
                <p>
                  ■
                  请明确说明，"Hitch"和"Hetch"的版权归管理员@sound_of_dog_所有。
                </p>
                <p>
                  ■ 这些音频库是为UTAU和open
                  UTAU而创建的，在同人范围内可以自由使用。在使用这些音频库时，请务必标明相应音频库的名称。
                </p>
                <p>
                  ■
                  请不要将这些音频库用于个人诽谤目的、侵犯版权的行为、助长犯罪的行为、政治目的或宗教目的。如果管理员认为使用这些音频库导致了问题和损害，可能会限制对音频库的使用，请事先注意。
                </p>
                <p>
                  ■
                  一般情况下，对音频库进行个人修改是允许的。但请避免二次分发修改后的版本。
                </p>
                <p>
                  ■
                  对于网上投稿，我们没有特别的限制。请随意使用。无论是YouTube、SoundCloud还是其他网站，我相信您一定会使用得很好。
                </p>
                <p>
                  ■
                  在遵守对音频库的创建者的个人尊重的前提下，我对创作过程不过多干涉。（但是说真的，请给我看看。我很好奇。）
                </p>
                <p>
                  ■
                  此外，如果您想要用Hitch进行翻唱，但需要插图，请私下联系我。我将尽力提供支持！
                </p>
                <h2>商业使用限制</h2>
                <p>■ 如果您希望将这些音频库用于商业目的，请另行联系。</p>
                <p>
                  ■
                  未经许可，禁止一切未经授权的商业使用，包括使用角色设计的商品或使用音频库制作的专辑，其中包括所有同人相关活动。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
