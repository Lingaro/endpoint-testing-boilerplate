import rest, {Request} from "rest";
import mime from "rest/interceptor/mime";
import pkg from "../package.json";

const {TARGET} = process.env;
export const URL = pkg['servers'][TARGET];

export const client = (req: string | Request) => rest.wrap(mime)(
    (typeof (req) === 'string'
            ? (URL + req)
            : Object.assign({}, req, {path: URL + (req as Request).path})
    ) as any,
);

export default (req: string | Request) => client(req).then(response => response.entity);
