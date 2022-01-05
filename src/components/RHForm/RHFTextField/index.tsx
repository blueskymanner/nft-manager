import React, { FC } from 'react';
import { OutlinedTextFieldProps, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { RHFInputProps } from '../types';
import clsx from 'clsx';

export interface RHFTextFieldProps
  extends RHFInputProps,
    OutlinedTextFieldProps {}

export const RHFTextField: FC<RHFTextFieldProps> = ({
  id,
  name,
  control,
  label,
  InputProps,
  placeholder,
  ...props
}) => {
  return (
    <Controller
      name={name as any}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState
      }) => {
        return (
          <TextField
            id={`RHFTextField-${id}`}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            error={!!error}
            helperText={error ? error.message : null}
            InputProps={InputProps}
            className={clsx(!!error && 'has-error')}
            {...props}
          />
        );
      }}
    />
  );
};
