import prisma from "@/libs/prismadb"

export async function getUsers() {
    try {
        const users = prisma?.user.findMany();

        return users
    } catch (error: any) {
        throw new Error(error);

    }
}