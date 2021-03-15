import {v4} from "uuid";

function binaryToString(binary) {
	return Buffer.from(binary).toString('hex');
}

class UuidUtils {

	static uuidv4 = () => v4().toUpperCase();

	static format(uuid) {
		if (uuid.length === 32) {
			// Without dash: ca23c587d7f84c76be59f53bbc9f91f8
			return `${uuid.substring(0, 8)}-${uuid.substring(8, 12)}-${uuid.substring(12, 16)}-${uuid.substring(16, 20)}-${uuid.substring(20, 32)}`;
		} else if (uuid.length === 36) {
			// With dash: ca23c587-d7f8-4c76-be59-f53bbc9f91f8
			return uuid;
		} else {
			// Unexpected uuid
			console.warn('Unexpected uuid length', uuid);
			return uuid;
		}
	}

	/**
	 * (UUID) to (UUID)
	 * @param binary UUID
	 * @returns {string|null} When binary not exists return null
	 */
	static toString(binary) {
		if (!binary) return null;
		return UuidUtils.format(binaryToString(binary));
	}

	/** (UUID) to (UUID) */
	static toBuffer(uuid) {
		if (!uuid) return null;
		if (typeof uuid !== 'string') {
			console.warn('UuidUtils.toBuffer() uuid is not string type', uuid);
		}

		return Buffer.from(uuid.replace(/-/g, ''), 'hex');
	}

	static isValidUUID(uuid) {
		if (!uuid) return false;
		if (typeof uuid !== 'string') return false;
		return RegExp(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/i).test(uuid);
	}
}

module.exports = UuidUtils;