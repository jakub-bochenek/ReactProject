package model

type Product struct {
	Id    uint64  `json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}
