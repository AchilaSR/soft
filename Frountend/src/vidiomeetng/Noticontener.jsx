import React,{useState,useEffect} from 'react'
import { Stack,Grid,GridItem,Text,Flex} from '@chakra-ui/react'
import { BellIcon,DeleteIcon } from '@chakra-ui/icons'

import axios from 'axios';
import { useHistory} from "react-router-dom"

function Noticontener(props) {

  const api = axios.create({
    baseURL :`http://localhost:5000/`
})

const st = sessionStorage.getItem("st")
const id = sessionStorage.getItem("id")

let history = useHistory();

  const as = props.data

//   const toast = useToast();
  const [student, setStudent] = useState("")
  const [notitype, setNotitype] = useState("")
  const [renum, setRenum] = useState(1)
  const [searchid, setSearchid] = useState("")

  
  useEffect( () => {
    async  function fetchMyAPI() {

        const res = await api.get(`/teacher/getnoti/${id}`);
        
        
        setNotitype(res.data[as].notitype)
        sessionStorage.setItem("studentid",res.data[as].studentid)

    
        const fname = await api.get(`/student/student/${res.data[as].studentid}`)

        setStudent(fname.data.firstname)
    
    setRenum(renum+1)
  }
  
  
  fetchMyAPI()

  },[renum==1])

  const chat = (event) => {
    event.preventDefault();
    history.push("/teacherchat")

  }
  

    return (
        <Stack border="1px" m="4px" w="300px" p="2px" h="55px" borderColor="black" bg="blue.100" borderRadius="5px" >
          
          <Grid  templateColumns="repeat(10, 1fr)">
            <GridItem colSpan={8} >
              <Flex onClick={chat}>
                <BellIcon w={6} h={6} m="4px" mr="5px" />
                <Text> {student} Apply to {notitype}</Text>
              </Flex>
            </GridItem>

            <GridItem colSpan={2}>  
                <DeleteIcon w={4} h={4} color="red" m="4px" m="30px" mr="5px" />
            </GridItem>
          </Grid>
        
        </Stack>
    )
}

export default Noticontener