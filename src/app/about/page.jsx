"use client"

import Brain from "@/components/brain"
import {motion, useInView, useScroll} from "framer-motion"
import { useRef } from "react"

const AboutPage = () => {

    const containerRef = useRef()

    const {scrollYProgress} = useScroll({container:containerRef})

    const skilRef = useRef()
    // const isSkillRefInView = useInView(skilRef, {once:true})
    const isSkillRefInView = useInView(skilRef, {margin:"-100px"})

    const experienceRef = useRef()
    // const isexperiencelRefInView = useInView(experienceRef, {once:true})
    const isExperiencelRefInView = useInView(experienceRef, {margin:"-100px"})
    
    return (
        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}}
        transition={{duration: 1}}>
        {/* OVERFLOW TO BE CHECKED --------------------- */}
        {/* CONTAINER */}
        <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg-pr-0 xl:1/2">
                {/* BIOGRAPHY CONTAINER */}
                <div className="flex flex-col gap-12 justify-center ">
                {/* BIOGRAPHY TITLE */}
                    <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                {/* BIOGRAPHY DESC */}
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* BIOGRAPHY QUOTE */}
                    <span className="italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                {/* BIOGRAPHY SIGN SVG*/}
                    <div className="self-end">
                        <svg width="197" height="206" viewBox="0 0 197 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 2C35.9997 2.37496 38 19.3784 38 22.4444C38 26.1111 38 29.7778 38 33.4444C38 37.9155 37.3859 42.0639 36.6667 46.5556C35.0687 56.5346 34.9465 69.2132 29.7778 78C22.9891 89.5408 11.9018 90.9018 2 81" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M18 10C18 6.27467 17.4249 5 21.5 5C24.3333 5 27.1667 5 30 5C36.4516 5 42.4382 4 49 4C60.9545 4 72.9095 2 85 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M31 77C31 92.8739 44.7896 95 58 95C67.915 95 73.5891 93.2998 81.9444 87.5556C87.8597 83.4888 88.8392 74.8046 85.4444 68.5C82.5561 63.1359 81.5466 61 75 61C68.214 61 67 66.3068 67 72C67 80.1823 76.9819 88.3071 83.4444 92C88.1314 94.6783 91.209 97.9123 97.5 96.9444C105.828 95.6633 109.598 87.8616 111.778 80.7778C113.164 76.2714 110.929 70.3386 114 66.5C116.098 63.8774 122.742 62.3833 126 62C131.837 61.3133 136.61 60.2091 142 65C146.308 68.8289 151 69.7974 151 76.5C151 80.3608 150.681 85.4553 147.5 88C141.719 92.625 131.371 102.742 126 92" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M151 85C152.676 85.2095 154.814 87.4469 156.556 87.9444C158.985 88.6385 163.691 88.2842 165.778 87C171.745 83.3276 176 74.0986 176 67C176 58.4549 177.687 48.8187 173.778 41C171.667 36.7783 169 29.6013 169 25" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M167 42C173.057 42 183.396 44.2077 187 37" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M175 80C174.223 86.2164 173.31 90 182 90C187.671 90 195 91.654 195 84" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M43 120C42.435 114.915 22 113.151 22 119.5C22 123.854 20.8933 129.505 24 133C27.5776 137.025 31.158 137.088 35.5 139.5C38.4832 141.157 43.7974 142.541 44.9444 146.556C45.476 148.416 45 151.064 45 153C45 156.187 43.1422 155.27 41 156.222C38.9571 157.13 37.4924 158.893 35.5556 160C34.3898 160.666 29.594 162.758 29 163.5C27.5841 165.27 15.6336 164.267 15 163" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M41 157C41.2263 158.81 46.5027 158 48 158C52.509 158 53.633 157.485 57.2222 155C62.2217 151.539 63 144.891 63 139" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M61 125H63" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M59 155C59 158.49 60.7046 162 64.5 162C69.3944 162 70.9951 159.804 74.5 157C77.3179 154.746 79.7322 151.335 82 148.5C83.4302 146.712 90.1957 146 92.5 146C100.992 146 101.553 157.946 95 161.222C86.0834 165.681 77 161.141 77 151" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M96 157C96 166.637 94.2307 176.985 89.7778 185C87.333 189.401 78.3328 203.908 72.8889 204C66.377 204.11 59.7458 205.025 55 200C51.2677 196.048 48.8983 188.458 50.1111 183C52.8478 170.685 66.4775 173.26 74.9444 169.556C79.8101 167.427 85.174 166.719 90.2222 164.778C92.9668 163.722 95.1786 161.061 97.2222 159.222C98.3644 158.194 101.338 158.929 102.778 157.778C105.551 155.559 107.692 152.246 110.5 150C111.896 148.883 111.287 145.97 112.5 145C113.996 143.803 114.993 142.206 116.5 141C119.498 138.601 124.31 135.874 128.444 137.056C132.701 138.272 132 145.316 132 148.5C132 150.833 132 153.167 132 155.5C132 160.701 130.573 152.405 130.222 151.222C128.786 146.374 128.77 143.675 132.222 140.222C134.824 137.62 140.737 135.996 144.444 137.056C148.079 138.094 150.64 141.152 152.5 144.5C154.73 148.513 159 151.163 159 156" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M159 156C159.56 161.042 165.051 160.898 167 157" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            <path d="M180 160C180 158.703 180 162.412 180 163" stroke="black" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </div>
                {/* BIOGRAPHY SCROLL SVG */}
                </div>
                {/* SKILLS CONTAINER */}
                <div className="flex flex-col gap-12 justify-center" ref={skilRef}>
                {/* SKILL TITLE */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? { x: 0 }: {}} 
                    transition={{ delay: 0.2 }} 
                    className="font-bold text-2xl">
                        SKILLS
                    </motion.h1>
                    {/* SKILL LIST */}
                    <motion.div 
                    initial={{x:"-300px"}} 
                    animate={isSkillRefInView ? { x: 0 }: {}}
                    className="flex gap-4 flex-wrap">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
                    </motion.div>
                    {/* SKILL SCROLL SVG */}
                </div>
                {/* EXPERIENCE CONTAINER */}
                <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                {/* EXPERIENCE TITLE */}
                    <motion.h1 
                    initial={{x:"-300px"}} 
                    animate={isExperiencelRefInView ? { x: 0 }: {}} 
                    transition={{ delay: 0.2 }}
                    className="font-bold text-2xl">EXPERIENCE</motion.h1>
                    {/* EXPERIENCE LIST */}
                    <motion.div 
                    initial={{x:"-300px"}} 
                    animate={isExperiencelRefInView ? { x: 0 }: {}}
                    className="">
                    {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48 ">
                            {/* LEFT */}
                            <div className="w-1/3 bg-red-200">
                                {/* JOB TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                {/* JOB DESCRIPTION */}
                                <div className="p-3 text-sm italic">My current employment. Way better than he position before!</div>
                                {/* JOB DATE */}
                                <div className="p-3 text-red text-sm font-semibold">2024 - Present</div>
                                {/* JOB COMPANY  */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* LINE CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 bg-red-200"></div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48 ">
                            {/* LEFT */}
                            <div className="w-1/3 bg-red-200">
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* LINE CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 bg-red-200">
                                {/* JOB TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                {/* JOB DESCRIPTION */}
                                <div className="p-3 text-sm italic">My current employment. Way better than he position before!</div>
                                {/* JOB DATE */}
                                <div className="p-3 text-red text-sm font-semibold">2024 - Present</div>
                                {/* JOB COMPANY  */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                            </div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48 ">
                            {/* LEFT */}
                            <div className="w-1/3 bg-red-200">
                                {/* JOB TITLE */}
                                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                {/* JOB DESCRIPTION */}
                                <div className="p-3 text-sm italic">My current employment. Way better than he position before!</div>
                                {/* JOB DATE */}
                                <div className="p-3 text-red text-sm font-semibold">2024 - Present</div>
                                {/* JOB COMPANY  */}
                                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative">
                                    {/* LINE CIRCLE */}
                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 bg-red-200"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* SVG CONTAINER */}
            <div className="hidden lg:block w-1/3 sticky top-0 xl:1/2 z-30">
                <Brain scrollYProgress={scrollYProgress}/>
                {/* <p>test</p> */}
            </div>
        </div>
    </motion.div>
    )
}

export default AboutPage