import Img from "../assets/billing-analytics.png";
export default function BillingAnalytics() {
  const imgUrl = new URL(Img, import.meta.url).href;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img
        src={imgUrl}
        className="w-auto h-auto object-cover"
        alt="billing"
      />
    </div>
  );
}
