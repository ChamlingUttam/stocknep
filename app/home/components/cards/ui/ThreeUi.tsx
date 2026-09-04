
import React from "react";

const ThreeUi = () => {
  return (
    <div className=" p-4">
      <div className="space-y-2 rounded-lg border border-gray-100 bg-gray-50  dark:border-gray-700 dark:bg-gray-800">
        
        <div className=" text-center space-y-2 ">

            
         <h2 className="text-xl text-[#0075BF]  p-4 border-b border-gray-400 mb-5">RECIPT</h2>
            
          
          <dl className="flex items-center justify-between gap-4 text-[#0075BF]">
            <dt className="text-base font-normal ">
              Samsung
            </dt>

            <dd className="text-base font-medium">
              Rs 6,592.00
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4 text-[#0075BF]"  >
            <dt className="text-base font-normal ">
              Monitor
            </dt>

            <dd className="text-base font-medium ">
              Rs 299.00
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4 text-[#0075BF]">
            <dt className="text-base font-normal">
             Mouse
            </dt>

            <dd className="text-base font-medium ">
              Rs 99
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4 text-[#0075BF]">
            <dt className="text-base font-normal ">
              Office Chair
            </dt>

            <dd className="text-base font-medium ">
              Rs 799
            </dd>
          </dl>

        </div>

        <dl className="flex items-center justify-between gap-4 text-[#0057FB] border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold ">
            Total Amount
          </dt>

          <dd className="text-base font-bold ">
            Rs 7,191.00
          </dd>
        </dl>

      </div>
    </div>
  );
};

export default ThreeUi;
