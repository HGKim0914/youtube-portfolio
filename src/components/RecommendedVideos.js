import React from "react";
import '../css/RecommendedVideos.css';
import VideoCard from "./VideoCard";

function RecommendedVideos() {
      return(
        <div className="recommendedVideos">
          <h2>Recommended Videos</h2>
          <div className="recommendedVideos__videos">
            <VideoCard />
            {/* 
            <VideoCard 
              title="How to make deep-fried tator tots"
              views="15M views"
              timestamp="5 years ago"
              channelImage="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              channel="HG Cooking World"
              image="https://thumbor.thedailymeal.com/A19TQkkZwswB4RriH3BrKMeWoDA=/870x565/filters:focal(591x443:592x444):format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/copy/iStock-520326646_0.jpg"
            />
            <VideoCard 
              title="15 Different Cooking Method You Should Know"
              views="20M views"
              timestamp="1 day ago"
              channelImage="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              channel="HG Cooking World"
              image="https://cdn.cdnparenting.com/articles/2019/03/08160733/1303623835-H.jpg"
            />
            <VideoCard 
              title="Positive Vibes - Happy Music beat to Relax, Work, Study"
              views="758K views"
              timestamp="7 months ago"
              channelImage="https://media2.s-nbcnews.com/j/newscms/2019_09/2769481/190228-headphones-music-se-152p_58f8d656ad9189f6b00167ef83c350c3.fit-2000w.jpg"
              channel="Music Town"
              image="https://i.ytimg.com/vi/mmS4x331fz4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDMcJ2Otrx21R4OMb7zgjTa97Ycbg"
            />
            
            
            <VideoCard 
              title="How to make Ram-don"
              views="100M views"
              timestamp="2 weeks ago"
              channelImage="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              channel="HG Cooking World"
              image="https://img.hankyung.com/photo/202002/AA.21726982.1.jpg"
            />
            <VideoCard 
              title="Korean Style Braised Short Ribs"
              views="5.4M views"
              timestamp="6 months ago"
              channelImage="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              channel="HG Cooking World"
              image="https://roundkitchen7.co.kr/web/product/big/20200407/e23fc42960f5f746fc7a9554ed3fa4cd.jpg"
            /> */}
          </div>

        </div>
      );
}
  
export default RecommendedVideos;