package main

import "fmt"

func main() {
	var filepath string = "/proc/diskstats"
	readDisk(filepath)
	fmt.Println(readDisk(filepath))
}
