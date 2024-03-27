import { publicProcedure, router } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const usersRouter = router({
  get: publicProcedure.query(async () => {
    return await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }),
});
