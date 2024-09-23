"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyle,
  icon,
  endCountNum,
  endCountText,
  badgeText,
  badgeTextContent1,
  badgeTextContent2,
  badgeTextContent3,
  badgeTextContent4,
  badgeTextContent5,
}) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="leading-none text-[15px] font-medium text-black ">
          <p className="text-primary">{badgeText}</p>
          <p className="text-[12px] uppercase mt-2">{badgeTextContent1}</p>
          <p className="text-[12px] uppercase mt-1">{badgeTextContent2}</p>
          <p className="text-[12px] uppercase mt-1">{badgeTextContent3}</p>
          <p className="text-[12px] mt-1">{badgeTextContent4}</p>
          <p className="text-[12px] mt-1">{badgeTextContent5}</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
