import Item from '../components/Item'
import { getItemsByCategory } from '@/data'
import { headers } from 'next/headers'

export default async function Category() {
  const slug = headers().get('x-invoke-path')?.slice(1) || ''

  const reverseSlugGenerator = (text: string) => {
    return text.split('-').join(' ')
  }

  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <div className='flex flex-wrap gap-y-5 mt-5 md:mt-5'>
        {getItemsByCategory(reverseSlugGenerator(slug)).map(
          (category, i: number) => (
            <div key={i} className='w-[48%] md:w-[30%] lg:w-[24%] mx-auto'>
              <Item item={category} />
            </div>
          )
        )}
      </div>
    </main>
  )
}
