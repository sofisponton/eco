import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import fundo from './assets/fundo.png';
import titulo from './assets/logo.png';
import eco from './assets/eco-titulo.png';
import insetos from './assets/insetos-titulo.png';
import sobre from './assets/sobre-titulo.png';
import prof from './assets/prof.png';
import borboleta from './assets/borboleta.png';
import ecofoto from './assets/eco-foto.png';

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

          <Image source={ecofoto} style={{ width: 80, height: 80, }}/>

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
        <Text  style={{color: '#F9FDED', fontWeight: 'bold'}}>Voltar</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}

function Insetos({navigation}) {
  return (
    <ImageBackground source={fundo} resizeMode='cover' style={{flex: 1,justifyContent: 'center'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={insetos} style={{ width: 300, height: 200, }} />
          <Text style={{ padding: 20, }}>Os insetos desempenham um papel crucial na ecologia como polinizadores, decompositores e reguladores de populações. Como polinizadores, são responsáveis pela reprodução de muitas plantas, incluindo várias culturas agrícolas, contribuindo para a produção de alimentos. Além disso, os insetos desempenham um papel importante na decomposição de matéria orgânica, ajudando a reciclar nutrientes e a manter a fertilidade do solo. Eles também atuam como reguladores de populações, controlando as populações de outros organismos, como plantas e outros insetos, e servindo como alimento para uma variedade de predadores.

A diversidade de insetos é um indicador da saúde ecológica de um ecossistema. Ecossistemas saudáveis geralmente possuem uma grande variedade de insetos, cada um desempenhando um papel específico na teia alimentar e nas interações ecológicas. A perda de diversidade de insetos pode ter efeitos cascatares em toda a cadeia alimentar e na estabilidade do ecossistema, afetando a disponibilidade de alimentos para outros organismos e reduzindo a resistência a perturbações ambientais.

Além disso, os insetos têm sido fonte de inspiração para inúmeras descobertas científicas e aplicações tecnológicas, desde a produção de seda até o desenvolvimento de novos medicamentos. Portanto, entender e conservar a diversidade de insetos é essencial para a manutenção da biodiversidade global e para o desenvolvimento sustentável de nossas sociedades.</Text>
      
     <Image source={borboleta} style={{ width: 80, height: 80, }}/>

      <Pressable style={{flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 42,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#4A8D43',
            marginTop: 25,
            height: 60,
        }} onPress={()=>navigation.goBack()}>
        <Text  style={{color: '#F9FDED', fontWeight: 'bold'}}>Voltar</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}

function AboutScreen({navigation}) {
  return (
    <ImageBackground source={fundo} resizeMode='cover' style={{flex: 1,justifyContent: 'center'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={sobre} style={{ width: 300, height: 200,  }} />
  
 
    <Image source={prof} style={{ width: 200, height: 200, marginTop:60 }}/>
    <Text> </Text>
        <Text>Nome: Sofia Sponton Lima</Text>
        <Text>RM: 07694</Text>


      <Pressable style={{flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 42,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: '#4A8D43',
            marginTop: 150,
            height: 60,
        }} onPress={()=>navigation.goBack()}>
        <Text  style={{color: '#F9FDED', fontWeight: 'bold'}}>Voltar</Text>
      </Pressable>
    </View>
    </ImageBackground>
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
