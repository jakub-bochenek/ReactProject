package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type Product struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

type Payment struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	CardNo string `json:"cardNumber"`
}
type Products []Product
type Payments []Payment

var products = Products{
	{ID: 1, Name: "Product 1", Price: 100},
	{ID: 2, Name: "Product 2", Price: 200},
}

var payments = Payments{}

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	e.GET("/products", func(c echo.Context) error {
		return c.JSON(http.StatusOK, products)
	})

	e.POST("/payments", func(c echo.Context) error {
		p := new(Payment)
		if err := c.Bind(p); err != nil {
			return err
		}
		p.ID = len(payments) + 1

		fmt.Println("Odebrane dane:", p.Name, p.CardNo)

		payments = append(payments, *p)
		return c.JSON(http.StatusCreated, p)
	})
	e.Logger.Fatal(e.Start(":8080"))
}
