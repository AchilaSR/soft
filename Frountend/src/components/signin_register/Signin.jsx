import React, { useState} from "react";
import Footer from "../common/footer/Footertwo";
import Logingheader from "../common/header/Logingheader";
import Back from "../common/back/Backtwo";
import {
  Flex,
  Stack,
  Button,
  Box,
  Text,
  Image,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory ,} from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Footertwo from "../common/footer/Footertwo";
import Backtwo from "../common/back/Backtwo";

function Signin() {
  let history = useHistory();

  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const isInvalidsubmit = password === "" || emailaddress === "";
  const isInvalidshow = password === "";
  const [user, setUser] = useState(null);
  const toast = useToast();

  const api = axios.create({
    baseURL: `http://localhost:5000/`,
  });

  const st = sessionStorage.getItem("st");

  const handleSingIn = async (event) => {
    event.preventDefault();
    sessionStorage.setItem("st","s")
      try {
        console.log("we");
        const res = await api.post("/student/login", {
          email: emailaddress,
          password: password,
        });
        setUser(res.data);
        console.log(res.data)

        if (res.status === 200) {
          console.log("emailAddress", emailaddress);
          console.log("password", password);
          console.log("It was submited");
          console.log(res.data);

          sessionStorage.setItem("id", res.data);

          toast({
            title: "Login Succesful",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

          history.push("/Loginghome");
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
    
  

  const register = (event) => {
    event.preventDefault();
    history.push("/register");
    window.location.reload();
  };

  return (<>
    <Logingheader/>
  <Backtwo title='Login' />
    <Stack backgroundColor="#6A1B9A">
    <Box
        backgroundColor="#bc86d7"
        w="500px"
        h="500px"
        mt="75px"
        border="2px"
        borderColor="black"
        alignContent={'center'}
        alignSelf='center'
    
      >
        <Flex marginTop="40px">
        <div className='items'>
          <Text fontSize="30px" marginLeft="180px" color='black'>
            LOG IN
          </Text>
          </div>
          
        </Flex>
        <Box w="80%" h="1px" backgroundColor="black" ml="50" mt="10px" />
        <Stack mt="80px">
          <form method="post" onSubmit={handleSingIn}>
            <Stack>
              <FormControl>
                <Flex>
                  <FormLabel ml="50px" htmlFor="email" fontSize="18px" mt="10px" font-family=' sans-serif'>
                    Email Address
                  </FormLabel>
                  <Input
                    isRequired
                    type="email"
                    id="email"
                    placeholder=" Enter Email"
                    border="1px"
                    value={emailaddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    borderColor="black"
                    borderRadius="5"
                    w="250px"
                    h="35px"
                    display={"flex"}
                    flexDirection={"column"}
                    gap = "15px"
                    margin= "10px"
                    alignContent={'center'}
                    font-family=' sans-serif'
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="25px">
                  <FormLabel
                    ml="50px" htmlFor="email" fontSize="18px" mt="7px" mr="35" font-family=' sans-serif'
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      isRequired
                      type={ShowPassword ? "test" : "password"}
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      borderColor="black"
                      borderRadius="5"
                      border="1px"
                    w="250px"
                    h="35px"
                   
                    display={"flex"}
                    flexDirection={"column"}
                    gap = "15px"
                    margin= "10px"
                    alignContent={'center'}
                    font-family=' sans-serif'
                    />
 
                    <InputRightElement>
                    <Button
                        h="5px"
                        w="15px"
                        size="sm"
                        variant="link"
                        onClick={() => setShowPassword(!ShowPassword)}
                        disabled={isInvalidshow}y
                        display={"flex"}
                        flexDirection={"column"}
                        gap = "15px"
                        margin= "10px"
                        alignContent={'center'}
                        font-family=' sans-serif'
                      >
                        {ShowPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                      
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </FormControl>
              <FormControl>
                <Button
                  bgColor="grey"
                  border="2px"
                  borderColor="grey"
                  onClick={register}
                  mt="15%"
                  ml="20%"
                  mr="40px"
                  textColor={'white'}
                  alignItems='center'
                  alignContent={'center'}
                >
                  Sign up
                </Button>
                <Button 
                  bgColor="grey"
                  border="2px"
                  borderColor="grey"
                  type="submit"
                  disabled={isInvalidsubmit}
                  mt="15%"
                  textColor={'white'}
                  alignItems='center'
                  alignContent={'center'}
                >
                  Sign In
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Stack>
      </Box><Box h="50px"></Box>
    </Stack>
    <Footertwo/>
    </>
  );
}

export default Signin;






