import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
	const post = await prisma.posts.create({data: req.body});
	return res.status(200).json({ post });
}
