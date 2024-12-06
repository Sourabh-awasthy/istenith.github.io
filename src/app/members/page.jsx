"use client";
import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, useQuery, gql, ApolloProvider } from '@apollo/client';
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from 'next/link';
import Image from 'next/image';
import { motion ,useScroll} from 'framer-motion';
import Navbar from '@/components/navbar1';
import Footer from '../../components/footer';
import Loader from "../../components/loader"; // Import the loader component
import SkeletonLoader from "../../components/skeltonloader";
const client = new ApolloClient({
  uri: process.env.GRAPH_QL_URI || 'https://istenith-github-io.onrender.com/graphql/',
  cache: new InMemoryCache(),
});

const GET_MEMBERS = gql`
  {
    members {
      name
      section
      post
      linkedin
      instagram
      img
      rollNumber
      branch
      location
      about
    }
  }
`;

const Team = () => {
  
  const [initialYear, setYear] = useState("final");
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Renamed this loading state to avoid conflict

  const { loading, error, data } = useQuery(GET_MEMBERS, {
    client,
    fetchPolicy: 'cache-first',
  });

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Simulate data fetching or any other asynchronous operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

    // Handle the image loader (appears until image is loaded or 2 seconds pass)
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImage(true); // Show image after 2 seconds
      }, 5000);
  
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);
  
    const handleImageLoad = () => {
      setLoading(false); // Image is fully loaded
      setShowImage(true); // Show the image
    };

  if (isLoading || loading) { // Check both loading states
    return <Loader />;
  }
 



  const filteredProfiles = data.members.filter(profile => profile.section === initialYear);

  const getFontSize = (year) => {
    switch (year) {
      case 'second':
        return 'text-3xl md:text-5xl lg:text-5xl';
      case 'final':
      case 'Third':
      case 'first':
        return 'text-3xl md:text-5xl lg:text-6xl';
      default:
        return 'text-3xl md:text-5xl lg:text-6xl';
    }
  };

  return (
  <>
<Navbar/>
<motion.div
      style={{ scaleY: scrollYProgress }}
      className="fixed top-0 right-0 bottom-0 w-2 bg-custom-white origin-top z-50"
    />




    <div className="min-h-screen bg-[#171616]  text-white">
      <div className="bg-[#171616] lg:w-full top-0 z-50">
        <div className="lg:ml-16  mx-auto lg:px-0 pt-20 text-[50px] md:text-6xl font-actor text-center lg:text-start">ISTE NITH</div>
        <div className="border-t-2 border-white mx-auto -mt-2  lg:my-1 w-10/12 lg:w-11/12"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-16 pt-24 lg:pt-0 lg:mt-10   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 w-full md:w-full lg:w-9/12 lg:mx-12">
          {filteredProfiles.map((details, index) => (
            <motion.div
              className="w-full mb-6 md:mb-8 lg:mb-0"
              key={`${initialYear}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">


              {!showImage ? (
                        <SkeletonLoader />
                      ) : (
                        <Image
                        src={details.img}
                        alt={details.name}
                        width={256}
                        height={256}
                        quality={100}
                        unoptimized={true}
      
                        className="h-64 w-64 border-4 border-white rounded-lg shadow-md transition-transform transform group-hover:scale-105 hover:shadow-xl  duration-300 mx-auto"
                      />
                      )}
                   

                <div className="lg:absolute lg:bottom-2 md:right-32 lg:right-4 absolute bottom-2 ml-52 bg-[#1E1E1E] flex text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {details.instagram && (
                    <Link href={details.instagram} target="_blank" className="flex items-center justify-center ml-2 h-8 w-8">
                      <FaInstagram />
                    </Link>
                  )}
                  {details.linkedin && (
                    <Link href={details.linkedin} target="_blank" className="flex items-center justify-center mr-2 h-8 w-8">
                      <TiSocialLinkedin />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-0 h-44 pt-2 bg-opacity-70 px-16 lg:px-3 rounded-b-lg lg:text-start text-center">
                <motion.div className="lg:text-[12xl]  font-namelight text-[#D4CCCC]">
                  {details.name}
                </motion.div>
                <motion.p className="text-[13xl] font-fontsemi  text-[#D4CCCC]">
                  {details.post}
                </motion.p>
                <motion.p className="text-[12xl] text-[#D4CCCC] font-namelight">
                  {details.branch}
                </motion.p>
                <motion.p className="text-[12xl] text-[#D4CCCC] font-namelight">
                  {details.location}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start  lg:right-12 lg:mt-0 -mt-36 ">
          <div className={`font-barlow ${getFontSize(initialYear)} font-f2 flex flex-row lg:flex-col items-center lg:items-start text-center lg:text-left`}>
            <div>{initialYear.toUpperCase()}</div>
            <div className="lg:mt-2 ml-2 lg:ml-0">YEAR</div>
          </div>

          <div className="flex flex-col items-center lg:items-start w-full mt-0 mb-8 lg:mt-80">
            <div className="sm:border-t-2 sm:border-white sm:w-3/4 lg:w-full mx-auto mb-4"></div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-0 lg:-ml-8 sm:ml-0">
              <div className="border-2 lg:border-hidden border-white rounded-lg sm:p-2 lg:p-0 lg:text-2xl text-1.3xl text-center transition-transform transform font-actor hover:scale-105">
                <button onClick={() => setYear('final')} className="w-full ">FINAL YEAR</button>
              </div>
              <div className="border-2 lg:border-hidden border-white rounded-lg sm:p-2 lg:p-0 lg:text-2xl text-1.3xl text-center transition-transform font-actor transform hover:scale-105">
                <button onClick={() => setYear('Third')} className="w-full ">THIRD YEAR</button>
              </div>
              <div className="border-2 border-white lg:border-hidden rounded-lg sm:p-2 lg:ml-8 lg:p-0 lg:text-2xl text-1.3xl text-center transition-transform font-actor transform hover:scale-105">
                <button onClick={() => setYear('second')} className="w-full ">SECOND YEAR</button>
              </div>
              <div className="border-2 border-white lg:border-hidden rounded-lg sm:p-2 lg:p-0 lg:text-2xl text-1.3xl text-center transition-transform font-actor transform hover:scale-105">
                <button onClick={() => setYear('first')} className="w-full ">FIRST YEAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <Footer/>

    </>
  );
};

const TeamWithApollo = () => (
  <ApolloProvider client={client}>
    <Team />
  </ApolloProvider>
);


export default TeamWithApollo;

