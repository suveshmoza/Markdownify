const Nav = () => {
	return (
		<nav className="markdown-nav">
			<a className="markdown-nav-logo">Markdownify</a>
			<div className="markdown-nav-links">
				<a
					target="__blank"
					href="https://github.com/suveshmoza/markdown-editor"
				>
					<i
						className="fa-brands fa-github fa-2xl"
						style={{ color: '#fff' }}
					></i>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
