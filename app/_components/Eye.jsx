import React, { useEffect, useState } from 'react';

function Eye() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = Math.sqrt((window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2);
      setScale(1 + 0.2 * (distance / maxDistance));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eye w-full h-[40vw] md:h-[40vw] sm:h-[60vw] xs:h-[80vw] overflow-hidden relative">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('/sss.jpg')]">
        <div className="absolute flex flex-col md:flex-row gap-5 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <div className="relative flex items-center justify-center w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] sm:w-[20vw] sm:h-[20vw] rounded-full bg-slate-50">
            <div className="absolute w-[40%] h-[10%] bg-zinc-900 rounded-t-full top-[-15%] left-1/2 transform -translate-x-1/2"></div> {/* Left Eyebrow */}
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-transform duration-300 ease-out" style={{ transform: `scale(${scale})` }}>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] sm:w-[20vw] sm:h-[20vw] rounded-full bg-slate-50">
            <div className="absolute w-[40%] h-[10%] bg-zinc-900 rounded-t-full top-[-15%] left-1/2 transform -translate-x-1/2"></div> {/* Right Eyebrow */}
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-transform duration-300 ease-out" style={{ transform: `scale(${scale})` }}>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
