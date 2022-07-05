import React, { useEffect, useState } from 'react';
import { Button, FlatList, Platform, PlatformColor, StyleSheet } from 'react-native';


import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';

// const listings = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.jpg')
//   },
//   {
//     id: 2,
//     title: 'Couch in great condition',
//     price: 1000,
//     image: require('../assets/couch.jpg')
//   },
// ];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title='Retry' onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === 'android' ? 8 : 20,
    backgroundColor: colors.light,
  }
});

export default ListingsScreen;