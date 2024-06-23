import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog() {
  return (
    <main className="container bg-red-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Profile
          </Link>
        </div>
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*BLOG 1*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                Quotes....if you're not sure In what you seek, take the time and practice, stay with it until you discover it, then you will find your identity.
                </h2>
                <p className="text-gray-600 mb-10">
                หากไม่แน่ใจ ในสิ่งที่แสวงหา ลองใช้เวลา แล้วหมั่นฝึกฝน อยู่กับมันจน ค้นพบ แล้วคุณจะหาตัวตน ของคุณเจอ
                </p>
                <Link
                  href="/blog/as-developers-indeed-we-are-the-student-of-the-world"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.6435-9/37580917_436846470127687_3822218025231187968_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syknvcr1CHUQ7kNvgEKF81y&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCXynaNoMo_Q-f2dUXv0WekGP2QDJVALpzW5kcicxGPAA&oe=669F4509"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>

          {/*BLOG 2*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                “Success is a lousy teacher. I seduces smart people into thinking they can’t lose.”
                </h2>
                <p className="text-gray-600 mb-10">
                “ความสำเร็จคือครูที่แย่มาก เพราะมันล่อลวงคนฉลาดให้คิดว่าพวกเขาไม่มีวันล้มเหลว.”     
                -บิลล์ เกส์- (นักธุรกิจชื่อดังชาวอเมริกัน หนึ่งในผู้ก่อตั้งบริษัทไมโครซอฟท์)
                </p>
                <Link
                  href="/blog/the-art-of-simplicity-pythons-syntactic-sugar"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="http://www.positioningmag.com/sites/default/files/styles/larger/public/media-image/pos/2015/03/5_word.png?itok=e-HC8TkD"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
