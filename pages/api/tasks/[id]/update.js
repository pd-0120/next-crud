import NextCors from "nextjs-cors";
import prisma from "../../../../lib/prisma"

export default async function handler (req, res) {
    await NextCors(req, res, {
		// Options
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
		origin: "*",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});

	try {
		const post = await prisma.posts.update({
			data: {
				name: req.body.name,
				status: req.body.status,
				description: req.body.description,
			},
			where: {
				id: parseInt(req.query.id),
			},
		});
		return res.status(200).json({ status: "success", post });
	} catch (error) {
		return res.status(200).json({ status: "error", });
	}
}