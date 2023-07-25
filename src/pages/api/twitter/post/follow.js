import { getToken } from "next-auth/jwt";
import { TwitterApi } from 'twitter-api-v2';

export default async function follow(req, res) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("wow")

  const twitter_id = process.env.TWITTER_ID

  const second_client = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: token.twitter.accessToken,
    accessSecret: token.twitter.refreshToken
  })

  try {
    const twitter = second_client.readWrite
    await twitter.v2.follow(token.sub, twitter_id)
    return res.status(200).json({
      status: "Ok",
    });
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      status: "ERR", 
      message: e
      });
  }
};