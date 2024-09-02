"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


function CategorySidebBar() {


    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory]=useState();
    const params=usePathname();
    params.split('/')[2];

    useEffect(() => {
        getCategoryS();

    }, []);

    
    useEffect(()=>{
        params&&setSelectedCategory(params.split('/')[2])
      },[params]);

    const getCategoryS= () => {
        GlobalApi.getCategory().then(resp => {
            setCategories(resp.categories);
        }).catch(error => {
            console.error('Error fetching categories:', error);
        });
    }
    return (
        <div>
            <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>

            <div>
                {categories.map((category,index) => (
                    <Link href={`/search/${category.name}`}
                    
                    key={index} className={`flex gap-2 p-3 
                        border rounded-lg mb-3
                        md:mr-10 cursor-pointer
                        hover:bg-purple-50
                        hover:shadow-md
                       
                        hover:text-primary
                         hover:border-primary
                          ${selectedCategory==category.name&&
                  'border-primary text-primary shadow-md bg-purple-50'}
                         
                         `}>

             <Image
                src={category.icon.url}
                alt='icon'
                width={35}
                height={35}
                
             />
                        
                        <h2>{category.name}</h2>
                    </Link>
                ))
                }
                <div>

                </div>
            </div>
        </div>
    )
}

export default CategorySidebBar