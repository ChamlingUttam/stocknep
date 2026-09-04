import Buttons from '@/app/home/components/header/Button';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const menus = [
  { id: 1, name: "Home ", link:"/home" },
  { id: 2, name: "About Us ", link:"/about" },
  // { id: 2, name: "Features" , link:"/features"},
  { id: 3, name: "Price" ,link:"pricing"},
  { id: 4, name: "FAQs", link:"/faqs" },
  { id: 5, name: "Blogs", link:"/blogs" },
 
];
  return (
    <div className='w-full border border-[#003773] lg:px-10 lg:py-6 px-4 py-4 flex justify-between items-center'>
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
      <div className='flex gap-2 items-center'>
        <div>

        <button className='bg-blue-500 border border-none  px-6 py-2 text-white lg:block hidden'>Get Started</button>
        </div>

        <div>

        <button className='bg-blue-500 border border-none  lg:px-6 lg:py-2 px-4  text-white lg:hidden block'>Menu</button>
        </div>
     {/* <div>
  <button onClick={} className="rounded-md border border-[#0075BF] px-5 py-2 text-sm font-medium text-[#0075BF] transition-colors hover:bg-[#0075BF] hover:text-white">
    Contact us
  </button>
</div> */}
<Link
      href="/contactus"
      className="rounded-md border border-[#0075BF] lg:px-5 lg:py-2 px-4 py-1 text-center text-sm font-medium text-[#0075BF] transition-colors hover:bg-[#0075BF] hover:text-white inline-block"
    >
      Contact us
    </Link>

        
        </div>    

      </div>
    </div>
  )
}

export default Navbar
