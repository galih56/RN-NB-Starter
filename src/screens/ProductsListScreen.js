import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { Box,VStack,Center } from 'native-base';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContext';
import {Product} from '../components/Product';
import {useGet} from '../hooks/useGet';
import {HeaderIconsContainer} from '../components/HeaderIconsContainer';
import {ThemeContext} from '../contexts/ThemeContext';

export function ProductsListScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const switchTheme = React.useContext(ThemeContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconsContainer>
          <HeaderIconButton
            name={'color-palette'}
            onPress={() => {
              switchTheme();
            }}
          />
          <HeaderIconButton
            name={'log-out'}
            onPress={() => {
              logout();
            }}
          />
        </HeaderIconsContainer>
      ),
    });
  }, [navigation, logout, switchTheme]);
  const products = useGet('/products');

  function renderProduct({item: product}) {
    return <Product product={product} />;
  }

  return (
    <>
      <Box>
        <VStack space={4} alignItems="center">
          <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
          <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
          <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
        </VStack>
      </Box>
      <FlatList
        contentContainerStyle={styles.productsListContainer}
        data={products}
        renderItem={renderProduct}
        keyExtractor={product => `${product.id}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
