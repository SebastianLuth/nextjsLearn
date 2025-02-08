import { useRouter } from "next/router"
import { useEffect } from "react";
import { supabase } from "~/lib/supabase/client";

export const useGuestRoute = () => {
    const router = useRouter ();

    useEffect(() => {
        void ( async function () {
            const user = await supabase.auth.getUser();
            console.log(user)
            if (user) {
                await router.replace("/")
            }
        }) ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}