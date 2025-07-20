"use client";

interface Testimonial {
  name?: string;
  postData?: string;
  image?: string;
  text: string;
}

export default function NewFeedbackCard({ text }: Testimonial) {
  return (
    <div className="bg-white rounded-xl cursor-pointer shadow-md p-6 flex flex-col items-start sm:min-h-[410px] md:min-h-[300px] mx-auto w-full lg:min-h-[360px] xl:min-h-[280px] 2xl:min-h-[240px] lg:w-[285px] xl:w-[350px] 2xl:w-[450px] transition-all duration-300 ease-in-out">
      <p className="text-gray-600 text-sm text-start leading-relaxed flex-grow">
        {`"${text}"`}
      </p>
    </div>
  );
}
