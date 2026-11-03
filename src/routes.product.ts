import { ProductController } from "./controllers/ProductController"

export const RoutesProduct = [{
    method: "get",
    route: "/users",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: ProductController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: ProductController,
    action: "remove"
}]