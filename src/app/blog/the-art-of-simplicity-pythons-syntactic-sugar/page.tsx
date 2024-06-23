import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog2() {
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
          Why do smart people want to fail?
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg nj nk c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="http://www.positioningmag.com/sites/default/files/styles/larger/public/media-image/pos/2015/03/5_word.png?itok=e-HC8TkD"
          />
        </div>
        <div>
          <blockquote className="border-l-4 pl-4 my-4">
            <p className="text-lg font-medium leading-relaxed">
            การเรียนรู้จากความล้มเหลว
            </p>
            <cite className="text-sm font-light block mt-2">
            ความล้มเหลวเป็นบทเรียนที่มีค่า แม้จะเป็นสิ่งที่ไม่มีใครปรารถนา แต่ความล้มเหลวช่วยให้เราได้เรียนรู้จากความผิดพลาด ปรับปรุงและพัฒนาตนเอง คนที่เคยล้มเหลวมักมีความอดทนและความยืดหยุ่นมากกว่า และมักจะมีความเข้าใจที่ลึกซึ้งเกี่ยวกับสิ่งที่จำเป็นในการประสบความสำเร็จในระยะยาว
            </cite>
          </blockquote>
        </div>
      </div>
    </main>
  );
}
