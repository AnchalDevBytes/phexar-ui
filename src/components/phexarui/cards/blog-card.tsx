import { Calendar, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className='flex justify-center mb-10'>
        <div className='flex flex-col md:flex-row w-full max-w-4xl border border-neutral-100 dark:border-neutral-800 shadow-sm rounded-2xl'>
            <div className='h-60 md:h-auto w-full md:w-[380px]'>
                <Image
                    src="https://images.unsplash.com/photo-1764022363311-b09420ddf0ae?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="placeholder"
                    width={220}
                    height={140}
                    sizes="100vw"
                    className="w-full h-full object-cover rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl md:rounded-tl-2xl md:rounded-bl-2xl"
                />
            </div>  

            <div className='flex-1 flex-col bg-white dark:bg-neutral-950 md:rounded-tr-2xl md:rounded-br-2xl rounded-bl-2xl rounded-br-2xl p-8 z-10 '>
              <div className='flex justify-between items-center'>
                <span className='bg-neutral-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-100 px-4 py-1 rounded-md text-xs font-bold'>Productivity</span>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-3 h-3 text-neutral-500 dark:text-neutral-400'/>
                  <span className='text-xs text-neutral-500 dark:text-neutral-400'>{new Date().getHours().toLocaleString()} hour ago</span>
                </div>
              </div>

              <div className='flex flex-col gap-3 mt-4'>
                <h3 className='text-xl md:text-3xl font-bold text-neutral-950 dark:text-white'>
                  10 Essential Tips for Productive Remote Work
                </h3>
                <p className='text-sm font-medium text-neutral-500 dark:text-neutral-400'>
                  Discover how to maximize your productivity and maintain work-life balance while working from home with these expert-approved strategies.
                </p>
              </div>

              <div className='flex flex-col gap-4 md:flex-row justify-center md:justify-between items-start md:items-center mt-5 md:mt-10'>
                <div className='flex  gap-3 items-center'>
                  <div className='h-11 w-11 rounded-full bg-neutral-50 dark:bg-neutral-700 overflow-hidden'>
                      <Image
                        src={"/img2.jpg"}
                        alt="placeholder"
                        width={220}
                        height={140}
                        className="w-full h-full object-cover rounded-full object-top"
                      />
                    </div>

                    <div className='flex flex-col gap-1'>
                      <h5>John Doe</h5>
                      <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3 text-neutral-500 dark:text-neutral-400'/>
                          <span className='text-xs text-neutral-500 dark:text-neutral-400'>5 min read</span>
                        </div>
                        <div className='flex items-center gap-1' >
                          <MessageCircle className='w-3 h-3 text-neutral-500 dark:text-neutral-400'/>
                          <span className='text-xs text-neutral-500 dark:text-neutral-400'>12 comments</span>
                        </div>
                      </div>
                    </div>
                </div>

                <button className='w-full md:w-auto px-4 py-2 rounded-sm border border-neutral-200 dark:border-neutral-700 text-sm shadow-sm font-medium bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200'>
                  Read More
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard;
