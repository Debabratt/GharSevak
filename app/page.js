"use client"
import React, { useEffect, useState } from "react";
import CategoryS from "./_components/CategoryS";
import GlobalApi from "./_services/GlobalApi";
import Hero from "./_components/Hero";
import BusinessList from "./_components/BusinessList";
import Marque from "./_components/Marque";
import Eye from "./_components/Eye";
import Membership from "./_components/Membership";
import LocomotiveScroll from 'locomotive-scroll';
import Services from "./_components/Services";
import Footer from "./_components/Footer";
import Faqs from "./_components/Faqs";
import Customer from "./_components/Customer";
import Repair from "./_components/Repair";


export default function Home() {
  const [categories, setCategories] = useState([]);
  const [businessList,setBusinessList]=useState([]);
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    getCategoryS();
    getAllBusinessList();
  }, []);

  const getCategoryS = () => {
    GlobalApi.getCategory().then(resp => {
      setCategories(resp.categories);
    }).catch(error => {
      console.error('Error fetching categories:', error);
    });
  };
  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
};

  return (
    <div>

      <Hero />
      <Marque/>
      <Eye/>
      <CategoryS categories={categories} />
      <BusinessList businessList={businessList}  
     title={'Popular Services'}/>
     <Membership/>
     <Repair/>
     <Customer/>
     <Faqs/>
     <Services/>

     <Footer/>
    </div>
  );
}
