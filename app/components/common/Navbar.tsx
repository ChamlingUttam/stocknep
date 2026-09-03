import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const menus = [
  { id: 1, name: "About Us ", link:"/about" },
  { id: 2, name: "Features" , link:"/features"},
  { id: 3, name: "Price" ,link:"pricing"},
  { id: 4, name: "FAQs", link:"/faqs" },
  { id: 5, name: "Blogs", link:"/blogs" },
 
];
  return (
    <div className='w-full border border-[#003773] px-10 py-6 flex justify-between items-center'>
      <div>
        <Image src={"/Logo.png"} alt='logo' width={100} height={10}/>
      </div>
      <div className='flex gap-4'>
      <div className='hidden lg:block'>
        <ul  className='flex gap-2'>
          {menus.map((menu)=>(
            <li key={menu.id} className=' '>
              <Link href={menu.link}>
              <Button variant="ghost" className={"text-md text-[#004691] "}>{menu.name}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>       
      <div className=''>
        <div>

        <button className='bg-blue-500 border border-none  px-6 py-2 text-white lg:block hidden'>Get Started</button>
        </div>

        <div>

        </div>
        <button className='bg-blue-500 border border-none  px-6 py-2 text-white lg:hidden block'>Menu</button>
        </div>       

      </div>
    </div>
  )
}

export default Navbar
