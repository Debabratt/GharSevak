import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    name: 'John Doe',
    photo: '/deepakk.jpg',
    review: 'I recently discovered GharSevak’s painting and cleaning services, and I’m impressed by their affordability, thanks to the absence of middlemen, similar to their house hunting services. I’m delighted with the comprehensive service package, which includes tenant search, rental agreements, as well as house painting and cleaning',
  },
  {
    name: 'Jane Smith',
    photo: '/kamit.jpg',
    review: 'GharSevak’s AC and appliance repair services caught my attention recently, and I was delighted by their affordability, attributed to the absence of middlemen, akin to their house hunting offerings. The all-in-one service package, addressing both air conditioning and various appliances, was executed flawlessly, and I’m very satisfied with the high standard of their work.',
  },
  {
    name: 'Emily Johnson',
    photo: '/sss.jpg',
    review: 'Exploring GharSevak’s packers and movers services was a great experience. Their competitive pricing, achieved by cutting out intermediaries, mirrors the value they offer in house hunting. The comprehensive moving package, from careful packing to reliable transportation and unpacking, was executed flawlessly and with utmost care.',
  },
  // Add more reviews as needed
];

const ReviewCard = ({ review, index }) => {
  const [showFullReview, setShowFullReview] = useState(false);
  const toggleShowFullReview = () => setShowFullReview(!showFullReview);

  const reviewText = showFullReview ? review.review : review.review.substring(0, 100) + '...';

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={review.photo}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{review.name}</h3>
        </div>
      </div>
      <p className="text-gray-600">{reviewText}</p>
      {review.review.length > 100 && (
        <button
          onClick={toggleShowFullReview}
          className="text-[#4EB5AC] mt-2"
        >
          {showFullReview ? 'Show Less' : 'See More'}
        </button>
      )}
    </motion.div>
  );
};

function CustomerReviews() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
