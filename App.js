import React, {useState} from 'react';
import { Alert, ScrollView, StatusBar  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Fs from './components/initialScreen'
import Ts from './components/tranlatorScreen'
import Bt from './components/buttonTranslator'
import Bx from './components/boxResults'
import Ws from './components/screenWord'

const Pilha=createStackNavigator();

function firstScreen({navigation}){
  return(
    <Fs onPress={()=>navigation.navigate('Dic')} onpress={()=>{navigation.navigate('test')}}/>
  )
}

function secondScreen({navigation}){

const [textoDigitado, setTextoDigitado]=useState("")
const [term, setTerm]=useState("Nada traduzido ainda")
const [sila, setSila]=useState("Nada traduzido ainda")
const [trad, setTrad]=useState("Nada traduzido ainda")
const [exe, setExe]=useState("Nada traduzido ainda")
const [ref, setRef]=useState("Nada traduzido ainda")

let confirmFounded=false
let counterNotFoundeds=0

const counterErrors=()=>{
  counterNotFoundeds+=1
  if(counterNotFoundeds == 5){
    Alert.alert("Alerta","Você excedeu o limite de palavras não encontradas, por causa disso estamos te encaminhando para uma tela com todas as palavras registradas")
    counterNotFoundeds=0
    navigation.navigate('wordScreen')
  }else{
    Alert.alert("Alerta", "Termo não encontrado, verifique o termo digitado ou digite outro!")
  }
}

    let defaultResult="Nada traduzido ainda"

    let palavras=["Board","Bus","Accuracy","Analog","Assembly","Cable","Calibration","Capacitor","Conductivity","Connections","Converter","Cooling"]
    
    let silaba=["board\n","bus\n","ac-cu-ra-cy\n","an-a-log\n","as-sem-bly\n","ca-ble\n","cal-i-bra-tion\n","ca-pa-ci-tor\n","con-duc-tiv-i-ty\n",
                "con-nec-tions\n","con-ver-ter\n","cool-ing\n"]
   
    let traducao=["placa\n","barramento\n","precisão\n","analógico\n","montagem\n","cabo\n","calibração\n","capacitor\n","condutividade\n","conexões\n","conversor\n","refrigeração\n"]
    
    let exemplos=["Copper printed circuit board connections where neglected in the analysis, however, they will sink or conduct heat directly through the AD592's solder dipped Kovar leads\n",
                  "DC Bus Test Points provide easy access for test probes when measuring DC Bus voltage\n",
                  "High Predicalibrated Accuracy: 0.58C max @ +258C\n",
                  "SF1 Analog Signal Follower\n",
                  "Static control precautions are required when installing, testing, servicing or reparing this assembly\n",
                  "Take care to route sensor cable away from AC power lines, adjustable frequency drives, motors, or other noisy electrical signal lines\n",
                  "Calibration Error @ +25°C1\n",
                  "Wait three minutes for capacitors to dischrage to safe voltage levels\n",
                  "The maximum flow rate specification is lower for process solutions with low ionic conductivity or high suspended solids concentration\n",
                  "Copper printed circuit board connections where neglected in the analysis, however, they will sink or conduct heat directly through the AD592's solder dipped Kovar leads\n",
                  "By using a differential input A/D converter and choosing the current to voltage conversion resistor correctly, any range of temperatures (up to the 130°C span the AD592 is rated for) centered at any point cant be measured using a minimal number of components. In this configuration the system will resolve up 1°C.\n",
                  "Coolinf Fan\n"
                ]
   
    let referencias=["https://www.moodlerje.com.br/pluginfile.php/912721/mod_page/content/2/AD592.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/888694/mod_page/content/8/Standard_Drive_Features.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/912721/mod_page/content/2/AD592.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/888694/mod_page/content/8/Standard_Drive_Features.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/888694/mod_page/content/8/Standard_Drive_Features.pdf" + "\n",
                     "https://moodlerje.com.br/pluginfile.php/919721/mod_page/content/2/M3697.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/912721/mod_page/content/2/AD592.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/888694/mod_page/content/8/Standard_Drive_Features.pdf" + "\n",
                     "https://moodlerje.com.br/pluginfile.php/919463/mod_page/content/2/M3697.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/912721/mod_page/content/2/AD592.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/912721/mod_page/content/2/AD592.pdf" + "\n",
                     "https://www.moodlerje.com.br/pluginfile.php/888694/mod_page/content/8/Standard_Drive_Features.pdf" + "\n"
                    ]

const termTranslator=()=>{
  if(textoDigitado==""){
    Alert.alert("Alerta","Digite o termo para que seja possível traduzir")
    setTerm("Nada digitado ainda")
    setSila("Nada digitado ainda")
    setTrad("Nada digitado ainda")
    setExe("Nada digitado ainda")
    setRef("Nada digitado ainda")
    return
  }
  for(i = 0; i<palavras.length;i++){
    if(textoDigitado == palavras[i]){
      setTerm(palavras[i] + "\n")
      setSila(silaba[i])
      setTrad(traducao[i])
      setExe(exemplos[i])
      setRef(referencias[i])
      confirmFounded=true
    }
  }
  if(confirmFounded == false){
    setTerm(defaultResult)
    setSila(defaultResult)
    setTrad(defaultResult)
    setExe(defaultResult)
    setRef(defaultResult)
    counterErrors()
  }
  confirmFounded=false
}   

let translationsWords=[term,sila,trad,exe,ref]

  return(
    <ScrollView>
      <Ts textChange={setTextoDigitado}/>
      <Bt onPress={termTranslator}/>
      <Bx tranWord={translationsWords}/>
    </ScrollView>
  )
}

function thirdScreen({navigation}){
  return(
    <Ws/>
  )
}

export default function App() {

  return (
    <>
      <StatusBar hidden={true}/>
      <NavigationContainer>
        <Pilha.Navigator>
          <Pilha.Screen
            name="Home"
            component={firstScreen}
            options={{title:'Tela inicial'}}
          ></Pilha.Screen>
          <Pilha.Screen
            name="Dic"
            component={secondScreen}
            options={{title:'Tela do Dicionário'}}
          ></Pilha.Screen>
          <Pilha.Screen
            name="wordScreen"
            component={thirdScreen}
            options={{title:'Tela de palavras registradas'}}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </>
  );

}