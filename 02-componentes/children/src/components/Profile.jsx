import Info from "./Info";
import BtnLink from "./BtnLink";

export default function Profile(props) {
  return (
    <div className="bg-gray-200 rounded-2xl flex flex-col items-center gap-4 max-w-2xl mx-auto p-6 mt-30">
      <img
        src={props.avatar}
        alt={props.name}
        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
      />
      <h1 className="font-bold text-2xl text-center">{props.name}</h1>

      <p className="text-gray-700 text-center px-4">{props.bio}</p>

      <div className="text-center space-y-2 w-full">
        <Info className="text-gray-600">{props.phone}</Info>
        <Info className="text-gray-600">{props.email}</Info>
      </div>

      <div className="flex gap-4 justify-center mt-2">
        <BtnLink
          href={props.githubUrl}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors"
        >
          GitHub
        </BtnLink>
        <BtnLink
          href={props.linkedinUrl}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          LinkedIn
        </BtnLink>
      </div>
    </div>
  );
}
