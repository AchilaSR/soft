import React,{useState,useEffect} from 'react'
import { Stack,Grid,GridItem,Text,Box,Avatar,Flex,Button,Input } from '@chakra-ui/react'
import {AttachmentIcon } from '@chakra-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars';
import Footer from "../components/common/footer/Footertwo";
import Logingheader from"../components/common/header/Logingheader";
// import Userheader from './Userheder';
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom"
import { team } from "../dummydata"
import Team from '../components/team/Team';
import Backth from '../components/common/back/backth';
import Backtwo from '../components/common/back/Backtwo';

function Studentchat() {

    const api = axios.create({
        baseURL :`http://localhost:5000/`
    })
    
    let history = useHistory();

    const userId = useParams();
   
    // console.log(selectUser);
    
  const [renum, setRenum] = useState(1)
  const [fname, setFname] = useState("")
  const [name, setLname] = useState("")
  const [workplace, setWorkplace] = useState("")
  const [about, setAbout] = useState("")
  const [avaPhoto, setAvaPhotor] = useState("")
  const [idno , setIdno] = useState("")

  const searchid = sessionStorage.getItem("searchid")
  const id = sessionStorage.getItem("id")

    // useEffect( () => {
    //     async  function fetchMyAPI() {
    
    //     const res = await api.get(`/teacher/teacher/${searchid}`);
        
    //     setFname(res.data.firstname)
    //     setLname(res.data.laststname)
    //     setWorkplace(res.data.workplace)
    //     setAbout(res.data.about)
    //     setAvaPhotor(res.data.propic)
    
    //     sessionStorage.setItem("searchitem",res.data.id)
    
    
    //     console.log(fname)
    
    //     setRenum(renum+1)
        
    //   }
      
    //   fetchMyAPI()
    
    //   },[renum==1])

      const notification = async (event) => {
        event.preventDefault();

        // const res = await api.post("/teacher/noti",{studentid:id,teacherid:searchid,notitype:"Vidio meeting"});
        


        history.push("/vidiomeeting")
        window.location.reload();


      }
    
    const result = team.filter(user => user.Id === userId.id);
    const data = result[0]


      
      
      

    return (
        <><Logingheader/>
                      <Backtwo title='Teacher Video' />
            <Grid  w="100%"  templateColumns="repeat(2, 1fr)" >
                <GridItem colSpan={1} w="100%" >
                    {/* <Box w="80%" h="400px" border="2px"  borderColor="black" borderRadius="15"mt="5%" ml="15%">
                        <Flex>
                        <Avatar name={fname} size="2xl"  m="20px" src={data.cover} />
                        <Stack w="100%" m="5px" mt="10px" ml="20px">
                            <Text fontSize="20px" >Name </Text>
                            <Text fontSize="15px" bg="#60C0E5" borderRadius="5px"> {data.name}</Text>
                            <Text fontSize="20px" >Working Place </Text>
                            <Text fontSize="15px" bg="#60C0E5" borderRadius="5px">{data.work} </Text>
                            
                        </Stack>
                        </Flex>
                     
                    </Box> */}
                    <Button h="50px" mt="10%" ml="80%" bgColor="white" border="2px"  borderColor="black" onClick={notification}>
                        Ask to Video Conferrence
                    </Button>
                </GridItem>
                {/* <GridItem colSpan={1}  w="100%" >
                    <Box w="50%" h="480px" bg="blue.100" borderRadius="15"mt="15%" ml="35%" >
                        <Box w="100%" h="60px" bg="red.100" borderTopRadius="15" >
                            <Text fontWeight="bold" fontSize="20" p="5">Chat with </Text>
                        </Box>
                        <Box w="100%" h="80%" bg="blue.100" ></Box>
                        <Box w="100%" h="60px" bg="red.100" p="2"  borderBottomRadius="15" >
                            <Box bg="white" w="90%" h="40px" ml="5"  borderRadius="10px">
                                <Flex>
                                <Input placeholder="Massege " borderRadius="10px"></Input>
                                <AttachmentIcon m ="12px"/> 
                            
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </GridItem> */}
            </Grid>
            <Footer/>
        
        </>
    )
}

export default Studentchat
