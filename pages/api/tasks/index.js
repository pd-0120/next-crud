import prisma from "../../../lib/prisma";
export default async function handler (req, res) {
	const tasks = await prisma.posts.findMany();

	res.status(200).json(tasks);
}