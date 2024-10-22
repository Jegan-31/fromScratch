
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUser, faCamera, faMapMarkerAlt, faUserFriends, faEnvelope, faCalendarAlt, faHeart, faUsers, faEdit } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="#F5A623" />
        </TouchableOpacity>
        <Image source={{ uri: 'https://placehold.co/100x50' }} style={styles.logo} />
      </View>
      <Text style={styles.title}>Your Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <FontAwesomeIcon icon={faUser} size={40} color="#FFFFFF" />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Person Name</Text>
          <Text style={styles.profileText}>useremail id</Text>
          <Text style={styles.profileText}>+91 98410 12345</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem icon={faCamera} text="Photos & Images" />
        <MenuItem icon={faMapMarkerAlt} text="Location / Chapter" />
        <MenuItem icon={faUserFriends} text="Contacts" />
        <MenuItem icon={faEnvelope} text="Messages" />
        <MenuItem icon={faCalendarAlt} text="Calendar" />
      </View>
      <View style={styles.footer}>
        <FontAwesomeIcon icon={faHeart} size={24} color="#1A2E6C" />
        <FontAwesomeIcon icon={faUser} size={24} color="#1A2E6C" />
        <FontAwesomeIcon icon={faUsers} size={24} color="#1A2E6C" />
        <FontAwesomeIcon icon={faUserFriends} size={24} color="#1A2E6C" />
        <FontAwesomeIcon icon={faEdit} size={24} color="#1A2E6C" />
      </View>
    </ScrollView>
  );
};

const MenuItem: React.FC<{ icon: any, text: string }> = ({ icon, text }) => (
  <View style={styles.menuItem}>
    <View style={styles.menuItemLeft}>
      <FontAwesomeIcon icon={icon} size={24} color="#F5A623" />
      <Text style={styles.menuItemText}>{text}</Text>
    </View>
    <FontAwesomeIcon icon={faArrowLeft} size={24} color="#1A2E6C" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    height: 50,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2E6C',
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1A2E6C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetails: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A2E6C',
  },
  profileText: {
    color: '#1A2E6C',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonText: {
    color: '#757575',
  },
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#1A2E6C',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
});

export default ProfileScreen;
