import React, { useState } from 'react';
import logo from './Moon3.svg';
import Profile from './cartoonyoussef-1.png'
import AppScreen from './androidphone22.png'
import DnroneScreen from './dnronescreen1.png'
import './App.scss';
import Button from '@mui/material/Button';
import { gsap } from "gsap";
import { useRef,useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Particles from "react-tsparticles";
import { autocompleteClasses } from '@mui/material';

// launch data vis site (mindless can do while watching tv), maybe implement particls.js when click on logo, add info for each tab

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

function App() {



  const homebuttons = [{name: 'About', number: 1, class:".about"}, {name: 'Apps', number:2, class:".apps"}, 
            {name: 'Web Dev', number:3, class:".web"},{name: 'Blockchain', number:4, class:".blockchain"}, {name: 'Data Vis', number:5, class:".datavis"}]

  const [openState, setopenState]=useState(0)
  const [funMode, setfunMode]=useState(false)
  var WebFont = require('webfontloader');
  useEffect(() => {      
    WebFont.load({
      google: {
        families: ['Caveat',"Niconne", "Dancing Script", "Manrope","Lora"]
      }
    });
    gsap.from('.wrapper', {duration:2, scale: 0,  opacity: 0}).delay(0.8)
    gsap.from(".buttons",{ duration: 2, ease: "power.in", x:-1000 });
    }, []);

    const particlesInit = (main: any) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
    const particlesLoaded = (container: any) => {
      console.log(container);
    };
    
    //
  useEffect(() =>{
    if (openState!=0){
      console.log(openState)
      gsap.from(homebuttons[openState-1].class, { duration: 2, ease: "power.in", y:-100 })
    }

  },[openState]);
    
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#fff',
        contrastText: '#000000',
      },
    },
  });

  const imageClick = () => {
    funMode===true ? setfunMode(false) : setfunMode(true)
  } 

  return (

    <>
    
    {funMode === true ? <Particles
      id="tsparticles"
       // @ts-ignore
      init={particlesInit}
       // @ts-ignore
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#fff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#222",
          },
          links: {
            color: "#222",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }} />: null}
      
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={() => imageClick()} style={{pointerEvents: "all", cursor: "grab"}}/>
          <div className={openState === 0 ? "wrapper" : "wrapperhide"}>
            <div className="box">
              <p style={{ color: "black", fontFamily: "Lora", fontWeight: "bold", fontSize: '2vw', display: 'flex', marginRight: "2vw", lineHeight: "2" }}>
                Hello World,
                <br />
                I am Youssef, a technical and creative problem solver.
                
                <br />
                Welcome to my website! I recommend you get started 
                <br />
                on the about page and keep on moving to the right :)

              </p>

              <img src={Profile} className="App-profile" alt="logo" style={{marginTop:"2vw"}} />
            </div>
          </div>

          <div className={openState === 1 ? "about" : "abouthide"}>
            <div id="boxblockchain" style={{ flexDirection: "column" }}>

              <p className="title" style={{ fontFamily: "Dancing Script", fontWeight: "bold" }}>
                So youre interested in moi?
              </p>
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
                Lets start off with a fascinating fact:<strong> I have 4 middle names 😲</strong>
                <br />
                Also important, I produce things that <strong> help others </strong>. I am extremely passionate about becoming a <strong> creative developer </strong> and bringing in a <strong> data-driven </strong>, technical mindset to the government.  My education and work has been heavily focused in <strong> Data Science </strong>, but I have also pursued software development in my free time. I am proficient in
                <strong> Python, R, Javascript, Solidity </strong> and stackoverflow 😉 and have produced a variety of <strong> full-stack applications. </strong> Other than computer languages, I speak <strong> English, Arabic and French </strong>. I hope
                you enjoy my page! Feel free to reach out <strong> <a href="https://www.linkedin.com/in/youssef-abubaker-5b3065158">here</a> </strong>  if you want to talk: <a href="https://www.linkedin.com/in/youssef-abubaker-5b3065158">👨‍💼</a>

              </p>

            </div>
          </div>

          <div className={openState === 2 ? "apps" : "appshide"}>
            <div id="boxblockchain" style={{ flexDirection: "column" }}>

            <p className="title" style={{ fontFamily: "Dancing Script", fontWeight: "bold" }}>
                Mobile Apps
              </p>
              <div style={{ display:"flex", marginRight:"2vw" }}>
            <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
                <strong>App Name:</strong> Reston Cares
                <br/> 
                <strong>Short Description:</strong> A humanitarian app for Fairfax county that provides a one stop shop
                resource list for all those in need. 
                <br/>
                <strong>Platforms:</strong> <a href="https://play.google.com/store/apps/details?id=com.youabu.RestonCares"> Google Play </a> and iOS App Store (developed not released).
                <br/>
                <strong>Framework:</strong > <em> React Native </em> because it provides a nice and easy framework for building iOS and Android apps all in one code base.
                <br/>
                <strong>Main Feature:</strong> The app resource list is automatically updated through Google Sheets, therefore anyone can maintain the app.
                <br/>
                <strong>Next up?</strong> You tell me!
                
            </p>
            <img src={AppScreen} className="App-mobile" alt="RestonCares" style={{marginTop:"2vw", display:"flex"}} />
            </div>
            </div>
          </div>


          <div className={openState === 3 ? "web" : "webhide"}>
          <div id="boxblockchain" style={{ flexDirection: "column" }}>

            <p className="title" style={{ fontFamily: "Dancing Script", fontWeight: "bold" }}>
            Web Development
            </p>
          
            <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
            <strong>Project Name:</strong>
            <br/> <img src={DnroneScreen} className="App-dnrone" alt="RestonCares" style={{float:"inline-end"}} /> <br/>
            <strong>Project Purpose:</strong> Document all the work I did during my Data Science residency at GA-CCRi (An industry leader in geospatial storage, visualization, and analysis).
            <br/>
            <strong>Website link:</strong> <a href="https://ghghyo.github.io"> dNROne1Live </a> 
            <br/>
            <strong>Tools Used:</strong > <em> Python, JS, CSS, Flask, Ajax, and Heroku </em>
            <br/>
            <strong>Main Features:</strong> The website incorporated several different full stack applications. Namely, you can find two end to end
             object detection and image classification models trained from raw data embededded into the website.
            The website is a demonstration of a fully functional back end wrapped up into an eloquent front end.
            <br/>
            
            </p>

            </div>
          </div>


          <div className={openState === 4 ? "blockchain" : "blockchainhide"}>
          <div id="boxblockchain" style={{ flexDirection: "column" }}>

            <p className="title" style={{ fontFamily: "Dancing Script", fontWeight: "bold" }}>
            BlockChain
            </p>
          
            <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
            <strong>Project Name:</strong> DCloud
            <br/> 
            <strong>Project Purpose:</strong> Provide a prototype for a decentralized storage and cloud computing application for the Intelligence Community.
            <br/>
            <strong>Website link:</strong> <a href="https://ghghyo.github.io/dcloud/"> DappLink </a> (need to be on Google Chrome to login)
            <br/>
            <strong>Tools Used:</strong > <em> Solidity, Brownie, Infura, Pinata, IPFS, Golem, Rinkeby Test, Python, React </em>
            <br/>
            <strong>Main Features:</strong> Test out benefits of Web3 by uploading your data to a decentralized storage provider and run your python code on a decentralized GPU node. The website is a fully functional prototype that allows you to connect your MetaMask wallet and experience
            the speed and ease of decentralized storage services like Pinata and decentralized computing nodes through Golem.
            <br/>
            <strong> Video Demo:</strong> For those not yet comfortable with Web3 (or just too lazy), you can see a demo of the prototype <a href="https://www.youtube.com/watch?v=Rnyzc4FRY-c"> here.</a> 
            
            </p>

            </div>
          </div>
          


          <div className={openState === 5 ? "datavis" : "datavishide"}>
            <div id="boxblockchain" style={{ flexDirection: "column", overflow:"auto", overflowY:"hidden" }}>
            <p className="title" style={{ fontFamily: "Dancing Script", fontWeight: "bold" }}>
            Data Visulization
            </p>

            <div style={{display:"flex", flexDirection:"row"}}>
              <div className="boxinsidechaintitle">
              <h1>Wild fires using D3.js</h1>
            <div className="boxinsidechain">
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              Scroll through 20+ years of data to see which states have suffered the most from wild fires over the years and what have the causes been. 
              Check it out <a href="https://ghghyo.github.io/d3fire"> here.</a>
              
              </p>
            </div>
            </div>
            <div className="boxinsidechaintitle">
              <h1>COVID Analysis</h1>
            <div className="boxinsidechain">
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              COVID analysis comparing stock market trends with the fluctuation in number of cases. Clearly see how investments in different sectors changed from Jan 2020 to August 2020.
              Check it out <a href="https://i.ibb.co/QjPj6B4/covid.jpg"> here.</a>
              
              
              </p>
            </div>
            </div>
            <div className="boxinsidechaintitle">
              <h1>Quranic Sentiment Analysis</h1>
            <div className="boxinsidechain">
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              Explore how certain translations of the Quran have different emotional sentiments. 
              (Negative polarity means that overall the emotions in the book are negative, while positive polarity means that the overall emotions in the book are positive.)
              

              Check it out <a href="https://i.ibb.co/MfFrzFD/download.png"> here.</a>
              
              </p>
            </div>
            </div>
            <div className="boxinsidechaintitle">
              <h1>Salary Analysis</h1>
            <div className="boxinsidechain">
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              Exploring the gender gap and the correlation between higher paying, higher prestige jobs with a better education.
        
              Check it out <a href="https://i.ibb.co/G2SZCcq/salary.jpg"> here.</a>
              
              </p>
            </div>
            </div>
            <div className="boxinsidechaintitle">
              <h1>Haitian Relief</h1>
              
            <div className="boxinsidechain">
            
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              Results from an analysis on the efficacy of the US strategic plan during the Haitian humanitarian crisis.
              The graphic shows how many more tons of aid could have been delivered to if we had optimized our operation in Haiti. 
              Check it out <a href="https://i.ibb.co/k5KSwp3/image.jpg"> here.</a>
              
              </p>
              
            </div>
            </div>
            <div className="boxinsidechaintitle">
              <h1>Fun!</h1>
              
            <div className="boxinsidechain">
            
              <p className="paragraphstyle" style={{ fontWeight: "normal", display: "block" }}>
              
              I had ran a machine learning model on some NBA data to try and determine if I can predict whether a shot is going to go into the basket or not based on the first seconds of a shot.
              The below visualization is a 3D plot that shows some of the data points of initial shot trajectories for shots that ended up going in. 
              Check it out <a href="https://i.ibb.co/tCFVZny/download-1.png"> here.</a>
              
              </p>
              
            </div>
            </div>
            </div>
            </div>
          </div>

          <div className="buttons">

            {homebuttons.map((buttonname, index) => {
              return (

                <React.Fragment key={index}>

                  <ThemeProvider theme={theme} key={index}>
                    <Button
                      style={{ maxWidth: '20vw', maxHeight: '7vw', minWidth: '15vw', minHeight: '2vw', fontSize: '1.2vw', marginBottom: "1vw" }}
                      variant="contained"
                      // @ts-ignore 
                      color='neutral'
                      onClick={() => setopenState(buttonname.number)}
                      key={index}
                    >
                      {buttonname.name}
                    </Button>
                  </ThemeProvider>
                  &nbsp;</React.Fragment>
              );
            })}
          </div>


        </header>

      </div></>


  );
}

export default App;
