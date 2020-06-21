
import { RequestHandler } from "./service/RequestHandler";
import { container } from "./dependency-injection/inversify.config";
import SYMBOLS from "./dependency-injection/Symbols";

const handler = container.get<RequestHandler>(SYMBOLS.RequestHandler);

handler.callAPIs();