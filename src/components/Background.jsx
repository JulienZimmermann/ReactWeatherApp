import React, { useEffect } from 'react';
import Tree from './svgElements/Tree';
import Cloud from './svgElements/Cloud';

function Background(props){

    

    // alert(props.results.weather[0].main)
    // useEffect(()=>{

    //     alert(JSON.stringify(props.results.weather[0].main))
    
    // },[props.results])



    return(
        <section className="background">

            <svg height="390" width="550" id="mountains">
                <polygon points="300,390 190,90 320,130 400,340" fill="#5d2042" />
                <polygon points="0,340 108,190 194,100 201,120 301,390" fill="#320e40" />
                <polygon points="14,348 117,174 194,102 172,377" fill="#3b1642" fill-opacity="0.8" />
                <polygon points="120,174 194,102 233,206 144,275" fill="#3d1744" fill-opacity="0.9" />

                <polygon points="233,206 288,177 324,214" fill="#421943" />
                <polygon points="233,206 324,214 247,245" fill="#3e1743" />
                <polygon points="247,245 324,214 360,360" fill="#411842" />
                <polygon points="324,214 288,177 350,210" fill="#632242" />
                <polygon points="324,214 350,210 360,360" fill="#652343" />

                <g id="apex">
                    <polygon points="108,190 170,40 194,100" fill="#aeacb9" />
                    <polygon points="170,40 234,6 260,70 288,178 194,102" fill="#ceced8" />
                    <polygon points="234,6 290,80 320,132 288,178" fill="#ffffed" />
                </g>
            </svg>

            {
                props.weather === 'Clouds' && <h1>!!!!! OK !!!!</h1>
            }
            <Cloud 
                className="cloud1 cloud"
            />

            {/* <Cloud 
                transform="scale(1.4)"
                className="cloud2  cloud"
            />

            <Cloud 
                transform="scale(1.2)"
                className="cloud3  cloud"
            /> 

            <Cloud 
                transform="scale(1.6)"
                className="cloud4  cloud"
            /> 

            <Cloud 
                transform="scale(1.4)"
                className="cloud5  cloud"
            />  

            <Cloud 
                transform="scale(1.6)"
                className="cloud6  cloud"
            /> */}
                  

                
               
            

            <svg id="ground"></svg>

            <svg id="hills" width="700" height="170">
                <polygon points="480,70 530,100 560,90 516,40" fill="#9b9d57" />
                <polygon points="480,70 530,100 412,84" fill="#7d8f57" />
                <polygon points="530,100 412,84 360,138" fill="#748857" />
                <polygon points="360,138 240,140 320,82" fill="#748857" />

                <polygon points="412,84 360,140 320,82" fill="#88945a" />
                <polygon points="320,82 240,140 210,64" fill="#597252" />
                <polygon points="300,78 100,100 0,104 170,58" fill="#4f654f" />
                <polygon points="172,58 145,40 122,48 66,79 0,104" fill="#536a50" />
            </svg>

            <svg className="trees">
                
                <Tree 
                    transform="translate(400,30)"
                />

                <Tree 
                    transform="scale(0.8)"    
                />
                <Tree 
                     transform="translate(200,60)"
                />
                <Tree 
                     transform="translate(640,30)"
                />
                <Tree 
                     transform="translate(480,20)"  
                />
                <Tree 
                     transform="translate(440,15)"  
                />

            </svg>

    {props.children}

</section>
    )
}

export default Background