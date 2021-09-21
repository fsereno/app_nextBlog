// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.method);
  console.log(req.body);
  if (req.method === 'PUT') {
    res.status(200).json({error: false});
  } else {
    res.status(400).json({error: true});
  }
}