import Img from "../assets/cla-analytics.png";
export default function ClaAnalytics() {
  const imgUrl = new URL(Img, import.meta.url).href;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img src={imgUrl} className="w-full h-auto object-cover" alt="cv" />
    </div>
  );
}
