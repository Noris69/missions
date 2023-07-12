import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({

  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
    }),
    // Providers.Discord({
    //   clientId: process.env.DISCORD_ID,
    //   clientSecret: process.env.DISCORD_PUBLIC_KEY,
    //   scope: "guilds"
    // }),
  ],

  callbacks: {
    async jwt(token, user, account = {}, profile, isNewUser) {

      if (account.provider && !token[account.provider]) {
        token[account.provider] = {};
      }

      if (account.accessToken) {
        token[account.provider].accessToken = account.accessToken;
      }

      if (account.refreshToken) {
        token[account.provider].refreshToken = account.refreshToken;
      }

      if (account.results) {
        token[account.provider].screen_name = account.results.screen_name;
      }

      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
