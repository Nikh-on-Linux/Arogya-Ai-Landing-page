"use client"
import React from 'react'
import FlowCard from '@/components/ui/flowcard.ui.component';

function FlowSection() {
    return (
        <div className='w-full flex flex-col gap-4 py-[240px]' >
            <img src="section1.svg" className="w-screen absolute left-0 top-150 -z-10" ></img>
            <div className='z-10 py-[42px] flex flex-row items-end justify-between px-20' >
                <h2 className='font-newsreader py-[32px] text-4xl leading-10 font-medium max-w-[515]'>Follows every path in the consultation </h2>
                <p className='font-inter text-[16px] leading-6 tracking-wider max-w-[600]' >Arogya Ai is built considering the workflow of professional doctors on the line. There feedback continously enables us to refine the capabilities of Arogya AI to enhance the maximum productivity of every single doctor. </p>
            </div>
            <FlowCard title="Understand the Case" body={"See relevant patient history alongside current symptoms, without searching through records one by one."} imageurl={"ss1.png"} leftAlign={true} />
            <FlowCard title="Support the diagnosis" body={"Reason through the case, explore possible diagnoses, and find relevant research and clinical information to support the decision."} imageurl={"ss2.png"} leftAlign={false} />
            <FlowCard title="Prepare the next steps" body={"Help prepare prescriptions, recommend medicines for the doctor’s review, schedule follow-ups, and handle routine work after the consultation."} imageurl={"ss3.png"} leftAlign={true} />
        </div>
    )
}

export default FlowSection