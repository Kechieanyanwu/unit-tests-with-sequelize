const chai = require("chai");
const request = require("supertest");
const { server } = require("../../app");

const { expect } = chai; 

const shouldNotRestockProduct = {
    id: 1,
    name: "Salmon",
    price: 10.0,
    stock: 5,
    min_stock: 2,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
    shouldRestock: 'no',
  };
const shouldRestockProduct = {
    id: 2,
    name: "Chicken",
    price: 6.5,
    stock: 5,
    min_stock: 10,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
    shouldRestock: 'yes',
};
const shouldShortlyStockProduct = {
    id: 3,
    name: "Turkey",
    price: 5.5,
    stock: 5,
    min_stock: 5,
    created_at: "2023-10-30T14:14:01.390Z",
    updated_at: "2023-10-30T14:14:01.390Z",
    shouldRestock: 'shortly',
};


describe("Fetch products test", async() => {
    it("shows all stock states", async () => {
        const { body, status } = await request(server).get("/products");
        const { data } = body;
        expect(status).to.equal(200);
        expect(data).to.deep.include(shouldNotRestockProduct);
        expect(data).to.deep.include(shouldRestockProduct);
        expect(data).to.deep.include(shouldShortlyStockProduct);
    });
});