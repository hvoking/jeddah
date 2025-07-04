// App imports
import { Layout } from './layout';
import { Sidebar } from './sidebar';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
	return (
		<ContextProvider>
			<div className="wrapper">
				<Sidebar/>
				<Layout/>
			</div>
		</ContextProvider>
	)
}

App.displayName="App";