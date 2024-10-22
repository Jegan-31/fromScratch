
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const Paynow = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        
        <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />
                
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add Plan Details</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Purchase Plan*</Text>
          <TextInput style={styles.input} value="New Golden Eleven" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Amount*</Text>
          <TextInput style={styles.input} value="1000" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.termsText}>
          *On Clicking the <Text style={styles.boldText}>Pay Now</Text> I agree{' '}
          <Text style={styles.linkText}>terms and conditions</Text>.
        </Text>
      </View>
      <View style={styles.paymentPartner}>
        <Text style={styles.paymentTitle}>Payment processing partner</Text>
        <Image
          source={{ uri: 'https://placehold.co/150x50?text=Razorpay+Logo' }}
          style={styles.razorpayLogo}
        />
        <Text style={styles.paymentMethods}>Card, Wallets, UPI & Netbanking</Text>
        <View style={styles.paymentIcons}>
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=VISA' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=UPI' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=RuPay' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=Maestro' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=Diners+Club' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=MasterCard' }}
            style={styles.paymentIcon}
          />
          <Image
            source={{ uri: 'https://placehold.co/50x30?text=American+Express' }}
            style={styles.paymentIcon}
          />
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuIcon: {
    fontSize: 24,
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode:'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: '#fbbf24',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fffdc4',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  payButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  clearButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1e3a8a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  clearButtonText: {
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  linkText: {
    color: '#1e3a8a',
  },
  paymentPartner: {
    alignItems: 'center',
    marginTop: 32,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  razorpayLogo: {
    height: 50,
    width: 150,
    marginBottom: 8,
  },
  paymentMethods: {
    fontSize: 14,
    marginBottom: 8,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paymentIcon: {
    height: 30,
    width: 50,
    margin: 4,
  },
});

export default Paynow;