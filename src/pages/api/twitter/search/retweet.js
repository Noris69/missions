import { getSession } from "next-auth/client";
import { getToken } from "next-auth/jwt";
import { TwitterApi } from "twitter-api-v2";

export default async function rtwt_replay(req, res) {

  const tweet_id = process.env.TWEET_ID

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    return res.status(401).json({
      status: "ERR",
      message: "you are not allowed"
    })
  } 
  const second_client = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: token.twitter.accessToken,
    accessSecret: token.twitter.refreshToken,
  });

  const twitter = second_client.readWrite;

  try {
    const rest = await twitter.v2.tweetRetweetedBy(tweet_id)

    let retweeted = false;
    console.log(rest)
    rest.data.map((user) => {
      if (user.id == token.sub) {
        retweeted = true;
      }
    })



    return res.status(200).json({
      status: retweeted ? "Ok" : "ERR"
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: e.message,
    });
  }
};
