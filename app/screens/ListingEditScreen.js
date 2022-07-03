import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'tomato', icon: 'floor-lamp', color: 'blue' },
  { label: "Cars", value: 2, backgroundColor: 'orange', icon: 'car' },
  { label: "Cameras", value: 3, backgroundColor: 'saddlebrown', icon: 'camera' },
  { label: "Games", value: 4, backgroundColor: 'lightgreen', icon: 'cards' },
  { label: "Clothing", value: 5, backgroundColor: 'lightblue', icon: 'shoe-heel' },
  { label: "Sports", value: 6, backgroundColor: 'blue', icon: 'basketball' },
  { label: "Movies & Music", value: 7, backgroundColor: 'purple', icon: 'headphones' },
  { label: "Books", value: 8, backgroundColor: 'pink', icon: 'book-open-blank-variant' },
  { label: "Other", value: 9, backgroundColor: 'gray', icon: 'calendar' },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width='50%'
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
