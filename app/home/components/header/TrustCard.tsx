

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TrustCard = () => {
  const apis = [
    {
      id: 1,
      number: "5K+",
      text: "Businesses Trust Us",
    },
    {
      id: 2,
      number: "40%",
      text: "Cost Reduction",
    },
    {
      id: 3,
      number: "24",
      text: "Response Time",
    },
    {
      id: 4,
      number: "98%",
      text: "Satisfaction Rate",
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-8 gap-3  sm:grid-cols-2 lg:grid-cols-4 gap-x-4 px-4">
      {apis.map((api) => (
       <Card className="relative mx-auto w-full max-w-sm pt-0" key={api.id}>
     
     <CardHeader>
        <CardTitle><h1 className="text-3xl text-[#003773] font-bold px-2">{api.number}</h1></CardTitle>
        <CardDescription>
         <p className="text-[#0057FB]">{api.text}</p>
        </CardDescription>
      </CardHeader>

    
    </Card>
      ))}
    </div>
  );
};

export default TrustCard;

//  <div
//           key={api.id}
//           className="flex flex-col items-center justify-center gap-2 text-center "
//         >
//           <h1 className="text-3xl text-[#003773] font-bold">{api.number}</h1>

//           <p className="text-[#0057FB]">{api.text}</p>
//         </div>


