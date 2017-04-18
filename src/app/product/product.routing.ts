import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductEditComponent } from "./product-edit.component";

const routes:Routes = [
    {
        path: 'products/list',
        component: ProductListComponent
    },
    {
        path: 'products/edit/:id',
        component: ProductEditComponent
    }
]


//Prevents importing all components one at a time
export const components: any [] = [
    ProductEditComponent,
    ProductListComponent
]

import { ModuleWithProviders } from "@angular/core";

export const routingModule: ModuleWithProviders = RouterModule.forChild(routes);