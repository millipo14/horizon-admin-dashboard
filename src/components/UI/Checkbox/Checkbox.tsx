import { Checkbox as MuiCheckbox } from "@mui/material";

interface CustomCheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
    return (
        <MuiCheckbox
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            sx={{
                padding: 0,
                paddingRight: '8px',
                color:  '#a3aed0',
                '&.Mui-checked': {
                    color: '#4318ff',
                },
            }}
        />
    );
}