import React, { useState, useEffect } from "react";
import Footer from "./common/footer/Footer";
import Logingheader from "../components/common/header/Logingheader"
import Back from "./common/back/Back";
import { Flex, Stack,Button,Box,Text,Grid, GridItem,FormControl,
    FormLabel,InputGroup,InputRightElement,Input,Select,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useToast } from '@chakra-ui/react'

// import Userheader from "./Userheder";
import axios from 'axios';
import { useHistory} from "react-router-dom"
// import Uploadimage from "./Uploadimage"
    
 
function  Profile_student()  {
 
    const api = axios.create({
        baseURL :`http://localhost:5000/`
    })
    let history = useHistory();

    const [user, setUser] = useState();
    const [upuser, setUpuser] = useState();

  
    const id = sessionStorage.getItem('id');
    
    // console.log("hfwifbib")
    
   
   
    // axios
    //     .get(`/student/student/${id}`)
    //     .then( res => {
    //         console.log(res)
    //         setUser(res.data)
    //     })
    
    
    

    const [profimage, setProfimage] = useState("https://unsplash.com/photos/xXwXkYiSsQc");

    const [firstname, setFirstname] =useState('');
    const [lastname, setLastname] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [gender, setGender] = useState(null);
    const [emailaddress, setEmailaddress] = useState("");
    const [phonenumber, setPhonenumber] = useState('');

    const [addressline1, setAddressline1] = useState('');
    const [addressline2, setAddressline2] = useState('');
    const [city, setCity] = useState('');
    const [pcode, setPcode] = useState('');
    const [province, setProvince] = useState('');
    const [contry, setContry] = useState('');

    const [currentp, setCurrentp] = useState('')
    const [npassword, setNpassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [ShowPassword, setShowPassword] = useState(false);

    const [renum, setRenum] = useState(1)


    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    useEffect( () => {
        async  function fetchMyAPI() {

        const res = await api.get(`/student/student/${id}`);
        console.log(res)

        setFirstname(res.data.firstname)
        setLastname(res.data.laststname)
        setDateofbirth(res.data.date)
        setGender(res.data.gender)
        setEmailaddress(res.data.email)
        setPhonenumber(res.data.phonenumber)
        setAddressline1(res.data.addressline1)
        setAddressline2(res.data.addressline2)
        setCity(res.data.city)
        setPcode(res.data.postalcode)
        setProvince(res.data.province)
        setContry(res.data.contry)
        
        setRenum(renum+1)
        console.log(dateofbirth)
        
    }
      
    fetchMyAPI()

    },[renum==1])
    
    const infosave = async (event) => {
        console.log("submit");
        event.preventDefault();
        // console.log(firstname);
        // console.log(lastname);
        // console.log(dateofbirth);
        // console.log(gender);
        // console.log(emailaddress);
        // console.log(phonenumber);
        // console.log(addressline1);
        // console.log(addressline2);
        // console.log(city);
        // console.log(pcode);
        // console.log(province);
        const res = await api.put(`/student/info/${id}`,{
        firstname: firstname,
        laststname: lastname,
        date: dateofbirth,
        gender: gender,
        phonenumber: phonenumber,
        addressline1: addressline1,
        addressline2: addressline2,
        city: city,
        postalcode: pcode,
        province: province,
        contry: contry
        });
        setUser(res.data);
        
    
        if(res.status === 200){
            console.log(user)
            toast({
                title: "Profile update sucessfull",
                status: "success",
                duration: 3000,
                isClosable: true,
                })

        }
   


    };
    const changepassword = async (event) => {
        event.preventDefault();
        console.log(currentp)
        
        const res = await api.post("/student/changep",{id:id,password:currentp,newpassword:npassword});
        setUpuser(res.data);
            
        
    if(res.status === 200){

        toast({
            title: "Password change sucessfull",
            status: "success",
            duration: 3000,
            isClosable: true,
            })
        
        history.push('/singinpage');
        console.log(upuser);

    }
    };
    const deleteaccount = async (event) => {
        event.preventDefault();
        const res = await api.delete(`/student/delectacc/${id}`);

        if(res.status === 200){
            toast({
                title: "Account Delete Sucessfull",
                status: "success",
                duration: 3000,
                isClosable: true,
                })

            history.push('/');
        }

    };
    
    return (
            <>
             <Logingheader/>
            <Back title='Student Profile' />
            <Stack backgroundColor={"#bc86d7"}>
            {/* <Userheader /> */}
            <Grid w="100%" templateColumns="repeat(10, 1fr)" gap={2}>
            <GridItem w="100%" colSpan={2} mt="100px" ml="10%">
                 <Stack margin="10%"  border="1px" borderColor="white" borderRadius="5%" padding="10px" > 
                        {/* <Uploadimage/> */}
                    </Stack>
              
            </GridItem>

            <GridItem w="100%" colSpan={5}>
                <Text fontSize="30px" mt="5%" ml="5%">Personal info</Text>
                <form method="post" onSubmit={infosave}>
                    <Stack ml="10%">
{/* // line 01 */}
                        <FormControl>
                            <FormLabel htmlFor="email" fontSize="13px" >Name</FormLabel>
                            <Input
                            
                                isRequired
                                type="Text"
                                placeholder=" First name"
                                value={firstname}
                                onChange={({ target }) => setFirstname(target.value)}
                                border="2px"
                                borderColor="red"
                                borderRadius="5"
                                w="49%"
                                mr="2%" />
                            <Input 
                            isRequired
                            type="Text"
                            placeholder=" Last name"
                            value={lastname}
                            onChange={({ target }) => setLastname(target.value)}
                            border="1px"
                            borderColor="black"
                            borderRadius="5"
                            w="49%"/> 
                            
                       
{/*line 02  */}
                        
                            <Flex mt="2%">
                            <Stack mr="2%"  w="49%">
                            <FormLabel htmlFor="email" fontSize="13px" >Date Of Birth</FormLabel>
                            <Input
                                isRequired
                                type="date"
                                value={dateofbirth}
                                onChange={({ target }) => setDateofbirth(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" />
                            </Stack>  
                            <Stack  w="49%" >  
                            <FormLabel htmlFor="email" fontSize="13px">Gender</FormLabel>
                            <Select placeholder={gender ? gender : "Select option" } border="1px" borderColor="black" isRequired onChange={(e) => setGender(e.target.value)}>
                                    <option gender="Male">Male</option>
                                    <option gender="Female">Female</option>
                                    <option gender="Other">Other</option>
                                </Select>                             
                            </Stack>
                        </Flex>
                        
{/* line 03 */}
                        
                            <Flex mt="2%">
                            <Stack mr="2%"  w="49%">
                            <FormLabel htmlFor="email" fontSize="13px" >Email</FormLabel>
                            <Input
                                isDisabled
                                isRequired
                                type="email"
                                placeholder="achilasandeep@gmail.com"
                                value={emailaddress}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" ></Input>
                            </Stack>  
                            <Stack  w="49%" >  
                            <FormLabel htmlFor="email" fontSize="13px" >Phone Number</FormLabel>
                              <Input
                                isRequired
                                type="number"
                                placeholder="+94 7x xxxxxxx"
                                value={phonenumber}
                                onChange={({ target }) => setPhonenumber(target.value)}
                                border="1px"
                                borderRadius="5"
                                borderColor="black"
                                mr="2%" />                         
                            </Stack>
                        </Flex>
{/* Address field */}   <Stack mt="3%">
                            
                            <FormLabel  fontSize="13px" >Address</FormLabel>
                            <Input
                                isRequired
                                type="text"
                                placeholder="Address line 1"
                                value={addressline1}
                                onChange={({ target }) => setAddressline1(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" />
                            <Input
                                type="text"
                                placeholder="Address line 2"
                                value={addressline2}
                                onChange={({ target }) => setAddressline2(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" />                         
                            <Flex>
                            <Input
                                isRequired
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={({ target }) => setCity(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" />
                            <Input
                                isRequired
                                type="number"
                                placeholder="Postal / Zip code"
                                value={pcode}
                                onChange={({ target }) => setPcode(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                 />
                            </Flex>
                            <Flex>
                            <Input
                                isRequired
                                type="text"
                                placeholder="Province"
                                value={province}
                                onChange={({ target }) => setProvince(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mr="2%" />
                            <Input
                                isRequired
                                type="text"
                                placeholder="Contry"
                                value={contry}
                                onChange={({ target }) => setContry(target.value)}
                                border="1px"
                                borderRadius="5"
                                borderColor="black"
                                 />
                            </Flex>
                        </Stack>
                            <Button bgColor="white" type="submit" ml="75%" mt="3%" w="20%">
                               Save
                            </Button>
                        </FormControl>
                    </Stack>
                </form>
                
            </GridItem>
{/* changepassword */}
            <GridItem colSpan={3} padding="2%" >
                <Flex w="100%" h="100%" >
                <Box w="0.5%" h="70%" bg="black" mt="30%" mb="20%" />   
                <Stack mt="35%" ml="10%">
                <form method="post" onSubmit={changepassword} >
                  
                    <FormLabel fontSize="18px" >Change Password</FormLabel>
                    <InputGroup  borderColor="black" >
                            <Input
                                isRequired
                                type={ShowPassword  ? 'test' : 'password'} 
                                placeholder="Current Password"
                                borderRadius="5"
                                value={currentp}
                                onChange={({ target }) => setCurrentp(target.value)}
                                 />
                            <InputRightElement >
                                <Button  h="15px" w="70px" size="sm" variant="link" onClick={() => setShowPassword(!ShowPassword)}  mr="30px"> 
                                     {ShowPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                    </InputGroup>
                            <Input
                                isRequired
                                type={ShowPassword  ? 'test' : 'password'} 
                                placeholder="New Password"
                                value={npassword}
                                onChange={({ target }) => setNpassword(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                                mt="3%"/> 
                            <Input
                                isRequired
                                type={ShowPassword  ? 'test' : 'password'} 
                                placeholder="Conform New Password"
                                value={cpassword}
                                onChange={({ target }) => setCpassword(target.value)}
                                border="1px"
                                borderColor="black"
                                borderRadius="5"
                            
                                mt="1%" />                         
                    <Button bgColor="white" type="submit" ml="55%" mt="10%">
                        Change Password
                    </Button>        
            </form> 

 {/* Delete Account */}

            <form >
                <FormLabel fontSize="18px" >Delete Account </FormLabel>
                <Text color="red"> When acount is delete you can't access this account forever !</Text>
                            
                <Button bgColor="red" onClick={onOpen} ml="55%" mt="10%" w="42%">
                    Delete Account
                </Button> 
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Delete Account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text >Are you sure to delete your Account ?</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="red" mr="2%" onClick={deleteaccount} >Delete My Account</Button>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                         </ModalFooter>
                    </ModalContent>
                 </Modal>                 
                </form>
            </Stack>
            </Flex>
            </GridItem>

        </Grid>
        <Box h="50px"></Box>
  </Stack>
    <Footer/>
        </>
     
    )
}

export default Profile_student
