import prisma from "../../../../lib/prisma"

export default async function handler (req, res) {
    try {
		console.log(
			"🚀 ~ file: update.js ~ line 6 ~ handler ~ parseInt(req.query.id)",
			{
				data: {
					name: req.body.name,
					status: req.body.status,
					description: req.body.description,
				},
				where: {
					id: parseInt(req.query.id),
				},
			}
		);
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