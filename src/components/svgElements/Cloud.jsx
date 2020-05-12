import React from 'react';


function Cloud({transform, className}){

    return(
        <svg height="120" width="168" className={className}>
                <g transform={transform}>
                    <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2" />
                    <polygon points="0,30 9,37 3,50" fill="#c7c2d1" />
                    <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7" />
                    <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789" />
                    <polygon points="27,18 22,36 33,44" fill="#acabb9" />

                    <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#fff6e7" />
                    <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc" />
                    <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3" />
                    <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1" />
                    <polygon points="58,65 75,37 82,57" fill="#9897a7" />
                    <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2" />

                    <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9" />
                    <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda" />
                    <polygon points="81,31 82,47 95,35" fill="#a2a2b0" />
                    <polygon points="82,47 95,35 105,45 91,53" fill="#878892" />
                    <polygon points="105,45 95,35 106,22" fill="#fbe5d5" />
                    <polygon points="106,22 95,35 90,16" fill="#dbd6dd" />
                </g>
            </svg>

    )
}

export default Cloud