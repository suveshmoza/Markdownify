const Nav = () => {
	return (
		<nav className="markdown-nav">
			<h1>
				<span className="magic">
					<span className="magic-text">Markdownify</span>
				</span>
			</h1>

			<div className="markdown-nav-links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/suveshmoza/markdown-editor"
				>
					<i className="fa-brands fa-github fa-2xl github-icon"></i>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
