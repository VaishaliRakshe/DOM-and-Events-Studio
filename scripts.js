// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function (){
    const takeoff_button=document.getElementById("takeoff");
    const landing_button=document.getElementById("landing");
    const missionAbort_button=document.getElementById("missionAbort");
    const up_button=document.getElementById("up");
    const down_button=document.getElementById("down");
    const right_button=document.getElementById("right");
    const left_button=document.getElementById("left");
    let  flightStatus=document.getElementById("flightStatus");
    let shuttleBackground=document.getElementById("shuttleBackground");
    let shuttleHeight=document.getElementById("spaceShuttleHeight");
    let rocket=document.getElementById("rocket");
    rocket.style.position="absolute";
    rocket.style.left="0px";
    rocket.style.bottom="0px";
   
    takeoff_button.addEventListener("click",function(){
        let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirmTakeoff){
            flightStatus.innerHTML="stuttle is flight";
            shuttleBackground.style.backgroundColor="blue";
          shuttleHeight.innerHTML= Number(shuttleHeight.innerHTML) + 10000;
        }
    });
    landing_button.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged..");
          flightStatus.innerHTML="The stuttle has landed";
          shuttleBackground.style.backgroundColor="green";
          shuttleHeight.innerHTML=0;
    });
    missionAbort_button.addEventListener("click",function(){
    let confirmmissionAbort=window.confirm("Confirm that you want to abort the mission..");
    if(confirmmissionAbort){
        flightStatus.innerHTML="mission Aborted";
        shuttleBackground.style.backgrounColor="green";
      shuttleHeight.innerHTML=0;
    }
  });
    up_button.addEventListener("click",function(){
      shuttleHeight.innerHTML=Number(shuttleHeight.innerHTML)+10000;
      rocket.style.bottom=`${parseInt(rocket.style.bottom)+10}px`
    });
    down_button.addEventListener("click",function(){
      shuttleHeight.innerHTML=Number(shuttleHeight.innerHTML)-10000;
      rocket.style.bottom=`${parseInt(rocket.style.bottom)-10}px`
    });
    left_button.addEventListener("click",function(){
      rocket.style.left=`${parseInt(rocket.style.left)-10}px`
    });
    right_button.addEventListener("click",function(){
     rocket.style.left=`${parseInt(rocket.style.left)+10}px`
    });
  })