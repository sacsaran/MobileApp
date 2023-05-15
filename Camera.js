// import {camera, cameraType} from 'expo-camera';
// import {useState} from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function App(){
// const [type, settype]=useState(cameraType.back);
// const[persmission, requestPermission]=camera.useCameraPersmissions();

// function toggleCameratype(){

// settype(current=>(current=== cameraType.back? cameraType.front:cameraType.back));
// console.log("camera:",type)
// }


// if(!persmission||!PermissionStatus.granted){

//     return (<Text>No Access to camera</Text>)
// }else {

//     return(
// <view style ={styles.container}>
// <camera style={styles.camerav } type={type}>
// <view style ={styles.buttonContaine}>
// <TouchableOpacity style={styles.button}onpress={toggleCameratype}>

// </TouchableOpacity>
// </view>

// </camera>

// </view>



//     )
// }
// }






import { Camera, cameraType } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [type, setType] = useState(cameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(current => (current === cameraType.back ? cameraType.front : cameraType.back));
    console.log("camera:", type);
  }

  if (!permission || permission.status !== 'granted') {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text>Toggle Camera Type</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
