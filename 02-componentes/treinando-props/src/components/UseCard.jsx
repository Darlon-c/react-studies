export default function UserCard({ avatar, name, role, active, badge, theme }) {
  return (
    <div
      className={`
        rounded-2xl p-6 flex flex-col items-center gap-4 w-64 shadow-md
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={avatar}
        alt={name}
      />
      <h2>
        {name}{" "}
        {badge && (
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </h2>
      <p>{role}</p>
      <p className={active ? "bg-green-100 text-green-700" : "bg-red-100"}>
        {active ? "Ativo" : "Inativo"}
      </p>
      <p></p>
    </div>
  );
}
