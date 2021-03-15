class MACAddressUtils {
	static removeDelimiter(mac_address) {
		if (!mac_address) return mac_address;
		return mac_address.replace(/[^\dA-z]/g, '');
	}
}

module.exports = MACAddressUtils;