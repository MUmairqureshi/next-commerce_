import { Product } from 'lib/shopify/types';
import Card from "./cardcomponent";

const CardListingScetion = ({Products}:{Products:Product[]}) => {
    
  return (
    <div className='px-7 py-10 bg-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 w-full'>    
    {Products?.map((item,ind)=>{
        return(
            <Card
            altText={item.featuredImage.altText}
            name={item.title} 
            description={item.description} 
            imageSrc={item.featuredImage.url}/>
        )
    })}

    </div>
  )
}

export default CardListingScetion