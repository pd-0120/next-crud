import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
	const post = await prisma.posts.findFirstOrThrow({
		where : {
			id : parseInt(req.query.id)
		}
	})

	return res.status(200).json({ post });
}
