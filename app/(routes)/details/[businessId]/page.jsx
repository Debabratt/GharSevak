"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetail({ params }) {
  const { data, status } = useSession();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    if (params) {
      getBusinessById();
    }
  }, [params]);

  useEffect(() => {
    checkUserAuth();
  }, [status]);

  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then(resp => {
      setBusiness(resp.businessList);
    });
  };

  const checkUserAuth = () => {
    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    if (status === 'unauthenticated') {
      signIn('descope');
    }
  };

  if (status !== 'authenticated' || !business) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-8 md:py-20 px-4 md:px-36 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <BusinessInfo business={business} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="md:col-span-2">
            <BusinessDescription business={business} />
          </div>
          <div>
            <SuggestedBusinessList business={business} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
