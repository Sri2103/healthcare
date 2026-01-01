import Img from "../assets/scheduleManagement-analytics.png";
export default function ScheduleAnalytics() {
  const imgUrl = new URL(Img, import.meta.url).href;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img
        className="w-auto h-auto object-cover"
        src={imgUrl}
        alt="schedules"
      />
    </div>
  );
}
