import Image from "next/image";

interface Testimonial {
  name: string;
  username: string;
  image: string;
  text: string;
}

export default function FeedbackCard({
  name,
  username,
  image,
  text,
}: Testimonial) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start min-h-[220px] mx-auto w-full">
      <div className="flex flex-row items-center mb-4 gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mb-2">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-verde-musgo text-base">{name}</span>
          <span className="text-gray-500 text-sm">{username}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-start leading-relaxed">{text}</p>
    </div>
  );
}
