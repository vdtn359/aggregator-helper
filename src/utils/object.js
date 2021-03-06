/**
 * Check if the given value is null or undefined
 * @param {any} value
 */
export function isNullOrUndefined(value) {
	return value === null || value === undefined;
}

export function isEmpty(value) {
	return isNullOrUndefined(value) || value === '';
}