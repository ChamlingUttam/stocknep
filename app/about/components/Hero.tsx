// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { Building2 } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="w-full flex justify-between  gap-10  ">
//       {/* Left side */}
//       <div className="flex flex-col lg:flex-col gap-4 p-10">
//         <div className="flex  gap-2 ">
//           <Building2 className="text-[#0057FF]" size={18} />
//           <span className="text-[#0057FF] text-sm">Made in Nepal, for Nepali Businesses</span>
//         </div>

//         <h1 className="text-[#003773] font-sans text-5xl">
//           Simplifying Inventory <br /> Management for Nepal's Growing Businesses
//         </h1>

//         <p className="text-[#0057FF] mb-10">
//           StockNep is Nepal's first comprehensive inventory management platform designed
// specifically for local businesses. We help shops, wholesalers, and manufacturers 
// across Nepal track stock, manage suppliers, and grow their business with confidence.
//         </p>

//         <div className="flex gap-4 lg:flex-row flex-col">
//           <Button className="bg-[#0057FF] text-white ">
//             Start 14-day free trial
//           </Button>
//           <Button variant={'outline'} className="bg-white text-[#003773]">
//             View demo videos
//           </Button>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className=" w-2/2  h-[500px] relative">
//         <Image
//           src="/aboutImage.png"
//           alt="Product preview"
//           fill
//           className="object-cover"
//         />
//       </div>

  
//     </div>
//   );
// };

// export default Hero;





import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className=" border-b border-gray-400 w-full flex flex-col lg:flex-row justify-between items-center gap-10 px-6 lg:px-10 py-10">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="flex gap-2">
          <Building2 className="text-[#0057FF]" size={18} />
          <span className="text-[#0057FF] text-sm">Made in Nepal, for Nepali Businesses</span>
        </div>

        <h1 className="text-[#003773] font-sans text-3xl lg:text-5xl">
          Simplifying Inventory <br className="hidden lg:block" /> Management for Nepal's Growing Businesses
        </h1>

        <p className="text-[#0057FF] mb-6 lg:mb-10">
          StockNep is Nepal's first comprehensive inventory management platform designed
          specifically for local businesses. We help shops, wholesalers, and manufacturers
          across Nepal track stock, manage suppliers, and grow their business with confidence.
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <Button className="bg-[#0057FF] text-white">
            Start 14-day free trial
          </Button>
          <Button variant="outline" className="bg-white text-[#003773]">
            View demo videos
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative">
        <Image
          src="/aboutImage.png"
          alt="Product preview"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;