package main

import "fmt"

func main() {
	var filepath string = "/proc/meminfo"
	fmt.Print(readMemInfo(filepath))
}
