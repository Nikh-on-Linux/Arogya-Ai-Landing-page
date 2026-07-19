import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';

function FooterSection() {
    return (
        <div className='w-full py-3 bg-foreground px-14 flex flex-row justify-between items-center' >
            <span className='font-syne text-xl text-background font-semibold' >Arogya AI</span>
            <div className='flex flex-row items-center gap-8' >
                <div className='flex flex-row items-center justify-center gap-2' >
                    <MailIcon className='text-secondary-background/50 w-4 h-4' />
                    <span className='text-secondary-background/65' >aniketkarkhelikar@gmail.com</span>
                </div>
                <div className='flex flex-row items-center justify-center gap-2' >
                    <PhoneIcon className='text-secondary-background/50 w-4 h-4' />
                    <span className='text-secondary-background/65' >+91 9561894119</span>
                </div>
            </div>
        </div>
    )
}

export default FooterSection