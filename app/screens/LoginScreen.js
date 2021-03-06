import
React,
{
  useContext,
  useState,
} from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
// import { Formik } from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
// import AppButton from '../components/AppButton';
// import AppForm from '../components/forms/AppForm';
// import AppFormField from '../components/forms/AppFormField';
// import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';
import authApi from '../api/auth';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
// import ErrorMessage from '../components/forms/ErrorMessage';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
// import SubmitButton from '../components/forms/SubmitButton';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  // const authContext = useContext(AuthContext);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    // const user = jwtDecode(result.data);
    console.log(result.data);
    // authContext.setUser(user);
    // authStorage.storeToken(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error='Invalid email and/or password.' visible={loginFailed} />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          // onBlur={() => setFieldTouched('email')}
          // onChangeText={handleChange('email')}
          placeholder='Email'
          textContentType='emailAddress'
        />
        {/* <AppText style={{ color: 'red' }}>{errors.email}</AppText> */}
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          // keyboardType='email-address'
          name='password'
          // onBlur={() => setFieldTouched('password')}
          // onChangeText={handleChange('password')}
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          editable
        />
        {/* <AppText style={{ color: 'red' }}>{errors.password}</AppText> */}
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        {/* <AppButton
              onPress={handleSubmit}
              title='Login'
            /> */}
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;