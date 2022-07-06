import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = listing => {
  // content-type
  // application/json
  // multipart/form-data
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('description', listing.description);
  data.append('categoryId', listing.category.value);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    }));

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};