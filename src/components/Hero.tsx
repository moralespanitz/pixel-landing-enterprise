import TryDemo from "../imports/TryDemo";
import GetStarted from "../imports/GetStarted";

export default function Hero() {
  return (
    <section className="bg-[#101118] min-h-[calc(100vh-73px)] flex items-center justify-center px-5 py-20">
      <div className="max-w-[900px] text-start">
        <h1
          className="mb-6 text-[64px] md:text-[80px] lg:text-[96px] leading-[1.1]"
          style={{ fontFamily: "'HvDTrial Livory', serif" }}
        >
          <span className="block mb-2 text-[#9B9BA3] text-left text-[64px]">
            Content in weeks,
          </span>
          <span className="block text-white text-left text-[64px]">
            Pipeline that compounds.
          </span>
        </h1>
        <p
          className="text-white/80 max-w-[700px] mb-10 text-start"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Pixel monitors your market 24/7 and creates strategic
          content that sounds exactly like you and help you to
          generate more revenue or impact to your audience.
        </p>
        <div className="flex items-start justify-start gap-3">
          <div className="h-[33px]">
            <TryDemo />
          </div>
          <div className="h-[33px]">
            <GetStarted />
          </div>
        </div>
        <p
          className="text-white mt-54 text-center text-[32px] md:text-[32px] leading-[1.2]"
          style={{ fontFamily: "'HvDTrial Livory', serif" }}
        >
          Your competitors aren't better. They just show up.
        </p>
      </div>
    </section>
  );
}