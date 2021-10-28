package main

type Processor struct {
	Id         int64    `json:"id"`
	VendorId   string   `json:"vendor_id"`
	Model      int64    `json:"model"`
	ModelName  string   `json:"model_name"`
	Flags      []string `json:"flags"`
	Cores      int64    `json:"cores"`
	MHz        float64  `json:"mhz"`
	CacheSize  int64    `json:"cache_size"` // KB
	PhysicalId int64    `json:"physical_id"`
	CoreId     int64    `json:"core_id"`
}

type CPUInfo struct {
	Processors []Processor `json:"processors"`
}
