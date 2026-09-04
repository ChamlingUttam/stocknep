import { privacyData } from "./apis";


export function PrivacyPolicy() {
  return (
    <div className=" p-10">
      <h1 className="text-[#033773] text-3xl font-semibold mb-8">
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-6">
        {privacyData.map((item, index) => (
          <div key={item.title} className="flex flex-col gap-2 pb-4">
            <h2 className="text-[#033773] text-lg font-medium">
              {index + 1}. {item.title}
            </h2>
            <p className="text-[#0057BF] text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}