import Card from './cardcomponent';

const CardListingScetion = ({ Blogs }: { Blogs: any }) => {
  return (
    <div className="grid w-full grid-cols-1  gap-x-6 gap-y-8 bg-white px-7 py-10 md:grid-cols-2 lg:grid-cols-3">
      {Blogs?.map((item:any, ind:any) => {
        return (
          <Card
          url={item.node?.handle}
            altText={item.node?.image?.altText}
            name={item.node?.title}
            description={item?.node?.content}
            imageSrc={item.node?.image?.src}
          />
        );
      })}
    </div>
  );
};

export default CardListingScetion;
