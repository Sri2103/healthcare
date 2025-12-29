import Img from "../assets/dashboard.jpeg";

export default function BiDashboard() {
  const imgUrl = new URL(Img, import.meta.url).href;
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-full flex items-center justify-center ">
        <img src={imgUrl} alt="dashboard" />
      </div>
    </div>
  );
}
