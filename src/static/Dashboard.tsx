import Img from "../assets/dashboard.jpeg";

export default function BiDashboard() {
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-full flex items-center justify-center ">
        <img src={Img} alt="dashboard" />
      </div>
    </div>
  );
}
