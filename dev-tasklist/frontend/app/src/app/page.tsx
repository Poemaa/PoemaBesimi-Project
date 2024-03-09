import Link from "next/link";


const Home: React.FC = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{backgroundColor:'#F1F7FA'}}>
    <img src="https://sc04.alicdn.com/kf/U3db117176e5048109d53049785397510I.png" width="400px" height="400px" alt="Image" className="mb-8" />
  <button className="hm-button w-150 text-white bg-blue-500">
    <Link href={`/bookings`}>
          See All Bookings →
</Link></button>    </div>
  );
};

export default Home;