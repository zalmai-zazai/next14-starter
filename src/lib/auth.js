import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./utils";
import { User } from "./models";
import bcryt from "bcrypt";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    await connectDB();

    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong Credintials");
    }
    const isPasswordCorrect = await bcryt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      //   return { error: "Credintials" };
      throw new Error("Wrong Credintials");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("faild to login");
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //   console.log(user, account, profile);
      if (account.provider === "github") {
        await connectDB();
        try {
          const user = await User.findOne({
            email: profile.email,
          });
          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
