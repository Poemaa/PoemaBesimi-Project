'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

 function CreateBooking() {

    const [formData, setFormData] = useState({
      service: '',
      doctorName: '',
      startTime: '',
      endTime: '',
      date: ''
    });
    const router = useRouter();

    const handleServiceChange = (e => {
      setFormData({
        ...formData,
        service: e.target.value
      });
    });
  
    const handleDoctorChange= (e => {
      setFormData({
        ...formData,
        doctorName: e.target.value
      });
    });
  
    const handleStartTimeChange = (e => {
      setFormData({
        ...formData,
        startTime: e.target.value
      });
    });
    const handleEndTimeChange = (e => {
      setFormData({
        ...formData,
        endTime: e.target.value
      });
    });
    const handleDateChange = (e => {
        setFormData({
          ...formData,
          date: e.target.value
        });
      });
  
    const handleSubmit = (e => {
      e.preventDefault();

  
      const BookingTooAdd = {
       
        service: formData.service,
        doctorName:formData.doctorName,
        startTime:formData.startTime,
        endTime:formData.endTime,
        date:formData.date
      };
      
    
      const url = `http://host.docker.internal:5000/api/bookings`; 
          
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            cache: 'no-store',
            body: JSON.stringify(BookingTooAdd)
          })
       /*   .then(response => {
            if (response.status === 201) {
              alert('Booking added successfully!');
              router.push('/bookings');
            }
            return response.json();
          })
          .then(responseFromServer => {
            console.log(responseFromServer);
          })*/ 
          
          
          .then(response => {
        if (response.ok) { 
          alert('Booking added successfully!');
          router.push('/bookings'); 
        } else {
          alert('Booking failed to be added!');
          throw new Error('Failed to add booking. Status: ' + response.status);

        }
      })
          .catch(error => {
            console.log(error);
          });
        });
  
    return(
      <div>
  <div style={{display:'flex', flexDirection:'row', alignContent:'center',textAlign:'center',marginLeft:'550px'}}>
      <form className="w-100 px-5" onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <button style={{width:'100px',height:'40px', borderRadius:'20px',backgroundColor:'#3787B4',color:'white',marginRight:'70px'}}><Link href="/bookings">
      ← Back
      </Link></button>
        <h1 className="mt-5" style={{color:'#0a4668',fontSize:'30px', marginLeft:'70px'}}>Add New Booking:</h1>
       </div>
    <br></br>
    <br></br>
        <div className="mt-5">
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Service</label><br></br>
          <input name="service" id="service" type="text" className="form-control" onChange={handleServiceChange}  style={{border:' 1px solid #103E58'}}/>
        </div>
  
        <div className="mt-5">
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Doctor</label><br></br>
          <input name="doctor" id="doctor" type="text" className="form-control" onChange={handleDoctorChange} style={{border:' 1px solid #103E58'}}/>
        </div>
  
        <div className="mt-5">
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Start Time</label><br></br>
          <input name="starttime" id="starttime" type="text" className="form-control" onChange={handleStartTimeChange}  style={{border:' 1px solid #103E58'}}/>
        </div>
  
        <div className="mt-5">
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>End time</label><br></br>
          <input name="endtime" id="endtime" type="text" className="form-control" onChange={handleEndTimeChange}  style={{border:' 1px solid #103E58'}}/>
        </div>

        <div className="mt-5">
          <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Date</label><br></br>
          <input name="date" id="date" type="date" className="form-control" onChange={handleDateChange}  style={{border:' 1px solid #103E58'}}/>
        </div>
        
        <br></br><br></br>
          <button style={{width:'150px',height:'60px', borderRadius:'20px',backgroundColor:'#3787B4',color:'white'}} onClick={handleSubmit}>Add</button>
          <br></br><br></br><br></br><br></br>
          <img src="https://cdn.dayschedule.com/img/solutions/doctor-appointment-booking-calendar-app.png" width="400px" height="400px" style={{marginLeft:'50px',borderRadius:'50%'}} alt="Image" className="mb-8" />

          
        </form>
    </div>
    </div>
)
  

}
export default CreateBooking