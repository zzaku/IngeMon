package main

type NetworkStat struct {
	Iface       string `json:"iface"`
	RxBytes     uint64 `json:"rxbytes"`
	RxPackets   uint64 `json:"rxpackets"`
	RxErrs      uint64 `json:"rxerrs"`
	RxDrop      uint64 `json:"rxdrop"`
	RxFifo      uint64 `json:"rxfifo"`
	RxFrame     uint64 `json:"rxframe"`
	RxMulticast uint64 `json:"rxmulticast"`

	TxBytes   uint64 `json:"txbytes"`
	TxPackets uint64 `json:"txpackets"`
	TxErrs    uint64 `json:"txerrs"`
	TxDrop    uint64 `json:"txdrop"`
	TxFifo    uint64 `json:"txfifo"`
	TxColls   uint64 `json:"txcolls"`
	TxCarrier uint64 `json:"txcarrier"`
}
