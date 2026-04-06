import Info from "./Info";
import BtnLink from "./BtnLink";
import { useState } from "react";

export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow");

  function handleClick(ev) {
    alert("Seguindo!");
    setFollowText("Following");
  }

  return (
    <div className="flex flex-col items-center max-w-2xl gap-4 p-6 mx-auto bg-gray-200 rounded-2xl mt-30">
      <img
        src={props.avatar}
        alt={props.name}
        className="object-cover w-48 h-48 border-4 border-white rounded-full shadow-md"
      />
      <h1 className="text-2xl font-bold text-center">{props.name}</h1>

      <p className="px-4 text-center text-gray-700">{props.bio}</p>

      <div className="w-full space-y-2 text-center">
        <Info className="text-gray-600">{props.phone}</Info>
        <Info className="text-gray-600">{props.email}</Info>
      </div>

      <BtnLink className="flex justify-center gap-4 mt-2">
        <BtnLink
          href={props.githubUrl}
          className="px-5 py-2 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
        >
          GitHub
        </BtnLink>
        <BtnLink
          href={props.linkedinUrl}
          className="px-5 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          LinkedIn
        </BtnLink>
      </BtnLink>

      <button
        className="px-5 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
        onClick={handleClick}
      >
        {followText}
      </button>
    </div>
  );
}
