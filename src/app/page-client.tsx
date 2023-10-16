"use client";

import {
  DISTANCE_UNIT_ALL,
  DISTANCE_UNIT_TO_LONG_STR,
  DISTANCE_UNIT_TO_SHORT_STR,
  DistanceUnitConversionState,
  DistanceUnits,
} from "@/services/distance-unit-conversion";
import { ReactNode, useState } from "react";

export function PageClient() {
  const [value, updateValue] = useState<string>("");
  const [selectedUnit, updateSelectedUnit] = useState<DistanceUnits>(
    DistanceUnits.ItnInch,
  );

  let state: DistanceUnitConversionState | undefined;
  const valueNumber = value.length > 0 ? parseFloat(value) : undefined;
  if (valueNumber != undefined) {
    state = new DistanceUnitConversionState(valueNumber, selectedUnit);
  }

  const buttons = new Array<ReactNode>();
  DISTANCE_UNIT_ALL.forEach((unit) => {
    const value = state?.result.get(unit)?.toFixed(6) ?? "";
    const unitNameShort = DISTANCE_UNIT_TO_SHORT_STR.get(unit) ?? "";
    const unitNameLong = DISTANCE_UNIT_TO_LONG_STR.get(unit) ?? "";

    buttons.push(
      <UnitButton
        value={value}
        unitNameShort={unitNameShort}
        unitNameLong={unitNameLong}
        selected={unit == selectedUnit}
        onClick={() => {
          updateSelectedUnit(unit);
        }}
      />,
    );
  });

  // The <input> has `size` parameter and it affect its minimum size.
  // It can remove CSS by specifying width/height.
  // The minimum size parameter doesn't remove it.
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <input
        type="text"
        className="w-full h-full basis-1/3 p-4 text-5xl text-end"
        defaultValue={value}
        onChange={(event) => {
          updateValue(event.target.value);
        }}
      />

      <div className="basis-2/3 grid grid-cols-2 justify-stretch content-stretch gap-2">
        {buttons}
      </div>
    </div>
  );
}

function UnitButton(props: {
  value: string;
  unitNameShort: string;
  unitNameLong: string;
  selected: boolean;
  onClick: () => void;
}) {
  const content = (
    <>
      <p>{props.unitNameLong}</p>
      <p className="text-xl">
        <span>{props.value}</span> <span>{props.unitNameShort}</span>
      </p>
    </>
  );

  if (props.selected) {
    return (
      <button
        className="border-2 border-blue-500 rounded-md"
        onClick={props.onClick}
      >
        {content}
      </button>
    );
  } else {
    return (
      <button
        className="border-2 border-blue-200 rounded-md"
        onClick={props.onClick}
      >
        {content}
      </button>
    );
  }
}
