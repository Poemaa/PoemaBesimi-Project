import Link from "next/link";

async function getBookingg(id: string) {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store'});
  
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }
   
  return res.json();
}

export default async function BookingsDetails({ params }: any) {
  const booking = await getBookingg(params.id);

  return (
    <div style={{display:'flex',flexDirection:'column', backgroundColor:'#EBF4F9'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'column'}}>
        <br></br>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'row'}}>
        <button style={{width:'100px',height:'40px', borderRadius:'20px',backgroundColor:'#3787B4',color:'white'}}><Link href="/bookings">
      ← Back
      </Link></button><br></br>
          <h1 style={{fontFamily:'Segoe UI', color:'#095986', fontSize:'36px',marginLeft:'40px'}}>Booking {booking.id}</h1>
          </div>
          <div>
            <br></br>
              <div style={{backgroundColor:'#72B8DF', width:'550px', height:'350px', textAlign:'center',color:'white',fontFamily:'Segoe UI',borderRadius:'30px',fontSize:'20px',paddingTop:'70px'}}>
                <p style={{marginTop:'60px'}}>This Booking is with {booking.doctor_name} for {booking.service} and it ends on {booking.end_time}</p>
                </div>
          </div>
          <br></br> <br></br>
          <img src="https://www.picktime.com/webassets/2021/img/business/cover-img/doctors-cover.png" width="500px" height="500px" alt="Image" className="mb-8" />
<br></br><br></br>
      </div>
      </div>
  );
}


