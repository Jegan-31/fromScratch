
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, TouchableHighlight,ScrollView, Linking, Modal, Pressable, Alert } from 'react-native';

const CreateAccount = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <View style={styles.logoContainer}>
      <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />
      </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create your account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username / E-Mail*</Text>
          <TextInput style={styles.input} placeholder="Enter your Username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password*</Text>
          <TextInput style={styles.input} placeholder="Enter your Password" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number*</Text>
          <TextInput style={styles.input} placeholder="Enter your Mobile/Whatsapp  Number" />
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.submitButtonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
         
        <Text style={styles.disptext}>By clicking Create Account you agree to the </Text>
        <TouchableHighlight  onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.linkText}> Terms and Conditions </Text>
      </TouchableHighlight>
      </View>
      

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Lorem 2: A generator that can create lists of Lorem Ipsum text 
Emmet: A generator that can create dummy text in your editor 
Lorem Ipsum: A generator that can create a natural-looking block of text 
Typing Pal: A generator that can create classic Lorem Ipsum text, as well as humorous placeholder texts 
Rakugo: A professional generator for typographers 
Rushax: A generator that can create placeholder text for up to 999 paragraphs
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>I Agree</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disptext:{
    fontSize:18,
    marginBottom:10,
    marginTop:10,
  },
  header: {
    //width: '100%',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    padding: 30,
    backgroundColor: '#fcfcfc',
  },
  menuIcon: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: '#1a2b49',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  joinButtonText: {
    color: 'white',
  },
  addButton: {
    backgroundColor: '#f5b700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: 'black',
  },
  logo: {
    height: 90,
    width: 309,
    resizeMode:'contain',
    alignContent:'center'
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff9db',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  submitButton: {
    backgroundColor: '#1a2b49',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#f5b700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  clearButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: '#1a1a1a',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize:18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CreateAccount;