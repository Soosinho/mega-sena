import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Gerador de jogos da Mega Sena');
  return (
    <View style = { styles.container }>
      <Text style = { styles.text }>{ outputText }</Text>
      <Button title = "Gerar dezena" style = { styles.button } onPress={() => { setOutputText(megaSena()) }} />
    </View>
  );
}

function megaSena() {
  var conjunto = []
  for (let i = 0; i < 6; i++) {
    let num = 1 + Math.trunc(Math.random() * 100) % 60
    for(let j = 0; j <= conjunto.length; j++) {
      while (conjunto[j] == num) {
        num = 1 + Math.trunc(Math.random() * 100) % 60
      }
    }
    conjunto[i] = num
  }
  conjunto.sort(function(a, b){return a - b})

  const dezena = conjunto.join("   ")
  return dezena
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 20,
  },
});
