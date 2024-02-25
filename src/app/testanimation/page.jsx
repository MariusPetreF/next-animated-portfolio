"use client"

import {motion} from "framer-motion"

const TestPage = () => {

    const variants ={
        variant1:{
            x: 300, 
            y: 50, 
            opacity:0.5, 
            // transition:{
            //     duration:3
            // },
        },
        variant2:{
            x: 100, 
            y: -20, 
            rotation:45, 
        },
    };

    return (
        <div className="h-full flex items-center justify-center">
            <motion.div 
            className="w-96 h-96 bg-red-400 rounded"
            initial={{ x: -100}}
            variants={variants}
            // animate="variant1"
            animate={{ x: 300, y: 50, opacity:0.5 }}
            transition={{delay:1, duration:1, rotation:45}}
            ></motion.div>
        </div>
    )
}

export default TestPage