import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../components/common/footer/Footertwo";
import TeacherHeader from "../components/common/header/TeacherHeader";
import Backth from "../components/common/back/backth";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting, fetchHlsDownstreamUrl } from "./api";
import ReactPlayer from "react-player";
import { useHistory, useParams} from "react-router-dom"
import axios from "axios";
import { Box, Flex, Stack } from "@chakra-ui/react";

function JoinScreen({ getMeetingAndToken }) {

  const [meetingId, setMeetingId] = useState(null);
  const [meetingId1, setMeetingId1] = useState(null);

  const api = axios.create({
    baseURL: `http://localhost:5000/`,
  });
  
  const userid = sessionStorage.getItem("Teacherid")
  console.log(userid)
  const st = sessionStorage.getItem("st")

 
  useEffect(  () => {

    async function a(){

      const res = await api.get(`/vidiomeeting/getmeetingid/${userid}`);
      console.log(res)
      setMeetingId(res.data.meetingid)
      console.log(res.data.meetingid)

    }
    a();
    

  }, [1]);

  
  

 const onClick = async () => {

  if(st === "s"){
    console.log(userid)
    const res = await api.get(`/vidiomeeting/getmeetingid/${userid}`);
    console.log(res.data.meetingid)
    sessionStorage.setItem("mid",res.data.meetingid)
  }
    
    await getMeetingAndToken(meetingId);

    // const res = await api.post("/vidiomeeting/savemeetingid" , {userid:teacherId,meetingid:meetingId});
   
  };
  


   return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      /> */}
      <button onClick={onClick} >Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
}

function HLSJoinScreen({ onDownstreamUrl }) {
  const [meetingId, setMeetingId] = useState(null);

  const handleOnClick = async (meetingId) => {
    const downstreamUrl = await fetchHlsDownstreamUrl({ meetingId });

    onDownstreamUrl(downstreamUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClick(meetingId);
        }}
      >
        Join
      </button>
    </div>
    
  );
}

function VideoComponent(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
    props.participantId
  );

  const videoStream = useMemo(() => {
    if (webcamOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <Flex>
    <div key={props.participantId}>
      {micOn && micRef && <audio ref={micRef} autoPlay />}
      {webcamOn && (
        
        <ReactPlayer
          //
          playsinline = {true}
          pip={false}
          light={false}
          controls={true}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"385px"}
          width={"750px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
        
      )}
      
    </div>
    </Flex>
  );
}

function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={leave}>Leave</button>
      <button onClick={toggleMic}>toggleMic</button>
      <button onClick={toggleWebcam}>toggleWebcam</button>
    </div>
  );
}

function Container(props) {
  
  const { participants, join, isMeetingJoined, startHls } = useMeeting({
    onMeetingJoined: () => {
      startHls();
    },
    onHlsStarted: (downstreamUrl) => {},
  });

  return (
    <div className="container">

      {isMeetingJoined ? (
        <div>
          <Box h="10px" w="100px"></Box>
          {/* <Controls /> */}
          <d/>
          {[...participants.keys()].map((participantId) => (
            <VideoComponent key={participantId} participantId={participantId} />
          ))}
          <Box h="10px" w="100px"></Box>
        </div>
      ) : (
        <button onClick={join}>Join</button>
      )}
    </div>
  );
}

function MeetingContainer() {
  const [meetingId, setMeetingId] = useState(null);

  const api = axios.create({
    baseURL :`http://localhost:5000/`
})

 const teacherid = sessionStorage.getItem("Teacherid")
 const st = sessionStorage.getItem("st")
 
  const getMeetingAndToken = async (id) => { 
    const meetingId = id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
    console.log(meetingId)
    console.log(teacherid)

    if(st=== "t"){
    const res = await api.post("/vidiomeeting/savemeetingid" , {userid:teacherid,meetingid:meetingId});
    console.log(res)
    }
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Chintan",
      }}
      token={authToken}
    >
      <Container meetingId={meetingId} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

function HLSPlayer({ url, handleOnLeave }) {
  return (
    <>
      <button onClick={handleOnLeave}>Leave</button>
      <ReactPlayer
      playsinline = {true}
        playing={true}
        height={"70%"}
        width={"60%"}
        url={url}
      />
    </>
  );
}

function HLSContainer() {
  const [downstreamUrl, setDownstreamUrl] = useState("");

  const isJoined = useMemo(() => !!downstreamUrl, [downstreamUrl]);

  return isJoined ? (
    <HLSPlayer
      url={downstreamUrl}
      handleOnLeave={() => {
        setDownstreamUrl("");
      }}
    />
  ) : (
    <HLSJoinScreen
      onDownstreamUrl={(_downstreamUrl) => {
        setDownstreamUrl(_downstreamUrl);
      }}
    />
  );
}

function Vidiomeeting() {
  const [mode, setMode] = useState("host");

  const isHost = useMemo(() => mode === "host", [mode]);

  useEffect(() => {
    fetchHlsDownstreamUrl({ meetingId: "0g7p-kgnq-spd5" });
  }, []);

  return (
    <>
      {/* <button
        onClick={() => {
          setMode((s) => {
            return s === "host" ? "viewer" : "host";
          });
        }}
      >
        {isHost ? "Join as a Viewer" : "Join as a Host"}
      </button> */}<TeacherHeader/>
                  <Backth title='Video COnference' /> 
    
      {isHost ? <MeetingContainer /> : <HLSContainer />}
      <Footer/>
    </>
  );
}

export default Vidiomeeting;
