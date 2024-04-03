import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import fundo from './assets/fundo.png';
import titulo from './assets/logo.png';
import eco from './assets/eco-title.png';

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
        <Text style={{color: '#F9FDED', fontWeight: 'bold',}}> Ecologia</Text>
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
        <Text style={{color: '#F9FDED', fontWeight: 'bold',}}>  Insetos  </Text>
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
        <Text style={{color: '#F9FDED', fontWeight: 'bold',}}>   Sobre   </Text>
      </Pressable>
      
    </View>
    </ImageBackground>
    
 //style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  );
}

function Ecologia({navigation}) {
  return (
    <ImageBackground source={fundo} resizeMode='cover' style={{flex: 1,justifyContent: 'center'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={eco} style={{ width: 300, height: 200, }} />
          <Text style={{ padding: 20, }}>A ecologia é a ciência que estuda as interações entre os organismos e seu ambiente. Ela examina como os seres vivos estão distribuídos e interagem entre si e com seu ambiente físico e químico. Isso envolve a análise de diferentes níveis de organização, desde populações individuais até ecossistemas e a biosfera como um todo.
               Dentro da ecologia, são investigados os padrões e processos que influenciam as populações e comunidades de organismos. Isso inclui o estudo da dinâmica populacional, distribuição geográfica, diversidade de espécies e interações entre elas, como competição, predação e mutualismo.
               A ecologia desempenha um papel fundamental na compreensão e na conservação dos sistemas naturais. Ao estudar como os seres vivos interagem entre si e com seu ambiente, podemos desenvolver estratégias para a gestão sustentável dos recursos naturais e para a proteção da biodiversidade em nosso planeta.
          </Text>
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
        }} onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
    </ImageBackground>
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
