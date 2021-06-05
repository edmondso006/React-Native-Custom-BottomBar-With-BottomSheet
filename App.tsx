/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { PortalProvider } from '@gorhom/portal';

 const App = () => {

   return (
     <SafeAreaProvider>
		  <PortalProvider>
			  <Navigation />
		  </PortalProvider>
     </SafeAreaProvider>
   );
 };

 export default App;
