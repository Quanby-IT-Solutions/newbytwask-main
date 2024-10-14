"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

import { useState } from "react";
import { useMediaQuery } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ChevronDownIcon } from "@radix-ui/react-icons"

interface ReviewProps {
  reviewerName: string;
  location: string;
  reviewText: string;
  rating: number;
  timeAgo: string;
  taskerReply: string;
}
const Reviews: React.FC<ReviewProps> = ({ reviewerName, location, reviewText, rating, timeAgo, taskerReply }) => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 25 : 20;

  return(
          <div className="h-fit">
            <Separator />
            <div className="h-fit py-10">
              <div className='flex gap-4 pb-2.5 md:pb-5'>
                  <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
                    <Avatar>
                      <AvatarImage className="w-[60px] h-[60px]" src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                      <p className="self-start text-lg- md:text-xl font-bold text-gray bg-blend-normal">
                        {reviewerName}
                      </p>
                      <p className="self-start text-lg md:text-xl text-gray-500 font-regular text-gray bg-blend-normal">
                        {location}
                      </p>
                  </div>
              </div>
              <div className="flex flex-col pl-[74px]">
                <div className="h-7 flex items-center gap-2">
                  <div className='flex items-center pb-1.5 gap-1 text-yellow-400'>
                    <div className='flex items-center text-yellow-400'>
                      <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                      <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                      <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                      <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                      <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                    </div>
                    <p className="flex self-center mt-1.5 text-lg md:text-xl font-bold">
                      {rating}
                    </p>
                  </div>
                  <Separator orientation="vertical"/>
                  <p className="text-lg text-gray-600 font-regular">
                    {timeAgo}
                  </p>
                </div>
                <p className=" pt-2 text-[22px] text-gray-700 font-regular">
                {reviewText}
                </p>
              </div>
              <div className="flex flex-col pl-[74px] gap-6 py-4">
                <div className="flex gap-4 text-lg text-gray-800 font-semibold">
                  <p>
                    Helpful?
                  </p>
                  <button className="flex items-center gap-2">
                    <ThumbUpOffAltIcon />
                    <p>Yes</p>
                  </button>
                  <button className="flex items-center gap-2">
                    <ThumbDownOffAltIcon />
                    <p>No</p>
                  </button>
                </div>
                <div className='flex gap-4 pb-2.5'>
                    <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
                      <Avatar>
                        <AvatarImage className="w-11 h-11" src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="self-center text-lg- md:text-xl font-bold text-gray bg-blend-normal">Seller's Response</p>
                </div>
                <p className="pl-[60px] self-start text-lg md:text-xl text-gray-500 font-regular text-gray bg-blend-normal">
                  {taskerReply}
                </p>
              </div>
            </div>
          </div>
  );
};

const _InfoTabs = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 25 : 20;
  

  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState<string>("Most Relevant")

  // Function to handle selecting an option
  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

    // Define individual review counts
    const ratings = {
      fiveStar: 852,
      fourStar: 37,
      threeStar: 9,
      twoStar: 2,
      oneStar: 2,
    }
  
    // Calculate the total number of ratings
    const totalReviews =
      ratings.fiveStar +
      ratings.fourStar +
      ratings.threeStar +
      ratings.twoStar +
      ratings.oneStar
  
    // Calculate the percentage for each star rating
    const fiveStarPercentage = (ratings.fiveStar / totalReviews) * 100
    const fourStarPercentage = (ratings.fourStar / totalReviews) * 100
    const threeStarPercentage = (ratings.threeStar / totalReviews) * 100
    const twoStarPercentage = (ratings.twoStar / totalReviews) * 100
    const oneStarPercentage = (ratings.oneStar / totalReviews) * 100
  
    const reviews: ReviewProps[] = [
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
      {
        reviewerName: "marvinachi",
        location: "United States",
        reviewText: "Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. Highly satisfied. Thank you!",
        rating: 5,
        timeAgo: "2 months ago",
        taskerReply: "Thank you so much 😊",
      },
      {
        reviewerName: "JohnDoe",
        location: "Canada",
        reviewText: "Amazing design skills! The task was done professionally, and I couldn't be happier.",
        rating: 4,
        timeAgo: "1 month ago",
        taskerReply: "Glad you liked it! 😊",
      },
      {
        reviewerName: "JaneSmith",
        location: "Australia",
        reviewText: "The quality of work was excellent, but delivery took longer than expected.",
        rating: 3,
        timeAgo: "3 weeks ago",
        taskerReply: "Sorry about the delay, but I’m happy you’re satisfied with the result!",
      },
    ];

    // State to control how many reviews are visible initially
  const [visibleReviews, setVisibleReviews] = useState(5);

  // Function to handle the "See More" button click
  const handleSeeMore = () => {
    setVisibleReviews((prevVisible) => prevVisible + 5);
  };

  return (
    <section className="flex flex-col pb-6">
      <Tabs defaultValue="reviews and comments" className="w-full">
        <TabsList>
          <TabsTrigger className="data-[state=active]:border-b-2 border-teal-500 data-[state=active]:font-bold" value="profile">Profile</TabsTrigger>
          <TabsTrigger className="data-[state=active]:border-b-2 border-teal-500 data-[state=active]:font-bold" value="reviews and comments">Reviews and Comments</TabsTrigger>
          <TabsTrigger className="data-[state=active]:border-b-2 border-teal-500 data-[state=active]:font-bold" value="faqs">FAQs</TabsTrigger>
        </TabsList>
        <Separator className="my-4"/>
        <TabsContent value="profile">
          <p className="text-2xl text-gray-700 font-bold">
            About The Tasker
          </p>
          <div className='flex gap-4 py-10'>
            <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
              <Avatar>
                <AvatarImage className="w-40 h-40" src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
                <p className="self-start text-lg md:text-xl font-bold text-gray-600 bg-blend-normal">airb123</p>
                <p className="self-start text-lg md:text-[21px] text-gray-500 font-regular text-gray bg-blend-normal">Premium Digital Studio</p>
                <div className='flex items-center gap-4'>
                  <div className='flex gap-2'>
                    <div className='flex gap-1 text-yellow-400'>
                      <div className='flex text-yellow-400'>
                        <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                        <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                        <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                        <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                        <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                        </div>
                      <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
                    </div>
                    <p className="mt-1.5 text-base md:text-lg text-gray-400 font-regular">(902)</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-5 px-10 py-7 text-xl text-gray-600 font-semibold border-2 border-gray-400">Contact Me</Button>
            </div>
        </div>
          <Card className="px-6">
            <CardContent className="grid grid-cols-2 px-0 py-6">
              <div className="grid grid-cols-1 gap-4 text-gray-600">
                <div className="flex flex-col">
                  <p className="text-xl font-normal">From</p>
                  <p className="text-xl font-bold">Sri Lanka</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-normal">Avg. response time</p>
                  <p className="text-xl font-bold">1 hour</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-normal">Languages</p>
                  <p className="text-xl font-bold">English</p>
                </div>
              </div>
              <div className="h-fit grid grid-cols-1 gap-4 text-gray-600">
                <div className="flex flex-col">
                  <p className="text-xl font-normal">Member since</p>
                  <p className="text-xl font-bold">Aug 2019</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-normal">Last Delivery</p>
                  <p className="text-xl font-bold">about 3 hours</p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="px-0 py-6 text-[22px] text-gray-500">
              <p>At Airbluesoft Premium Digital Studio we create all kinds of creative videos, specializing in Creating Promos( Website, Apps, Fashion, Real Estate, Youtube, NFT) and all other promos and all instructional videos. 
                <br />
                <br />
                We Create Basic To High-End Videos.
                <br />
                <br />
                Creativity Beyond the Limits.
                -Airbluesoft Premium Digital Studio-
                </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="reviews and comments">
          <p className="text-2xl text-gray-700 font-bold">
            Reviews
          </p>
          <div className="pb-10">
            <div className="flex gap-5 py-4 items-center">
              <p className="text-xl text-gray-700 font-bold">
                902 reviews for this Gig
              </p>  
              <div className='flex gap-1 text-yellow-400'>
                <div className='flex text-yellow-400'>
                  <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                  <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                  <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                  <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                  <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                </div>
                <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
              </div>
            </div>
            <div className="flex pb-20">
              <div className="flex justify-start w-[480px] px-4 gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-blue-600 font-semibold">
                    5 Stars
                  </p>
                  <p className="text-xl text-blue-600 font-semibold">
                    4 Stars
                  </p>
                  <p className="text-xl text-blue-600 font-semibold">
                    3 Stars
                  </p>
                  <p className="text-xl text-blue-600 font-semibold">
                    2 Stars
                  </p>
                  <p className="text-xl text-blue-600 font-semibold">
                    1 Star
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Progress value={fiveStarPercentage} className="w-72"/>
                    <p className="text-lg text-blue-600 font-regular">
                      ({ratings.fiveStar})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={fourStarPercentage} className="w-72"/>
                    <p className="text-lg text-blue-600 font-regular">
                      ({ratings.fourStar})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={threeStarPercentage} className="w-72"/>
                    <p className="text-lg text-blue-600 font-regular">
                      ({ratings.threeStar})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={twoStarPercentage} className="w-72"/>
                    <p className="text-lg text-blue-600 font-regular">
                      ({ratings.twoStar})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={oneStarPercentage} className="w-72"/>
                    <p className="text-lg text-blue-600 font-regular">
                      ({ratings.oneStar})
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[450px] px-4 text-xl text-gray-400 font-regular">
                <p className="pb-4 text-xl text-gray-700 font-semibold">
                  Rating Breakdown
                </p>
                <div className="flex items-center justify-between">
                  <p>
                    Seller communication level
                  </p>
                  <div className='flex gap-1 text-yellow-400'>
                    <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                    <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    Recommend to a friend
                  </p>
                  <div className='flex gap-1 text-yellow-400'>
                    <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                    <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    Service as Described
                  </p>
                  <div className='flex gap-1 text-yellow-400'>
                    <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                    <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="flex w-full max-w-md items-center">
              <Input type="search" placeholder="Search reviews" className="h-[60px] p-6 text-[22px] rounded-l-xl rounded-r-none"/>
              <Button type="submit" className="h-[60px] rounded-l-none rounded-r-xl">
                <SearchRoundedIcon className=""/>
              </Button>
            </div>
            <div className="flex flex-col gap-5 py-6">
              <div className="flex items-center text-[22px] text-gray-700 font-regular">
                <p>
                  Sort By
                </p>
                <DropdownMenu>
                  {/* Dropdown trigger button with the name of the selected option */}
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-[22px] text-gray-700 font-semibold hover:bg-white">
                      {selectedOption}
                      <ChevronDownIcon className="h-4 w-4 ml-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      {/* Options that update the button label when clicked */}
                      <DropdownMenuItem onClick={() => handleSelect("Most Relevant")}>
                        Most Relevant
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSelect("Least Relevant")}>
                        Least Relevant
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSelect("Most Helpful")}>
                        Most Helpful
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center space-x-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xl font-regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Delivery images (558)
                </label>
              </div>
            </div>
          </div>
          {reviews.slice(0, visibleReviews).map((reviews, index) => (
            <Reviews
              key={index}
              reviewerName={reviews.reviewerName}
              location={reviews.location}
              reviewText={reviews.reviewText}
              rating={reviews.rating}
              timeAgo={reviews.timeAgo}
              taskerReply={reviews.taskerReply}
            />
          ))}
          <Separator />
          {visibleReviews < reviews.length && (
            <div className="h-fit flex justify-center py-4">
              <button onClick={handleSeeMore} className="flex items-center text-[22px] font-regular text-teal-600">
                <AddRoundedIcon sx={{fontSize}}/>
                See More
              </button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="faqs">
          <p className="text-2xl text-gray-700 font-bold">
            FAQs
          </p>
          <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className=" text-gray-700">
                    If I provide a website address can you take the screenshots ?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className=" text-gray-700">
                    Yes
                  </p>
                </AccordionContent>
              </AccordionItem>
              <Separator />
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <p className=" text-gray-700">
                    I need to add the voice over, Is that possible ?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className=" text-gray-700">
                    Yes
                  </p>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </section>  
  );
};

export default _InfoTabs;
