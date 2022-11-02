import NextCors from "nextjs-cors";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
	await NextCors(req, res, {
		// Options
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
		origin: "*",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});

	const post = await prisma.posts.create({data: req.body});
	return res.status(200).json({ post });
}
