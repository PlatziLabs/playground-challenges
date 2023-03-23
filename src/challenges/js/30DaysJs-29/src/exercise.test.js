import { BasicProduct } from "./exercise";
import { Product } from "./product";
import { WarrantyDecorator } from "./WarrantyDecorator";
import { ShippingInsuranceDecorator } from "./ShippingInsurance";

describe("tests", () => {
  it("Should not modify the product base class", () => {
    const product = new Product(1000);
    expect(() => product.getDescription()).toThrow();
  });

  it("Should return the correct description using basic product", () => {
    const product = new BasicProduct(1000, "Iphone");
    expect(product.getDescription()).toBe("Iphone");
  });

  it("Should return the correct price using basic product", () => {
    const basicProduct = new BasicProduct(1000, "Iphone");
    expect(basicProduct.getPrice()).toBe(1000);
  });

  it("Should return the correct description using WarrantyDecorator", () => {
    const basicProduct = new BasicProduct(1000, "Iphone");
    const product = new WarrantyDecorator(basicProduct);
    expect(product.getDescription()).toBe("Iphone con garantía");
  });

  it("Should return the correct price using WarrantyDecorator", () => {
    const basicProduct = new BasicProduct(1000, "Iphone");
    const product = new WarrantyDecorator(basicProduct);
    expect(product.getPrice()).toBe(1020);
  });

  it("Should return the correct description using shipping decorator", () => {
    const basicProduct = new BasicProduct(1000, "iphone");
    const product = new ShippingInsuranceDecorator(basicProduct);
    expect(product.getDescription()).toBe("iphone con seguro de envío");
  });

  it("Should return the correct price using shipping decorator", () => {
    const basicProduct = new BasicProduct(1000, "Iphone");
    const product = new ShippingInsuranceDecorator(basicProduct);
    expect(product.getPrice()).toBe(1020);
  });
});
