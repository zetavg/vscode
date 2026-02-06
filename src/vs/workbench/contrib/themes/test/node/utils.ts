/* eslint-disable header/header */

// [ZP-11FC] ThemeColors type generation (generates `src/vs/workbench/contrib/themes/colors.ts`)

import { Color } from '../../../../../base/common/color.js';
import {
	type ColorContribution,
	type ColorDefaults,
	ColorTransform,
	ColorTransformType,
	type ColorValue,
} from '../../../../../platform/theme/common/colorRegistry.js';

export function isColorValueDerived(colorValue: ColorValue | null): boolean {
	if (!colorValue) {
		return false;
	}

	if (colorValue instanceof Color) {
		// Color object.
		return false;
	}

	if (typeof colorValue === 'object') {
		// ColorTransform
		if (colorValue.op === ColorTransformType.OneOf) {
			return colorValue.values.some(isColorValueDerived);
		} else if (colorValue.op === ColorTransformType.IfDefinedThenElse) {
			return isColorValueDerived(colorValue.then);
		} else if (colorValue.op === ColorTransformType.Mix) {
			return isColorValueDerived(colorValue.color) && isColorValueDerived(colorValue.with);
		} else {
			return isColorValueDerived(colorValue.value);
		}
	}

	// string | ColorIdentifier
	// If the string does not start with a hash (e.g.: #00aabb), we assume it's a reference to another color.
	return !colorValue.startsWith('#');
}

export function isConsideredRequired(color: ColorContribution) {
	const { defaults } = color;
	if (!defaults) {
		return true;
	}

	if (typeof defaults === 'object' && !(defaults instanceof Color) && !Reflect.has(defaults, 'op')) {
		const d = defaults as ColorDefaults;
		if (!d.dark && !d.light && d.hcDark && d.hcLight) {
			// This might be a high contrast only color
			return false;
		}

		return !isColorValueDerived(d.dark) || !isColorValueDerived(d.light);
	}

	return !isColorValueDerived(defaults as string | Color | ColorTransform);
}

export function defaultsToString(color: ColorContribution) {
	return JSON.stringify(color.defaults);
}
