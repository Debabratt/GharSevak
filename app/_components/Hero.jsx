import { motion } from "framer-motion";

const App = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleAnimationChildren = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const explainAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.8,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const circleAnimation = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 3.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
    data-scroll 
    data-scroll-section 
    data-scroll-speed="-.3"
    
    className="h-screen px-4 md:px-12 relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AC7139] blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#749CB6] blur-[80px] md:blur-[100px]" />
      <div>
        <motion.img
          src="/foot.jpg"
          alt="art"
          className="w-[50px] md:w-[100px] absolute top-[80px] right-[20px] md:top-[100px] md:right-[380px] animate-spin-slow"
          variants={circleAnimation}
          initial="hidden"
          animate="show"
        />
      </div>

      <section className="h-[calc(100vh-80px)] flex flex-col items-center justify-center relative">
        <div className="absolute left-[20px] top-[100px] md:left-[200px] md:top-[200px] h-[50px] md:h-[100px] flex items-center overflow-hidden">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="show"
            className="flex text-4xl md:text-6xl font-bold text-[#e6951d] drop-shadow-lg z-50"
          >
            {Array.from("GharSevak").map((letter, idx) => (
              <motion.span key={idx} variants={titleAnimationChildren}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="w-[300px] md:w-[500px] m-auto">
          <motion.img
            src="/hh.jpg"
            alt="art"
            className="object-cover"
            variants={imgAnimation}
            initial="hidden"
            animate="show"
          />
        </div>
        <motion.div
          className="bg-[#0e0e0e] p-2 md:p-4 w-[250px] md:w-[300px] absolute bottom-[100px] md:bottom-[150px] right-[20px] md:right-[200px] drop-shadow-lg z-50"
          variants={explainAnimation}
          initial="hidden"
          animate="show"
        >
          <p className="text-[#eaeaea] text-xs md:text-sm text-justify">
            Transform your home effortlessly with our expert services. Quick, reliable, and tailored to your every need.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
