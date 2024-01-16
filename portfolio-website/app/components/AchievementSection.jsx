import React from "react";

const achievementsList = [
    {
      metric: "Projects",
      value: "100",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Users",
      value: "100,000",
    },
    {
      metric: "Awards",
      value: "7",
    },
    {
      metric: "Years",
      value: "5+",
    },
  ]; 
  
const AchievementSection = () => {  
    return ( 
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-centre justify-between">
            {achievementsList.map((achievement, index) => {
            return ( 
                <div key={index} className="flex flex-col items-center justify-centre mx-4">
                    <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                    <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                </div>
            )
            })} 
        </div> 
        </div>

    );

}; 
export default AchievementSection; 