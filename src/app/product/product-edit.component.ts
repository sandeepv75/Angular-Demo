import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { ProductService } from "../interfaces";

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    constructor(private route : ActivatedRoute, private productService: ProductService, private router:Router) { }

    product: any = {};

    brands: any[] = [];

    ngOnInit() { 
        let id = this.route.snapshot.params.id
        console.log('id', id);

        this.productService.getProduct(id)
        .then((product: any) => {
            this.product = product;
        })

        this.productService.getBrands()
        .then((brands: any) =>{
            this.brands = brands;
        })
    }

    saveProduct(){
        this.productService.saveProduct(this.product)
        .then((savedProduct: any) =>{
            this.product = savedProduct;
            this.router.navigate(["/products/list"])
        })
    }
}