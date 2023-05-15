// import { camera, cameraType, onCameraReady, cameraPictureOptions } from 'expo-camera';
// import { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// export default function CameratakePicture(){

// const[type, setype]=useState(cameraType.back)
// const[persmission, requestPermission]=camera.useCameraPersmissions();
// const[camera, setcamera]=useState(null);

// function toggleCameratype(){

//     setype(current=>(current===cameraType.back?cameraType.front:cameraType.back));
//     console.log("camera:", type)
// }

// async function takephoto(){
//     if(camera){
//         const options={quality:0.5,base64:true}
//         const data=await camera.takepicturesAsync(options)
//         console.log(data.url)
//     }
// }

// if(!Permissions||!persmission.granted){
//     return (<Text> No access to camera</Text>)
// }else
// return(

//     <view style={stylesheet.container}> 
//     <camera styles={styles.camera}type={type} ref={ref=>setcamera(ref)}>
//     <view styles={styles.buttonContainer}>

//         <TouchableOpacity style ={styles.button}onpress={toggleCameratype}>
//             <Text style={styles.Text}>FLip Camera</Text>
//         </TouchableOpacity>
//     </view>

// <view style={styles.buttonContainer}>
// <TouchableOpacity style={styles.button}onpesse={TakePhoto}>
//     <Text style={style.text}>Take Photo</Text>
// </TouchableOpacity>

// </view>

//     </camera>
    
//     </view>
// )


// }



import { camera, cameraType, onCameraReady, cameraPictureOptions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function cameratakePicture(){

  const [type, setType] = useState(cameraType.back)
  const [permission, requestPermission] = camera.useCameraPersmissions();
  const [camera, setCamera] = useState(null);

  function toggleCameraType(){
    setType(current => (current === cameraType.back ? cameraType.front : cameraType.back));
    console.log("camera:", type)
  }

  async function takePhoto(){
    if(camera){
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      console.log(data.uri)
    }
  }

  if(!permission || !permission.granted){
    return (<Text> No access to camera</Text>)
  } else {
    return (
      <View style={styles.container}> 
        <camera style={styles.camera} type={type} ref={ref => setCamera(ref)}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </camera>
      </View>
    )
  }
}
