package main

import "fmt"

func main() {
	var filepath string = "/proc/cpuinfo"
	readCPUInfo(filepath)
	fmt.Println(readCPUInfo(filepath))
}
