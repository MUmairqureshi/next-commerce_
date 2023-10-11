import { Button } from '@/components/ui/button';
import binocular_icon from 'components/images/binocular_icon.png';
import handsshake_icon from 'components/images/handsshake_icon.png';
import heart_icon from 'components/images/heart_icon.png';
import leaf_in_hand_icon from 'components/images/leaf_in_hand_icon.png';
import our_story_1 from 'components/images/our-story-1.webp';
import our_story_2 from 'components/images/our-story-2.webp';
import our_story_3 from 'components/images/our-story-3.webp';
import our_story_hero_4 from 'components/images/our-story-4.webp';
import our_story_hero_5 from 'components/images/our-story-5.webp';
import our_story_hero_circle_black from 'components/images/our-story-hero-circle-black.webp';
import our_story_hero_circle from 'components/images/our-story-hero-circle.webp';
import our_story_hero from 'components/images/our-story-hero.webp';
import pigeon_icon from 'components/images/pigeon_icon.png';
import shirt_icon from 'components/images/shirt_icon.png';

import Image from 'next/image';
const page = () => {
  return (
    <section>
      <div className="relative h-[390px] md:h-[430px] lg:h-[500px]">
        <Image
          src={our_story_hero}
          alt="a"
          height={500}
          width={400}
          className="h-full w-full object-cover object-top "
        />
        {/* Dull black overlay */}
        {/* <div className="absolute inset-0 z-10 bg-black opacity-30"></div> */}
        {/* Text */}
        <div className="absolute top-0 z-50 flex h-full w-full flex-col items-end justify-end p-6 text-end text-white md:gap-y-4 md:p-11">
          <Image src={our_story_hero_circle} alt="a" className="h-7 w-7 lg:h-12 lg:w-12"></Image>
          <h1 className="mt-4 text-sm font-light tracking-widest md:mt-0 md:text-xl">
            ABOUT KIRRIN FINCH
          </h1>
          <h4 className="mt-4 font-serif text-4xl md:mt-0 md:text-6xl">
            Clothing Designed for You
          </h4>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center md:mx-auto md:max-w-[300px] lg:mx-0 lg:mt-14 lg:max-w-none">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 lg:h-14 lg:w-14">
          <div className="h-5 w-5 lg:h-10 lg:w-10">
            <Image
              src={our_story_hero_circle_black}
              alt="a"
              height={35}
              width={35}
              className="h-full w-full"
            />
          </div>
        </div>
        <h1 className="mt-8 text-center text-4xl lg:text-start">The Kirrin Finch Story</h1>
        <span className="mt-7 border-b-[1px] border-black px-36"></span>
        <p className="mt-6 max-w-[290px] text-center text-sm text-slate-500 md:max-w-2xl">
          We challenge fashion industry norms for what is considered menswear & womenswear and
          instead focus on creating great fitting clothing that makes you feel comfortable &
          confident in who you are. Learn more about what makes us, us.
        </p>
      </div>

      <div className="mx-4 mt-10 bg-[#fafafa] 2xl:mx-[560px] ">
        <div className="flex flex-col gap-y-6 md:gap-y-0">
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="flex h-[650px] flex-1 flex-col justify-center">
              <div className="p-4 md:ml-24 md:p-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Image src={binocular_icon} alt="a" height={35} width={35} />
                </div>
                <h3 className="mt-2 text-lg tracking-widest text-gray-800 ">THE WHY</h3>
                <h1 className="text-4xl md:max-w-[205px] lg:max-w-xs xl:max-w-none">
                  We Were Searching Too
                </h1>
                <p className="mt-6 text-sm text-slate-700 md:max-w-[235px] lg:max-w-[360px] xl:max-w-lg ">
                  Kirrin Finch is a conscientious clothing company, founded by Brooklyn-based couple
                  Laura Moffat and Kelly Sanders Moffat, that meets the growing demand for
                  gender-defying fashion by creating menswear-inspired apparel designed to fit a
                  range of female and non-binary bodies. The inspiration for the business was borne
                  out of our own frustration at being unable to find clothes that match our personal
                  style. As women who tend to gravitate towards button-up shirts and bow ties, we
                  often find ourselves envying the clothes in the men&apos;s section, but are always
                  frustrated because they are not designed to fit a woman&apos;s body.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Image
                alt="a"
                src={our_story_1}
                className="object-cover object-center md:h-[700px] xl:h-auto"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1">
              <Image
                alt="a"
                src={our_story_2}
                className="object-cover object-center md:h-[700px] xl:h-auto"
              ></Image>
            </div>
            <div className="flex h-[650px] flex-1 flex-col items-end justify-center">
              <div className="mb-6 items-end justify-end p-4 text-end md:mb-0 md:mr-12 md:p-0">
                <div className="flex justify-end">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <Image src={pigeon_icon} alt="a" height={35} width={35} />
                  </div>
                </div>
                <h3 className="mt-2 text-lg tracking-widest text-gray-800">A BRAND BEYOND US</h3>
                <h1 className="mt-1 text-4xl md:max-w-[205px] lg:max-w-none">Behind Our Name</h1>
                <p className="mt-6 text-end text-sm text-slate-700 md:max-w-[235px] lg:max-w-sm xl:max-w-lg">
                  The name, Kirrin Finch, was inspired by iconic fictional tomboys
                  &apos;&apos;Georgina Kirrin&apos;&apos; from The Famous Five series and
                  &apos;&apos;Scout Finch&apos;&apos; from To Kill A Mockingbird. Both these
                  characters embrace the tomboy spirit and are not constrained by society&apos;s
                  views of how a woman should behave or dress. You&apos;ll probably notice that each
                  shirt takes on the name of a tomboy character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#e0e7ed] md:mt-12 2xl:mx-[560px]">
        <div className="mx-7 flex flex-col-reverse gap-y-6 py-8 md:mx-12 md:py-12 lg:flex-row">
          <div className="basis-3/5 ">
            <Image
              alt="a"
              src={our_story_1}
              className="h-[200px] w-full object-cover object-top md:h-[400px]"
            ></Image>
          </div>
          <div className="flex basis-2/5 flex-col items-end justify-center ">
            <div className="items-end justify-end text-end md:mx-auto md:max-w-sm md:text-center lg:mr-12 lg:text-end xl:max-w-none">
              <div className="mt-4 flex justify-end md:mt-0 md:justify-center lg:justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Image src={handsshake_icon} alt="a" height={35} width={35} />
                </div>
              </div>
              <h3 className="mt-2 text-lg tracking-widest text-gray-800">THE BRAND STORY</h3>
              <h1 className="mt-1 text-end text-5xl md:text-center lg:max-w-[200px] lg:text-end xl:max-w-sm">
                Why We Founded Kirrin Finch
              </h1>
              <p className="mt-6 max-w-[360px] text-end text-sm text-slate-700 lg:max-w-[210px] xl:max-w-sm">
                Listen to Laura & Kelly share their experience about shopping for their wedding day
                and all the conversations that would eventually inspire the founding of Kirrin Finch
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-cyan-950 md:mt-12 2xl:mx-[560px]">
        <div className="mx-5 flex flex-col-reverse gap-y-6 py-6 md:flex-row lg:mx-12 lg:py-12">
          <div className="flex basis-2/5 flex-col justify-center text-white">
            <div className="px-7 py-4 md:ml-16 md:px-0 md:py-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image src={heart_icon} alt="a" height={35} width={35} />
              </div>
              <h3 className="mt-2 text-sm tracking-widest md:text-lg">THE WHAT</h3>
              <h1 className="mt-1 text-4xl lg:max-w-[250px] lg:text-5xl xl:max-w-md">
                Giving Back to Our Community
              </h1>
              <p className="mt-6 max-w-sm text-sm lg:max-w-[260px] xl:max-w-sm">
                At Kirrin Finch, giving back to the LGBTQ+ community and empowering women is central
                to who we are as people, and to the core of our company.
              </p>
              <p className="mt-6 max-w-sm text-sm lg:max-w-[260px] xl:max-w-sm">
                We want every person to feel like themselves and we understand personally what the
                power of clothes can do to help achieve that. We work with our community to
                highlight all walks of life and styles of fashion, & we hope you feel represented
                here.
              </p>
            </div>
          </div>
          <div className="basis-3/5">
            <Image
              alt="a"
              src={our_story_3}
              className="object-cover object-center md:h-[700px] xl:h-auto"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-12 bg-[#fafafa] pb-4 md:pb-0 2xl:mx-[560px]">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <Image
                alt="a"
                src={our_story_hero_4}
                className="object-cover object-center md:h-[700px] xl:h-auto"
              ></Image>
            </div>
            <div className="flex h-[650px] flex-1 flex-col items-end justify-center">
              <div className="flex flex-col items-end p-6 md:mr-16 md:p-0">
                <div className="flex justify-end md:justify-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <Image src={shirt_icon} alt="a" height={35} width={35} />
                  </div>
                </div>
                <h3 className="mt-2 text-end text-sm tracking-wider text-slate-700 md:text-start lg:text-base">
                  MENSWEAR INSPIRED DESIGN
                </h3>
                <h1 className="mt-1 text-end text-4xl md:max-w-[220px] lg:max-w-none">
                  Designing for You
                </h1>
                <p className="mt-6 text-end text-sm text-slate-500 md:max-w-[235px] lg:max-w-sm xl:max-w-[500px]">
                  Today, people are questioning traditional notions of gender and embracing the
                  freedom to be themselves. That’s why we created a collection of menswear-inspired
                  button-up shirts that combine the design and aesthetic of menswear with the
                  perfect fit for the female body.
                </p>

                <p className="mt-6 text-end text-sm text-slate-500 md:max-w-[235px] lg:max-w-sm xl:max-w-[500px]">
                  We don’t want you to experience ill-fitting menswear or overly frilly womenswear
                  ever again. That’s why we went through a rigorous process to ensure our customers
                  receive the best fitting garments possible.
                </p>
                <Button className="mt-6 rounded-sm bg-black px-14 py-2 text-white ">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex h-[650px] flex-1 flex-col justify-center">
              <div className="px-4 py-4 md:ml-20 md:px-0 md:py-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Image src={leaf_in_hand_icon} alt="a" height={35} width={35} />
                </div>
                <h3 className="mt-2 tracking-wider text-slate-700 md:text-lg">
                  ETHICALLY MADE CLOTHING
                </h3>
                <h1 className="mt-1 text-4xl md:max-w-[205px] lg:max-w-none">
                  Sustainable Practices
                </h1>
                <p className="mt-6 text-sm text-slate-500 md:max-w-[235px] lg:max-w-sm xl:max-w-lg">
                  The fashion industry is the second most polluting industry, second only to the oil
                  industry. That&apos;s why we believe it is essential for our brand to have
                  environmentally sustainable practices.
                </p>

                <p className="mt-6 text-sm text-slate-500 md:max-w-[235px] lg:max-w-sm xl:max-w-lg">
                  We think the person making it is just as important as the person wearing it.
                  That&apos;s why we scour the globe to find factories with fair labor and ethical
                  manufacturing practices.
                </p>

                <p className="mt-6 text-sm text-slate-500 md:max-w-[235px] lg:max-w-sm xl:max-w-lg">
                  Learn more about our commitment to sustainability here.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Image
                alt="a"
                src={our_story_hero_5}
                className="object-cover object-center md:h-[700px] xl:h-auto"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
