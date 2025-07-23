import { Router } from "express";

import { usersRoutes } from "./user-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundsRoutes } from "./refunds-routes";
import { uploadsRoutes } from "./uploads-routes";

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const routes = Router();

//rotas publicas
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

//rotas privadas
routes.use(ensureAuthenticated);
routes.use("/refunds", refundsRoutes);
routes.use("/uploads", uploadsRoutes);

export { routes };
