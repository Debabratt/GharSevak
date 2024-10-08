import NextAuth from "next-auth/next";


const handler = NextAuth( {
    providers: [
    {
        id: "descope",
        name: "Descope",
        type: "oauth",
        wellKnown: `https://api.descope.com/`+process.env.DESCOPE_CLIENT_ID+`/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId: process.env.DESCOPE_CLIENT_ID,
        clientSecret: process.env.DESCOPE_SECRET,
        checks: ["pkce", "state"],
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },
    }]
}  )


export { handler as GET, handler as POST }
