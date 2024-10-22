import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const p1 = require("C:/again/fromScratch-main/assets/images/P1.png");
const p2 = require("C:/again/fromScratch-main/assets/images/P2.png");
const p3 = require("C:/again/fromScratch-main/assets/images/P3.png");

const Login = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={p1}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username / Mobile No</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} secureTextEntry />
            </View>
          </View>
          <TouchableOpacity style={styles.forgotPassword}  onPress={()=>navigation.navigate('ForgotPass')}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Maindrawer')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.registerLink} onPress={()=>navigation.navigate('CreateAccount')}>Register</Text>
        </Text>
      </View>
      <View style={styles.card}>
        <Image
          source={p2}
          style={styles.image}
          resizeMode="cover"
        />
       
      </View>
      <View style={styles.card}>
        <Image
          source={p3}
          style={styles.image}
          resizeMode="cover"
        />
     
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingVertical: 20,
  },
  card: {
    width: '98%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#4b5563',
    marginBottom: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 40,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#2563eb',
  },
  loginButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerContainer: {
    marginBottom: 20,
  },
  registerText: {
    color: '#4b5563',
  },
  registerLink: {
    color: '#2563eb',
  },
  collectionLabel: {
    color: '#6b7280',
    fontSize: 12,
  },
  collectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginVertical: 5,
  },
  collectionDescription: {
    color: '#6b7280',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;