package main

/*
   The structure that represents the statistics for a single
   device
*/
type DeviceStats struct {
	DeviceName string
	RxStats    []uint64
	TxStats    []uint64
}
