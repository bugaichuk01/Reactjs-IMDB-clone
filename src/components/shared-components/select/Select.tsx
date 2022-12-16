import React from 'react';
import ReactSelect from 'react-select';

type IOptions = {
    label: string;
    value: string;
}

interface ISelect {
    options: IOptions[];
    value: IOptions;
    onChange: (e: unknown) => void;
    className?: string;
}

export const Select: React.FC<ISelect> = ({options, onChange, value, className}) => {
    return (
        <ReactSelect
            className={className}
            options={options}
            onChange={(e) => onChange(e?.value)}
            defaultValue={value}
        />
    );
};

