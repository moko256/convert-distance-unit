export const DistanceUnits = {
    Meter: 0,
    KiloMeter: 1,
    ItnInch: 2,
    ItnFeet: 3,
    ItnYard: 4,
    ItnChain: 5,
    ItnMile: 6,
    ItnNauticalMile: 7,
} as const
export type DistanceUnits = (typeof DistanceUnits)[keyof typeof DistanceUnits]

const CONVERSION_TABLE_TO_METER = new Map<DistanceUnits, number>([
    [DistanceUnits.Meter, 1],
    [DistanceUnits.KiloMeter, 1000],
    [DistanceUnits.ItnInch, 0.0254],
    [DistanceUnits.ItnFeet, 0.3048],
    [DistanceUnits.ItnYard, 0.9144],
    [DistanceUnits.ItnChain, 20.1168],
    [DistanceUnits.ItnMile, 1609.344],
    [DistanceUnits.ItnNauticalMile, 1852],
])

export const DISTANCE_UNIT_ALL: Array<DistanceUnits> = Array.from(CONVERSION_TABLE_TO_METER.keys());

export const DISTANCE_UNIT_TO_SHORT_STR = new Map<DistanceUnits, string>([
    [DistanceUnits.Meter, "m"],
    [DistanceUnits.KiloMeter, "km"],
    [DistanceUnits.ItnInch, "in"],
    [DistanceUnits.ItnFeet, "ft"],
    [DistanceUnits.ItnYard, "yd"],
    [DistanceUnits.ItnChain, "chain"],
    [DistanceUnits.ItnMile, "mile"],
    [DistanceUnits.ItnNauticalMile, "nm"],
])

export const DISTANCE_UNIT_TO_LONG_STR = new Map<DistanceUnits, string>([
    [DistanceUnits.Meter, "Meter"],
    [DistanceUnits.KiloMeter, "Kilometer"],
    [DistanceUnits.ItnInch, "Inch"],
    [DistanceUnits.ItnFeet, "Feet"],
    [DistanceUnits.ItnYard, "Yard"],
    [DistanceUnits.ItnChain, "Chain"],
    [DistanceUnits.ItnMile, "Mile"],
    [DistanceUnits.ItnNauticalMile, "Nautical Mile"],
])

export class DistanceUnitConversionState {
    public fromValue: number;
    public fromUnit: DistanceUnits;

    public result: Map<DistanceUnits, number>;

    constructor(fromValue: number, fromUnit: DistanceUnits) {
        this.fromValue = fromValue;
        this.fromUnit = fromUnit;

        this.result = this.convert()
    }

    private convert(): Map<DistanceUnits, number> {

        const fromValueInMeter = this.fromValue * (CONVERSION_TABLE_TO_METER.get(this.fromUnit) ?? 0);

        const map = new Map<DistanceUnits, number>()

        CONVERSION_TABLE_TO_METER.forEach((value: number, key: DistanceUnits, _map: any) => {
            const toValue = fromValueInMeter / value

            map.set(key, toValue)
        })

        return map;
    }
}

