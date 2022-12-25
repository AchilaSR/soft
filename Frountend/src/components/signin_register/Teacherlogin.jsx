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
import { team } from "../../dummydata"
import Footertwo from "../common/footer/Footertwo";
import Backtwo from "../common/back/Backtwo";


function Teacherlogin() {
  let history = useHistory();

  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const isInvalidsubmit = password === "" || emailaddress === "";
  const isInvalidshow = password === "";
  const [user, setUser] = useState(null);
  const toast = useToast();

  
  

  


  const handleSingIn = (event) => {
    event.preventDefault();
    sessionStorage.setItem("st","t")
    
    const result = team.filter(user => user.email === emailaddress);
    const data = result[0]
    console.log(result[0])

    if(data.password === password){
     
        history.push(`/teacherchat/${data.Id}`)
        window.location.reload();
        sessionStorage.setItem("Teacherid" , data.Id)
    }

}
  

  return (<>
    <Logingheader/>
    <Backtwo title='Teachr Login' />
      <Stack backgroundColor={"#6A1B9A"}>
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
           Sign in to
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
               {/* <Button
                 bgColor="#bc86d7"
                 border="2px"
                 borderColor="#bc86d7"
                //  onClick={register}
                 mt="15%"
                 ml="20%"
                 mr="40px"
                 textColor={'#bc86d7'}
                 alignItems='center'
                 alignContent={'center'}
               >
                 You haven't account
               </Button> */}
               <Button marginLeft="75%"
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
     </Box>
     <Stack/>
    <Footertwo/>
    </Stack>
    </>
  );
}

export default Teacherlogin;
