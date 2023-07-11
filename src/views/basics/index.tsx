
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import Link from 'next/link';
import { useState } from 'react';
import { AppBar } from '../../components/AppBar';
import { AppProps } from 'next/app';

export const BasicsView: FC = ({ }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [className, setClassName] = useState('button-container2');
  const [className1, setClassName1] = useState('button-container2');

  const [text, setText] = useState('Connect Discord');
  const [text1, setText1] = useState('Connect Twitter');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleClick1 = () => {
    if (className === 'button-container2') {
      setClassName1('button-container4');
      setText1('Twitter ID');
    } else {
      setClassName1('button-container2');
      setText1('Connect Twitter');
    }
  }
  const handleClick = () => {
    if (className === 'button-container2') {
      setClassName('button-container4');
      setText('Discord ID');
    } else {
      setClassName('button-container2');
      setText('Connect Discord');
    }
  };
  return (
   
    <>
    <div>
    <AppBar />

    </div>
   
  <div className="md:hero mx-auto p-4" style={{ marginLeft: '0%', backgroundImage:"url(missionsbackground.png)", backgroundColor:"#F1F2DA", backgroundSize:"cover" }}>
     
      <div className="md:hero-content flex flex-col" >
      
        <h1 className="text-center text-5xl font-bold text-[#00303B] text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8" style={{ left: '10%', position:'relative', textShadow:'5px 5px 1px red', fontSize:"60px", fontWeight:"700" }}>
MY STATS        </h1>
c<div className={className} style = {{position:"relative", left:'110%', marginTop:"-34%"}}>
  <Link href="" onClick={handleClick}><p style={{fontWeight:'700'}}>{text}</p></Link>
</div>
<div className={className1} style = {{position:"relative", right:'110%', marginTop:'-17%'}}>
  <Link href="" onClick={handleClick1}><p style={{fontWeight:'700'}}>{text1}</p></Link>
</div>
        {/* CONTENT GOES HERE */}
        <div className="parent-container" style={{marginTop:"10%"}}>
  <div className="box-container" style={{boxShadow: "10px 10px 1px black"}}>
    <div className="text-container">
      <div className="text-item">
        <p className="number">4</p>
        <p className="text-right">ACCOMPLISHED</p>
      </div>
      <div className="text-item">
        <p className="number">21</p>
        <p className="text-right">VERIFIED</p>
      </div>
      <div className="text-item">
        <p className="number">170</p>
        <p className="text-right">REMAIN</p>
      </div>

    </div>

    <div className="side-div"></div>
    <div className="text-container" style={{ left:"40%", top:"-114%" }}>
      <div className="text-item">
        <p className="number">230</p>
        <p className="text-right">TOTAL POINTS</p>
      </div>
      <div className="text-item">
        <p className="text-right" style={{position:"relative", left:"10%"}}>=</p>
      </div>
      <div className="text-item">
        <p className="number"style={{position:"relative", left:"5%"}}>7</p>
        <p className="text-right" style={{position:"relative", left:"5%"}}>pixs</p>
      </div>
    </div>
    <div className="side-div" style={{position:"relative", left:"71%", bottom:"180.5%"}}></div>
    <div className="text-container" style={{ left:"75%", top:"-230%" }}>
    <div className="button-container">
  <Link href="/"><p style={{fontWeight:'700'}}>CLAIM MY PIX</p></Link>
</div>
<div className="button-container1" style={{position:"relative", marginTop:"2%"}}>
  <Link href="/"><p style={{fontWeight:'700'}}>MY HISTORY</p></Link>
</div>
    </div>
    <p className="text-right" style={{right:'22%', position :'absolute', top:'70%', fontWeight:"1500"}}>120 POINTS REMAIN TO GET 1 PIX </p>
    <div className="progress-bar" style={{position:'absolute', top :'85%', left:'20%'}}>
  <div className="progress" style={{ backgroundColor: "#98BC8F" }}></div>
  <div className="remaining" style={{ backgroundColor: "#B7D2CA" }}></div>
</div>

  </div>
</div>
<h1 className="text-center text-5xl font-bold text-[#00303B] text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8" style={{ left: '10%', position:'relative', textShadow:'5px 5px 1px red', fontSize:"60px" }}>
MISSIONS       </h1>

<div className="parent-container" style={{marginBottom:'50%', height:'800px'}}>
<div className="banner">
<h1 className="text-center text-5xl font-bold text-[#00303B] text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8" style={{right:'33%', bottom:'10%',color:"#ffffff", fontSize:'34px', position:'relative', textShadow:'-4px -4px 2px black' }}>
TWITTER MISSIONS       </h1>
</div>

  <div className="box-container" style ={{backgroundColor:'#F1F2DA', border:'2px solid black',  boxShadow: "10px 10px 1px black",
}}>
  <div className="banner1">
  <select value={selectedOption} onChange={handleOptionChange} style={{  left:'2%', backgroundColor:"#E6F4FE"}}>
        <option  value="accomplished" >ACCOMPLISHED</option>
        <option value="verified">VERIFIED</option>
        <option value="remain">REMAIN</option>
      </select>
  </div>
  <div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"125%", top:"15%", color:"#ffffff"}}>
    <p style={{position:"relative", left:"35%", top:"30%", fontSize:"22px"}}>Follow</p>
</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',top:"15%", border:'1px solid black', width:'25%', height:'50%', left:"125%"}}>
<p style={{position:"relative", left:"25%", top:"8%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Follow our</p>
<p style={{position:"relative", left:"23%", top:"9%", color:'#00303B',fontSize:"20px"}}>twitter page</p>
<p style={{position:"relative", left:"29%", top:"20%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>50 PTS</p>
<p style={{position:"relative", left:"23%", top:"31%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"34%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON VERIFIED</p>

<div className="button-container3" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#E6F4FE", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"13px"}}>FOLLOW</p></Link>
</div>

</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"158%", bottom:"45.5%", color:"#ffffff"}}>
<p style={{position:"relative", left:"30%", top:"30%", fontSize:"20px"}}>Retweet</p>

</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',bottom:"45.5%", border:'1px solid black', width:'25%', height:'50%', left:"158%"}}>
<p style={{position:"relative", left:"10%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Retweet the post in </p>
<p style={{position:"relative", left:"20%", top:"11%", color:'#00303B', fontSize:"20px"}}>the link below</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>40 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}>COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"36%", color:'#C33019', fontWeight:"700",fontSize:"18px"}}>NON VERIFIED</p>
<div className="button-container3" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#E6F4FE", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"190%", bottom:"105.4%", color:"#ffffff"}}>
<p style={{position:"relative", left:"40%", top:"30%",fontSize:"20px"}}>Like</p>

</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',bottom:"105.4%", border:'1px solid black', width:'25%', height:'50%', left:"190%"}}>
<p style={{position:"relative", left:"14%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Like our last post</p>
<p style={{position:"relative", left:"13%", top:"11%", color:'#00303B',fontSize:"20px"}}>about sneak peaks</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>35 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> COMPLETED</p>
<p style={{position:"relative", left:"32%", top:"36%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> VERIFIED</p>
<div className="button-container3" style={{position:"relative" ,marginTop:"52%", left:"5%", backgroundColor:"#E6F4FE", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
  </div>
</div>
{/*  */}
<div className="parent-container" style={{marginBottom:'50%', height:'800px'}}>
<div className="banner" style={{backgroundColor:"#7258F2"}}>
<h1 className="text-center text-5xl font-bold text-[#00303B] text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8" style={{right:'33%', bottom:'10%',color:"#ffffff", fontSize:'34px',  position:'relative', textShadow:'-4px -4px 2px black' }}>
DISCORD MISSIONS       </h1>
</div>

  <div className="box-container" style ={{backgroundColor:'#F1F2DA', border:'2px solid black',  boxShadow: "10px 10px 1px black",
}}>
  <div className="banner1">
  <select value={selectedOption} onChange={handleOptionChange} style={{  left:'2%', backgroundColor:"#E4E7FF"}}>
        <option  value="accomplished" >ACCOMPLISHED</option>
        <option value="verified">VERIFIED</option>
        <option value="remain">REMAIN</option>
      </select>
  </div>
  <div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"125%", top:"15%", color:"#ffffff",backgroundColor:"#7258F2"}}>
    <p style={{position:"relative", left:"35%", top:"30%", fontSize:"22px"}}>Follow</p>
</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',top:"15%", border:'1px solid black', width:'25%', height:'50%', left:"125%"}}>
<p style={{position:"relative", left:"25%", top:"8%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Follow our</p>
<p style={{position:"relative", left:"23%", top:"9%", color:'#00303B',fontSize:"20px"}}>twitter page</p>
<p style={{position:"relative", left:"29%", top:"20%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>50 PTS</p>
<p style={{position:"relative", left:"23%", top:"31%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"34%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON VERIFIED</p>

<div className="button-container4" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#FAFEFF", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>FOLLOW</p></Link>
</div>

</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"158%", bottom:"45.5%", color:"#ffffff",backgroundColor:"#7258F2"}}>
<p style={{position:"relative", left:"30%", top:"30%", fontSize:"22px"}}>Retweet</p>

</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',bottom:"45.5%", border:'1px solid black', width:'25%', height:'50%', left:"158%"}}>
<p style={{position:"relative", left:"10%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Retweet the post in </p>
<p style={{position:"relative", left:"20%", top:"11%", color:'#00303B', fontSize:"20px"}}>the link below</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>40 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}>COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"36%", color:'#C33019', fontWeight:"700",fontSize:"18px"}}>NON VERIFIED</p>
<div className="button-container4" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#FAFEFF", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"190%", bottom:"105.4%", color:"#ffffff",backgroundColor:"#7258F2"}}>
<p style={{position:"relative", left:"40%", top:"30%", fontSize:"22px"}}>Like</p>

</div>
<div className="box-container" style ={{backgroundColor:'#E6F4FE',bottom:"105.4%", border:'1px solid black', width:'25%', height:'50%', left:"190%"}}>
<p style={{position:"relative", left:"15%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Like our last post</p>
<p style={{position:"relative", left:"15%", top:"11%", color:'#00303B',fontSize:"20px"}}>about sneak peaks</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>35 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> COMPLETED</p>
<p style={{position:"relative", left:"32%", top:"36%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> VERIFIED</p>
<div className="button-container4" style={{position:"relative" ,marginTop:"52%", left:"5%", backgroundColor:"#FAFEFF", color:"#4F4F4F"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
  </div>
</div>  
{/*  */}
<div className="parent-container" style={{marginBottom:'50%', height:'800px'}}>
<div className="banner" style={{backgroundColor:"#F25858"}}>
<h1 className="text-center text-5xl font-bold text-[#00303B] text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8" style={{right:'33%', bottom:'10%',color:"#ffffff", fontSize:'34px',  position:'relative', textShadow:'-4px -4px 2px black' }}>
DIVERSE MISSIONS</h1>
</div>

  <div className="box-container" style ={{backgroundColor:'#F1F2DA', border:'2px solid black',  boxShadow: "10px 10px 1px black",
}}>
  <div className="banner1">
  <select value={selectedOption} onChange={handleOptionChange} style={{  left:'2%', backgroundColor:"#FFF0F0"}}>
        <option  value="accomplished" >ACCOMPLISHED</option>
        <option value="verified">VERIFIED</option>
        <option value="remain">REMAIN</option>
      </select>
  </div>
  <div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"125%", top:"15%", color:"#ffffff",backgroundColor:"#F25858"}}>
    <p style={{position:"relative", left:"35%", top:"30%", fontSize:"22px"}}>Follow</p>
</div>
<div className="box-container" style ={{backgroundColor:'#FFF0F0',top:"15%", border:'1px solid black', width:'25%', height:'50%', left:"125%"}}>
<p style={{position:"relative", left:"25%", top:"8%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Follow our</p>
<p style={{position:"relative", left:"23%", top:"9%", color:'#00303B',fontSize:"20px"}}>twitter page</p>
<p style={{position:"relative", left:"29%", top:"20%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>50 PTS</p>
<p style={{position:"relative", left:"23%", top:"31%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"34%", color:'#C33019', fontWeight:"700",fontSize:"17px"}}>NON VERIFIED</p>

<div className="button-container4" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#F25858", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>FOLLOW</p></Link>
</div>

</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"158%", bottom:"45.5%", color:"#ffffff",backgroundColor:"#F25858"}}>
<p style={{position:"relative", left:"30%", top:"30%", fontSize:"22px"}}>Retweet</p>

</div>
<div className="box-container" style ={{backgroundColor:'#FFF0F0',bottom:"45.5%", border:'1px solid black', width:'25%', height:'50%', left:"158%"}}>
<p style={{position:"relative", left:"10%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Retweet the post in </p>
<p style={{position:"relative", left:"20%", top:"11%", color:'#00303B', fontSize:"20px"}}>the link below</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>40 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}>COMPLETED</p>
<p style={{position:"relative", left:"25%", top:"36%", color:'#C33019', fontWeight:"700",fontSize:"18px"}}>NON VERIFIED</p>
<div className="button-container4" style={{position:"relative", marginTop:"52%", left:"5%", backgroundColor:"#FAFEFF", color:"#ffffff"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
<div className="banner" style={{ width:"25%", height:"10%", position:"relative", left:"190%", bottom:"105.4%", color:"#ffffff",backgroundColor:"#F25858"}}>
<p style={{position:"relative", left:"40%", top:"30%",fontSize:"20px"}}>Like</p>

</div>
<div className="box-container" style ={{backgroundColor:'#FFF0F0',bottom:"105.4%", border:'1px solid black', width:'25%', height:'50%', left:"190%"}}>
<p style={{position:"relative", left:"15%", top:"10%", color:'#00303B', fontWeight:"lighter",fontSize:"20px"}}>Like our last post</p>
<p style={{position:"relative", left:"15%", top:"11%", color:'#00303B',fontSize:"20px"}}>about sneak peaks</p>
<p style={{position:"relative", left:"29%", top:"22%", color:'#00303B', fontSize:"30px", fontWeight:"700"}}>35 PTS</p>
<p style={{position:"relative", left:"27%", top:"33%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> COMPLETED</p>
<p style={{position:"relative", left:"32%", top:"36%", color:'#118B1D', fontWeight:"700",fontSize:"18px"}}> VERIFIED</p>
<div className="button-container4" style={{position:"relative" ,marginTop:"52%", left:"5%", backgroundColor:"#FAFEFF", color:"#4F4F4F"}}>
  <Link href="/"><p style={{fontSize:"12px"}}>COMPLETE THE MISSION</p></Link>
</div>
</div>
  </div>
</div> 
      </div>
    </div>
    </>
 
  );
};
