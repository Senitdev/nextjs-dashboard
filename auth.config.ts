import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
    pages:{
        signIn: '/login',
    },
    callbacks:{
        authorized({auth,request:{nextUrl}}){
            const isLoggedIn = !!auth?.user;
            const isOnDashbord=nextUrl.pathname.startsWith('/dashboard');
            if(isOnDashbord){
                if(isLoggedIn) return true;
                return false;
            }else if(isLoggedIn){
                return Response.redirect(new URL('/dashboard',nextUrl));
            }
            return true;
        }
    },
    providers:[]
} satisfies NextAuthConfig;