import { ProductController } from "./controllers/ProductController"

export const RoutesProduct = [{
    method: "get",
    route: "/productos",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/productos/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/productos",
    controller: ProductController,
    action: "save"
}, {
    method: "delete",
    route: "/productos/:id",
    controller: ProductController,
    action: "remove"
}]