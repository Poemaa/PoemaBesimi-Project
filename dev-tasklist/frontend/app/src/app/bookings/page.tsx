import Link from 'next/link';
import styles from './Bookings.module.css';


async function getBookings() {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings`, { cache: 'no-store'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Bookings: React.FC = async () => {

  const bookings = await getBookings()
  
  return (
    <div className={styles.bg} style={{display:'flex', flexDirection:'column', alignContent:'center',alignItems:'center'}}>
      <h1 style={{fontFamily:'Segoe UI', color:'#095986', fontSize:'34px'}}>Bookings</h1>
      <br></br>
      <ul>
        {bookings.map((booking) => (
          <li className={styles.libook}  key={booking.id}>
            <Link href={`/bookings/${booking.id}`}>
          <br></br>
                A Booking on {booking.date} starting at {booking.start_time}
              <br></br>
            </Link>
          </li>
        ))}
      </ul>
      <br></br>
      <button style={{width:'150px',height:'70px', borderRadius:'20px',backgroundColor:'#3787B4',color:'white'}}><Link href={`/bookings/create`}>
          
                  Add Booking        
      </Link></button>
      <br></br>
    </div>
  );
};

export default Bookings;