// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { landmarkData } from './dict';

const LandmarkApiContext: React.Context<any> = createContext(null)

export const useLandmarkApi = () => {
	return (
		useContext(LandmarkApiContext)
	)
}

export const LandmarkApiProvider = ({children}: any) => {
	const [ currentLandmark, setCurrentLandmark ] = useState<any>(null);

	return (
		<LandmarkApiContext.Provider value={{ landmarkData, currentLandmark, setCurrentLandmark }}>
			{children}
		</LandmarkApiContext.Provider>
	)
}

LandmarkApiContext.displayName = "LandmarkApiContext";