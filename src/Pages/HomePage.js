import React from 'react'
import BecomeTeacher from '../Components/BecomeTeacher';
import Facilities from '../Components/Facilities';
import HeroSection from '../Components/HeroSection';
import LearnMore from '../Components/LearnMore';
import SchoolClasses from '../Components/SchoolClasses';
import MakeAppointment from '../Components/MakeAppointment';
import PopularTeachers from '../Components/PopularTeachers';

const HomePage = () => {
   return <>
      <HeroSection />
      <Facilities />
      <LearnMore />
      <BecomeTeacher />
      <SchoolClasses />
      <MakeAppointment />
      <PopularTeachers />
   </>

}

export default HomePage