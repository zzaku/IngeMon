// +build amd64,linux

package main

import (
	"io/ioutil"
	"reflect"
	"strconv"
	"strings"
)

func readMemInfo(path string) (*MemInfo, error) {
	data, err := ioutil.ReadFile(path)

	if err != nil {
		return nil, err
	}

	lines := strings.Split(string(data), "\n")

	// Maps a meminfo metric to its value (i.e. MemTotal --> 100000)
	statMap := make(map[string]uint64)

	var info = MemInfo{}

	for _, line := range lines {
		fields := strings.SplitN(line, ":", 2)
		if len(fields) < 2 {
			continue
		}
		valFields := strings.Fields(fields[1])
		val, _ := strconv.ParseUint(valFields[0], 10, 64)
		statMap[fields[0]] = val
	}

	elem := reflect.ValueOf(&info).Elem()
	typeOfElem := elem.Type()

	for i := 0; i < elem.NumField(); i++ {
		val, ok := statMap[typeOfElem.Field(i).Name]
		if ok {
			elem.Field(i).SetUint(val)
			continue
		}
		val, ok = statMap[typeOfElem.Field(i).Tag.Get("field")]
		if ok {
			elem.Field(i).SetUint(val)
		}
	}

	return &info, nil
}
