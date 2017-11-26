import { wire } from 'hyperhtml/esm';

import { LabeledValue } from 'utils/LabeledValue';

export function LabeledSelect(
  id: string,
  options: LabeledValue<number>[],
  selectedOption: number,
  onChange: (newValue: number) => void
) {
  return wire()`
    <select id=${id} onchange=${(event: Event) => onChange(getValueFromSelectEvent(options, event))}>
      ${options.map(option => LabeledOption(option, selectedOption))}
    </select>
  `;
}

function LabeledOption<T>(labeledOption: LabeledValue<T>, selectedValue: T) {
  return wire()`
    <option
      value=${labeledOption.value}
      selected=${labeledOption.value === selectedValue}
    >
      ${labeledOption.label}
    </option>
  `;
}

function getValueFromSelectEvent(options: LabeledValue<number>[], event: Event) {
  const select = <HTMLSelectElement>event.target;
  const value = parseInt(select.value, 10);

  const selectedOption = options.find(option => option.value === value);
  if (!selectedOption) {
    throw new Error('Selected <option> not found in options parameter');
  }

  return selectedOption.value;
}
