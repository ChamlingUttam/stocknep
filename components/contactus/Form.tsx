
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSendMessage } from "@/hooks/contact"


export function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [formMessage, setFormMessage] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    formMessage: "",
  });

  const {mutate: sendMessageMutation,isPending: isSending} = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setMessage("")

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      formMessage: "",
    };

    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(firstName.trim())) {
      newErrors.firstName = "First name can only contain letters.";
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(lastName.trim())) {
      newErrors.lastName = "Last name can only contain letters.";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone number must contain exactly 10 digits.";
    }

    // Message validation
    if (!formMessage.trim()) {
      newErrors.formMessage = "Message is required.";
    } else if (formMessage.trim().length < 10) {
      newErrors.formMessage = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    // Stop form submission if there are validation errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    setLoading(true)

    try {
     
      sendMessageMutation({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: formMessage
      }
      )
      setMessage("Message sent successfully!")

      setFirstName("")
      setLastName("")
      setEmail("")
      setPhoneNumber("")
      setFormMessage("");
    } catch (error: any) {
      console.error("Contact form error:", error)

      const errorData = error?.response?.data

      if (errorData && typeof errorData === "object") {
        const errors = Object.entries(errorData)
          .map(([field, messages]) => {
            if (Array.isArray(messages)) {
              return `${field}: ${messages.join(", ")}`
            }
            return `${field}: ${messages}`
          })
          .join(" ")

        setMessage(errors || "Failed to send message.")
      } else {
        setMessage("Failed to send message. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-center px-4">
      <Card className="w-10/12 my-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-[#003773]">Get In Touch With Us</h1>
          </CardTitle>

          <CardDescription>
            <p className="text-[#003773]">
              Reach out for inquiries, support, or feedback. Fill out the
              form, and we will get back to you promptly.
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label className="text-[#003773]" htmlFor="fname">
                  First Name
                </Label>

                <Input
                  className="text-[#0075BF] placeholder:text-[#0075BF]"
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="text-[#003773]" htmlFor="lname">
                  Last Name
                </Label>

                <Input
                  id="lname"
                  className="text-[#0075BF] placeholder:text-[#0075BF]"
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="text-[#003773]" htmlFor="email">
                  Email
                </Label>

                <Input
                  className="text-[#0075BF] placeholder:text-[#0075BF]"
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="text-[#003773]" htmlFor="number">
                  Phone number
                </Label>

                <Input
                  className="text-[#0075BF] placeholder:text-[#0075BF]"
                  id="number"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />

                {errors.phoneNumber && (
                  <p className="text-sm text-red-500">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="text-[#003773]" htmlFor="number">
                  Message
                </Label>

                <Input
                  className="text-[#0075BF] placeholder:text-[#0075BF]"
                  id="string"
                  type="tel"
                  placeholder="Enter your message"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  required
                />

                {errors.formMessage && (
                  <p className="text-sm text-red-500">
                    {errors.formMessage}
                  </p>
                )}
              </div>
            </div>

            {message && (
              <p className="mt-4 text-sm text-[#003773]">
                {message}
              </p>
            )}

            <CardFooter className="flex-col gap-2 px-0 pt-6">
              <Button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#0075BF] text-white hover:bg-[#1187d1]"
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
