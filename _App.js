import React,{useState} from 'react';
import { 
  NativeBaseProvider, 
  Text, Box,
  Select,Center,
  VStack,  
  Divider,
  CheckIcon,
  ScrollView,
  useColorMode,
  Button,
  Image,
  Heading,
  Code,
  Link,HStack,Switch
} from 'native-base';
import theme from './theme';

import { extendTheme } from "native-base";

const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark"
  }
});

const App = () => { 
  const [service,setService]=useState('');
  return(
    <NativeBaseProvider  theme={theme}>
      <ScrollView>
        <Center bg={"blueGray.900"}>
          <Box _light={{ bg: "coolGray.50" }} _dark={{ bg: "coolGray.900" }} minHeight={'80'} justifyContent="center" px={4}>
            <VStack space={5} alignItems="center">
              <Image
                source={{ uri: "https://docs.nativebase.io/img/nativebaselogo.svg" }}
                alt="NativeBaseLogo"
                h="150" w="132"
              />
              <Heading size="lg">Welcome to NativeBase</Heading>
              <Link href="https://docs.nativebase.io" isExternal>
                <Text color="primary.500" underline fontSize={"xl"}>
                  Learn NativeBase
                </Text>
              </Link>
              <ToggleDarkMode />
            </VStack>
          </Box>
        </Center>
        <Box>
          <VStack space={4} alignItems="center">
            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
};


function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

// https://www.youtube.com/watch?v=5qvgck0piZ8
// https://codesandbox.io/s/nativebase-fld24?file=/src/App.tsx:346-360
export default App;




