import { Button } from "@/components/ui/button"
import {
  Card,
//   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Form() {
  return (
    <div className="w-full flex justify-center px-4">
        <Card className="w-10/12 my-5">
      <CardHeader>
        <CardTitle><h1 className="text-[#003773]">Get In Touch With Us</h1></CardTitle>
        <CardDescription>
            <p className="text-[#003773]">Reach out for inquiries, support, or feedback. Fill out the form, and we'll get back to you promptly.</p>
          
        </CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label className="text-[#003773]" htmlFor="fname">First Name</Label>
              <Input
              className="text-[#0075BF] placeholder:text-[#0075BF]"
                id="fname"
                type="text"
                placeholder="enter your first name"
                required
              />
            </div>
             <div className="grid gap-2">
              <Label className="text-[#003773]" htmlFor="lname">Last Name</Label>
              <Input
                id="lname"
                 className="text-[#0075BF] placeholder:text-[#0075BF]"
                type="text"
                placeholder="enter your last name"
                required
              />
            </div>
            <div className="grid gap-2">
              {/* <div className="flex items-center"> */}
                <Label className="text-[#003773]" htmlFor="email">Email</Label>
              {/* </div> */}
              <Input  className="text-[#0075BF] placeholder:text-[#0075BF]" id="email" type="Email" required placeholder="enter your mail" />
            </div>
               <div className="grid gap-2">
              <Label className="text-[#003773]" htmlFor="number">Phone number</Label>
              <Input
               className="text-[#0075BF] placeholder:text-[#0075BF]"
                id="number"
                type="number"
                placeholder="enter your phone number"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#0075BF] text-white hover:bg-[#1187d1]">
          Send Message
        </Button>

      </CardFooter>
    </Card>
    </div>
    
  )
}
