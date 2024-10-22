
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profdet= ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Additional Personal Details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name*</Text>
          <TextInput style={styles.input} placeholder="Enter your name with initial" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address*</Text>
          <TextInput style={styles.input} placeholder="Enter your permanent address" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>City*</Text>
          <TextInput style={styles.input} placeholder="Enter the City Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>State*</Text>
          <TextInput style={styles.input} placeholder="Enter the State which city belongs" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pincode*</Text>
          <TextInput style={styles.input} placeholder="xxxxxx" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth*</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PAN Card*</Text>
          <TextInput style={styles.input} placeholder="XXXXX1111X" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Identity Proof Type*</Text>
          <TextInput style={styles.input} placeholder="Please Select" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Identity Proof Number*</Text>
          <TextInput style={styles.input} placeholder="Enter the State which city belongs" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nominee  Name*</Text>
          <TextInput style={styles.input} placeholder="Enter your Nominee name with Initial" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nominee  Name*</Text>
          <TextInput style={styles.input} placeholder="Enter your relationship with nominee " />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ID Proof Attachment 1*</Text>
          <TextInput style={styles.input} placeholder="Add your  ID Proof 1" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ID Proof Attachment 2*</Text>
          <TextInput style={styles.input} placeholder="Add your  ID Proof 2" />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate('Dashboard')}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
    height: 70,
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
    fontFamily:  'Open Sans',

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
});

export default Profdet;