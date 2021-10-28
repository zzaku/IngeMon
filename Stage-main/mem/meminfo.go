package main

type MemInfo struct {
	MemTotal     uint64
	MemFree      uint64
	MemAvailable uint64
	Buffers      uint64
	Cached       uint64
	SwapCached   uint64
	Active       uint64
	Inactive     uint64
	SwapTotal    uint64
	SwapFree     uint64
	Dirty        uint64
	Writeback    uint64
	Shmem        uint64
}
