import React from 'react'

function ValidationSection() {
  return (
    <div className='w-full pt-54'>
      <div className='mx-auto flex w-full flex-col gap-10 px-6 md:px-20'>
        <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
          <div className='flex flex-col gap-3'>
            <span className='font-newsreader text-3xl'>Doctor&apos;s Validation</span>
            <h2 className='font-newsreader text-4xl font-medium leading-tight md:text-5xl'>
              Endorsement <span className='text-primary'>Letters</span>
            </h2>
          </div>
          <p className='max-w-xl font-inter text-sm leading-6 tracking-wide text-right text-foreground/80 md:pt-4'>
            Feedback from practicing physicians who reviewed and tested the ArogyaAI prototype in real clinical settings.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <article className='group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)]'>
            <div className='h-0.5 w-5 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-8' />
            <div className='flex flex-col gap-1'>
              <h3 className='font-inter text-sm font-semibold leading-5'>Dr. S. Balshetwar</h3>
              <p className='font-inter text-sm font-medium leading-5 text-foreground/75'>FCPS D&apos;Ortho – Udayagiri Hospital</p>
            </div>
            <p className='font-inter text-sm leading-6 text-foreground/90'>
              &ldquo;Addresses a genuine clinical need and reduces doctors&apos; administrative load in large urban hospitals.&rdquo;
            </p>
          </article>

          <article className='group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)]'>
            <div className='h-0.5 w-5 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-8' />
            <div className='flex flex-col gap-1'>
              <h3 className='font-inter text-sm font-semibold leading-5'>Dr. R. N. Lakhotiya</h3>
              <p className='font-inter text-sm font-medium leading-5 text-foreground/75'>President – Lions Eye Hospital</p>
            </div>
            <p className='font-inter text-sm leading-6 text-foreground/90'>
              &ldquo;Provides an instant specialist&apos;s perspective for more informed clinical decisions.&rdquo;
            </p>
          </article>

          <article className='group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)]'>
            <div className='h-0.5 w-5 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-8' />
            <div className='flex flex-col gap-1'>
              <h3 className='font-inter text-sm font-semibold leading-5'>Dr. Vishal Anmale</h3>
              <p className='font-inter text-sm font-medium leading-5 text-foreground/75'>
                MD (Ay.), PGDEMS (Ruby Hall Pune) – Sanjivan Hospital
              </p>
            </div>
            <p className='font-inter text-sm leading-6 text-foreground/90'>
              &ldquo;Helps doctors reach faster, more confident diagnoses — especially in rural clinics.&rdquo;
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ValidationSection