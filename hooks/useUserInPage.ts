import { useRouter } from "next/router";

export const useUserInPage = (pageHref: string) => {
  const router = useRouter();

  return router.pathname === pageHref;
};
