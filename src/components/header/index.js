import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

// TODO Add later
{/* <Link activeClassName={style.active} href="/skills">skills</Link>
<Link activeClassName={style.active} href="/projects">projects</Link>
<Link activeClassName={style.active} href="/contact">contact</Link> */}

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">about</Link>
		</nav>
	</header>
);

export default Header;
