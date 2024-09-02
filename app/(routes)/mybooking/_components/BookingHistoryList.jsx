import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';
import Image from 'next/image';

function BookingHistoryList({ bookingHistory, type }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(bookingHistory);
  }, [bookingHistory]);

  const cancelAppointment = async (booking) => {
    try {
      // Call the API to cancel the booking
      const resp = await GlobalApi.deleteBooking(booking.id);
      if (resp) {
        // Update the UI by removing the canceled booking
        setBookings(bookings.filter(b => b.id !== booking.id));
        toast('Booking Cancelled Successfully!');
      }
    } catch (error) {
      toast('Error while canceling booking!');
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {bookings.map((booking, index) => (
        <div key={index} className='border rounded-lg p-4 mb-5'>
          <div className='flex gap-4'>
            {booking?.businessList?.length > 0 &&
              <Image 
                src={booking.businessList[0].images[0].url}
                alt='image'
                width={120}
                height={120}
                className='rounded-lg object-cover'
              />}
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold'>{booking.businessList[0].name}</h2>
              <h2 className='flex gap-2 text-primary'><User /> {booking.businessList[0].contactPerson}</h2>
              <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary' /> {booking.businessList[0].address}</h2>
              <h2 className='flex gap-2 text-gray-500'>
                <Calendar className='text-primary' />
                Service on: <span className='text-black'> {booking.date}</span>
              </h2>
              <h2 className='flex gap-2 text-gray-500'>
                <Clock className='text-primary' />
                Service at: <span className='text-black'> {booking.time}</span>
              </h2>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className={`mt-5 w-full ${booking.bookingStatus === 'Cancelled' ? 'bg-gray-300' : 'border-red-300'}`}
                disabled={booking.bookingStatus === 'Cancelled'}
              >
                {booking.bookingStatus === 'Cancelled' ? 'Cancelled Appointment' : 'Cancel Appointment'}
              </Button>
            </AlertDialogTrigger>
            {booking.bookingStatus !== 'Cancelled' && (
              <AlertDialogContent className='bg-slate-50'>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently cancel your booking
                    and update its status to "Cancelled".
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => cancelAppointment(booking)}
                  >Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      ))}
    </div>
  );
}

export default BookingHistoryList;
