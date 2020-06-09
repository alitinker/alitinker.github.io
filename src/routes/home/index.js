import { h, Component } from 'preact';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO: Add later
//<FontAwesomeIcon icon={['fab', 'codepen']}/>

export default class Home extends Component {
	render() {
		return (
			<div class="grid-1">
				<div class={style.home}>
					<h1 class={style.heading}>Hi. I'm Alison Tinker.</h1>
					<p class={style.subheading}>Software developer, designer, and perpetual student.</p>
					<div class={style.iconbox}>
						<a href="https://www.linkedin.com/in/alison-tinker-04b46355/"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></a>
						<a href="https://github.com/alitinker"><FontAwesomeIcon icon={['fab', 'github']}/></a>
					</div>
				</div>
			</div>
		)
	}
}

