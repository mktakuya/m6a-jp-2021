import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="text-center">
            <h1 className="h1">ようこそ mktakuyaのホームページへ</h1>
            <Link href="/profile">
              <a>
                <img
                  src="/images/mktakuya.png"
                  className="rounded mx-auto d-block mt-5 mb-3"
                />
                <p className="lead">入場する</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
