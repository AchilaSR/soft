import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Footertwo from "../common/footer/Footertwo";
import Backtwo from "../common/back/Backtwo";

function Register() {
  let history = useHistory();

  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const isInvalidsubmit = password === "" || emailaddress === "";
  const isInvalidshow = password === "";
  const toast = useToast();
  const [user, setUser] = useState(null);

  

  const api = axios.create({
    baseURL: "http://localhost:5000",
  });

  const handleSingIn = async (event) => {
    event.preventDefault();

    if (password.length >= 8) {
      if (password === cpassword) {

        sessionStorage.setItem("st","s")

          const res = await api.post("/student/register", {
            email: emailaddress,
            password: password,
          });
          setUser(res.data);

          if (res.status === 200) {
            console.log("emailAddress", emailaddress);
            console.log("password", password);
            console.log("cpassword", cpassword);
            console.log(res);

            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });

            history.push("/signin");
            window.location.reload();
          }
          if (res.status === 400) {
            toast({
              title: "This email address is already being used",
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }
          if (res.status === 500) {
            toast({
              title: "Server error Plece try again",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        


      } else {
        toast({
          title: "Password must be same",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Password must be 8 characters",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const singin = (event) => {
    event.preventDefault();
    history.push("/signin");
    window.location.reload();
  };

  return (<>
      <Logingheader/>
  <Backtwo title='Register' />
  <Stack backgroundColor={"#6A1B9A"}>
   
  <Box backgroundColor="#bc86d7"   alignContent={'center'}
        alignSelf='center'
       
        w="570px"
        h="500px"
        mt="75px" 
        border="2px"
        borderColor="black"
      >
        <Flex marginTop="40px">
          <Text fontSize="30px" marginLeft="190px" color='black'>
            Register to
          </Text>
          
        </Flex>
        <Box w="80%" h="1px" backgroundColor="black" ml="50" mt="10px" />
        <Stack mt="80px">
          <form method="post" onSubmit={handleSingIn}>
            <Stack>
              <FormControl>
                <Flex>
                  <FormLabel
                    ml="60px"
                    mr="50px"
                    htmlFor="email"
                    fontSize="18px"
                    mt="7px"
                  >
                    Email Address
                  </FormLabel>
                  <Input
                    isRequired
                    type="email"
                    id="email"
                    placeholder=" Enter Email"
                    value={emailaddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    borderRadius="5"
                    w="250px"
                    h="35px"
                    ml="%60"
                    display={"flex"}
                    flexDirection={"column"}
                    gap = "15px"
                    mt="7px"
                    alignContent={'center'}
                    font-family=' sans-serif'
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="25px">
                  <FormLabel
                    ml="60px"
                    mr="85px"
                    htmlFor="password"
                    mt="20px"
                    fontSize="18px"
                  >
                    Password
                  </FormLabel>
                  <InputGroup borderColor="black" w="340px">
                    <Input
                      isRequired
                      type={ShowPassword ? "test" : "password"}
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      border="1px"
                      borderRadius="5"
                      w="300px"
                      h="35px"
                      ml="%60"
                      display={"flex"}
                      flexDirection={"column"}
                      gap = "15px"
                      alignContent={'center'}
                      font-family=' sans-serif'
                      mt="20px"
                      mr="90px"
                    />
                  <InputRightElement>
                    <Button
                        h="5px"
                        w="15px"
                        ml="60px"
                        variant="link"
                        onClick={() => setShowPassword(!ShowPassword)}
                        disabled={isInvalidshow}y
                        display={"flex"}
                        flexDirection={"column"}
                        gap = "15px"
                        alignContent={'center'}
                        font-family=' sans-serif'
                        mt="20px"
                        mr="20px"
                       
                      >
                        {ShowPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                      
                    </InputRightElement>
                    
                  </InputGroup>
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="5px">
                  <FormLabel
                    ml="60px"
                    mr="20px"
                    htmlFor="password"
                    mt="35px"
                    fontSize="18px"
                  >
                    Confirm Password
                  </FormLabel>
                  <Input
                    borderColor="black"
                    
                    isRequired
                    type={ShowPassword ? "test" : "password"}
                    id="password"
                    placeholder="Conform Password"
                    value={cpassword}
                    onChange={({ target }) => setCpassword(target.value)}
                    border="1px"
                    borderRadius="5"
                    w="250px"
                    h="35px"
                    ml="%90"
                    mt="35px"
                    display={"flex"}
                    flexDirection={"column"}
                    gap = "25px"
                    alignContent={'center'}
                    font-family=' sans-serif'
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Button
                  bgColor="grey"
                  border="2px"
                  borderColor="grey"
                  onClick={singin}
                  ml="20%"
                  mr="40px"
                  textColor={'white'}
                  alignItems='center'
                  alignContent={'center'}
                >
                  Already Have Account
                </Button>
                <Button
                  bgColor="grey"
                  border="2px"
                  borderColor="grey"
                  disabled={isInvalidsubmit}
                  type="submit"
                  textColor={'white'}
                  alignItems='center'
                  alignContent={'center'}
                >
                  Register
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

export default Register;
