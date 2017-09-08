import rest, { Request } from "rest";
import mime from "rest/interceptor/mime";

export const { URL } = process.env;

export const client = (req: string | Request) => rest.wrap(mime)(
  (typeof (req) === 'string'
    ? (URL + req)
    : Object.assign({}, req, { path: URL + req.path })
  ) as any,
);

export default (req: string | Request) => client(req).then(response => response.entity);
