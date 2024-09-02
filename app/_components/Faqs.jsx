import React, { useState } from 'react';

function Faqs() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How to book a service on GharSevak?",
      answer: "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service."
    },
    {
      question: "Who is going to fulfill the service?",
      answer: "We will assign a GharSevak Partner to complete your service at your preferred time slot."
    },
    {
      question: "Who is a GharSevak Partner?",
      answer: "GharSevak Partners are selected individuals / companies who meet our stringent criteria for delivering quality home services."
    },
    {
      question: "What all services are available on GharSevak ?",
      answer: "We provide services like Home Painting, Home Cleaning, Electrician, Plumbing, Carpentry."
    }
  ];

  const styles = {
    faq: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    faqItem: {
      borderBottom: '1px solid #ccc',
      padding: '15px 0',
      display: 'flex',
      flexDirection: 'column',
    },
    faqQuestionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      width: '100%',
    },
    faqQuestion: {
      fontWeight: 'bold',
      fontSize: '18px',
      transition: 'color 0.3s ease',
    },
    faqQuestionHover: {
      color: '#007BFF',
    },
    faqAnswer: {
      marginTop: '10px',
      paddingLeft: '30px',
      color: '#555',
      fontSize: '16px',
    },
    plusIcon: {
      fontSize: '24px',
      transition: 'transform 0.3s ease',
    },
    plusIconRotate: {
      transform: 'rotate(45deg)',
    },
    '@media (max-width: 768px)': {
      faqQuestion: {
        fontSize: '16px',
      },
      faqAnswer: {
        fontSize: '14px',
      },
      plusIcon: {
        fontSize: '20px',
      },
    },
  };

  return (
    <div style={styles.faq}>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div
            style={{
              ...styles.faqQuestionContainer,
              ...(selectedQuestion === index ? styles.faqQuestionHover : {}),
            }}
            onClick={() => toggleQuestion(index)}
          >
            <div style={styles.faqQuestion}>
              {faq.question}
            </div>
            <div
              style={{
                ...styles.plusIcon,
                ...(selectedQuestion === index ? styles.plusIconRotate : {}),
              }}
            >
              +
            </div>
          </div>
          {selectedQuestion === index && <div style={styles.faqAnswer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Faqs;
