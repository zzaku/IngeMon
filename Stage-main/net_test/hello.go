package main

import (
	"errors"
	"fmt"
	"net"
	"os"
	"strconv"
	"strings"
)

/*
   The file to load the statistics from
*/
const (
	StatsFile string = "/proc/net/dev"
)

/*
   A helper function to read the stats file from the file system
*/
func readStatsFile() (string, error) {
	file, err := os.Open(StatsFile)
	if err != nil {
		return "", err
	}

	defer file.Close()

	data := make([]byte, 0, 0)
	temp := make([]byte, 0, 100)

	for {
		read, err := file.Read(temp[:cap(temp)])
		if err != nil {
			return "", err
		}

		data = append(data, temp[0:read]...)
		if read < cap(temp) {
			break
		}
	}

	return string(data), nil
}

/*
   A helper function to break the stats file into
   lines so it can be processed. The first 2 lines are
   discarded because they contain column names
*/
func splitIntoLines(text string) []string {
	lines := strings.Split(text, "\n")
	lines = lines[2:]
	return lines
}

/*
   A helper function that will read a single line from
   the stats file and parse it into a DeviceStats object
*/
func parseStatsLine(statsLine string) DeviceStats {
	index := 0
	fields := strings.Fields(statsLine)
	var stats DeviceStats

	stats.DeviceName = strings.TrimSuffix(fields[index], ":")
	index++

	stats.RxStats = make([]uint64, 7, 7)
	stats.TxStats = make([]uint64, 7, 7)

	//Iterate through each element in the DeviceStats
	//And set its value
	for i := 0; i < len(stats.RxStats); i++ {
		stats.RxStats[i], _ = strconv.ParseUint(fields[index], 10, 64)
		index++
	}

	for i := 0; i < len(stats.TxStats); i++ {
		stats.TxStats[i], _ = strconv.ParseUint(fields[index], 10, 64)
		index++
	}

	return stats
}

/*
   Get the statistics for all devices on the system
   (including lo)
*/
func Stats() ([]DeviceStats, error) {
	stats := make([]DeviceStats, 0, 0)
	statsText, err := readStatsFile()
	if err != nil {
		return stats, err
	}

	lines := splitIntoLines(statsText)

	for _, line := range lines {
		if len(line) > 0 {
			stats = append(stats, parseStatsLine(line))
		}
	}

	return stats, nil
}

/*
   Get the stats for the specified device. If the
   device is not found, then nil is returned, and
   an error is set.
*/
func StatsByName(name string) (*DeviceStats, error) {
	stats, err := Stats()
	if err != nil {
		return nil, err
	}

	for _, s := range stats {
		if name == s.DeviceName {
			return &s, nil
		}
	}

	return nil, errors.New(fmt.Sprintf("device: %s does not exist", name))
}

/*
   Get the stats for the device specified by the Interface
   struct. If the device is not found, then nil is returned
   and error is set.
*/
func StatsByInterface(iface *net.Interface) (*DeviceStats, error) {
	stats, err := Stats()
	if err != nil {
		return nil, err
	}

	for _, s := range stats {
		if iface.Name == s.DeviceName {
			return &s, nil
		}
	}

	return nil, errors.New(fmt.Sprintf("device: %s does not exist", iface.Name))
}

/*
   The total number of bytes received by the named device
*/
func (stats *DeviceStats) RxBytes() uint64 {
	return stats.RxStats[0]
}

/*
   The total number of packets received by the named device
*/
func (stats *DeviceStats) RxPackets() uint64 {
	return stats.RxStats[1]
}

/*
   The total number of receive errors detected by the named device
   drivers
*/
func (stats *DeviceStats) RxErrors() uint64 {
	return stats.RxStats[2]
}

/*
   The total number of dropped packets reported by the named device
   drivers
*/
func (stats *DeviceStats) RxDrops() uint64 {
	return stats.RxStats[3]
}

/*
   The total number of receive FIFO buffer errors
*/
func (stats *DeviceStats) RxFifo() uint64 {
	return stats.RxStats[4]
}

/*
   The total number of packet framing errors
*/
func (stats *DeviceStats) RxFrame() uint64 {
	return stats.RxStats[5]
}

/*
   The number of multicast frames received by the
   device
*/
func (stats *DeviceStats) RxMulticast() uint64 {
	return stats.RxStats[6]
}

/*
   The total number of bytes transmitted by the named
   device
*/
func (stats *DeviceStats) TxBytes() uint64 {
	return stats.TxStats[0]
}

/*
   The total number of packets transmitted by the named
   device
*/
func (stats *DeviceStats) TxPackets() uint64 {
	return stats.TxStats[1]
}

/*
   The total number of transmit errors detected by the
   device driver
*/
func (stats *DeviceStats) TxErrors() uint64 {
	return stats.TxStats[2]
}

/*
   The total number of dropped packets reported by the
   device driver
*/
func (stats *DeviceStats) TxDrops() uint64 {
	return stats.TxStats[3]
}

/*
   the total number of FIFO buffer errors
*/
func (stats *DeviceStats) TxFifo() uint64 {
	return stats.TxStats[4]
}

/*
   The total number of collisions detected on the
   named device
*/
func (stats *DeviceStats) TxColls() uint64 {
	return stats.TxStats[5]
}

/*
   The total number of carrier losses detected by the
   device driver
*/
func (stats *DeviceStats) TxCarrier() uint64 {
	return stats.TxStats[6]
}
