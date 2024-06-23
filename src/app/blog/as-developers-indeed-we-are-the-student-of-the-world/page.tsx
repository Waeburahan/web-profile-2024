import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog1() {
  return (
    <main className="container bg-blue-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/blog" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Back
          </Link>
        </div>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
          😎 ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg ng nh c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.6435-9/37580917_436846470127687_3822218025231187968_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syknvcr1CHUQ7kNvgEKF81y&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCXynaNoMo_Q-f2dUXv0WekGP2QDJVALpzW5kcicxGPAA&oe=669F4509"
          />
        </div>
        <div>
          <p className="mb-4">
            😎 How to look (be) cool!
            <br />
            ความสำเร็จและความสุขในชีวิตไม่ได้ขึ้นอยู่กับการหาคำตอบในทันที แต่ขึ้นอยู่กับการเดินทางและการเรียนรู้ในระหว่างทาง ดังนั้น จงให้เวลาและโอกาสกับตัวเอง ฝึกฝนและพัฒนาตนเองอย่างต่อเนื่อง แล้วคุณจะพบว่าตัวตนและความฝันของคุณอยู่ใกล้กว่าที่คุณคิด
          </p>
        </div>
      </div>
    </main>
  );
}
