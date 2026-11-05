import { ClientController } from "./controllers/ClientController"

export const RoutesCliente = [{
    method: "get",
    route: "/clientes",
    controller: ClientController,
    action: "all"
}, {
    method: "get",
    route: "/clientes/:id",
    controller: ClientController,
    action: "one"
}, {
    method: "post",
    route: "/clientes",
    controller: ClientController,
    action: "save"
}, {
    method: "delete",
    route: "/clientes/:id",
    controller: ClientController,
    action: "remove"
}]