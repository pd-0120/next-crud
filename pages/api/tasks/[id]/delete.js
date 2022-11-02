import NextCors from "nextjs-cors";
import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {

	await NextCors(req, res, {
		// Options
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
		origin: "*",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});

	if (req.method === "DELETE") {
		try {
			await prisma.posts.delete({
				where: {
					id: parseInt(req.query.id),
				},
			});
			return res.status(200).json({ status: "success" });
		} catch (error) {
			return res.status(200).json({ status: "error"});
		}
	}
}
