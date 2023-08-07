const Nav = () => {
	return (
		<nav className="bg-slate-100 flex justify-between items-center">
			<h1>
				<span className="magic px-4">
					<span className="magic-text">Markdownify</span>
				</span>
			</h1>

			<div className="px-4">
				<a
					className="px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors ease-out duration-200"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/suveshmoza/markdown-editor"
				>
					Contribute<i className="fa-brands fa-github fa-xl ml-1"></i>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
