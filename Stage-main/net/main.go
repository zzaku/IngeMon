package main

func main() {
	var filepath string = "/proc/net"
	println(readNetworkStat(filepath))
}
