import React, { useState } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  TouchableOpacity,  Alert,Image} from 'react-native';


const Otpver = ( {navigation}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handlePress = (key: string) => {
    const newCode = [...code];
    const nextEmptyIndex = newCode.findIndex((val) => val === '');
    if (nextEmptyIndex !== -1) {
      newCode[nextEmptyIndex] = key;
      setCode(newCode);
    }
  };

  const handleDelete = () => {
    const newCode = [...code];
    const lastFilledIndex = -1 //newCode.findLastIndex((val) => val !== '');
    if (lastFilledIndex !== -1) {
      newCode[lastFilledIndex] = '';
      setCode(newCode);
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    // Here you would typically send the enteredCode to your backend for verification.
    // For demonstration purposes, we will just show an alert.
    Alert.alert('Verification', `Entered code: ${enteredCode}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
       <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} /> 
      </View>
      <Text style={styles.verificationText}>Verification</Text>
      <Text style={styles.instructionText}>
        Please check your email for the verification code
      </Text>
      <View style={styles.codeInputContainer}>
        {code.map((val, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={val}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handlePress(text)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.verifyButton} onPress={() => { handleVerify(); navigation.navigate("Congrats");}}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#Fcfcfc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  verificationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  deleteButtonText: {
    fontSize: 18,
    color: 'white',
  },
  verifyButton: {
    backgroundColor: '#1E3A8A',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  verifyButtonText: {
    fontSize: 18,
    color: 'white',
  },
  logo: {
    height: 90,
    width: 309,
    resizeMode:'contain',
    alignContent:'center'
  },
});

export default Otpver;