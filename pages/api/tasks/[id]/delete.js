import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
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
