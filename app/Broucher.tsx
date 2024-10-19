

import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faSearch, faThLarge, faRing, faGem, faChevronRight, faShoppingCart, faHome, faHeart, faGift, faUser } from '@fortawesome/free-solid-svg-icons';

const Broucher = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Image source={{ uri: 'https://placehold.co/100x50' }} style={styles.logo} />
        {/* <Image source={{ uri: 'https://placehold.co/50x50' }} style={styles.avatar} /> */}
      </View>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} size={16} style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesomeIcon icon={faThLarge} size={24} />
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesomeIcon icon={faRing} size={24} />
          <Text>Rings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesomeIcon icon={faGem} size={24} />
          <Text>Necklaces</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesomeIcon icon={faChevronRight} size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placehold.co/150x100' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Uncut Diamond Necklace Set</Text>
          <Text style={styles.cardPrice}>₹ 2,687,007.00</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShoppingCart} size={24} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placehold.co/150x100' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Majestic Goddess Lakshmi Gold Oddiyanam</Text>
          <Text style={styles.cardPrice}>₹ 2,687,007.00</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShoppingCart} size={24} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placehold.co/150x100' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Uncut Diamond Necklace Set</Text>
          <Text style={styles.cardPrice}>₹ 2,687,007.00</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShoppingCart} size={24} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://placehold.co/150x100' }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Majestic Goddess Lakshmi Gold Oddiyanam</Text>
          <Text style={styles.cardPrice}>₹ 2,687,007.00</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShoppingCart} size={24} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <FontAwesomeIcon icon={faHome} size={24} />
        <FontAwesomeIcon icon={faHeart} size={24} />
        <FontAwesomeIcon icon={faGift} size={24} />
        <FontAwesomeIcon icon={faUser} size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection:"column",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 16,
  },
  logo: {
    height: 32,
    width: 100,
    alignItems:"center",
    justifyContent:"center",
    display:"flex"
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#b9c9c9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
    color: '#6b7280',
  },
  searchInput: {
    flex: 1,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  navItem: {
    alignItems: 'center',
  },
  gridContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fafafb',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 14,
    color: '#6b7280',
  },
  cartIcon: {
    marginTop: 8,
    color: '#3b82f6',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fcfcfc',
    padding: 16,
  },
});

export default Broucher;
