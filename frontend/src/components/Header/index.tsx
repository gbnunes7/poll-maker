const Header: React.FC = () => {
	return (
		<div className="h-16 bg-white w-full border-b-[1px] flex items-center px-24 justify-between">
			<img src="#" alt="Logo for Poll Maker" />
			<div>
				<button>Home</button>
				<button>New Poll</button>
				<button>My Polls</button>
			</div>
			<div>
				<button>Login</button>
				<button>Sign Up</button>
			</div>
		</div>
	);
};

export default Header;
