// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { readFileSync } from "node:fs"
var data = JSON.parse(readFileSync('../data.json', 'utf8'));

export const getSize = () => data.length;

export default function handler(req, res) {
  res.status(200).json(data);
}
