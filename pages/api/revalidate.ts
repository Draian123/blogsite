// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=44c6a0f887e59b48d0776fb074f77fd2

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token ' })
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true })

}