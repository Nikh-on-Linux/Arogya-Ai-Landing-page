import React from 'react'

type FieldCardProps = {
  imageUrl: string
  caption: string
}

function FieldCard({ imageUrl, caption }: FieldCardProps) {
  return (
    <article className='overflow-hidden rounded-[18px] border border-black/15 bg-white'>
      <div className='aspect-[1.18] bg-[#f6f6f6]'>
        <img src={imageUrl} alt='' className='h-full w-full object-cover' />
      </div>
      <div className='border-t border-black/10 bg-[#f3f3f3] px-4 py-3'>
        <p className='font-inter text-sm leading-5 tracking-wide text-foreground/90'>{caption}</p>
      </div>
    </article>
  )
}

function FieldSection() {
  const cards = [
    {
      imageUrl: 'field-photo-1.jpg',
      caption:
        "A rural general physician using ArogyaAI during an actual consultation, reviewing the model's clinical reasoning output alongside the patient.",
    },
    {
      imageUrl: 'field-photo-2.jpg',
      caption:
        'A physician testing the ArogyaAI prototype at their clinic desk, evaluating its diagnostic support output in a live practice setting.',
    },
  ]

  return (
    <section className='w-full py-28 md:py-28'>
      <div className='mx-auto flex w-full flex-col gap-10 px-6 md:px-20'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <h2 className='font-newsreader text-3xl font-medium md:text-4xl'>
            ArogyaAI <span className='text-primary'>in Field</span>
          </h2>
          <p className='max-w-xl font-inter text-sm leading-6 tracking-wide text-foreground/80 md:text-right'>
            Real-world snapshots of ArogyaAI being used in consultation spaces, where the interface supports clinical reasoning without getting in the way.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {cards.map((card) => (
            <FieldCard key={card.caption} imageUrl={card.imageUrl} caption={card.caption} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FieldSection