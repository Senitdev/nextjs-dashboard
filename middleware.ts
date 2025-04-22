import  NextAuth from  'next-auth'
import { match } from "assert";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;
export const config={
    matchers:['/((?!api|_next/static|_next/image|.*\\.png$).*)' ]
}