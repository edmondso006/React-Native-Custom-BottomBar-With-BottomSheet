import BottomSheet from '@gorhom/bottom-sheet';
import * as React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, } from 'react-native';
import Icon from 'react-native-ionicons';
import { Portal, PortalHost } from '@gorhom/portal';

const AddBottomSheet = () => {

	const bottomSheetRef = React.useRef<BottomSheet>(null);
	const snapPoints = React.useMemo(() => [-30, '75%'], []);

	const handleSheetChanges = React.useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	const onAddButtonPress = () => {
		bottomSheetRef?.current?.expand();
	}

   return ( 
   	<>
         <TouchableWithoutFeedback onPress={onAddButtonPress}>
                <Icon size={65} name='add-circle' color={'#00a16e'} />          
         </TouchableWithoutFeedback>
			{/* <Portal> */}
				<BottomSheet
					ref={bottomSheetRef}
					index={-1}
					snapPoints={snapPoints}
					onChange={handleSheetChanges}
					>
					<View style={styles.contentContainer}>
						<Text style={styles.bottomSheetTitle}>Add Customer</Text>
					</View>
				</BottomSheet>
			{/* </Portal> */}

			{/* <PortalHost name="custom_host" /> */}
      </>
   )
}

export default AddBottomSheet;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: 'grey',
	 },
	 contentContainer: {
		flex: 1,
		paddingLeft: 50
	 },
	 bottomSheetTitle: {
		 fontSize: 24,
		 fontWeight: '500'
	 }
});
  