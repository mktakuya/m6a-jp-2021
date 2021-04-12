import Link from "next/link";
import { ChevronDoubleLeft } from "react-bootstrap-icons";

export default function Profile() {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="pb-2 mt-4 mb-2 border-bottom">
            <h1 className="h1">Profile</h1>
          </div>

          <h2>氏名</h2>
          <ul>
            <li>向平 卓矢 / Takuya Mukohira</li>
            <li>mktakuya</li>
          </ul>

          <h2>住居</h2>
          <ul>
            <li>2021年〜</li>
            <ul>
              <li>神奈川県横浜市</li>
            </ul>
            <li>2019年〜2021年</li>
            <ul>
              <li>東京都杉並区</li>
            </ul>
            <li>1996年〜2019年</li>
            <ul>
              <li>北海道千歳市</li>
            </ul>
          </ul>

          <h2>趣味</h2>
          <ul>
            <li>ブログ執筆</li>
            <ul>
              <li>
                単なる日記から読書記録、イベント参加記録など幅広いテーマの記事があります。
              </li>
              <li>
                <a href="https://blog.m6a.jp">#えむけーろぐ - blog.m6a.jp</a>
              </li>
            </ul>
            <li>Podcast</li>
            <ul>
              <li>
                高専時代からの友人と
                <a href="https://yuru28.com/">「ゆるふわPodcast」</a>
                をやっています。
              </li>
              <li>
                学生時代は苫小牧高専生のためのPodcast
                <a href="https://tarumae.fm">「樽前FM」</a>をやっていました。
              </li>
            </ul>
            <li>散歩</li>
            <ul>
              <li>自分の住んでいる街を散歩するのが好きです。</li>
            </ul>
            <li>ドライブ</li>
            <ul>
              <li>
                2〜3ヶ月に一度、カーシェアで車を借りてドライブするのが好きです。
              </li>
            </ul>
          </ul>

          <h2>スキル</h2>
          <p>
            主にRuby on RailsによるWebアプリケーション開発が得意です。
            <br />
            ふつうのRailsアプリケーション開発のほか、Grapeを利用したWeb
            APIの開発も出来ます。
            <br />
            また、実務経験は浅いですがTypeScript/React.jsによるSPAの開発やSwift/UIKitによるiOSアプリケーションの開発も経験があります。
          </p>

          <p>
            これまでの業務では、小中高の教員向けSNSやAirbnbのクローンスクリプト、社内売上管理システムや研修管理システムなどの開発に携わってきました。
            <br />
            エンジニアとしての参画だけでなく、ビジネスサイドの顧客と直接やり取りし、仕様を固めるところから完成・運用までやり遂げた経験もあります。
          </p>
        </div>

        <div className="mb-3">
          <Link href="/">
            <a className="text-decoration-none">
              <ChevronDoubleLeft />
              <span style={{ verticalAlign: "middle" }}>HOMEへ</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
