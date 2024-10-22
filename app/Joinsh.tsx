import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Joinsch = ({navigation}) => {
  const [purchasePlan, setPurchasePlan] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [branch, setBranch] = useState<string>('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.joinSchemeButton}>
          <Text style={styles.joinSchemeButtonText}>Join Scheme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addSchemeButton}>
          <Text style={styles.addSchemeButtonText}>Add Scheme</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
      <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />
       </View>
      <Text style={styles.title}>Purchase Plan Details</Text>
      <View style={styles.separator} />
      <View style={styles.form}>
        <Text style={styles.label}>Purchase Plan*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={purchasePlan}
            onValueChange={(itemValue) => setPurchasePlan(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Please Select" value="" />
            <Picker.Item label="Plan 1" value="plan1" />
            <Picker.Item label="Plan 2" value="plan2" />
          </Picker>
        </View>
        <Text style={styles.label}>Amount*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={amount}
            onValueChange={(itemValue) => setAmount(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Please Select" value="" />
            <Picker.Item label="$100" value="100" />
            <Picker.Item label="$200" value="200" />
          </Picker>
        </View>
        <Text style={styles.label}>Membership No</Text>
        <TextInput style={styles.inputYellow} placeholder="Four Digit of Membership Number (Eg: 1234)" />
        <Text style={styles.label}>Group Code</Text>
        <TextInput style={styles.inputYellow} placeholder="Three Digit Group Code (Eg: ABC)" />
        <Text style={styles.label}>Branch*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={branch}
            onValueChange={(itemValue) => setBranch(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Please Select" value="" />
            <Picker.Item label="Branch 1" value="branch1" />
            <Picker.Item label="Branch 2" value="branch2" />
          </Picker>
        </View>
        <Text style={styles.label}>Registered Mobile No*</Text>
        <TextInput style={styles.input} placeholder="Mobile No" />
        <Text style={styles.label}>Email*</Text>
        <TextInput style={styles.input} placeholder="abc@abc.com" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate("Paynow")}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  joinSchemeButton: {
    backgroundColor: '#1a202c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  joinSchemeButtonText: {
    color: '#fff',
  },
  addSchemeButton: {
    backgroundColor: '#fbbf24',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addSchemeButtonText: {
    color: '#000',
  },
  logoContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode:'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginBottom: 16,
  },
  form: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    color: '#4a5568',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  inputYellow: {
    backgroundColor: '#fefcbf',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  pickerContainer: {
    backgroundColor: '#e2e8f0',
    borderRadius: 5,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#1a202c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#fff',
    borderColor: '#cbd5e0',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#000',
  },
});

export default Joinsch