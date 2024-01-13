"use client";
import React, { useTransition, useState } from 'react';
import Image from  'next/image'; 
import TabButton from './TabButton';

const TAB_DATA =[ 
    { 
        title: "Skills",
        id: "skills", 
        content: ( 
            <ul className="list disc pl-2">
                <li>Node.js</li>
                <li>Java</li>
                <li>add more skills here </li>
            </ul>
        ) 
    }, 
    {
        title: "Education", 
        id: "education",
        content: (  
            <ul className="list disc pl-2">
            <li>Node.js</li>
            <li>Java- change</li>
            <li>add more skills here </li>
        </ul>
        ) 
    }, 
    {
        title: "Certifications", 
        id: "certifications",
        content: (  
            <ul className="list disc pl-2">
            <li>Node.js</li>
            <li>Java</li>
            <li>add more skills here - change</li>
        </ul>
        ) 
    }, 

]

const AboutSection = () => { 
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();  
    const handleTabChange = (id) => { 
        startTransition(() => { 
            setTab(id); 
        });
    };
    return ( 
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-centre py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>  
            <Image src="/images/about-image.png" width={500} height={500} aly="about image"/>
            <div className= "mt-4 md"mt-0 text-left flex flex-xol h-full>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam auctor nisl nec justo consequat, eget fringilla urna volutpat. 
                    Integer ac purus id mauris egestas aliquet. Fusce fermentum tristique dolor, 
                    vel convallis ipsum bibendum vel. Sed auctor turpis eget quam rhoncus 
                    tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et 
                    ultrices posuere cubilia Curae; 
                </p>   
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {" "}
                    Skills{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {" "}
                    Education{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab === "certifications"}
                    > 
                    {" "}
                    Certifications{" "} 
                    </TabButton>
                </div>
                 <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content} </div>
            </div>
            </div>
        </section> 

    );
};

export default AboutSection; 