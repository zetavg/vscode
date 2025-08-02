/* eslint-disable header/header */

// @ts-ignore
import Color from './vendor/color';

/**
 * Only support rgb color!
 */
export function opacity(color: string, opacity: number): string {
	if (color.startsWith('rgb(') || color.startsWith('rgba(')) {
		const match = color.match(/\((\d+), (\d+), (\d+)/);
		if (match) {
			const [, r, g, b] = match;
			return `rgba(${r}, ${g}, ${b}, ${opacity})`;
		} else {
			throw new Error(`Cannot parse color: ${color}`);
		}
	} else {
		throw new Error(`Unsupported color format: ${color}`);
	}
}

/**
 * Only support rgb color!
 */
export function saturation(color: string, saturation: number | ((v: number) => number)): string {
	const c = new Color(color);
	// @ts-ignore
	c.set('hsl.s', saturation);
	// @ts-ignore
	const cString = c.toString();
	// @ts-ignore
	const match = cString.match(/\(([\d\.]+), ([\d\.]+), ([\d\.]+)/);
	// @ts-ignore
	const [r, g, b] = match.slice(1, 4).map(s => Math.round(parseFloat(s)));
	return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Only support rgb color!
 */
export function chroma(color: string, chroma: number | ((v: number) => number)): string {
	const c = new Color(color);
	// @ts-ignore
	c.set('oklch.c', chroma);
	// @ts-ignore
	const cString = c.toString();
	// @ts-ignore
	const match = cString.match(/\(([\d\.]+), ([\d\.]+), ([\d\.]+)/);
	// @ts-ignore
	const [r, g, b] = match.slice(1, 4).map(s => Math.round(parseFloat(s)));
	return `rgb(${r}, ${g}, ${b})`;
}

export function lighten(color: string, value: number): string {
	const c = new Color(color);
	// @ts-ignore
	c.lighten(value);
	// @ts-ignore
	const cString = c.toString();
	// @ts-ignore
	const match = cString.match(/\(([\d\.]+), ([\d\.]+), ([\d\.]+)/);
	// @ts-ignore
	const [r, g, b] = match.slice(1, 4).map(s => Math.round(parseFloat(s)));
	return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Only support rgb color!
 */
export function overlay(base: string, color: string, opacity: number): string {
	if (color.startsWith('rgb(')) {
		const match = color.match(/\((\d+), (\d+), (\d+)/);
		const baseMatch = base.match(/\((\d+), (\d+), (\d+)/);
		if (match && baseMatch) {
			const [r, g, b] = match.slice(1, 4).map(s => parseInt(s, 10));
			const [br, bg, bb] = baseMatch.slice(1, 4).map(s => parseInt(s, 10));
			const bp = 1 - opacity;
			const nr = Math.ceil(br * bp + r * opacity);
			const ng = Math.ceil(bg * bp + g * opacity);
			const nb = Math.ceil(bb * bp + b * opacity);
			return `rgb(${nr}, ${ng}, ${nb})`;
		} else {
			throw new Error(`Cannot parse color: ${color} & ${base}`);
		}
	} else {
		throw new Error(`Unsupported color format: ${color}`);
	}
}

export function withLuminanceAs(color: string, luminanceAsColor: string, { lightnessAdjustment }: { lightnessAdjustment?: (v: number) => number } = {}): string {
	// @ts-ignore
	const c = new Color(color);
	// @ts-ignore
	const luminanceAsC = new Color(luminanceAsColor);

	// @ts-ignore
	const currentL = c.oklch.l;
	// @ts-ignore
	let targetL = luminanceAsC.oklch.l;
	if (lightnessAdjustment) {
		targetL = lightnessAdjustment(targetL);
	}
	const stepsToTarget = targetL - currentL;
	const step = stepsToTarget > 0 ? 0.01 : -0.01;
	let stepsTaken = 0;

	while (Math.abs(stepsTaken) < Math.abs(stepsToTarget)) {
		// @ts-ignore
		c.oklch.l += step;
		stepsTaken += step;

		// @ts-ignore
		// console.log(`[${c.toString({ format: 'oklch' })}] currentL: ${currentL}, targetL: ${targetL}, stepsToTarget: ${stepsToTarget}, stepsTaken: ${stepsTaken}, hsl.s: ${c.hsl.s}`);
		// @ts-ignore
		if (c.hsl.s > 99) {
			// Need to stop before the color exceeds the available color space
			break;
		}
	}

	// @ts-ignore
	const cString = c.toString();
	// @ts-ignore
	const match = cString.match(/\(([\d\.]+), ([\d\.]+), ([\d\.]+)/);
	// @ts-ignore
	const [r, g, b] = match.slice(1, 4).map(s => Math.round(parseFloat(s)));
	return `rgb(${r}, ${g}, ${b})`;
}

export function toHex(c: number, digits: number = 2): string {
	const hex = c.toString(16);
	return hex.padStart(digits, '0');
}

/**
 * Only support rgb color!
 */
export function colorToHex(color: string) {
	const c = new Color(color);

	// @ts-ignore
	return c.toString({ format: 'hex' });

	// if (color.startsWith('#')) {
	// 	return color;
	// } else if (color.startsWith('rgb(')) {
	// 	const match = color.match(/\((\d+), (\d+), (\d+)\)/);
	// 	if (match) {
	// 		const [r, g, b] = match.slice(1, 4).map(s => parseInt(s, 10));
	// 		return `#${toHex(r, 2)}${toHex(g, 2)}${toHex(b, 2)}`;
	// 	} else {
	// 		throw new Error(`Cannot parse color: ${color}`);
	// 	}
	// } else if (color.startsWith('rgba(')) {
	// 	const match = color.match(/\((\d+), (\d+), (\d+), ([\d\.]+)\)/);
	// 	if (match) {
	// 		const [r, g, b, a] = match.slice(1, 5).map((s, i) => i < 3 ? parseInt(s, 10) : parseFloat(s));
	// 		return `#${toHex(r, 2)}${toHex(g, 2)}${toHex(b, 2)}${toHex(Math.round(a * 255), 2)}`;
	// 	} else {
	// 		throw new Error(`Cannot parse color: ${color}`);
	// 	}
	// } else {
	// 	throw new Error(`Unsupported color format: ${color}`);
	// }
}
