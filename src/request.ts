import rest, { Request } from "rest";
import mime from "rest/interceptor/mime";

export const client = rest.wrap(mime);

export default (req: string | Request) => client(req as any).then(response => response.entity);
