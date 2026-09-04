// import { redirect } from "next/navigation";

// export default function page() {
//   redirect("/#faqs");
// }


import React from 'react'
import Faq from './components/Faq'

const page = () => {
  return (
    <div>
      <Faq/>
    </div>
  )
}

export default page
