import { gql, request } from 'graphql-request';


const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_MASTER_KEY}/master`;

if (!process.env.NEXT_PUBLIC_MASTER_KEY) {
  console.error('Environment variable NEXT_PUBLIC_MASTER_KEY is not set.');
}

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error('Error fetching category data:', error);
    throw error;
  }
};
const getAllBusinessList = async () => {
  const query = gql`
  query BussinessList {
  businessLists {
    about
    address
    category {
      name
    }
    contactPerson
    email
    images {
      url
    }
    id
    name
  }
}

    `
  const result = await request(MASTER_URL, query)
  return result;

}
const getBusinessByCategory = async (category) => {
  const query = gql`
  query MyQuery {
      businessLists(where: {category: 
          {name: "`+ category + `"}}) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
    `
  const result = await request(MASTER_URL, query)
  return result;
}

const getBusinessById=async(id)=>{
  const query=gql`
  query GetBusinessById {
  businessList(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
}
    }
  `
  const result=await request(MASTER_URL,query)
      return result;
}
const createNewBooking=async(businessId,date,time,userEmail,userName)=>{
  const mutationQuery=gql`
  mutation CreateBooking {
  createBooking(
    data: {bookingStatus: process,
     businessList: {connect: {id: "`+businessId+`"}}, 
     date:  "`+date+`", time: "`+time+`", userEmail:"`+userEmail+`",
      userName: "`+userName+`"}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
}

  `
  const result=await request(MASTER_URL,mutationQuery)
  return result;
}
const BusinessBookedSlot=async(businessId,date)=>{
  const query=gql`
  query BusinessBookedSlot {
  bookings(where: {businessList_every: {id: "`+businessId+`"}, date: "`+date+`"}) {
    date
    time
  }
}

  `
  const result=await request(MASTER_URL,query)
  return result;
}
const GetUserBookingHistory=async(userEmail)=>{
  const query=gql`
  query GetUserBookingHistory {
  bookings(where: {userEmail: "`+userEmail+`"}
  orderBy: publishedAt_DESC)
   {
    businessList {
      name
      images {
        url
      }
      contactPerson
      address
    }
    date
    time
      bookingStatus
  }
}


  `
  const result=await request(MASTER_URL,query)
  return result;

}
const deleteBooking=async(bookingId)=>{
  const mutationQuery=gql`
  mutation DeleteBooking {
  updateBooking(
    where: {id: "cclyn950ju027t08o719zaufaj"}
    data: {userName: "RRRS", bookingStatus: Cancelled}
  ) {
    id
    bookingStatus
  }
}

  
  `

  const result=await request(MASTER_URL,mutationQuery)
  return result;

}

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking
};
