import { useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        deleteCookie("token");
        deleteCookie("userID");

        Router.push('/');
    }, []);
}