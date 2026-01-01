import Img from "../assets/ar-analytics.png";
export default function ArAnalytics() {
  const imgUrl = new URL(Img, import.meta.url).href;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img
        className="w-auto h-auto object-cover"
        src={imgUrl}
        alt="ar"
      />
    </div>
  );
}
