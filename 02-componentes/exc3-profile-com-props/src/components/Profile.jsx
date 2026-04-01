export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
}) {
  return (
    <div className="bg-gray-200 rounded-2xl flex flex-col items-center gap-4 max-w-2xl mx-auto p-6 mt-30">
      <img
        src={avatar}
        alt={name}
        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
      />

      <h1 className="font-bold text-2xl text-center">{name}</h1>

      <p className="text-gray-700 text-center px-4">{bio}</p>

      <div className="text-center space-y-2 w-full">
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{email}</p>
      </div>

      <div className="flex gap-4 justify-center mt-2">
        <a
          href={githubUrl}
          target="_blanck"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href={linkedinUrl}
          target="_blanck"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
