"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { motion } from 'framer-motion'

function Header() {
    const { data } = useSession();

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <motion.div 
            className='p-5 shadow-sm flex justify-between bg-[#ffffff]'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex items-center gap-8'>
                <motion.div whileHover={{ scale: 1.1 }} className='rounded-xl'>
                    <Image src='/llogo.jpg' alt='logo' width={180} height={100} className='rounded-xl cursor-pointer' />
                </motion.div>
                <div className='md:flex items-center gap-6 font-semibold hidden'>
                    <motion.div whileHover={{ scale: 1.05, color: "#6B46C1" }}>
                        <Link href={'/'} className='cursor-pointer text-black hover:text-primary transition-all'>
                            Home
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, color: "#6B46C1" }}>
                        <Link href="/servicess" className='text-black hover:text-primary transition-all'>
                            Services
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, color: "#6B46C1" }}>
                        <Link href={'/footer'} className='text-black hover:text-primary transition-all'>
                            About Us
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div>
                {data?.user ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Image
                                    src={data?.user?.image}
                                    alt='user'
                                    width={40}
                                    height={40}
                                    className='rounded-full'
                                />
                            </motion.div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={'/mybooking'}>My Booking</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    :
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Button onClick={() => signIn('google')}>Login/Sign Up</Button>
                    </motion.div>
                }
            </div>
        </motion.div>
    )
}

export default Header;
