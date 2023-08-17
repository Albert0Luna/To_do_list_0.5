import { useUser } from "../hooks/useUser"

export function Header () {
	const { user } = useUser();

	return (
		<header className="bg-stone-900 text-zinc-50 flex justify-center h-14 items-center tracking-wider">
		 {user && (
      <h1 className="text-2xl flex items-center">
        To-Do List App. Wellcome
        <span className="font-semibold text-teal-300 ml-2">{user}</span>
				<span className="ml-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://th.bing.com/th/id/OIP._CqiyLLU3tS403Z_QE0qGwHaFj?pid=ImgDet&rs=1"
            alt="User-img"
          />
        </span>
      </h1>
    )}
		</header>
	)
}