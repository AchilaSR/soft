import React,{useState,useEffect} from 'react'
import { Stack,Grid,GridItem,Text,Box,Avatar,Flex,Button } from '@chakra-ui/react'
import Footer from "../components/common/footer/Footertwo";
import TeacherHeader from "../components/common/header/TeacherHeader";
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom"
import { team } from "../dummydata"
import Back from '../components/common/back/Back';
import Backth from '../components/common/back/backth';


function Studentchat() {

    const api = axios.create({
        baseURL :`http://localhost:5000/`
    })
    const teacherId = useParams();
    
    let history = useHistory();
    
  const [renum, setRenum] = useState(1)
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [workplace, setWorkplace] = useState("")
  const [about, setAbout] = useState("")
  const [avaPhoto, setAvaPhotor] = useState("")

  const studentid = sessionStorage.getItem("studentid")
  const id = sessionStorage.getItem("id")

    useEffect( () => {
        async  function fetchMyAPI() {
    
        const res = await api.get(`/student/student/${studentid}`);
        
        setFname(res.data.firstname)
        setLname(res.data.laststname)
        setWorkplace(res.data.workplace)
        setAbout(res.data.about)
        setAvaPhotor(res.data.propic)
    
        sessionStorage.setItem("searchitem",res.data.id)
    
    
        console.log(fname)
    
        setRenum(renum+1)
        
      }
      
      fetchMyAPI()
    
      },[renum==1])

      const meeting = async (event) => {
        history.push(`/vidiomeeting`)
        window.location.reload();
      }

    return (
        <><TeacherHeader/>
    
            <Backth title='Teacher Video' />
            <Grid  w="100%"  templateColumns="repeat(2, 1fr)" >
                <GridItem colSpan={1} w="100%" >
                    {/* <Box w="80%" h="400px" border="2px"  borderColor="black" borderRadius="15"mt="5%" ml="15%">
                        <Flex>
                        <Avatar name={fname} size="2xl"  m="20px" src={avaPhoto} />
                        <Stack w="100%" m="5px" mt="10px" ml="20px">
                            <Text fontSize="20px" >Name </Text>
                            <Text fontSize="15px" bg="#60C0E5" borderRadius="5px">{fname} {lname} </Text>
                           
                        </Stack>
                        </Flex>
                           
                    </Box> */}
                    <Button h="50px" mt="10%" ml="80%" bgColor="white" onClick={meeting}>
                        Start Video Meeting
                    </Button>
                </GridItem>
                {/* <GridItem colSpan={1}  w="100%" >
                    <Box w="50%" h="480px" bg="blue.100" borderRadius="15"mt="15%" ml="35%" >
                        <Box w="100%" h="60px" bg="red.100" borderTopRadius="15" ></Box>
                        <Box w="100%" h="60px" bg="red.100" borderBottomRadius="15" ></Box>
                    </Box>
                </GridItem> */}
            </Grid>
            <box h="20"/>
        <Footer/>
        </>
    )
}

export default Studentchat