import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import fundo from './assets/fundo.png';
import titulo from './assets/logo.png';

function HomeScreen({navigation}){
  return(
    <ImageBackground source={fundo} resizeMode='cover' style={{flex: 1,justifyContent: 'center'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={titulo} style={{ width: 500, height: 200}} />
      <Pressable style={{flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 42,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#4A8D43',
            marginTop: 65,
            height: 60,
        }} onPress={()=>navigation.navigate("Ecologia")}>
        <Text> Ecologia</Text>
      </Pressable>
      <Pressable style={{flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 42,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#4A8D43',
            marginTop: 35,
            height: 60,
        }} onPress={()=>navigation.navigate("Insetos")}>
        <Text>  Insetos  </Text>
      </Pressable>
      <Pressable style={{flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 42,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#4A8D43',
            marginTop: 35,
            height: 60,
        }} onPress={()=>navigation.navigate("About")}>
        <Text>   Sobre   </Text>
      </Pressable>
      
    </View>
    </ImageBackground>
    
 //style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  );
}

function Ecologia({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Ecologia</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function Insetos({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Insetos</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function AboutScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de sobre</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen}/>
      <Stack.Screen name="Insetos" component={Insetos}/>
      <Stack.Screen name="Ecologia" component={Ecologia}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
