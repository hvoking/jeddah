// App imports
import { Logomarca } from './logomarca';
import { Description } from './description';
import { Footer } from './footer';
import './styles.scss';

export const Presentation = () => {
	return (
		<div className="client-presentation">
			<div></div>
			<Logomarca/>
			<Description/>
			<Footer/>
		</div>
	)
}

Presentation.displayName="Presentation";