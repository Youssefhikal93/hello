import React from "react";
import { CardSection, InfoSection, SectionComponent3, SectionComponent4, SectionComponent5 } from ".";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export const HERO_TITLE = "Flowerwork in action"
export const NEWSLETTER_TEXT_TITLE = "Receive newsletters to explore FlowerWork";
export const NEWSLETTER_TEXT_INFO = "Leave your email to receive information about upcoming features"
export const NEWSLETTER_TEXT = "Send"


const hero = () => {
  return (
    <div className="flex flex-col items-center lg:gap-0">
      {/* // Section 1 */}
      <div className="w-full bg-neutral-700">
        <div className="max-w-[1440px] mx-auto px-6 h-[796px]">
          <h1 className="font-montserrat font-semibold text-[20px] leading-[26px] text-white">{HERO_TITLE}</h1>
          <InfoSection />
        </div>
      </div>
      {/* // Section 2 */}
      <div className="w-full bg-gradient-to-t from-teal-300 via-neutral-600 to-neutral-700">
        <div className="max-w-[1440px] mx-auto px-6 h-[787px]">
          <CardSection />
        </div>
      </div>

      {/* // Section 3 */}
      <SectionComponent3 />

      {/* Section 4 */}
      <SectionComponent4 />

      {/* Section 5 */}
      <SectionComponent5 />

      {/* Section 6 */}
      <div className="w-full flex flex-col items-center bg-neutral-800 py-10 px-4">
        <div className="text-center max-w-2xl w-full">
          <h1 className="font-montserrat text-[32px] font-bold text-white mb-6">
            {NEWSLETTER_TEXT_TITLE}
          </h1>
          <p className="font-opensans text-lg text-white leading-[25px] mb-2">
            {NEWSLETTER_TEXT_INFO}
          </p>
        </div>
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your e-mail..."
            className="flex-grow p-3 rounded-md border"
          />
          <Button type="submit" className="bg-purple-500 text-white font-bold px-4 py-2 rounded-md">
            {NEWSLETTER_TEXT}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default hero;
