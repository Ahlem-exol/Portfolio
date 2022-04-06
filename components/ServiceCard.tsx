import { FunctionComponent } from 'react'
import { IService } from '../type'
import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: IService }> = ({
   service: { Icon, title, about },
}) => {
  
    // to elimnat  a HTML coe
    
    function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-pink' />
         <div className=''>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
