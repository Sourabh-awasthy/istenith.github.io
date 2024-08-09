"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar1";
import Footer from '../../components/footer';
import Loader from "../../components/loader"; 

// Custom arrows for the slider
const CustomPrevArrow: React.FC<any> = (props) => (
  <div onClick={props.onClick} className="slick-prev">
    Previous
  </div>
);

const CustomNextArrow: React.FC<any> = (props) => (
  <div onClick={props.onClick} className="slick-next">
    Next
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log("Error loading topics: ", error);
      } finally {
        setTimeout(() => {
          setLoading(false); // Set loading to false after a 1000ms delay
        }, 2000);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <Loader />; // Show loader while fetching data
  }

  return (
    <>
<Navbar/>
      <div className="lg:text-[140px] md:text-8xl text-5xl   font-barlowb text-white lg:pt-20 lg:mx-20 mx-20 pt-4">
        PROJECTS
      </div>
      <div className="border-t-2 border-gray-200 md:mx-20 lg:mx-24 mx-4 lg:mt-0"></div>
      <div className="lg:w-9/12 md:w-8/12 sm:w-9/12 sm:m-auto lg:m-auto mx-6">
        <div className="lg:mt-16 md:mt-20 mt-12">
{/* for larger screen, use the slider below */}
          <div className="hidden  md:block">
            <Slider {...settings}>
              {topics.map((d: any) => (
                <motion.div
                  key={d._id}
                  className="bg-custom-white md:h-[600px] h-[450px] lg:w-[500px] lg:h-[369px] text-black rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-2">
                    <p className="lg:text-3xl font-actor md:text-3xl text-3xl md:mt-7 lg:mt-4 text-text-black mt-5">
                      {d.title.toUpperCase()}
                    </p>
                    <p className="lg:text-1xl font-actor md:mt-10 px-3 sm:py-7 pt-5 lg:py-0 md:py-0 lg:mt-0 md:px-8 text-text-black lg:px-7 lg:line-clamp-7">
                      {d.description}
                    </p>
                    <button className="bg-custom-black text-white fixed bottom-4 text-lg md:fixed md:bottom-6 font-actor px-6 py-1 rounded-xl lg:fixed lg:bottom-6">
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden">
            {topics.map((d: any, index: number) => (
<motion.div
  key={d._id}
  className="bg-custom-white text-black rounded-xl mb-6 p-4 transition-transform duration-300 ease-in-out hover:scale-105"
  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: .75 }}
>
  <div className="flex flex-col items-center justify-center gap-4 p-2">
    <p className="text-2xl font-actor text-text-black mb-3">
      {d.title.toUpperCase()}
    </p>
    <p className="text-base font-actor text-text-black mb-3">
      {d.description}
    </p>
    <button className="bg-custom-black text-white text-lg font-actor px-6 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
      Read More
    </button>
  </div>
</motion.div>
            ))}
          </div>
        </div>
        <div className='lg:h-28 h-0 '></div>
      </div>
      <Footer/>

    </>
  );
};

export default Projects;
