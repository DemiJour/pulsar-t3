import Image from 'next/image';

export default function SiderBar() {
	const siderBarMenus = [
		{ name: "Dashboard", icon: "/icons/siderBarIcons/home.svg", status: false },
		{ name: "Servers", icon: "/icons/siderBarIcons/server.svg", status: false },
		{ name: "IP Addresses", icon: "/icons/siderBarIcons/monitor.svg", status: false },
		{ name: "Cloud Storage", icon: "/icons/siderBarIcons/database.svg", status: false},
		{ name: "Payments", icon: "/icons/siderBarIcons/credit-card.svg", status: false },
		{ name: "Settings", icon: "/icons/siderBarIcons/settings.svg", status: true },
	]

	return (
		<div className="h-screen w-[256px] bg-custom_black_1 flex flex-col gap-8 p-[25px] top-[60px]">
			<ul className='h-[338px]'>
				{siderBarMenus.map((menu, index) => (
					<li key={index} className={`my-1 flex items-center gap-[10px] py-[11px] pr-[15px] pl-[21px] rounded-[48px] ${menu.status ? 'bg-custom_purple_1': 'hover:bg-custom_black_2'}`}>
						<Image src={menu.icon} alt={`${menu.name} icon`} width={22} height={22} className="w-6 h-6" />
						<span className={`text-small cursor-pointer ${!menu.status ? 'text-custom_gray_2': 'text-white'}`}>{menu.name}</span>
					</li>
				))}
			</ul>
			<div className='bg-white w-full h-[1px] my-[23.22px]'></div>
		</div>
	);
}
