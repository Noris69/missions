import { getToken } from "next-auth/jwt";
import { TwitterApi } from 'twitter-api-v2';

export default async function _like(req, res) {
 
    const tweet_id = process.env.TWEET_ID

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const second_client = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: token.twitter.accessToken,
    accessSecret: token.twitter.refreshToken
  })

  const twitter = second_client.readWrite;
  if (!token) {
    return res.status(401).json({
      status: "ERR",
      message: "you are not allowed"
    })
  } 


  try {
    let like = false;
    const rest = await twitter.v2.userLikedTweets(token.sub, {
        max_results: 100,
    })


    console.log(rest)

    rest.data.map((liked) => {
        // console.log(liked.name)
        if (liked.id == tweet_id) {
            like = true;
        }
    } )


    return res.status(200).json({
      status: "Ok",
      like: like,
    });
  } catch (e) {
    console.error(e)
    return res.status(400).json({
      status: e.message,
    });
  }
};
