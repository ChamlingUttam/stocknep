"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
//   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
// import { usePathname } from "next/navigation"

const menus = [
    {
        id:1,
        text:"Home",
        link:"/home"
    },
     {
        id:2,
        text:"About Us",
        link:"/about"
    }, {
        id:3,
        text:"Price",
        link:"/pricing"
    }, {
        id:4,
        text:"FAQs",
        link:"/faqs"
    }, {
        id:5,
        text:"Blogs",
        link:"/blogs"
    },
]
export function DropdownMenuBasic() {
  // const pathName = usePathname()

  // const currentPath = menus.find((menu)=> menu.link === pathName)
  return (
    <div>

    <DropdownMenu  >
      <DropdownMenuTrigger  render={<Button variant="outline" className={"lg:hidden block"}  >
        {/* {currentPath?.text || "Menu"} */}
        Menu
        </Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem> */}
          {
            menus.map((menu)=>(
                <DropdownMenuItem key={menu.id}  >
                    <Link href={menu.link}>
                     {menu.text}
                    </Link>
                    
                </DropdownMenuItem>
            ))
          }
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>

  )
}




