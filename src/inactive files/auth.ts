import NextAuth from "next-auth";
import Google from "next-auth/providers/google" 
import { clientStates } from "@/state/clientState";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token, user, account }) {
      // This is triggered when a user logs in
      if (account && user) {
        // You can fetch your token from your Django backend here
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            first_name: user.name.split(" ")[0],
            last_name: user.name.split(" ")[1] || "",
          
          }),
        });

        const data = await response.json();
        
        // tokenState.set(data.token)
        // navSession.log.set(true)
        if (data.token) {
     
          token.accessToken = data.token; // Add the token to the JWT
        }
      }

      return token; // Return the modified token
    },

    async session({ session, token }) {
 

      session.accessToken = token.accessToken;
      return session;
    },
  },
  
});
